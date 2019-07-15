const express = require("express");
const server = express();

server.set("view engine", "hbs");

server.use("/", express.static("./public"));
server.use("/add", express.static("./public/add.html"));


blogs = [
    {
        id: 1,
        title: "My Blog 1",
        subHeading: "Sub Heading 1",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: "Yo 1"
    },
    {
        id: 2,
        title: "My Blog 2",
        subHeading: "Sub Heading 2",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: "Yo 2"
    }
];



server.get("/", function(req, res)
{
    let blogId = req.query.id;
    let selectedBlog = blogs.find(function(currentBlog)
    {
        return currentBlog.id == blogId;
    });
    res.render("index", { blogs, selectedBlog});
});

server.post("/", function(req, res)
{
    res.redirect("/");
});




let port = 4000;
server.listen(port, () => console.log("Server Up And Running On 127.0.0.1:" + port));