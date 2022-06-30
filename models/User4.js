const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    identity:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

module.exports   = mongoose.model("User4",UserSchema)