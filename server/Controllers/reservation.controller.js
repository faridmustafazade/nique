const Reservation = require("../models/reservation.model");

const getAll = async (req, res) => {
  const getAll = await Reservation.find({});
  res.send(getAll);
};
const getOne = async (req, res) => {
  const getID = req.params.id;
  const getOne = await Reservation.findById(getID);
  res.send(getOne);
};
const deleteById = async (req, res) => {
  const getID = req.params.id;
  const deleteOne = await Reservation.findByIdAndDelete(getID);
  res.send("Deleting successfully");
};
// const postData = async (req, res) => {
//   const getBody = req.body;

//   const post = await new Reservation(getBody);
//   post.save();
//   res.send(post);
// };

const postData = async (req, res) => {
  try {
    const { name, email, count, dates, tables } = req.body;

    // Check if the hour is available
    const existingReservation = await Reservation.findOne({
      "dates.day": dates.day,
      "dates.hour": dates.hour,
      "tables": tables,
    });

    if (existingReservation) {
      return res.status(400).json({ msg: "This hour is already reserved" });
    }

    // Create the new reservation
    const newReservation = await Reservation.create({
      name,
      email,
      count,
      dates,
      tables,
    });

    res
      .status(201)
      .json({ msg: "Reservation successfully", status: "OK", newReservation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function isEmail(emailAddress) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAddress.match(regex)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { postData, getAll, getOne, deleteById };
