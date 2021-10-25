// const { Router } = require("express");
const express = require("express");
const Task = require("../models/task");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

router.post("/", verifyToken, async function (req, res) {
  try {
    req.body.uid = req.user.user_id;
    const task = await new Task(req.body).save();
    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (err) {
    res.json(err);
  }
});

router.get("/", verifyToken, async function (req, res) {
  try {
    req.body.uid = req.user.user_id;
    const tasks = await Task.find({ uid: req.body.uid });
    res.status(200).json({
      success: true,
      message: "Get data successfully",
      data: tasks,
    });
  } catch (error) {
    res.json(error);
  }
});

router.put("/:id", verifyToken, async function (req, res) {
  try {
    req.body.uid = req.user.user_id;
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, uid: req.body.uid },
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Update data successfully",
    });
  } catch (error) {
    res.json(error);
  }
});
router.delete("/:id", verifyToken, async function (req, res) {
  try {
    req.body.uid = req.user.user_id;
    const tasks = await Task.findOneAndDelete({
      _id: req.params.id,
      uid: req.body.uid,
    });
    res.status(200).json({
      success: true,
      message: "Delete data successfully",
    });
  } catch (error) {
    console.log(error);
  }
});
router.delete("/", async function (req, res) {
  try {
    const tasks = await Task.deleteMany();
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
