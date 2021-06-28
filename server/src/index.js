const express = require("express");
const app = express();
const services = require("./services");
app.use(express.json());
const PORT = 3001;

app.get("/api/events", async (req, res) => {
    services.get_events().then((result) => {
        res.send(result);
    });
});
app.get("/api/tickets", async (req, res) => {
    if (req.body.code) {
        services.get_user_events(req.body.code).then((result) => {
            res.send(result);
        });
    } else res.send("No reservation code provided");
});
app.post("/api/tickets", async (req, res) => {
    if (req.body.title) {
        services
            .make_reservation(req.body.code, req.body.title)
            .then((result) => {
                res.send(result);
            });
    } else res.send("No event title provided");
});
app.listen(PORT, () => {
    console.log("Server listening on port 3000");
});
