// const { Router } = require("express");
const { verify } = require("crypto");
const express = require("express");
const User = require("../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");

require("dotenv").config(0);

router.post("/login", async function (req, res) {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (!user) {
      return res.status(401).json({
        success: false,
      });
    }
    const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY);

    // save user token
    user.password = null;

    res.status(200).json({
      success: true,
      user: user,
      token,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/register", async function (req, res) {
  try {
    const user = await new User(req.body).save();
    const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY);

    // save user token
    // user.token = token;
    user.password = null;

    res.status(200).json({
      success: true,
      user: user,
      token,
    });
  } catch (err) {
    res.json({
      message: "User already existed",
    });
  }
});

router.get("/", async function (req, res) {
  try {
    const user = await User.find();
    res.status(200).json({
      success: true,
      message: "Get data successfully",
      user,
    });
  } catch (error) {
    res.json(error);
  }
});

router.put("/:id", verifyToken, async function (req, res) {
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
  } catch (error) {
    res.json(error);
  }
});
router.delete("/:id", async function (req, res) {
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      success: true,
      message: "Delete data successfully",
    });
  } catch (error) {
    console.log(error);
  }
});
//dev only
router.delete("/", async function (req, res) {
  await User.deleteMany();
  res.status(200);
});

module.exports = router;
