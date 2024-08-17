const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database");
  }
};

module.exports = connectDB;
