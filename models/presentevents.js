const mongoose = require("mongoose");
const Presentevents_Schema = new mongoose.Schema(
    {
        title : {type: String},
        description : {type : String},
        image : {type: String}
    },

    { timestamps : true }
);

const Presentevents = mongoose.model("Presentevents" , Presentevents_Schema);
module.exports = Presentevents;