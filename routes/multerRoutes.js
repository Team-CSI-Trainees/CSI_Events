// const getDetails = require("../controllers/getDetails");
const posteventDetails = require("../controllers/posteventDetails")
const multer=require("multer");
const path=require("path");
const events = require("../controllers/events");
const router=require("express").Router();
const imageStorage = multer.diskStorage({
    destination: './upload/images', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
         + path.extname(file.originalname))
    }
});

const imageupload = multer({
storage : imageStorage,
limits : {
    filesize : 10000000
},
fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
       // upload only png and jpg format
       return cb(new Error('Please upload an Image'))
     }
   cb(undefined, true)
}
}) 

router.post("/geteventDetails" ,imageupload.array('images', 20), async(req, res) => {
    const title =req.body.title;
    const description=req.body.description;
    const image=`http://localhost:3000/videos/${req.file.filename}`;
    const event=await events(role).create({
        title:title,
        description:description,
        image:image
      });
      return res.status(200).json(event);
   });
    
router.post("/posteventDetails",posteventDetails);
module.exports=router
    




