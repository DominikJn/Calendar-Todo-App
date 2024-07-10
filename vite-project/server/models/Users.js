const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    userId: String,
    config: {
        theme: String,
    }
})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel