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
                                <h3 className="team-block__left_subtitle">Botanicals</h3>
                                <div className="team-block__left_desc">
                                    Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure. <br/>
                                Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.
                                </div>
                            </section>
                            : ""
                        }


                        { this.state.page == "dairy" ?
                            <section className="content-wrap" >
                                <h3 className="team-block__left_subtitle">DAIRY</h3>
                                <div className="team-block__left_desc">
                                    Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure. <br/>
                                    Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.
                                </div>
                            </section>
                            : ""
                        }

                        { this.state.page == "produce" ?
                            <section className="content-wrap" >
                                <h3 className="team-block__left_subtitle">PRODUCE</h3>
                                <div className="team-block__left_desc">
                                    Regardless of the type of flora, or plant, ranging from Christmas Tree to the most delicate long stem rose, annual or perennial, from greenhouse or farm to final destination, 52 weeks per year, your botanical products transit is safe and secure. <br/>
                                    Protecting your perishable product requires specialized temperature and constantly monitored and regulated climate control. Owning a dedicated Reefer fleet allows Grand USA Transport the constant ability to control, monitor and manage the suitable environment for your botanical cargo to thrive, while maintaining the highest of quality standards of sustainability for the duration of their entire period of the transport process.
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