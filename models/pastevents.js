const mongoose = require("mongoose");
const Pastevents_Schema = new mongoose.Schema(
    {
        title : {type: String},
        description : {type : String},
        image : {type: String}
    },

    { timestamps : true }
);

const Pastevents = mongoose.model("Pastevents" , Pastevents_Schema);                                    
module.exports = Pastevents;
