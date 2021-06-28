import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Event from "../Event/Event";
import CardColumns from "react-bootstrap/CardColumns";
function EventHolder() {
    const [events, setEvents] = useState([]);
    const register_event = (register_title) => {
        const input_code = prompt(
            "Please enter your reservation code",
            "Leave this field empty if you dont have the code"
        );
        axios
            .post("api/tickets", {
                title: register_title,
                code: input_code,
            })
            .then(() => {
                alert(`Your registration code is ${input_code}`);
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
                        />
                    );
                })}
            </CardColumns>
        </React.Fragment>
    );
}
export default EventHolder;
