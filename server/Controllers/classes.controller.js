const Classes = require("../models/classes.model");

const ClassesController = {
  getAll: async (req, res) => {
    const getAll = await Classes.find({});
    res.send(getAll);
  },
  getOne: async (req, res) => {
    const getID = req.params.id;
    const getOne = await Classes.findById(getID);
    res.send(getOne);
  },
  post: async (req, res) => {
    const getBody = req.body;
    const post = await new Classes(getBody);
    post.save();
    res.json({ msg: "Class add successfully" });
    
  },
  delete: async (req, res) => {
    const getID = req.params.id;
    const deleteOne = await Classes.findByIdAndDelete(getID);
    res.send("Deleting successfully");
  },
  put: async (req, res) => {
    const getID = req.params.id;
    const getBody = req.body;
    const putOne = await Classes.findByIdAndUpdate(getID, getBody);
    res.send(putOne);
  },
};

module.exports = ClassesController;
