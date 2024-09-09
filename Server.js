//Server.js
//import packages
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

//create server
const Server = express();

// set bodyParser
Server.use(bodyparser.json());
Server.use(cors());
Server.use(bodyparser.urlencoded({ extended: false }));

//Connection to the database(DB)
mongoose
  .connect("mongodb://127.0.0.1:27017/fooddb", {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Db Not Connected");
  });

//upload fileStorageConfig
const fileStorageConfig = multer.diskStorage({
  destination: "Uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.filename + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

//Upload fileUploadConfig
const fileUploadConfig = multer({
  storage: fileStorageConfig,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/)) {
      return cb(new Error("Please Upload Correct File"));
    }
    cb(undefined, true);
  },
});

//Upload image
Server.post(
  "/uploadfiles",
  fileUploadConfig.single("image"),
  (req, res) => {
    res.status(200).json({
      filepath: "/images/".concat(req.file.filename),
      uploaded: true,
    });
  },
  (err, req, res, next) => {
    res.status(400).send({ error: err.message });
  }
);

//routes attachments
Server.use("/api/", require("./src/Routes/Routes"));

//uploading Images
Server.use(express.static("Uploads"));
Server.use("/images", express.static("Uploads"));

//start server
Server.listen(5000, () => {
  console.log("Server Started");
});
