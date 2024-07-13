const express = require('express')
const { getTasks, getTasksHeaderInfo, createTask, editTask, deleteTask } = require('../controllers/taskController')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/getTasks/:date', protect, getTasks)
router.get('/getTasksHeaderInfo', protect, getTasksHeaderInfo)
router.post('/create', protect, createTask)
router.put('/edit/:taskId', protect, editTask)
router.delete('/delete/:taskId', protect, deleteTask)

module.exports = router
