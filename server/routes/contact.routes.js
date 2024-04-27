const express = require("express");
const ContactController = require("../Controllers/contact.controller");
const contact_router = express.Router();

contact_router.get("/", ContactController.getAll);

contact_router.get("/:id", ContactController.getOne);

contact_router.delete("/:id", ContactController.delete);

contact_router.post("/", ContactController.post);

contact_router.put("/:id", ContactController.put);

module.exports = contact_router;
