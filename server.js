const express = require("express");
const server = express();
const databaseHandler = require("./databaseHandler")

server.set("view engine", "hbs");
server.use(express.json());
server.use(express.urlencoded({extended: true}));


server.use("/", express.static("./public"));
server.use("/add", express.static("./public/add.html"));


// blogs = [
//     {
//         id: 1,
//         title: "My Blog 1",
//         subHeading: "Sub Heading 1",
//         content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         author: "Yo 1"
//     },
//     {
//         id: 2,
//         title: "My Blog 2",
//         subHeading: "Sub Heading 2",
//         content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         author: "Yo 2"
//     }
// ];



server.get("/", function(req, res)
{
    databaseHandler.getBlogs()
    .then(function(blogs)
    {
        let blogId = req.query._id;
        let selectedBlog = blogs.find(function(currentBlog)
        {
            return currentBlog._id == blogId;
        });
        res.render("index", { blogs, selectedBlog});
    });
});

server.post("/", function(req, res)
{
    const newBlog = {
        title: req.body.title,
        subHeading: req.body.subHeading,
        content: req.body.content,
        author: req.body.author 
    }
    // blogs.push(newBlog);
    databaseHandler.addBlog(newBlog)
    .then(function(result)
    {
        res.redirect("/?_id=" + result._id);
    });
});




let port = 4000;
server.listen(port, () => console.log("Server Up And Running On 127.0.0.1:" + port));