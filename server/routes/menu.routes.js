const express = require("express");
const MenuController = require("../Controllers/menu.controllers");
const menu_router = express.Router();

menu_router.get("/", MenuController.getAll);

menu_router.get("/:id", MenuController.getOne);

menu_router.delete("/:id", MenuController.delete);

menu_router.post("/", MenuController.post);

menu_router.put("/:id", MenuController.put);

module.exports = menu_router;
