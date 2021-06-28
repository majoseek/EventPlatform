const { client } = require("./database");
module.exports.get_events = async () => {
    return new Promise((resolve, reject) => {
        const events = client
            .db("MagicEvents")
            .collection("Events")
            .find()
            .toArray();
        resolve(events);
    });
};
module.exports.make_reservation = async (code, event_title) => {
    if (code) {
        return new Promise((resolve, reject) => {
            client
                .db("MagicEvents")
                .collection("Tickets")
                .insertOne({
                    reservation_code: code,
                    title: event_title,
                })
                .then(() => {
                    resolve(`Successfully registered with code ${code}`);
                });
        });
    } else {
        return new Promise((resolve, reject) => {
            new Promise((resolve_code, reject_code) => {
                //generates random 10-letter code
                let result = "";
                const avaible_chars =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
                for (var i = 0; i < 10; i++) {
                    result += avaible_chars.charAt(
                        Math.floor(Math.random() * avaible_chars.length)
                    );
                }
                resolve_code(result);
            }).then((result) => {
                client
                    .db("MagicEvents")
                    .collection("Tickets")
                    .insertOne({
                        reservation_code: result,
                        title: event_title,
                    })
                    .then(() => {
                        resolve(`Successfully registered with code ${result}`);
                    });
            });
        });
    }
};
module.exports.get_user_events = async (code) => {
    return new Promise((resolve, reject) => {
        const events = client
            .db("MagicEvents")
            .collection("Tickets")
            .find({ reservation_code: code })
            .toArray();
        resolve(events);
    });
};
