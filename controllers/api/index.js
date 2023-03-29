const router = require("express").Router();
const userController = require("./user-controllers");
// require post controllers
// require comment controllers

router.use("/users", userController)
// router.use /posts
// router.use /comments

module.exports = router;