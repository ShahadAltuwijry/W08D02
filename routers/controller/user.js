const userModel = require("./../../db/module/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT = Number(process.env.SALT);
const secret = process.env.SECRETKEY;

const registration = async (req, res) => {
  const { email, password, role } = req.body;

  const savedEmail = email.toLowerCase();
  const savedPassword = await bcrypt.hash(password, SALT);

  const newUser = new userModel({
    email: savedEmail,
    password: savedPassword,
    role,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

module.exports = { registration };
