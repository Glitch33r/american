import React, { Component } from "react";
import Home from "../../homepage/Home";
import About from "../../about/About";
import Equipment from "../../equipment/Equipment";
import Offers from "../../offers/Offers";
import ApplicationForm from "../../offers/application/ApplicationForm";
import Careers from "../../offers/careers/Careers";
import Safety from "../../safetyprogram/Safety";
import Contacts from "../../contacts/Contscts";
import Article from "../../article/Article";
import Error from "../../404/404";
import ProductStatic from "../../homepage/products/ProductStatic";
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
                <Route  exact path="/article" render = {() => (<Article  domain = { this.state.domain } />)} />
                <Route  exact path="/corporate-philosophy" render = {() => (<About  domain = { this.state.domain } />)} />
                <Route  exact path="/equipment" render = {() => (<Equipment  domain = { this.state.domain } />)} />
                <Route  exact path="/offers" render = {() => (<Offers  domain = { this.state.domain } />)} />
                <Route  exact path="/offers/application-form" render = {() => (<ApplicationForm  domain = { this.state.domain } />)} />
                <Route  exact path="/offers/careers" render = {() => (<Careers  domain = { this.state.domain } />)} />
                <Route  exact path="/safety" render = {() => (<Safety  domain = { this.state.domain } />)} />
                <Route  exact path="/contacts" render = {() => (<Contacts  domain = { this.state.domain } />)} />
                <Route   path="/product" render = {() => (<ProductStatic  domain = { this.state.domain } />)} />
                <Route  exact path="/404" render = {() => (<Error  domain = { this.state.domain } />)} />



            </React.Fragment>
        );
    }
}

export default Content;