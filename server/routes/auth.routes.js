const express = require("express");

const {
  register,
  login,
  changePassword,
  getAll,
  deleteById,
} = require("../controllers/auth.controllers");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/password", changePassword);
router.get("/", getAll);
router.delete("/:id", deleteById);

module.exports = router;
