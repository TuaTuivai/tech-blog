const express = require("express");
const exphbs = require("express-handlebars");
const controllers = require("./controllers");
const connection = require("./config/connection");

const app = express();
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"))

app.use(controllers);

connection.sync({force: false})
.then(() => {
    app.listen(3001, () => {
        console.log("Server has started!")
    })
})