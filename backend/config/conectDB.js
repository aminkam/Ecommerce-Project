const mongoose = require("mongoose");
let config = require("config");
let db = config.get("db");

const conectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("data base is succefully conected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = conectDB;
