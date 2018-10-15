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
            load: 'load sweet-loading',

        };
        this.loadContent = this.loadContent.bind(this);
    }

    componentDidMount() {
        delete this.state.seo;
        let url = 'http://american/app_dev.php/api/seo/home';
        fetch(url)
            .then(response => response.json())
            .then(data =>this.setState({seo: JSON.parse(data)}))
    }

    loadContent () {
        this.setState({load: 'loading-success sweet-loading'});
    }

    render() {

        let load = "load sweet-loading";

        if(this.state.seo.length !== 0){
            load = 'loading-success sweet-loading';
        }

        return (

            <React.Fragment>
                <div className={ load } >
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>

                <Seo seo={this.state.seo}/>
                <HomeSlider />
                <ImageBlock />
                <BlackBlock />
                <ParalaxBlock/>
                <ArticlesBlock/>
                <ServiseBlock/>
                <ContactBlock/>
            </React.Fragment>
        );
    }
}

export default Home;