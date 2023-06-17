const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = require("./routes/menu.routes");
const categoryRouter = require("./routes/category.routes");
const contactRouter = require("./routes/contact.routes");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/menu", router);
app.use("/api/menu_category", categoryRouter);
app.use("/api/contact", contactRouter);

const Port = process.env.PORT;
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
