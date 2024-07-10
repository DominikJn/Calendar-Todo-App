const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//env
require('dotenv').config()
//models
const UserModel = require('./models/Users')



const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGODB_URL)



//log in
app.post('/login', (req, res) => {
    UserModel.findOne({ email: req.body.email })
    .then(user => {
        if(user) {
            if(user.password === req.body.password) {
                return res.json({ username: user.username, userId: user.userId, config: user.config  })
            } else {
                return res.status(400).json({ message: 'invalid email or password!' })
            }
        } else {
            return res.status(400).json({ message: 'invalid email or password!' })
        }
    })
})

//register new User
app.post('/register', (req, res) => {
    UserModel.findOne({ email: req.body.email })
    .then(user => {
        if(user) {
            return res.status(400).json({ message: 'Email already taken' })
        } else {
            UserModel.create(req.body)
            .then(result => res.json({ username: result.username, userId: result.userId, config: result.config }))
            .catch(err => res.json(err))
        }
    })
})



app.listen(3001, () => console.log('server is running'))