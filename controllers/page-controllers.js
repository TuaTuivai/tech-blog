const router = require("express").Router();
//  require Post model

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

// router get for new post handlebars
router.get("/newpost", (req, res) => {
    res.render("newpost", {
        layout: "main"
    })
})

// router get for update post handlebars
router.get("/updatepost/:id", async (req, res) => {

    // const postInfo = await  Post.findById(req.params.id)

    res.render("updatepost", {
        layout: "main",
        // postInfo: postInfo
    })
})


module.exports = router;