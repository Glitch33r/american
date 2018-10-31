import React, { Component } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import WhiteBlock from "./WhiteBlock";
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
            whiteBlock: [],
            listLeft: [],
            listRight: [],
            paralax: [],
            additional: [],
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/';

        axios.get(url + "seo/equipment")
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));
        axios.get('/api/v1/page/equipment/white')
            .then(response => this.setState({whiteBlock: response.data}));
        axios.get('/api/v1/page/equipment/list-left')
            .then(response => this.setState({listLeft: response.data}));
        axios.get('/api/v1/page/equipment/list-right')
            .then(response => this.setState({listRight: response.data}));
        axios.get('/api/v1/page/equipment/paralax')
            .then(response => this.setState({paralax: response.data}));
        axios.get('/api/v1/page/equipment/additional')
            .then(response => this.setState({additional: response.data}));

    }

    render() {
        let loading = false;
        if( this.state.seo.length != 0 && this.state.whiteBlock.length != 0 )  {
            loading = true;
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

                { loading ? <div>
                    <Breadcrumbs seo={this.state.seo}/>
                    <WhiteBlock whiteBlock = { this.state.whiteBlock } />
                    <BlackBlock listLeft = { this.state.listLeft } listRight = { this.state.listRight } />
                    <ParalaxBlock paralax = { this.state.paralax } />
                    <ArticlesBlock additional = { this.state.additional } />
                </div> : "" }
                <Seo seo={this.state.seo}/>


            </React.Fragment>
        );
    }
}

export default Equipment;