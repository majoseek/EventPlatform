import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Menu() {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link to="/" as={Link}>
                        Events
                    </Nav.Link>
                    <Nav.Link to="/profile" as={Link}>
                        Profile
                    </Nav.Link>
                </Nav>
            </Navbar>
        </React.Fragment>
    );
}
export default Menu;
