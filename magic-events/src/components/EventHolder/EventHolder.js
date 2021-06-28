import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Event from "../Event/Event";
import CardColumns from "react-bootstrap/CardColumns";
function EventHolder() {
    const [events, setEvents] = useState([]);
    const register_event = (register_title) => {
        new Promise((resolve, reject) => {
            const input_code = prompt(
                "Please enter your reservation code",
                "Leave this field empty if you dont have the code"
            );
            resolve(input_code);
        }).then((result) => {
            if (result) {
                axios
                    .post("api/tickets", {
                        title: register_title,
                        code: result,
                    })
                    .then((response) => {
                        alert(`Your registration code is ${response.data}`);
                    });
            } else {
                axios
                    .post("api/tickets", {
                        title: register_title,
                    })
                    .then((response) => {
                        alert(`Your registration code is ${response.data}`);
                    });
            }
        });
    };
    useEffect(() => {
        axios.get("/api/events").then((result) => {
            setEvents(result.data);
        });
    }, []);
    return (
        <React.Fragment>
            <CardColumns>
                {events.map((event) => {
                    return (
                        <Event
                            key={event.title}
                            title={event.title}
                            start_date={event.start_date}
                            end_date={event.end_date}
                            thumbnail={event.thumbnail}
                            register={register_event}
                        />
                    );
                })}
            </CardColumns>
        </React.Fragment>
    );
}
export default EventHolder;
