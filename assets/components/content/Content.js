import React, { Component } from "react";
import Home from "../../homepage/Home";
import About from "../../about/About";
import Equipment from "../../equipment/Equipment"
import Offers from "../../offers/Offers"
import Contacts from "../../contacts/Contscts"
import { Route } from 'react-router-dom';
import Aos from "aos";

class Content extends Component {

    constructor(props){
        super(props);

        this.state = {
            domain: window.location.hostname === 'american.truck.origami.ua' ? window.location.hostname : window.location.hostname + '/app_dev.php'
        }

    }


    render() {

        Aos.init();

        return (
            <React.Fragment>


                    <Route  exact path="/app_dev.php" render = {() => (<Home  domain = { this.state.domain } />)}  />
                    <Route  exact path="/" render = {() => (<Home  domain = { this.state.domain } />)} />

                    <Route  exact path="/about" render = {() => (<About  domain = { this.state.domain } />)} />
                    <Route  exact path="/equipment" render = {() => (<Equipment  domain = { this.state.domain } />)} />
                    <Route  exact path="/offers" render = {() => (<Offers  domain = { this.state.domain } />)} />
                    <Route  exact path="/contacts" render = {() => (<Contacts  domain = { this.state.domain } />)} />



            </React.Fragment>
        );
    }
}

export default Content;