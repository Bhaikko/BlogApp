const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:5000";
const databaseName = "testdb";


function connectDatabase()
{
    return MongoClient.connect(url)
    .then(function(client)
    {
        return client.db(databaseName).collection("blogs");
    });
}

function addBlog(blog)
{
    return connectDatabase()
    .then(function(collection)
    {
        return collection.insertOne(blog);
    });
}

function getBlogs()
{
    return connectDatabase()
    .then(function(collection)
    {
        return collection.find().toArray()
        .then(function(result)
        {
            // console.log(result);
            return result;
        });
    });
}


//Unit Testing
// let newBlog = {
//     id: 1,
//     title: "My Blog 1",
//     subHeading: "Sub Heading 1",
//     content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     author: "Yo 1"
// };
// addBlog(newBlog);

// getBlogs();

module.exports = {
    getBlogs,
    addBlog
};