const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const Schema = mongoose.Schema;
const taskSchema = new Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
  isApproved: { type: Boolean, default: false },
  uid: { type: String, required: true },
});

module.exports = mongoose.model("task", taskSchema);
