const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const authService = require('./routes/auth.routes')


//configuraciones
app.set(port, process.env.PORT || 3000)


//midlewares
app.use(morgan('dev'))
app.use(cors())

//rutas
app.use('auth', authRoutes)


//inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log('server Running')
})
