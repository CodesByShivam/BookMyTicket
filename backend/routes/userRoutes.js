const express = require("express");
const userModel = require("../models/userModel");
const userRouter = express.Router();

userRouter.get("/dbDetails", async (req, res) => {
  const userExists = await userModel.findOne({ email: req.body.email });

  console.log(userExists);
  res.send(userExists);
});

module.exports = userRouter;