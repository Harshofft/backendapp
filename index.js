const express = require("express")
const app = express()
const port =3000;

app.get("/",()=>{

})
app.post("/user/signup" , (req,res)=>{

})

app.post("/user/signin" , (req,res)=>{
    
})

app.get("/courses" , (req , res)=>{
    
})
app.post("/courses/buy",(req,res)=>{

})

app.get("/user/bought", (req,res)=>{

} )

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})