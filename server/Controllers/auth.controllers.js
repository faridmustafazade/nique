const AuthSchema = require("../models/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const getAll = async (req, res) => {
  const getAll = await AuthSchema.find({});
  res.send(getAll);
};
const deleteById = async (req, res) => {
  const getID = req.params.id;
  const deleteOne = await AuthSchema.findByIdAndDelete(getID);
  res.send("Deleting successfully");
};
const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const user = await AuthSchema.findOne({ email });
    if (user) {
      return res.status(500).json({ msg: "User already created!" });
    }
    if (password.length < 6) {
      return res
        .status(500)
        .json({ msg: "Password is not smaller than six character" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    if (!isEmail(email)) {
      return res.status(500).json({ msg: "Please enter correct email format" });
    }

    const newUser = await AuthSchema.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      image: req.body.image,
      birthday: req.body.birthday,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
      username,
      email,
      password: passwordHash,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("jwt", token);

    res.status(201).json({
      status: "OK",
      newUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthSchema.findOne({ email });

    if (!user) {
      return res.status(500).json({ msg: "Invalid email or password" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(500).json({ msg: "Password is wrong!" });
    }

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.cookie("jwt", token);

    res.status(201).json({
      status: "OK",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword, confirmPassword, email } = req.body;

  const user = await AuthSchema.findOne({ email });

  if (!user) {
    return res.status(404).send("Patient not found");
  }
  const isCurrentPasswordValid = await bcrypt.compare(
    currentPassword,
    user.password
  );
  if (!isCurrentPasswordValid) {
    return res.status(400).send("Invalid current password");
  }
  if (newPassword !== confirmPassword) {
    return res.status(400).send("New password do not match");
  }
  const passwordHash = await bcrypt.hash(newPassword, 12);

  user.password = passwordHash;
  await user.save();

  res.send("Password updated");
};

function isEmail(emailAddress) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAddress.match(regex)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { register, login, changePassword, getAll,deleteById };
