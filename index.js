const express=require("express")
const app=express()
const fs=require("fs")
app.set("view engine","ejs")
app.get("/",(req,res)=>{
  fs.readdir("./files",(err,files)=>{
    if(err)return res.status(500).res.send(err)
      res.send("Hiiieeee")
  }) 
})

app.listen(3000,()=>{
   console.log("Listening...")
})