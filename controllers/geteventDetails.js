// const multer = require("multer");
// const events = require("./events");
const presentevents= require("../models/presentevents");
const error = require("../utils/errorHandler");
const geteventDetails = async (req, res) => {

    const title= req.body.title;
    const description = req.body.description;
    const startingDate = req.body.startingDate;
    const endingDate = req.body.endingDate;
    const id = req.body.id;
    const image =  `http://drive.google.com/uc?export=view&id=${id}`;

    try{
      const event = await presentevents.create({
        title:title,
        description:description,
        startingDate : startingDate ,
        endingDate : endingDate,
        image: image

      });
      return res.status(200).json(event);
    } catch (error) {
    console.log(err);
    }
};
module.exports = geteventDetails ;