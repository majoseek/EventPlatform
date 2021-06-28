import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Event() {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Register</Button>
            </Card.Body>
        </Card>
    );
}
export default withRouter(Event);
