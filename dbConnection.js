const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
exports.connectDB = async () => {
    mongoose.connect("mongodb+srv://madhavibansal:madhaviba@cluster0.9ka80.mongodb.net/assesst?retryWrites=true&w=majority",{
        useUnifiedTopology:true
    }).then((data) => console.log(`connected successfully ${data.connection.host}`))
    .catch((err) => console.log('Not connected',err.message))
}