const { DB_URL } = require("../secret");

const mongoose = require("mongoose");

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(DB_URL, options);
    console.log("Connect to DB 🚀");

    mongoose.connection.on("error", (error) => {
      console.log(`DB Connection error ${error}`);
    });
  } catch (error) {
    console.log(`Could not connect to DB ${error}`);
  }
};

module.exports = connectDB;