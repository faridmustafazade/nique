const express = require("express");

const {
  register,
  login,
  changePassword,
  getAll,
  deleteById,
  put,
} = require("../Controllers/auth.controllers");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/password", changePassword);
router.get("/", getAll);
router.put("/:id", put);
router.delete("/:id", deleteById);

module.exports = router;
