import React, { Component } from "react";

import  axios  from 'axios';

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import Seo from "../../components/seo/Seo";

import { ClipLoader } from 'react-spinners';
import ReactHtmlParser from "react-html-parser";

class ProductStatic extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],
            content: [],
            page: "",
            load: 'load sweet-loading',
        };
        this.loadContent = this.loadContent.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let lastPartUrl = window.location.pathname.split("/");
        let action = lastPartUrl[lastPartUrl.length-1];
        this.setState({page: action});
        let url = 'http://' + this.props.domain + '/api/v1/';
        axios.get(url + 'seo/' + action)
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));

        axios.get(url + "page/product/" + action )
            .then(response => response.data)
            .then(data =>this.setState({content: data}));



    }

    loadContent () {
        this.setState({load: 'loading-success sweet-loading'});
    }

    render() {
        let loading = true;
        if( this.state.content.length == 0 )  {
            loading = false;
        }

        console.log(this.state.content);

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
                    <Breadcrumbs seo={ this.state.seo }/>


                    <section className="content-wrap" >

                        <h3 className="product-title">
                            {
                                this.state.content[this.state.content.length-1].map((item, index) =>
                                    <span key={index}>
                                        { item.title }
                                    </span>
                                )
                            }
                        </h3>

                        <div className="product">
                            {
                                this.state.content.map((item, index) =>
                                    <React.Fragment>
                                        {
                                            index < this.state.content.length - 1 ?
                                                <div className="product__content" key={index}>
                                                    {
                                                        index > 0 && index & 1 ?
                                                            <React.Fragment>
                                                                <img className="product__content_img"
                                                                     src={'/uploads/images/product-images/' + item.image}/>
                                                                <div className="product__content_txt-wrap">
                                                                    { ReactHtmlParser(item.description) }
                                                                </div>
                                                            </React.Fragment>
                                                        :
                                                            <React.Fragment>
                                                                <div className="product__content_txt-wrap">
                                                                    { ReactHtmlParser(item.description) }
                                                                </div>
                                                                <img className="product__content_img"
                                                                     src={'/uploads/images/product-images/' + item.image}/>
                                                            </React.Fragment>
                                                    }

                                                </div>
                                                : ""
                                        }
                                    </React.Fragment>
                                )
                            }




                        </div>
                    </section>



                            {/*<section className="content-wrap" >*/}
                                {/*<h3 className="product-title">Botanicals</h3>*/}
                                {/*<div className="product">*/}
                                    {/*<div className="product__content">*/}
                                        {/*<p className="product__content_txt" >Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure.</p>*/}
                                        {/*<img className="product__content_img" src={'/bundles/frontend/images/botanicals.jpg'}/>*/}
                                    {/*</div>*/}
                                    {/*<div className="product__content">*/}
                                        {/*<img className="product__content_img" src={'/bundles/frontend/images/botanicals.jpg'}/>*/}
                                        {/*<p className="product__content_txt"> Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</section>*/}




                        {/*{ this.state.page == "produce" ?*/}
                            {/*<section className="content-wrap" >*/}
                                {/*<h3 className="product-title">Produce</h3>*/}
                                {/*<div className="product">*/}
                                    {/*<div className="product__content">*/}
                                        {/*<p className="product__content_txt" >Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure.</p>*/}
                                        {/*<img className="product__content_img" src={'/bundles/frontend/images/produce.jpg'}/>*/}
                                    {/*</div>*/}
                                    {/*<div className="product__content">*/}
                                        {/*<img className="product__content_img" src={'/bundles/frontend/images/produce2.jpg'}/>*/}
                                        {/*<p className="product__content_txt"> Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</section>*/}
                            {/*: ""*/}
                        {/*}*/}

                    {/*{ this.state.page == "seafood" ?*/}
                        {/*<section className="content-wrap" >*/}
                            {/*<h3 className="product-title">Seafood</h3>*/}
                            {/*<div className="product">*/}
                                {/*<div className="product__content">*/}
                                    {/*<p className="product__content_txt" >Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure.</p>*/}
                                    {/*<img className="product__content_img" src={'/bundles/frontend/images/seafood.jpg'}/>*/}
                                {/*</div>*/}
                                {/*<div className="product__content">*/}
                                    {/*<img className="product__content_img" src={'/bundles/frontend/images/seafood2.jpg'}/>*/}
                                    {/*<p className="product__content_txt"> Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</section>*/}
                        {/*: ""*/}
                    {/*}*/}

                    {/*{ this.state.page == "frozen%20meat" ?*/}
                        {/*<section className="content-wrap" >*/}
                            {/*<h3 className="product-title">Frozen meat</h3>*/}
                            {/*<div className="product">*/}
                                {/*<div className="product__content">*/}
                                    {/*<p className="product__content_txt" >Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure.</p>*/}
                                    {/*<img className="product__content_img" src={'/bundles/frontend/images/frozen-meat.jpg'}/>*/}
                                {/*</div>*/}
                                {/*<div className="product__content">*/}
                                    {/*<img className="product__content_img" src={'/bundles/frontend/images/frozen-meat.jpg'}/>*/}
                                    {/*<p className="product__content_txt"> Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</section>*/}
                        {/*: ""*/}
                    {/*}*/}

                    {/*{ this.state.page == "pharmaceuticals" ?*/}
                        {/*<section className="content-wrap" >*/}
                            {/*<h3 className="product-title">Pharmaceutical & Medical cargo*/}
                                                     {/*<br/>NON-HAZMAT</h3>*/}
                            {/*<div className="product">*/}
                                {/*<div className="product__content">*/}
                                    {/*<div className="product__content_txt-wrap">*/}
                                        {/*<p className="product__content_txt" >*/}
                                            {/*The idea of reliable transport of sensitive cargo is to ensure that any potential damage effecting the life cycle of the products being transported due to even the slightest  variance of temperature within a controlled trailer environment is neutralized. Stringent climatic control directly addresses and ameliorates three specific problematic issues:*/}
                                        {/*</p>*/}
                                        {/*<ul className="product__content_txt">*/}
                                            {/*<li>Lost revenue through reduction of yield.</li>*/}
                                            {/*<li>Maintains safety and integrity of products in transit.</li>*/}
                                            {/*<li>Offers peace of mind to the customer knowing that his goods when received at the shipper are in the identical condition that they were initially loaded at the shipper.</li>*/}
                                        {/*</ul>*/}
                                    {/*</div>*/}
                                    {/*<img className="product__content_img" src={'/bundles/frontend/images/produce2.jpg'}/>*/}
                                {/*</div>*/}
                                {/*<div className="product__content">*/}
                                    {/*<img className="product__content_img" src={'/bundles/frontend/images/produce2.jpg'}/>*/}
                                    {/*<div className="product__content_txt-wrap">*/}
                                        {/*<p className="product__content_txt">*/}
                                            {/*Grand USA Transport Reefer units provide our customers with the knowledge that their highly climatic sensitive pharmaceutical and medically related goods are being guarded by the most sophisticated highly acute electronic thermostatic sensor technology available. These climate controlled units are embedded into each and every one of our state of the art refrigerated trailer units. The life cycle of your products are continuously guarded 24/7 and delivered on time, and intact.*/}
                                        {/*</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</section>*/}
                        {/*: ""*/}
                    {/*}*/}



                </div> : "" }

                <Seo seo={this.state.seo}/>

            </React.Fragment>
        );
    }
}

export default ProductStatic;