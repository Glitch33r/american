import React, { Component } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { NavLink } from "react-router-dom";
import  axios  from 'axios'

import Seo from "../../components/seo/Seo";

import { ClipLoader } from 'react-spinners';

class Careers extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],
            firstBlock: [],
            secondBlock: [],
            firstList: [],
            secondList: [],
            thirdList: [],
            fourthList: []

        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/';

        axios.get(url + "seo/careers")
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));
        axios.get(url + "page/offers/careers/first")
            .then(response => response.data)
            .then(data =>this.setState({firstBlock: data}));
        axios.get(url + "page/offers/careers/second")
            .then(response => response.data)
            .then(data =>this.setState({secondBlock: data}));
        axios.get(url + "page/offers/careers/first-list")
            .then(response => response.data)
            .then(data =>this.setState({firstList: data}));
        axios.get(url + "page/offers/careers/second-list")
            .then(response => response.data)
            .then(data =>this.setState({secondList: data}));
        axios.get(url + "page/offers/careers/third-list")
            .then(response => response.data)
            .then(data =>this.setState({thirdList: data}));
        axios.get(url + "page/offers/careers/fourth-list")
            .then(response => response.data)
            .then(data =>this.setState({fourthList: data}));
    }


    render() {
        let loading = true;
        if( this.state.seo.length == 0 )  {
            // if( this.state.seo.length == 0 || this.state.contactBlock.length == 0 )  {
            loading = false;
        }

        return (

            <React.Fragment>
                <div className={ loading ? "loading-success sweet-loading" : 'load sweet-loading' }>
                    <ClipLoader
                        sizeUnit={ "px" }
                        size={ 150 }
                        color={ '#123abc' }
                        loading={ this.state.loading }
                    />
                </div>

                { loading ? <div>
                    <Breadcrumbs seo={ this.state.seo }/>

                    <section className="content-wrap">
                        <section className="team-block">

                            { this.state.firstBlock.map((item, index) =>

                                <div className="team-block__left" key={index} >
                                    <h2 className="team-block__left_title">
                                        { item.first_blc_title }
                                        {/*Company overview*/}
                                        </h2>
                                    <h3 className="team-block__left_subtitle">
                                        { item.first_blc_sub_title }
                                        {/*Grand USA Transport is a small, well managed, aggressively growing family owned, and established business. Our fleet is comprised of 30 trucks and expanding fast.*/}
                                        </h3>
                                    <p className="team-block__left_desc desc--margin">
                                        { item.first_blc_description }
                                        {/*Equipment: Our Fleet, Our Iron Horses, Our Calvary.*/}
                                        {/*To empower our drivers to do what they need to do, we provide them top of the line equipment, 2016-2018 Freightliners and Volvos. All trucks equipped with inverters, microwave, refrigerator. The fleet keeps our drivers safe and rolling, perpetually increasing their revenue enabling us Grand USA Transport, as a company to expand, and perpetuate our future vision, vastly increase our revenue, enabling us to realize our further expansion into the future. Our trucks are maintained on premises at our company-owned facility.*/}
                                        {/*Our Drivers. Our infantry. Our boots on the ground. Our expanding family.*/}
                                        {/*We VALUE and EMBRACE our drivers as part of our relationship oriented growing family. If you are ready to grow with us and become part of our intimate family, rather than a just driver number.*/}
                                        {/*Ensuring our future by building your future. Let’s build our future together! Call us today.*/}
                                    </p>
                                    <NavLink className="block__button block__button--red" exact to="/offers/application-form" >Click to apply</NavLink>
                                </div>

                            ) }

                            <div className="team-block__right">
                                <div className="team-block__right_img"
                                     style={{background: 'url(/bundles/frontend/images/IMG_02911-top-blue.jpg) center center no-repeat', backgroundSize: 'contain'}}/>
                            </div>
                        </section>
                    </section>


                    <React.Fragment>
                        <section className="block black-block">
                            <div className="block__wrap">
                            {
                                this.state.firstList.map((item, index) =>
                                    <React.Fragment>
                                {
                                    index < this.state.firstList.length - 1 ?
                                        <div className="block__content aos-init" data-aos="fade-up" key={index}  >
                                            <h2 className="block__title"  >
                                                { item.listMainTitle }
                                                {/*REASONS TO BECOME*/}
                                                {/*PART OF GRAND USA*/}
                                                {/*TRANSPORT*/}
                                            </h2>
                                            <h3 className="block__subtitle aos-init" data-aos="fade-down">
                                                { item.listName }
                                                {/*BENEFITS & PAY*/}
                                                </h3>

                                            <ul className="block__list block__list--alt block__list--flex">
                                                { this.state.firstList[this.state.firstList.length - 1].map((item, index) =>
                                                    <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down" key={index}>
                                                        <span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">
                                                            { item.title }
                                                            {/*Great team environment*/}
                                                        </span>
                                                    </li>
                                                ) }
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*High weekly milage (up to 6500 miles)*/}
                                                        {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*High per mile pay*/}
                                                        {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Trucks governed at 72 miles/hr.*/}
                                                        {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Dead head miles fully paid*/}
                                                        {/*</span>*/}
                                                    {/*</li>                            <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Salary wired every friday*/}
                                                        {/*</span>*/}
                                                    {/*</li>                            <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Safety bonus*/}
                                                        {/*</span>*/}
                                                    {/*</li>                            <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Referral bonuses*/}
                                                        {/*</span>*/}
                                                    {/*</li>                            <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Family friendly*/}
                                                        {/*</span>*/}
                                                    {/*</li>                            <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Pet friendly*/}
                                                        {/*</span>*/}
                                                    {/*</li>                            <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*New trucks and tractors (volvo & freightliner 2016-2018)*/}
                                                        {/*</span>*/}
                                                    {/*</li>                            <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*On job accident insurance*/}
                                                        {/*</span>*/}
                                                    {/*</li>                            <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Detention, loading/unloading pay*/}
                                                        {/*</span>*/}
                                                    {/*</li>                           <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Scheduled home time*/}
                                                        {/*</span>*/}
                                                    {/*</li>*/}

                                            </ul>
                                        </div>
                                        : ""

                                }
                                    </React.Fragment>
                                )
                            }
                                        <div className="block__right block__right--careers">

                                            {this.state.secondList.map((item, index) =>

                                                <React.Fragment>
                                                    {
                                                        index < this.state.firstList.length - 1 ?

                                                        <React.Fragment>

                                                                <h3 className="block__subtitle aos-init" data-aos="fade-down" key={index}>
                                                                    { item.listName2 }
                                                                    {/*EXPERIENCED DRIVER REQUIREMENTS 3YRS.+*/}
                                                                </h3>
                                                                <ul className="block__list block__list--alt block__list--flex">
                                                                    { this.state.secondList[this.state.secondList.length - 1].map((item, index) =>
                                                                    <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down" key={{index}}>
                                                                            <span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">
                                                                                { item.title }
                                                                                {/*Min 3 years class a experience*/}
                                                                            </span>
                                                                    </li>
                                                                    )}
                                                                </ul>

                                                        </React.Fragment>
                                                : ""
                                            }

                                                </React.Fragment>

                                            )}
                                                {/*<ul className="block__list block__list--alt block__list--flex">*/}
                                                    {/*/!*{ this.props.blackBlock[this.props.blackBlock.length - 1].map((item, index) =>*!/*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                                    {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                                        {/*Min 3 years class a experience*/}
                                                                    {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                            {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                                {/*Excellent mvr and clean record*/}
                                                            {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                            {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                                {/*Must pass pre-employment tests (drug, alcohol)*/}
                                                            {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                            {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                                {/*Trackable employment history*/}
                                                            {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                            {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                                {/*Fluent english*/}
                                                            {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                            {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                                {/*Reefer experience*/}
                                                            {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                            {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                                {/*Experience in handling shippers/receivers (high-value loads)*/}
                                                            {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                            {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                                {/*"fluent in use of technology" (smartphones, electronic bol/s)*/}
                                                            {/*</span>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                            {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                                {/*Ability to communicate with dispatcher efficiently*/}
                                                            {/*</span>*/}
                                                    {/*</li>*/}
                                                {/*</ul>*/}

                                            {this.state.thirdList.map((item, index) =>

                                                <React.Fragment>
                                                    {
                                                        index < this.state.firstList.length - 1 ?

                                                            <React.Fragment>

                                                                <h3 className="block__subtitle aos-init" data-aos="fade-down" key={index}>
                                                                    { item.listName3 }
                                                                    {/*EXPERIENCED DRIVER REQUIREMENTS 3YRS.+*/}
                                                                </h3>
                                                                <ul className="block__list block__list--alt block__list--flex">
                                                                    { this.state.thirdList[this.state.thirdList.length - 1].map((item, index) =>
                                                                        <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down" key={{index}}>
                                                                            <span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">
                                                                                { item.title }
                                                                                {/*Min 3 years class a experience*/}
                                                                            </span>
                                                                        </li>
                                                                    )}
                                                                </ul>

                                                            </React.Fragment>
                                                            : ""
                                                    }

                                                </React.Fragment>

                                            )}


                                            {/*<h3 className="block__subtitle aos-init" data-aos="fade-down">*/}
                                                {/*DRIVER REQUIREMENTS EXPERIENCE 1-3 YRS.*/}
                                            {/*</h3>*/}
                                            {/*<ul className="block__list block__list--alt block__list--flex">*/}
                                                {/*/!*{ this.props.blackBlock[this.props.blackBlock.length - 1].map((item, index) =>*!/*/}
                                                {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Able to work in team*/}
                                                        {/*</span>*/}
                                                {/*</li>*/}
                                                {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Clean record*/}
                                                        {/*</span>*/}
                                                {/*</li>*/}
                                                {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Must pass pre-employment tests (drug, alcohol)*/}
                                                        {/*</span>*/}
                                                {/*</li>*/}
                                                {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Reefer experience*/}
                                                        {/*</span>*/}
                                                {/*</li>*/}
                                            {/*</ul>*/}

                                            {this.state.fourthList.map((item, index) =>

                                                <React.Fragment>
                                                    {
                                                        index < this.state.firstList.length - 1 ?

                                                            <React.Fragment>

                                                                <h3 className="block__subtitle aos-init" data-aos="fade-down" key={index}>
                                                                    { item.listName4 }
                                                                    {/*EXPERIENCED DRIVER REQUIREMENTS 3YRS.+*/}
                                                                </h3>
                                                                <ul className="block__list block__list--alt block__list--flex">
                                                                    { this.state.fourthList[this.state.fourthList.length - 1].map((item, index) =>
                                                                        <li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down" key={{index}}>
                                                                            <span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">
                                                                                { item.title }
                                                                                {/*Min 3 years class a experience*/}
                                                                            </span>
                                                                        </li>
                                                                    )}
                                                                </ul>

                                                            </React.Fragment>
                                                            : ""
                                                    }

                                                </React.Fragment>

                                            )}


                                            {/*<h3 className="block__subtitle aos-init" data-aos="fade-down">*/}
                                                {/*ROOKIE DRIVER REQUIREMENTS*/}
                                            {/*</h3>*/}
                                            {/*<ul className="block__list block__list--alt block__list--flex">*/}
                                                {/*/!*{ this.props.blackBlock[this.props.blackBlock.length - 1].map((item, index) =>*!/*/}
                                                {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Can do attitude*/}
                                                        {/*</span>*/}
                                                {/*</li>*/}
                                                {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Eagerness to learn*/}
                                                        {/*</span>*/}
                                                {/*</li>*/}
                                                {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Fixed weekly rates (will be upgraded to full pay/ per mile pay within 2-5 trips)*/}
                                                        {/*</span>*/}
                                                {/*</li>*/}
                                                {/*<li className="block__list-item block__list-item--alt aos-init" data-aos="fade-down">*/}
                                                        {/*<span className="block__list-link block__list-link--none-hover block__list-link--about block__list-link--alt">*/}
                                                            {/*Must pass pre-employment tests (drug, alcohol)*/}
                                                        {/*</span>*/}
                                                {/*</li>*/}
                                            {/*</ul>*/}
                                        </div>


                            </div>
                        </section>

                        <section className="block red-block">
                            <div className="block__wrap block__wrap--careers">
                                {this.state.secondBlock.map((item, index) =>

                                        <div className="block__content block__content--w65 block__content--careers" key={index}>
                                            <h3 className="block__subtitle block__subtitle--careers ">
                                                { item.second_blc_description }
                                                {/*We are based out of philadelphia, pa. We do not have preferences where you live. You must be available to come in person to philadelphia for interview. Skype/face time/whatsapp interview options available*/}
                                            </h3>
                                        </div>
                                    )
                                }
                                <div className="block__img block__img--careers block__img--track block__img--track-careers"></div>
                            </div>
                        </section>
                    </React.Fragment>

                </div> : "" }


            </React.Fragment>
        );
    }
}

export default Careers;