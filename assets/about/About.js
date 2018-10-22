import React, { Component } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import MeetUsBlock from "./MeetUsBlock";
import BlackBlock from "./BlackBlock";
import ParalaxBlock from "./ParalaxBlock";
import ArticlesBlock from "./ArticlesBlock";

import Seo from "../components/seo/Seo";

import { ClipLoader } from 'react-spinners';

class About extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: []
        }
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/seo/about';
        fetch(url)
            .then(response => response.json())
            .then(data =>this.setState({seo: data}))
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
                <Seo seo={this.state.seo}/>
                { loading ?
                    <div>
                        <Breadcrumbs seo={this.state.seo}/>
                        <MeetUsBlock/>
                        <BlackBlock/>
                        <ParalaxBlock/>
                        {/*<ArticlesBlock/>*/}
                    </div>
                    : ""
                }

            </React.Fragment>
        );
    }
}

export default About;