import "./App.css";
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Event from "./components/Event/Event";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";

function App() {
    const [events, setEvents] = [];
    useEffect(() => {
        console.log("test");
    }, []);
    return (
        <React.Fragment>
            <Menu />
            <Route exact path="/">
                <Event />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
        </React.Fragment>
    );
}

export default App;
