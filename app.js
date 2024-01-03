const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
require("dotenv").config({ path: "./env" });
const cors = require("cors");
const bodyParser = require("body-parser");
// const connectDB = require("./conn/conn");
require("./conn/conn");
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");

const prot = 3000;

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello Tanmay");
// });
// connectDB();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", auth);
app.use("/api/v2", list);
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.listen(prot, () => {
  console.log(`Server is start in ${prot}`);
});
