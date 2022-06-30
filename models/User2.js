const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    Contact:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    userId:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'index'
        
    }
})

module.exports   = mongoose.model("User2",UserSchema)