const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/Users')

const protect = asyncHandler(async(req, res, next) => {
    let token
    token = req.cookies.jwt

    if(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET, { ignoreNotBefore: true })

            req.user = await UserModel.findById(decoded.userId).select('-password')

            next()
        } catch(err) {
            res.status(401)
            throw new Error('Not authorized, invalid token')
        }
    } else {
        res.status(401)
        throw new Error('Not authorized, missing token')
    }
})

module.exports = protect