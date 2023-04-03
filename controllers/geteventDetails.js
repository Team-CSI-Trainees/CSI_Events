const multer = require("multer");
const events = require("./events");
const getDetails = async (req, res) => {
  try {
    const title= req.body.title;
    const description = req.body.description;
    const image = req.file;
    const event = await events(role).create({
      title: title,
      description: description,
      image: image
    });
    return res.status(200).json(event);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = geteventDetails;