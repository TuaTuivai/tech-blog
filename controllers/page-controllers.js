const router = require("express").Router();

// routes
router.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "./public/index.html"))
    res.render("home", {
        layout: "main",
        username: "john"
    })
})

router.get("/login", (req, res) => {
    // res.sendFile(path.join(__dirname, "./public/login.html"))
    res.render("login", {
        layout: "main"
    })
})

module.exports = router;