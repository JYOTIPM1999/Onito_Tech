const express = require("express");
const cors = require("cors");
const detailsRouter = require("./routes/details.routes");

const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/details", detailsRouter);

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log("Mongodb Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("server started on port 8080");
});
