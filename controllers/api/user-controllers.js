const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        username: "john",
        email: "john@mail.com"
    })
})


router.get("/all", (req, res) => {
    res.json([
        {
            username: "john",
            email: "john@mail.com"
        },
        {
            username: "peter",
            email: "peter@mail.com"
        }
    ])
})

module.exports = router;