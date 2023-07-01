const Blog = require("../models/blog.model");

const BlogController = {
  getAll: async (req, res) => {
    const getAll = await Blog.find({});
    res.send(getAll);
  },
  getOne: async (req, res) => {
    const getID = req.params.id;
    const getOne = await Blog.findById(getID);
    res.send(getOne);
  },
  post: async (req, res) => {
    const getBody = req.body;
    const post = await new Blog(getBody);
    post.save();
    res.json({ msg: "Blog add successfully" });
  },
  delete: async (req, res) => {
    const getID = req.params.id;
    const deleteOne = await Blog.findByIdAndDelete(getID);
    res.send("Deleting successfully");
  },
  put: async (req, res) => {
    const getID = req.params.id;
    const getBody = req.body;
    const putOne = await Blog.findByIdAndUpdate(getID, getBody);
    res.send(putOne);
  },
};

module.exports = BlogController;
