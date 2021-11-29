const express = require("express");
require("dotenv").config();
const db = require("./db/index");

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
