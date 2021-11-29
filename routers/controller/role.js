const roleModel = require("./../../db/module/role");

const create = (req, res) => {
  const { role, permissions } = req.body;

  const newRole = new roleModel({
    role,
    permissions,
  });

  newRole
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
