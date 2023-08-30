const express=require("express")
require("dotenv").config()
const {connection}=require("./db")
const { userroute } = require("./routes/user")

const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",userroute)


app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})


app.listen(4500,async()=>{
    try{
        await connection
        console.log("connected to the db")
    }catch(err){
        console.log("cannot connect to the db")
        console.log(err)
    }
    console.log("server is working ")
})