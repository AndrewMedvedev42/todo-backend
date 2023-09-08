const mongoose = require('mongoose');
const Task = require("./task.model")

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
        maxlength:[40, 'no longer than 40 characters']
    },
    lastName:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
        maxlength:[40, 'no longer than 40 characters']
    },
    email:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
        maxlength:[20, 'no longer than 20 characters']
    },
    password:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
        maxlength:[20, 'no longer than 20 characters']
    },
    activeAccount:{
         type:Boolean,
         default:true
    },
    role:{
        type:String,
         default:"Customer"
    },
    toDoList:[Task.schema]
})

module.exports = mongoose.model('ToDo', UserSchema)
