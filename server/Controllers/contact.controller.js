const Contact = require("../models/contact.model");

const ContactController = {
  getAll: async (req, res) => {
    const getAll = await Contact.find({});
    res.send(getAll);
  },
  getOne: async (req, res) => {
    const getID = req.params.id;
    const getOne = await Contact.findById(getID);
    res.send(getOne);
  },
  post: async (req, res) => {
    const getBody = req.body;
    const post = await new Contact(getBody);
    post.save();
    res.json({ msg: "Message send successfully" });
  },
  delete: async (req, res) => {
    const getID = req.params.id;
    const deleteOne = await Contact.findByIdAndDelete(getID);
    res.send("Deleting successfully");
  },
  put: async (req, res) => {
    const getID = req.params.id;
    const getBody = req.body;
    const putOne = await Contact.findByIdAndUpdate(getID, getBody);
    res.send(putOne);
  },
};

module.exports = ContactController;
