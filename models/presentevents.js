const mongoose = require("mongoose");
const Presentevents_Schema = new mongoose.Schema(
    {
        title : {type: String , require: true,},
        description : {type : String , require: true,},
        startingDate : {type : Date , require: true},
        endingDate : {type : Date , require: true},
        image : {type: String , require: true,}
    },

    { timestamps : true }
);

const Presentevents = mongoose.model("Presentevents" , Presentevents_Schema);
module.exports = Presentevents;