const {Postdata,getdata,deleteData,postdata2,getdata2,deleteData2} = require("../modules/index")

const route = (app) => {
    app.post("/postData",Postdata)
    app.get("/getData",getdata)
    app.delete("/deleteData/:_id",deleteData)

    app.post("/postData2",postdata2)
    app.get("/getData2",getdata)
    app.delete("/deleteData2/:_id",deleteData)
}

module.exports = route