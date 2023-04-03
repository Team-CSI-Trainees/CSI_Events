const express=require("express");
require("dotenv").config()
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: false }));
const mongoose = require("mongoose");
const router = require("./routes/multerRoutes");
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://Aanirudh24:Aanirudh24@cluster0.vfse9i8.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true }).then(()=>{  console.log("Successfully connected to mongodb database")})
app.set('trust proxy', 1);
app.use(cors());
app.use("/api",router);
const port = 3000 || process.env.PORT;
app.listen(3000, () => {
    console.log(`Sever running at ${port}`);
  });