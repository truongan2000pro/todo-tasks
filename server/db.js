const mongoose = require("mongoose");
let db = async function () {
  try {
    // const connectionParams = {
    //   useNewUrlParser: true,
    // };
    await mongoose.connect("mongodb://localhost/todo-app");
    console.log("connected to db");
  } catch (err) {
    console.log("can not connect to db", err);
  }
};

module.exports = db;
