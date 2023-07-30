const express=require("express")
const app=express();
app.use("/user",(req,res)=>{
    res.send("hi i am from user  side how are you doing ")
})
app.use("/",(req,res)=>{
    res.send("hi i am from server side")
})

app.listen(6001,()=>{
    console.log("hi i am mohit mishra listening",6001)
})