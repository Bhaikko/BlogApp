const express = require("express");
const server = express();

server.set("view engine", "hbs");

server.use("/", express.static("./public"));
server.use("/add", express.static("./public/add.html"));

server.get("/", function(req, res)
{
    res.render("index");
});

server.post("/", function(req, res)
{
    res.redirect("/");
})




let port = 4000;
server.listen(port, () => console.log("Server Up And Running On 127.0.0.1:" + port));