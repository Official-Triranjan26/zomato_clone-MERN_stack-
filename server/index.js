import express from "express";
import dotenv from "dotenv";
//database connection
import ConnectDb from "./database/connection"
dotenv.config();

const zomato=express();
zomato.use(express.json);

zomato.get("/",(req,res)=>
{
    res.json({
        message:"Server running on port 4000"
    })
})

const PORT=4000;

zomato.listen(PORT,()=>{
    ConnectDb()
    .then(()=>{
        console.log("Server is running !!!");
    })
    .catch((error)=>{
        console.log("Server is running , but database connection failed !!!");
        console.log(error);
    })
    // console.log("Server is running !!!");
})