import express from "express";
import lab_router from "./routers/lab_router.js"


//const express = require("express")

const app=express();
const PORT=process.env.PORT || 8000



app.use("/lab",lab_router);


app.get("/",(req,res)=>{  
    res.send("Welcome to the Server")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})