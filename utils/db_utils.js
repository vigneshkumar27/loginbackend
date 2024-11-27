const mongoose = require("mongoose");

const url = "mongodb+srv://admin:root@cluster0.8yvsnml.mongodb.net/Auth?retryWrites=true&w=majority"
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