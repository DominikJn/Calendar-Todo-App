const express = require('express')
const { authUser, 
    registerUser,
    logoutUser, 
    getUserProfile,
    updateUserProfile ,
    updateUserTheme
} = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)

router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile)

router.route('/profile/theme')
.patch(protect, updateUserTheme)

module.exports = router