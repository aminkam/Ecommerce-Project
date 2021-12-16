const express = require("express");
const conectDB = require("./config/conectDB");
const app = express();
const multer = require("multer");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });

app.use(express.json());
app.use(cors());

conectDB();

app.use("/user", require("./routes/user"));
app.use("/api", require("./routes/productRouter"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.log(error) : console.log(`server is runing on ${PORT}`)
);

//Multer //////////////
// "../frontend/public/uploads/
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single File upload success");
});

app.post("/multiple", upload.array("images", 3), (req, res) => {
  console.log(req.file);
  res.send("Multiple File upload success");
});
