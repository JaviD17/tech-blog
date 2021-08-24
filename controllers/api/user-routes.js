const User = require("../../models/User");

const router = require("express").Router();
// add models and require them

// get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// get one user
router.get("/:id", (req, res) => {
  // User.findOne({})
});
// post user
router.post("/", (req, res) => {
  // expects {username: "", password: ""}
  // User.create({})
});
// post user login
router.post("/login", (req, res) => {
  // expects {username: "", password: ""}
  // User.findOne({})
});
// put user
router.put("/:id", (req, res) => {
  // expects {username: "", password: ""}
  // User.update({})
});
// delete user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with that id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
