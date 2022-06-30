const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    phone:{
        type:Number,
        required:true
    },
    Bloodgroup:{
        type:String,
        required:true
    }
})

module.exports   = mongoose.model("User3",UserSchema)