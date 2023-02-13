const router = require("express").Router();
const userController = require("./user-controllers");

router.use("/users", userController)

module.exports = router;