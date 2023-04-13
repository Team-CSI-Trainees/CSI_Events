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
mongoose
  .connect("mongodb+srv://csi_backend:csi_backend@cluster0.lrg9luv.mongodb.net/websiteDb", { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to mongodb database");
  }).catch((err)=>{console.log(err);});

app.set('trust proxy', 1);
app.use(cors());
app.use("/api",router);
const port = 3005|| process.env.PORT;
app.listen(3005, () => {
    console.log(`Sever running at ${port}`);
  });