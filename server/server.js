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
const ordersRouter = require("./routes/orders.routes");
const stripe = require("./routes/stripe.routes");

dotenv.config();

const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "1000mb" })); // Increase the limit to allow larger payloads

app.use("/api/menu", router);
app.use("/api/menu_category", categoryRouter);
app.use("/api/contact", contactRouter);
app.use("/api/classes", classesRouter);
app.use("/api/blog", blogRouter);
app.use("/api/reservation", reservationRouter);
app.use("/api/orders", ordersRouter);
app.use("/api", authRouter);
app.use("/api/stripe", stripe);

const Port = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("MongoDB connection successful...");
  })
  .then(
    app.listen(Port, () => {
      console.log(`Server running on port ${Port}`);
    })
  );
