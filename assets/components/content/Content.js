import React, { Component } from "react";
import Home from "../../homepage/Home";
import About from "../../about/About";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Content extends Component {

    constructor(props){
        super(props);



    }

    render() {
        return (
            <React.Fragment>

                    <Route exact path="/app_dev.php" component={Home} />

                    <Route exact path="/about" component={About} />



            </React.Fragment>
        );
    }
}

export default Content;