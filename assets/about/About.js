import React, { Component } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import MeetUsBlock from "./MeetUsBlock";
import BlackBlock from "./BlackBlock";
import RedBlock from "./RedBlock";
import  axios  from 'axios'

import Seo from "../components/seo/Seo";

import { ClipLoader } from 'react-spinners';

class About extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],
            whiteBlock: [],
            blackBlock: [],
            redBlock: [],
        }
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/seo/corporate-philosophy';
        axios.get(url)
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));

        axios.get('/api/v1/page/corp-philosophy/white')
            .then(response => this.setState({whiteBlock: response.data}));
        axios.get('/api/v1/page/corp-philosophy/list')
            .then(response => this.setState({blackBlock: response.data}));
        axios.get('/api/v1/page/corp-philosophy/red')
            .then(response => this.setState({redBlock: response.data}));
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
                <Seo seo={this.state.seo}/>
                { loading ?
                    <div>
                        <Breadcrumbs seo={ this.state.seo }/>
                        <MeetUsBlock whiteBlock={ this.state.whiteBlock }/>
                        <BlackBlock blackBlock = { this.state.blackBlock }/>
                        <RedBlock redBlock = { this.state.redBlock }/>
                    </div>
                    : ""
                }

            </React.Fragment>
        );
    }
}

export default About;