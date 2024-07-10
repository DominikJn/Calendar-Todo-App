const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//env
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)

app.listen(3001, () => console.log('server is running'))