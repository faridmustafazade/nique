const Category = require("../models/category.model");

const CategoryController = {
  getAll: async (req, res) => {
    const getAll = await Category.find({});
    res.send(getAll);
  },
  getOne: async (req, res) => {
    const getID = req.params.id;
    const getOne = await Category.findById(getID);
    res.send(getOne);
  },
  getOne: async (req, res) => {
    const getCategory = req.params.category;
    const getOne = await Category.findOne(getCategory);
    res.send(getOne);
  },
  post: async (req, res) => {
    const getBody = req.body;
    const post = await new Category(getBody);
    post.save();
    res.send(post);
  },
  delete: async (req, res) => {
    const getID = req.params.id;
    const deleteOne = await Category.findByIdAndDelete(getID);
    res.send("Deleting successfully");
  },
  put: async (req, res) => {
    const getID = req.params.id;
    const getBody = req.body;
    const putOne = await Category.findByIdAndUpdate(getID, getBody);
    res.send(putOne);
  },
};

module.exports = CategoryController;
