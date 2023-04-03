const mongoose = require("mongoose");
const Upcomingevents_Schema = new mongoose.Schema(
    {
        title : {type: String},
        description : {type : String},
        image : {type: String}
    },

    { timestamps : true }
);

const Upcomingevents = mongoose.model("Upcomingevents" , Upcomingevents_Schema);
module.exports = Upcomingevents;