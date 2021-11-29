const express = require("express");
const userRouter = express.Router();
const { registration, login } = require("./../controller/user");

userRouter.post("/regster", registration);
userRouter.post("/login", login);

module.exports = userRouter;
