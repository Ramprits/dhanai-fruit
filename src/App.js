import React from "react";
import {Router, Switch, Route} from "react-router-dom";

import IndexPage from "./pages/Index.js";
import LoginPage from "./pages/Login.js";
import RegisterPage from "./pages/Register.js";
import ContactPage from "./pages/Contact.js";
import NotfoundPage from "./pages/Notfound.js";
import {history} from "./utils/index.js";

export default function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <IndexPage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/register">
                    <RegisterPage/>
                </Route>
                <Route exact path="/contact">
                    <ContactPage/>
                </Route>
                <Route exact path="/notfound">
                    <NotfoundPage/>
                </Route>
            </Switch>
        </Router>
    );
}
