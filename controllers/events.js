// const past_events= require("../models/pastevents");
const present_events= require("../models/presentevents");
// const upcoming_events = require("../models/upcomingevents");

const events=(role)=>{
return role=="upcoming"?upcoming_events:role=="present"?present_events:past_events
};
module.exports=events;