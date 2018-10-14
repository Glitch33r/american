import React, { Component } from "react";
import MetaTags from 'react-meta-tags';

import {
    Route
} from "react-router-dom";



class Seo extends Component {
    constructor(props){
        super(props);

        this.state = {
            home: "home",
            about: "about"
        }
    }

    render() {
        const greeting = 'Welcome to React';
        return (
            <React.Fragment>

                <Route  path="/app_dev.php" render={ () => <Greeting greeting={this.state.home} /> } />
                <Route  path="/about" render={ () => <Greeting greeting={this.state.about} /> } />

            </React.Fragment>

        );
    }
}

export default Seo;

class Greeting extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        delete this.state.data;
        let url = 'http://american/app_dev.php/api/seo/' + this.props.greeting;
        fetch(url)
            .then(response => response.json())
            .then(data =>this.setState({data: JSON.parse(data)}))
    }


    render() {
        // console.log(this.state.data);
        return (
            <MetaTags>
                <title>{ this.state.data.h1 }</title>
                <meta name="description" content="Some description." />
                <meta property="og:title" content="MyApp" />
                <meta property="og:image" content="path/to/image.jpg" />
                <meta name="keywords" content="fsdfsd" />
            </MetaTags>
        );
    }
}