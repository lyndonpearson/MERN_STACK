require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()

// middleware
app.use(express.json())

// routes
app.use('/api/workouts', workoutRoutes)

// connect to dB
mongoose.connect(process.env.MONG_URI)
    .then( () => {
        // listen to port # for request
        app.listen(process.env.PORT, () => {
            console.log('connected to dB & listening on port', process.env.PORT )
        })
    })
    .catch( (error) => {
        console.log(error)
    })



