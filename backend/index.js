
const express = require("express");
const  userRouter  = require("./routes/user-routes");
const blogRouter = require("./routes/blog-routes");

const cors = require('cors');
const app = express();

// const conn = require("./config/db");
require("./config/db");

app.use(cors());

app.set("view engine","ejs");
app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api/blogs",blogRouter);

app.use("/api",(req,res,next) =>{
    res.send("hello")
})


// conn();

app.listen(5000, () => console.log("servidor rodando na porta: 5000"));
