const express = require("express");
const mongoose = require("mongoose")
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")
const app = express()
const port = 3000;

app.use("/user", userRouter)
app.use("/course", courseRouter)
app.use("/admin", adminRouter)
async function main() {
    await mongoose.connect("mongodb+srv://harshofft:2mZsbmdgBrIYg4S5@cluster0.wekvqw4.mongodb.net/coursera-app")

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    })
}

main()