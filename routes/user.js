const express = require("express")
const Router = express.Router
const {userModel}= require("../db")
const userRouter =  Router()

userRouter.post("/signup" , (req,res)=>{
    res.json({
        msg:"user end point"
    })
})

userRouter.post("/signin" , (req,res)=>{
    res.json({
        msg:"user end point"
    })
})

userRouter.get("/bought", (req,res)=>{
    res.json({
        msg:"user end point"
    })
} )

module.exports ={
    userRouter:userRouter
}