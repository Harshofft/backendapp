const express = require("express")
const Router = express.Router
const {userModel}= require("../db")
const userRouter =  Router()

userRouter.post("/signup" , (req,res)=>{
    res.json({
        msg:"user end  point hero heralal"
    })
})

userRouter.post("/signin" , (req,res)=>{
    res.json({
        msg:"user end  point hero heralal"
    })
})

userRouter.get("/bought", (req,res)=>{
    res.json({
        msg:"user end  point hero heralal"
    })
} )

module.exports ={
    userRouter:userRouter
}