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
            imageBlock: [],
            blackBlock: [],
            blackBlockList: [],
            paralaxBlock: [],
            articlesBlock: [],
            load: 'load sweet-loading',

        };
        this.loadContent = this.loadContent.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/';
        fetch(url + "seo/home")
            .then(response => response.json())
            .then(data =>this.setState({seo: data}));

        // delete this.state.slider;
        this.setState({slider: []});
        fetch(url + "page/home/slider")
            .then(response => response.json())
            .then(data =>this.setState({slider: data}));

        fetch(url + "page/home/red")
            .then(response => response.json())
            .then(data =>this.setState({imageBlock: data}));
        fetch(url + "page/home/black")
            .then(response => response.json())
            .then(data =>this.setState({blackBlock: data}));
        fetch(url + "page/home/list")
            .then(response => response.json())
            .then(data =>this.setState({blackBlockList: data}));
        fetch(url + "page/home/paralax")
            .then(response => response.json())
            .then(data =>this.setState({paralaxBlock: data}));
        fetch(url + "page/home/articles")
            .then(response => response.json())
            .then(data =>this.setState({articlesBlock: data}));
    }

    loadContent () {
        this.setState({load: 'loading-success sweet-loading'});
    }

    render() {
        let loading = true;
        if( this.state.slider.length == 0 )  {
            loading = false;
        }

        return (

            <React.Fragment>



                <div className={ loading ? "loading-success sweet-loading" : 'load sweet-loading' }>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>

                {/*<div className={ loading ? "page-animate" : "page-animate page-animate-show" }>*/}
                    { loading ? <div>
                        <HomeSlider arrSlider = { this.state.slider } />
                        <ImageBlock imageBlock = { this.state.imageBlock } />
                        <BlackBlock blackBlock = { this.state.blackBlock } blackBlockList = { this.state.blackBlockList } />
                        <ParalaxBlock paralaxBlock = { this.state.paralaxBlock } />
                        <ArticlesBlock articlesBlock = { this.state.articlesBlock } />
                        <ServiseBlock/>
                        <ContactBlock/>
                    </div> : "" }
                {/*</div>*/}
                <Seo seo={this.state.seo}/>


            </React.Fragment>
        );
    }
}

export default Home;