const express = require("express")
const Router = express.Router

const adminRouter =  Router()

adminRouter.post("/signup" , (req,res)=>{
    res.json({
        msg:"admin end point"
    })
})

adminRouter.post("/signin" , (req,res)=>{
    res.json({
        msg:"admin end point"
    })
})

adminRouter.post("/course/create" , (req,res)=>{
    res.json({
        msg:"create something from admin"
    })
})

adminRouter.put("/course/edit" , (req,res)=>{
    res.json({
        msg:"create something from admin"
    })
})

adminRouter.get("/course" , (req,res)=>{
    res.json({
        msg:"create something from admin"
    })
})

module.exports ={
    adminRouter:adminRouter
}