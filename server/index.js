import express from "express";
const app = express();
const PORT = 3001;

app.get("/api/events", (req, res) => {
    res.send("events");
});
app.listen(PORT, () => {
    console.log("Server listening on port 3000");
});
