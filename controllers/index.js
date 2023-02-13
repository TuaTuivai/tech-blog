const router = require("express").Router();
const pageController = require("./page-controllers");
const apiController = require("./api");

router.use("/", pageController);

router.use("/api", apiController)

router.use("*", (req, res) => {
    res.send("Wrong router!")
})

module.exports = router;