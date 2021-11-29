const express = require("express");
const userRouter = express.Router();
const { registration, login }

userRouter.post("/reg", registration );
userRouter.post("/login", login );

module.exports = userRouter;
