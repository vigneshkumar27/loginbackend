const mongoose = require("mongoose");

const url = "mongodburl"
const dbcon = ()=>{
    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
    mongoose.connection.on("error",(err)=>{
        console.log("Error connecting to database : " + err);
    })

    mongoose.connection.on("connected",(err,res)=>{
        console.log("Connected to database : " )
    })
}

module.exports = dbcon;