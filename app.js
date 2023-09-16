const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const port = 5555

const User = require('./modules/users')
app.use(session({
    secret: '123456',
    resave: false,
    saveUninitialized: true,
}))

dotenv.config({ path: './config.env' })

const mongoose = require('mongoose')
const e = require('express')

app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', () => {
    console.log('連接數據庫失敗');
})

db.once('open', () => {
    console.log('MONGODB 已連接...');
})

function deleteuser() {
    setInterval(async () => {
    
        const user = await User.find({ VertifyGmail: false })
        user.forEach(async (user) => {
            if (Date.now() > user.VertifyGmailexpireTime) {
                await User.deleteOne({ _id: user._id })   
            }
        })
    }, 1000)
}
deleteuser()


app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use('/auth', express.static('public'))

app.use('/', require('./routes/pages'))

app.use('/auth', require('./routes/auth'))

app.listen(port, ip, () => {
    console.log(`服務器運行在 http://localhost:${port}`);
})
