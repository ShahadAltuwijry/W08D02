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

const login = (req, res) => {
  const { email, password } = req.body;

  userModel.findOne({ email }).then(async (result) => {
    if (result) {
      if (email === result.email) {
        const savedPassword = await bcrypt.compare(password, result.password);
        const payload = { role: result.role };
        const token = jwt.sign(payload, secret);

        if (savedPassword) {
          res.status(200).json({ result, token });
        } else {
          res.status(400).json("invalid email or password");
        }
      } else {
        res.status(400).json("invalid email or password");
      }
    } else {
      res.status(404).json("email isn registred");
    }
  });
};

module.exports = { registration, login };
