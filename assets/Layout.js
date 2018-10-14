import React, { Component } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";



class Layout extends Component {

    constructor(props){
        super(props);

         this.state = {
             loading: true
         };
        this.updateData = this.updateData.bind(this);

    }

    updateData (value) {
        this.setState({ loading: value })
    }

    render() {
        return (

            <React.Fragment>

                <BrowserRouter>
                    <div>
                        <Header />
                        <Content  updateData = { this.updateData  }/>
                    </div>

                </BrowserRouter>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;