const Menu = require("../models/menu.model");

const MenuController = {
  getAll: async (req, res) => {
    const getAll = await Menu.find({});
    res.send(getAll);
  },
  getOne: async (req, res) => {
    const getID = req.params.id;
    const getOne = await Menu.findById(getID);
    res.send(getOne);
  },
  post: async (req, res) => {
    const getBody = req.body;
    const post = await new Menu(getBody);
    post.save();
    res.json({ msg: "Menu add successfully" });
  },
  delete: async (req, res) => {
    const getID = req.params.id;
    const deleteOne = await Menu.findByIdAndDelete(getID);
    res.send("Deleting successfully");
  },
  put: async (req, res) => {
    const getID = req.params.id;
    const getBody = req.body;
    const putOne = await Menu.findByIdAndUpdate(getID, getBody);
    res.send(putOne);
  },
};

module.exports = MenuController;
