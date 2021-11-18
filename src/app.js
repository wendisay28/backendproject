const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const app = express()
const authRoutes = require('./routes/auth.routes')
const incomeRoutes = require('./routes/income.routes')
const outcomeRoutes = require('./routes/outcome.routes')


//configuraciones
app.set('port', process.env.PORT || 3000)
mongoose.connect(process.env.DB_STRING)
.then(db => console.log('Connected to Mongo'))
.catch(err => console.log(err))
app.use('/documentation', express.static(path.join(__dirname, '../doc/')))

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({
    extended: false
}))

//rutas
app.use('/auth', authRoutes)
app.use('/incomes', incomeRoutes)
app.use('/outcomes', outcomeRoutes)
//inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log('Server Running')
})