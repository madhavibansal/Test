const express = require("express")
const route = require("./routes/index")
const {connectDB} = require("./dbConnection")
const app = express()


app.use(express.json())

route(app)
const port = 9000


connectDB()



app.listen(port,() => {
    console.log(`server is listening ${port}`)
})