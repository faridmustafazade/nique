const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = require("./routes/menu.routes");
const categoryRouter = require("./routes/category.routes");
const contactRouter = require("./routes/contact.routes");
const classesRouter = require("./routes/classes.routes");
const authRouter = require("./routes/auth.routes");
const blogRouter = require("./routes/blog.routes");
const reservationRouter = require("./routes/reservation.routes");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/menu", router);
app.use("/api/menu_category", categoryRouter);
app.use("/api/contact", contactRouter);
app.use("/api/classes", classesRouter);
app.use("/api/blog", blogRouter);
app.use("/api/reservation", reservationRouter);
app.use("/api", authRouter);

const Port = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Mongo DB connect");
  })
  .then(
    app.listen(Port, () => {
      console.log("Server is run");
    })
  );
