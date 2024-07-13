const asyncHandler = require('express-async-handler')
const TaskModel = require('../models/Tasks')

// @description Get tasks
// route        GET /api/tasks
//@access       Private
const getTasks = asyncHandler(async (req, res) => {
    const userId = req.user._id
    const date = req.params.date

    const tasks = await TaskModel.find(
        { 
            'userId': userId, date: date
        }, 
        {   
            __v: 0, 
        }
    )

    res.status(200).json(tasks)
})

// @description Get tasks header info (date, title)
// route        GET /api/tasks
//@access       Private
const getTasksHeaderInfo = asyncHandler(async (req, res) => {
    const userId = req.user._id

    const tasks = await TaskModel.find({ 'userId': userId }, { _id: 0, title: 1, date: 1 })

    res.status(200).json(tasks)
})

// @description Create new task
// route        POST /api/tasks
//@access       Private
const createTask = asyncHandler(async (req, res) => {
    const task = await TaskModel.create(req.body)

    res.status(200).json({ task, message: 'Task successfuly created' })
})

// @description Edit task
// route        PUT /api/tasks
//@access       Private
const editTask = asyncHandler(async (req, res) => {
    const taskId = req.params.taskId

    const task = await TaskModel.updateOne({ _id: taskId }, req.body)
    res.status(200).json({ task, message: 'Task successfuly edited' })
})

// @description Delete task
// route        DELETE /api/tasks
//@access       Private
const deleteTask = asyncHandler(async (req, res) => {
    const taskId = req.params.taskId

    const task = await TaskModel.deleteOne({ _id: taskId }, req.body)

    res.status(200).json({ message: 'Task successfuly deleted' })
})

module.exports = { getTasks, getTasksHeaderInfo, createTask, editTask, deleteTask }