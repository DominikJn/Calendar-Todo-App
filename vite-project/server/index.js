const express = require('express')
const cors = require('cors')
//env
require('dotenv').config()
//routes
const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')
//middleware
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
//db
const connectDB = require('./config/db')
//cookie parser
const cookieParser = require('cookie-parser')


connectDB()

const app = express()
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5173'],
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRoutes)
app.use('/api/tasks', taskRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(3001, () => console.log('server is running'))