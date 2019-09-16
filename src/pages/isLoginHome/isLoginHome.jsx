// @flow
import React, {Component} from 'react';
//import "../Reguistro/Login.css"
import {connect} from "react-redux";
//import {LoginAction} from '../../business/actions/Login/LoginAction'
//import {Redirect} from "react-router-dom";

type Props = {

};
type State = {

};

 class IsLoginHome extends React.Component<Props, State> {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1>Pagina en Construsion</h1>
                <h5>Es parte no se pudo continuar por falta de espacio y de presupuesto</h5>
            </div>
        );
    };
}
export default IsLoginHome;
