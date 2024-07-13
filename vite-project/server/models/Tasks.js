const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const TaskModel = mongoose.model('tasks', TaskSchema)
module.exports = TaskModel