const router = require("express").Router();
const User = require("../../models/User")

router.get("/", (req, res) => {
    res.json({
        username: "john",
        email: "john@mail.com"
    })
})


router.get("/all", (req, res) => {
    // res.json([
    //     {
    //         username: "john",
    //         email: "john@mail.com"
    //     },
    //     {
    //         username: "peter",
    //         email: "peter@mail.com"
    //     }
    // ])

    User.findAll()
    .then(result => {
        res.json(result)
    })
})

router.post("/new", (req, res) => {
    User.create(req.body)
    .then(result => {
        res.json(result)
    })
})

// router for delete

// router for update (PUT)

module.exports = router;