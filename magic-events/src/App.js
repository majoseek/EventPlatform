import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import EventHolder from "./components/EventHolder/EventHolder";

function App() {
    return (
        <React.Fragment>
            <Menu />
            <Route exact path="/">
                <EventHolder />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
        </React.Fragment>
    );
}

export default App;
