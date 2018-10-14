import React, { Component } from "react";
import HomeSlider from "../components/slider/HomeSlider";
import ImageBlock from "./ImageBlock";
import BlackBlock from "./BlackBlock";
import ParalaxBlock from "./ParalaxBlock";
import ArticlesBlock from "./ArticlesBlock";
import ServiseBlock from "./ServiseBlock";
import ContactBlock from "./ContactBlock";

class Home extends Component {



    render() {
        return (
            <React.Fragment>
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