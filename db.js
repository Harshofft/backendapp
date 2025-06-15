const mongooes = require("mongoose")
const Schema = mongooes.Schema
const objectId = Schema.ObjectId
// const objectId = mongooes.Types.objectId

const userSchema = new Schema({
    email : {type:String ,unique:true},
    password: String,
    firstname : String,
    lastname: String
})

const adminSchema = new Schema({
    email : {type:String ,unique:true},
    password: String,
    firstname : String,
    lastname: String
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price:Number,
    imgurl : String,
    createId : objectId
})

const purchaseSchema = new Schema({
    userId:objectId,
    courseId:objectId
})

const userModel = mongooes.model("user",userSchema)
const adminModel = mongooes.model("admin",adminSchema)
const courseModel = mongooes.model("course",courseSchema)
const purchaseModel = mongooes.model("purchase",purchaseSchema)

module.exports ={
    userModel:userModel,
    adminModel:adminModel,
    courseModel: courseModel,
    purchaseModel:purchaseModel
}