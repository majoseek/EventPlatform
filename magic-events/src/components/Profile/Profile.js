import React, { useEffect } from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import CardColumns from "react-bootstrap/CardColumns";
import Event from "../Event/Event";
function Profile(props) {
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        new Promise((resolve, reject) => {
            const input_code = prompt("Please enter your reservation code");
            resolve(input_code);
        }).then((result) => {
            axios.get("/api/tickets?code=" + result).then((response) => {
                if (response.data.length > 0) {
                    setTickets(response.data);
                }
            });
        });
    }, [props]);
    return (
        <React.Fragment>
            <CardColumns>
                {tickets.map((ticket) => {
                    return (
                        <Event
                            key={ticket.title}
                            title={ticket.title}
                            start_date={ticket.start_date}
                            end_date={ticket.end_date}
                            thumbnail={ticket.thumbnail}
                        />
                    );
                })}
            </CardColumns>
        </React.Fragment>
    );
}
export default withRouter(Profile);
