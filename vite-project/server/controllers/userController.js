const asyncHandler = require('express-async-handler')
const UserModel = require('../models/Users')
const generateToken = require('../utils/generateToken')

// @description Auth user/set token
// route        POST /api/users/auth
//@access       Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    const user = await UserModel.findOne({ email })

    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({ 
            _id: user._id,
            name: user.name,
            isDarkMode: user.isDarkMode
            // email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid email or password')
    }
})

// @description Register a new user
// route        POST /api/users
//@access       Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await UserModel.findOne({ email })

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await UserModel.create({
        name, 
        email,
        password,
        isDarkMode: false,
    })

    if(user) {
        generateToken(res, user._id)
        res.status(201).json({ 
            _id: user._id,
            name: user.name,
            email: user.email,
            isDarkMode: user.isDarkMode,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @description Logout user
// route        POST /api/users
//@access       Public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message: 'User Logged Out' })
})

// @description Get user profile
// route        GET /api/users/profile
//@access       Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }

    res.status(200).json(user)
})

// @description Update user profile
// route        PUT /api/users/profile
//@access       Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.user._id)

    if(user) {
        user.name = req.body.name || user.name

        if(req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @description Update user theme
// route        PUT /api/users/profile
//@access       Private

const updateUserTheme = asyncHandler(async (req,res) => {
    const user = await UserModel.findById(req.user._id)

    if(user) {
        user.isDarkMode = req.body.isDarkMode || user.isDarkMode

        const updatedTheme = await user.save()

        res.status(200).json({ isDarkMode: updatedTheme.isDarkMode })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})


module.exports = { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, updateUserTheme }