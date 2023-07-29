const express = require("express");

const {
  getAll,
  getOne,
  postData,
  deleteById,
} = require("../Controllers/reservation.controller");

const router = express.Router();

router.post("/", postData);
router.get("/", getAll);
router.get("/:id", getOne);
router.delete("/:id", deleteById);

module.exports = router;
