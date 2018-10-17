import React, { Component } from "react";
import HomeSlider from "../components/slider/HomeSlider";
import ImageBlock from "./ImageBlock";
import BlackBlock from "./BlackBlock";
import ParalaxBlock from "./ParalaxBlock";
import ArticlesBlock from "./ArticlesBlock";
import ServiseBlock from "./ServiseBlock";
import ContactBlock from "./ContactBlock";

import Seo from "../components/seo/Seo";

import { ClipLoader } from 'react-spinners';

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],
            slider: [],
            load: 'load sweet-loading',

        };
        this.loadContent = this.loadContent.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        // delete this.state.seo;
        let url = 'http://' + this.props.domain + '/api/v1/';
        fetch(url + "seo/home")
            .then(response => response.json())
            .then(data =>this.setState({seo: data}));
        fetch(url + "page/home/slider")
            .then(response => response.json())
            .then(data =>this.setState({slider: data}));
    }

    loadContent () {
        this.setState({load: 'loading-success sweet-loading'});
    }

    render() {
        let loading = false;
        if( this.state.seo.length == 0 )  {
            loading = true;
        }

        return (

            <React.Fragment>



                <div className={ loading ? 'load sweet-loading' : "loading-success sweet-loading" }>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>

                {/*<div className={ loading ? "page-animate" : "page-animate page-animate-show" }>*/}
                    { loading ? "" : <div> <HomeSlider arrSlider = { this.state.slider } />
                        <ImageBlock />
                        <BlackBlock />
                        <ParalaxBlock/>
                        <ArticlesBlock/>
                        <ServiseBlock/>
                        <ContactBlock/> </div> }
                {/*</div>*/}
                <Seo seo={this.state.seo}/>


            </React.Fragment>
        );
    }
}

export default Home;