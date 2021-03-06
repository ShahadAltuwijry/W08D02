const express = require("express");
require("dotenv").config();
const db = require("./db/index");
const roleRouter = require("./routers/route/role");
const userRouter = require("./routers/route/user");

const app = express();
app.use(express.json());
app.use(roleRouter);
app.use(userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
