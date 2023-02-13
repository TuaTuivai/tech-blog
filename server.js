const express = require("express");
const exphbs = require("express-handlebars");
const controllers = require("./controllers");

const app = express();
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(controllers);

app.listen(3001, () => {
    console.log("Server has started!")
})