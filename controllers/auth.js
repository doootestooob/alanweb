const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const User = require('../modules/users')

const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config({ path: '../config.env' })

//產生公鑰與私鑰
function generatepairkey() {
    return crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        }
    })
}

//註冊
exports.register = async (req, res) => {
    const { name, email, password, passwordconfirm } = req.body

    if (!name | !email | !password | !passwordconfirm) {
        req.session.problem = 1
        res.render('index', { message: '請輸入完整資訊！', problem: req.session.problem })
    } else if (password != passwordconfirm) {
        req.session.problem = 1
        res.render('index', { message: '密碼不一致！', problem: req.session.problem })
    }

    const hasuser = await User.findOne({ email });
    if (hasuser) {
        req.session.problem = 1
        res.render('index', { message: '此信箱已被註冊！', problem: req.session.problem })
    } else {

        const { publicKey, privateKey } = generatepairkey()
        const hashedpassword = await bcrypt.hash(password, 8)

        const newuser = new User({
            name,
            email,
            password: hashedpassword,
            publicKey,
            privateKey,
            VertifyGmailexpireTime: Date.now() + 5 * 60 * 1000
        })
        await newuser.save()

        const sendVertifyMail = async (name, email, userid) => {
            try {
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    requireTLS: true,
                    auth: {
                        user: process.env.EMAIL_ADMIN,
                        pass: process.env.EMAIL_PASS
                    },
                })

                const mailOptions = {
                    from: process.env.EMAIL_ADMIN,
                    to: email,
                    subject: '註冊驗證信',
                    html: '<h2>尊敬的' + name + '您好，恭喜您已成功註冊，請點擊此<a href="https://alantsai.onrender.com/vertify?id=' + userid + '">連結</a>完成驗證來啟用帳號，若不是您本人請不要點擊此連結，此外若未完成啟用帳號，服務器將在5分鐘後註銷該帳號。</h2>'
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    }
                    console.log('信件：' + info);
                })

            } catch (error) {
                console.log(error);
            }
        }
        if (newuser) {
            sendVertifyMail(req.body.name, req.body.email, newuser._id)
            res.render('index', { message: '註冊成功！請去信箱完成驗證' })
        }
    }
}

//信箱驗證
exports.vertifyMail = async (req, res) => {
    try {
        const user = await User.findById(req.query.id) || 0
        if (Date.now() > user.VertifyGmailexpireTime & user.VertifyGmail === false | user === 0) {
            await User.deleteOne({ _id: req.query.id })
            res.render('errorverify')
        } else {
            const updateinfor = await User.updateOne({ _id: req.query.id }, { $set: { VertifyGmail: true } })
            res.render('emailvertify')
        }
    } catch (error) {
        console.log(error);
    }
}

//登入
exports.login = async (req, res) => {
    const { email, password } = req.body

    if (!email | !password) {
        res.render('index', { message: '請輸入完整資訊！' })
    } else if (!(await User.findOne({ email }))) {
        res.render('index', { message: '此信箱未註冊！' })
    } else {
        const user = await User.findOne({ email })
        const mongopassword = user.password
        const vertifyboolen = user.VertifyGmail

        const matchAuth = await bcrypt.compare(password, mongopassword)
        if (!matchAuth) {
            res.render('index', { message: '密碼錯誤！' })
        } else {
            if (vertifyboolen === false) {
                res.render('index', { message: '請先驗證信箱！' })
            } else {
                const verifycode = await crypto.randomBytes(256).toString('base64').substring(0, 5)
                const payload = {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    publicKey: user.publicKey,
                }
                const privateKey = user.privateKey;
                await User.updateOne({ _id: user._id }, { $set: { VertifyCode: verifycode, VertifyExpireTime: Date.now() + 5 * 60 * 1000 } })
                const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' })
                res.cookie('jwt', token, { httpOnly: true, expires: new Date(Date.now() + 60 * 60 * 1000) })

                console.log(user.name, '要求登入動作');

                const sendVertifyMail = async (name, email, userid, verifycode) => {
                    try {
                        const transporter = nodemailer.createTransport({
                            host: 'smtp.gmail.com',
                            port: 587,
                            secure: false,
                            requireTLS: true,
                            auth: {
                                user: process.env.EMAIL_ADMIN,
                                pass: process.env.EMAIL_PASS
                            },
                        })

                        const mailOptions = {
                            from: process.env.EMAIL_ADMIN,
                            to: email,
                            subject: '登入驗證信',
                            html: '<h2>尊敬的' + name + '您好，您的登入驗證碼為「' + verifycode + '」有效期限為1分鐘，若不是您本人請不要將此驗證碼透漏給任何人，謝謝。</h2>'
                        }

                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                console.log(error);
                            }
                            console.log(name + '驗證信件已寄送');
                        })

                    } catch (error) {
                        console.log(error);
                    }
                }
                const updatedUser = await User.findById(user._id)
                await sendVertifyMail(updatedUser.name, updatedUser.email, updatedUser._id, updatedUser.VertifyCode)
                res.redirect('/otpverify')
            }
        }
    }
}

exports.verify = async (req, res) => {
    const vertifycode = req.body['otpcode']

    const token = req.cookies.jwt;
    if (!token) {
        return res.render('otpverify', { message: '查無登入帳戶！' })
    }
    const userID = jwt.decode(token).id;
    const user = await User.findById(userID)

    if (!user) {
        return res.render('otpverify', { message: '查無登入帳戶！' })
    }
    const publicKey = user.publicKey
    jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decodetoken) => {
        if (err) {
            console.log(err);
        }
        if (vertifycode != user.VertifyCode) {
            return res.render('otpverify', { user: decodetoken, message: '驗證碼錯誤！' })
        } else if (Date.now() > user.VertifyExpireTime) {
            return res.render('otpverify', { user: decodetoken, message: '驗證碼已過期！' })
        } else {
            console.log(user.name, '登入並驗證成功');
            res.redirect('/loginsuccess?id=' + user._id + '&token=' + token + '')
        }
    })
}

//登出
exports.logout = (req, res) => {
    res.cookie('jwt', '', { expires: new Date(0), httpOnly: true });
    res.redirect('/');
}

