const express = require("express");
const BlogController = require("../Controllers/blog.controllers");
const blog_router = express.Router();

blog_router.get("/", BlogController.getAll);

blog_router.get("/:id", BlogController.getOne);

blog_router.delete("/:id", BlogController.delete);

blog_router.post("/", BlogController.post);

blog_router.put("/:id", BlogController.put);

module.exports = blog_router;
