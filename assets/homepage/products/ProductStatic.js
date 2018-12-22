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
        let url = 'http://' + this.props.domain + '/api/v1/seo/corporate-philosophy';
        axios.get(url)
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));
        // axios.get(url + "seo/home")
        //     .then(response => response.data)
        //     .then(data =>this.setState({seo: data}));


    }

    loadContent () {
        this.setState({load: 'loading-success sweet-loading'});
    }

    render() {
        let loading = false;
        if( this.state.seo.length != 0 )  {
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
                    <Breadcrumbs seo={ this.state.seo }/>

                        { this.state.page == "botanicals" ?
                            <section className="content-wrap" >
                                <h3 className="product-title">Botanicals</h3>
                                <div className="product">
                                    <div className="product__content">
                                        <p className="product__content_txt" >Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure.</p>
                                        <img className="product__content_img" src={'/bundles/frontend/images/botanicals.jpg'}/>
                                    </div>
                                    <div className="product__content">
                                        <img className="product__content_img" src={'/bundles/frontend/images/botanicals.jpg'}/>
                                        <p className="product__content_txt"> Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.</p>
                                    </div>
                                </div>
                            </section>
                            : ""
                        }


                        { this.state.page == "dairy" ?
                            <section className="content-wrap" >
                                <h3 className="product-title">Dairy</h3>
                                <div className="product">
                                    <div className="product__content">
                                        <div className="product__content_txt-wrap">
                                            <p className="product__content_txt" >
                                                Regardless if your products are Ice Cream or Gelato, Eggs or Milk, Butter, Milk, Cheese or Cream Cheese for that matter, it’s all dairy and all perishable. Dairy and perishables produce serious business and serious revenue for the entire chain.  The “cold chain” must remain interdependent, logistically fluid, and unbroken. The “Reefer” Transportation Trailer link in the “cold chain” remains the mobility link of the chain.
                                            </p>
                                            <p className="product__content_txt" >
                                                Grand USA Transport wants your business. We want to be your “go to” choice in refrigerated transportation. We offer top of the line temperature controlled equipment and technology combined with the best climate controlled technology in the business, a ton of experience, and providing to our customers service second to none.
                                            </p>
                                        </div>
                                        <img className="product__content_img" src={'/bundles/frontend/images/dairy.jpg'}/>
                                    </div>
                                    <div className="product__content">
                                        <img className="product__content_img" src={'/bundles/frontend/images/dairy2.jpg'}/>
                                        <div className="product__content_txt-wrap">
                                            <p className="product__content_txt">
                                                Your deliveries will be made timely, expeditiously, and your products delivered in absolute pristine condition.
                                            </p>
                                            <p className="product__content_txt">
                                                Our drivers do not just profess, but, actually know what they are doing. Action speaks louder than words alone.
                                            </p>
                                            <p className="product__content_txt">
                                                We make these offering to our existing customer base and future customers alike, with firm assuredness because, it’s cold, it’s cool and “Reefer” is the world that our company lives in. It’s all that we do!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            : ""
                        }

                        { this.state.page == "produce" ?
                            <section className="content-wrap" >
                                <h3 className="product-title">Produce</h3>
                                <div className="product">
                                    <div className="product__content">
                                        <p className="product__content_txt" >Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure.</p>
                                        <img className="product__content_img" src={'/bundles/frontend/images/produce.jpg'}/>
                                    </div>
                                    <div className="product__content">
                                        <img className="product__content_img" src={'/bundles/frontend/images/produce2.jpg'}/>
                                        <p className="product__content_txt"> Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.</p>
                                    </div>
                                </div>
                            </section>
                            : ""
                        }

                    { this.state.page == "seafood" ?
                        <section className="content-wrap" >
                            <h3 className="product-title">Seafood</h3>
                            <div className="product">
                                <div className="product__content">
                                    <p className="product__content_txt" >Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure.</p>
                                    <img className="product__content_img" src={'/bundles/frontend/images/seafood.jpg'}/>
                                </div>
                                <div className="product__content">
                                    <img className="product__content_img" src={'/bundles/frontend/images/seafood2.jpg'}/>
                                    <p className="product__content_txt"> Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.</p>
                                </div>
                            </div>
                        </section>
                        : ""
                    }

                    { this.state.page == "frozen%20meat" ?
                        <section className="content-wrap" >
                            <h3 className="product-title">Frozen meat</h3>
                            <div className="product">
                                <div className="product__content">
                                    <p className="product__content_txt" >Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure.</p>
                                    <img className="product__content_img" src={'/bundles/frontend/images/frozen-meat.jpg'}/>
                                </div>
                                <div className="product__content">
                                    <img className="product__content_img" src={'/bundles/frontend/images/frozen-meat.jpg'}/>
                                    <p className="product__content_txt"> Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.</p>
                                </div>
                            </div>
                        </section>
                        : ""
                    }

                    { this.state.page == "pharmaceuticals" ?
                        <section className="content-wrap" >
                            <h3 className="product-title">Pharmaceutical & Medical cargo
                                                     <br/>NON-HAZMAT</h3>
                            <div className="product">
                                <div className="product__content">
                                    <div className="product__content_txt-wrap">
                                        <p className="product__content_txt" >
                                            The idea of reliable transport of sensitive cargo is to ensure that any potential damage effecting the life cycle of the products being transported due to even the slightest  variance of temperature within a controlled trailer environment is neutralized. Stringent climatic control directly addresses and ameliorates three specific problematic issues:
                                        </p>
                                        <ul className="product__content_txt">
                                            <li>Lost revenue through reduction of yield.</li>
                                            <li>Maintains safety and integrity of products in transit.</li>
                                            <li>Offers peace of mind to the customer knowing that his goods when received at the shipper are in the identical condition that they were initially loaded at the shipper.</li>
                                        </ul>
                                    </div>
                                    <img className="product__content_img" src={'/bundles/frontend/images/produce2.jpg'}/>
                                </div>
                                <div className="product__content">
                                    <img className="product__content_img" src={'/bundles/frontend/images/produce2.jpg'}/>
                                    <div className="product__content_txt-wrap">
                                        <p className="product__content_txt">
                                            Grand USA Transport Reefer units provide our customers with the knowledge that their highly climatic sensitive pharmaceutical and medically related goods are being guarded by the most sophisticated highly acute electronic thermostatic sensor technology available. These climate controlled units are embedded into each and every one of our state of the art refrigerated trailer units. The life cycle of your products are continuously guarded 24/7 and delivered on time, and intact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        : ""
                    }



                </div> : "" }

                <Seo seo={this.state.seo}/>

            </React.Fragment>
        );
    }
}

export default ProductStatic;