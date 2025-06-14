const express = require('express')
const Router = express.Router

const courseRouter = Router()
courseRouter.get("/preview" , (req , res)=>{
     res.json({
        msg:"user end point"
    })
})
courseRouter.post("/buy",(req,res)=>{
     res.json({
        msg:"user end point"
    })
})
module.exports= {
    courseRouter:courseRouter
}