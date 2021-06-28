const { MongoClient } = require("mongodb");
const uri =
    "mongodb+srv://admin:admin@eventsreservation.r35ed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect((err) => {
    console.log("Connection to database has been estabilished");
});
module.exports = {
    client,
};
