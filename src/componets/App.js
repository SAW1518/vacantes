import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import isLoginHome from "../pages/isLoginHome/isLoginHome"
import Reguistro from "../pages/Reguistro/Reguistro"
import Emperesa from "../pages/Emperesa"


const App =()=>(
    <BrowserRouter>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/Login'} component={Login}/>
        <Route exact path={'/isLoginHome'} component={isLoginHome}/>
        <Route exact path={'/Reguistro'} component={Reguistro}/>
        <Route exact path={'/Emperesa'} component={Emperesa}/>
    </BrowserRouter>
);
export default App
