const mongoose = require('mongoose')
const schema = mongoose.schema

const user = new schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('user',user)
