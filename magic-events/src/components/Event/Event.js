import React from "react";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Event(props) {
    return (
        <Card className="m-5 w-75">
            <Card.Img variant="top" src={props.thumbnail} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    Start date:{props.start_date}
                    <br />
                    End date:{props.end_date}
                </Card.Text>
                <Button
                    variant="primary"
                    onClick={() => {
                        props.register(props.title);
                    }}
                >
                    Register
                </Button>
            </Card.Body>
        </Card>
    );
}
export default withRouter(Event);
