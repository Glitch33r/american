import React, { Component } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import MeetUsBlock from "./MeetUsBlock";
import BlackBlock from "./BlackBlock";
import ParalaxBlock from "./ParalaxBlock";
import ArticlesBlock from "./ArticlesBlock";




class About extends Component {

    constructor(props){
        super(props);



    }

    render() {
        return (
            <React.Fragment>

                    <Breadcrumbs/>
                    <MeetUsBlock/>
                    <BlackBlock/>
                    <ParalaxBlock/>
                    <ArticlesBlock/>
            </React.Fragment>
        );
    }
}

export default About;