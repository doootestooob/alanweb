const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        unique: true,
        required: true
    },
    privateKey: {
        type: String,
        unique: true,
        required: true
    },
    VertifyGmail: {
        type: Boolean,
        default: false
    },
    VertifyGmailexpireTime: {
        type: Date,
    },
    VertifyCode: {
        type: String,
    },
    VertifyExpireTime: {
        type: Date,
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User;