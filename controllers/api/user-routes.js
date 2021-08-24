const router = require('express').Router();
// add models and require them

// get all users
router.get("/", (req, res) => {
    // User.findAll({})
})
// get one user
router.get("/:id", (req, res) => {
    // User.findOne({})
})
// post user
router.post("/", (req, res) => {
    // expects {username: "", password: ""}
    // User.create({})
})
// post user login
router.post("/login", (req, res) => {
    // expects {username: "", password: ""}
    // User.findOne({})
})
// put user
router.put("/:id", (req, res) => {
    // expects {username: "", password: ""}
    // User.update({})
})
// delete user