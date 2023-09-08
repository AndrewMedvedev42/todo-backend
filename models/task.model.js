const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
        maxlength:[40, 'no longer than 40 characters']
    },
    description:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
    completionDate:{
        type:String,
        default:"--/--/--"
    }
})

module.exports = mongoose.model('Task', ToDoSchema)