const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/auth.routes')



//configuraciones
app.set(port, process.env.PORT || 3000)
mongoose.connect(process.env.DB_STRING)
.then(db => console.log('connected to mongo'))
.catch(err => console.log(err))


//midlewares
app.use(morgan('dev'))
app.use(cors())

//rutas
app.use('auth', authRoutes)


//inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log('server Running')
})
