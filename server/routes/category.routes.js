const express = require("express");
const CategoryController = require("../Controllers/category.controller");
const category_router = express.Router();

category_router.get("/", CategoryController.getAll);

category_router.get("/:id", CategoryController.getOne);

category_router.delete("/:id", CategoryController.delete);

category_router.post("/", CategoryController.post);

category_router.put("/:id", CategoryController.put);

module.exports = category_router;
