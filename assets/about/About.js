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
        delete this.state.seo;
        let url = 'http://american/app_dev.php/api/seo/about';
        fetch(url)
            .then(response => response.json())
            .then(data =>this.setState({seo: JSON.parse(data)}))
    }

    render() {
        let load = "load sweet-loading";

        if(this.state.seo.length !== 0){
            load = 'loading-success sweet-loading';
        }
        // if(this.state.seo.length == 0){
        //     // console.log(this.state.data.length);
        //     return (
        //         <div className='sweet-loading'>
        //             <ClipLoader
        //                 sizeUnit={"px"}
        //                 size={150}
        //                 color={'#123abc'}
        //                 loading={this.state.loading}
        //             />
        //         </div>
        //     );
        // }

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
                <Breadcrumbs seo={this.state.seo}/>
                <MeetUsBlock/>
                <BlackBlock/>
                <ParalaxBlock/>
                <ArticlesBlock/>
            </React.Fragment>
        );
    }
}

export default About;