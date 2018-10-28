import React, { Component } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import ImageBlock from "./ImageBlock";
import BlackBlock from "./BlackBlock";
import ParalaxBlock from "./ParalaxBlock";
import ArticlesBlock from "./ArticlesBlock";
// import ServiseBlock from "./ServiseBlock";
// import ContactBlock from "./ContactBlock";
import  axios  from 'axios'

import Seo from "../components/seo/Seo";

import { ClipLoader } from 'react-spinners';

class Equipment extends Component {

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

        axios.get(url + "seo/equipment")
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));


        // axios.get(url + "seo/home")
        //     .then(response => response.data)
        //     .then(data =>this.setState({seo: data}));
        //
        // // delete this.state.slider;
        //
        //
        // axios.get(url + "page/home/red")
        //     .then(response => response.data)
        //     .then(data =>this.setState({imageBlock: data}));
        // axios.get(url + "page/home/black")
        //     .then(response => response.data)
        //     .then(data =>this.setState({blackBlock: data}));
        // axios.get(url + "page/home/list")
        //     .then(response => response.data)
        //     .then(data =>this.setState({blackBlockList: data}));
        // axios.get(url + "page/home/paralax")
        //     .then(response => response.data)
        //     .then(data =>this.setState({paralaxBlock: data}));
        // axios.get(url + "page/home/articles")
        //     .then(response => response.data)
        //     .then(data =>this.setState({articlesBlock: data}));
    }

    loadContent () {
        this.setState({load: 'loading-success sweet-loading'});
    }

    render() {
        let loading = true;
        if( this.state.seo.length == 0 )  {
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
                    <Breadcrumbs seo={this.state.seo}/>
                    <ImageBlock imageBlock = { this.state.imageBlock } />
                    <BlackBlock blackBlock = { this.state.blackBlock } blackBlockList = { this.state.blackBlockList } />
                    <ParalaxBlock paralaxBlock = { this.state.paralaxBlock } />
                    <ArticlesBlock articlesBlock = { this.state.articlesBlock } />
                    {/*<ServiseBlock/>*/}
                    {/*<ContactBlock/>*/}
                </div> : "" }
                {/*</div>*/}
                <Seo seo={this.state.seo}/>


            </React.Fragment>
        );
    }
}

export default Equipment;