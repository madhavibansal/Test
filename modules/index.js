const User = require("../models/User")
const User2 = require("../models/User2")
const User3 = require("../models/User3")
const User4 = require("../models/User4")


module.exports.Postdata = async (req,res) => {
    const user = new User({
        Name:req.body.Name,
        email:req.body.email
    })
    try{
        const data = user.save().then(data => {
            res.json({data})
        })
    }catch(err) {
        res.status(200).send(err)
    }
}

module.exports.getdata = async(req,res) => {
    const finddata = await User.find({})
    res.json({finddata})

}

module.exports.deleteData = async (req,res) => {
    const deleteUser = await User.findByIdAndDelete({_id:req.params._id},(err,docs) => {
        if(err){
            res.send("somethong wrong")
        }
        else{
            res.send("deleted")
        }
    }).then().catch(err)
}
module.exports.postdata2 = async(req,res) => {
    const find = User.find().populate('User').exec()
    const user2 = new User2({
        Contact:req.body.Contact,
        Address:req.body.Address,
        userId:req.body.userId
    })
    try{
        const data = user2.save().then(data => {
            res.json({data})
        })
    }catch(err) {
        res.status(200).send(err)
    }

}

module.exports.getdata2 = async(req,res) => {
    const finddata = await User2.find({})
    res.json({finddata})

}

module.exports.deleteData2 = async (req,res) => {
    const deleteUser = await User2.findByIdAndDelete({_id:req.params._id},(err,docs) => {
        if(err){
            res.send("somethong wrong")
        }
        else{
            res.send("deleted")
        }
    }).then().catch(err)
}
