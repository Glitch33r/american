import React, { Component } from "react";
import {
    Route
} from "react-router-dom";

import { ClipLoader } from 'react-spinners';
// import Home from "./homepage/Home";



class Breadcrumbs extends Component {

    constructor(props){
        super(props);

        this.state = {
            home: "home",
            about: "about"
        }

    }


    render() {
        return (


        <React.Fragment>

            <Route  path="/app_dev.php" render={ () => <BreadHtml greeting={this.state.home} /> } />
            <Route  path="/about" render={ () => <BreadHtml greeting={this.state.about} /> } />

        </React.Fragment>


        );
    }
}

export default Breadcrumbs;


class BreadHtml extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // delete this.state.data;
        let url = 'http://american/app_dev.php/api/seo/' + this.props.greeting;
        fetch(url)
            .then(response => response.json())
            .then(data =>this.setState({data: JSON.parse(data)}))
    }


    render() {

        if(this.state.data.length == 0){
            // console.log(this.state.data.length);
            return (
                <div className='sweet-loading'>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>
            );
        }
        // console.log(this.state.data);
        return (
            <React.Fragment>

            <nav className="breadcrumbs">
                <div className="breadcrumbs-wrap">
                    <h2 className="breadcrumbs__pagename">{ this.state.data.h1 }</h2>
                    <ul className="breadcrumbs__list">
                        <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="#">HOME</a></li>
                        <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="#">{ this.state.data.h1 }</a></li>
                    </ul>
                </div>
            </nav>
            </React.Fragment>
        );
    }
}
