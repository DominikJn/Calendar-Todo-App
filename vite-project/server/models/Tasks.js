const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    userId: String,
    taskId: String,
    title: String,
    description: String,
    date: String,
    time: String,
})

const TaskModel = mongoose.model('tasks', TaskSchema)
module.exports = TaskModel