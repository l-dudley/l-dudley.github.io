
import React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Pages/Home";
import Other from "./Pages/Other";

const App = () => {
    return (
        <HashRouter>
            <div className="App">
                <h1>Hello World!</h1>
            </div>  
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/other">Other</NavLink></li>
            </ul>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/other" component={Other}></Route>
            </div>
        </HashRouter>
    );
}

export default App;