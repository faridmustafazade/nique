const express = require("express");
const ClassesController = require("../Controllers/classes.controller");
const classes_router = express.Router();

classes_router.get("/", ClassesController.getAll);

classes_router.get("/:id", ClassesController.getOne);

classes_router.delete("/:id", ClassesController.delete);

classes_router.post("/", ClassesController.post);

classes_router.put("/:id", ClassesController.put);

module.exports = classes_router;
