import React, { Component } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

import  axios  from 'axios'

import Seo from "../components/seo/Seo";

import { ClipLoader } from 'react-spinners';

class Safety extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],


        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/';

        axios.get(url + "seo/drivers")
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));

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

                { loading ? <div>
                    <Breadcrumbs seo={this.state.seo}/>

                </div> : "" }
                <Seo seo={this.state.seo}/>
            </React.Fragment>
        );
    }
}

export default Safety;