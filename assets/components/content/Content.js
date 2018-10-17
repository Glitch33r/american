import React, { Component } from "react";
import Home from "../../homepage/Home";
import About from "../../about/About";
import { Route } from 'react-router-dom';

class Content extends Component {

    constructor(props){
        super(props);

        this.state = {
            domain: window.location.hostname === 'american.truck.origami.ua' ? window.location.hostname : window.location.hostname + '/app_dev.php'
        }

    }


    render() {
        console.log(this.state.domain);
        return (
            <React.Fragment>

                    <Route  exact path="/app_dev.php" render = {() => (<Home  domain = { this.state.domain } />)}  />
                    <Route  exact path="/" render = {() => (<Home  domain = { this.state.domain } />)} />

                    <Route  exact path="/about" render = {() => (<About  domain = { this.state.domain } />)} />



            </React.Fragment>
        );
    }
}

export default Content;