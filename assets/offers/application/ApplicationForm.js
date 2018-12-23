import React, { Component } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import  axios  from 'axios'

import Seo from "../../components/seo/Seo";

import { ClipLoader } from 'react-spinners';

class Contscts extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],
            contactBlock: [],


        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/';

        axios.get(url + "seo/contacts")
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));
        // axios.get(url + "page/contacts")
        //     .then(response => response.data)
        //     .then(data =>this.setState({contactBlock: data}));
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

                    <div>dsfdsfsdsdf</div>


                </div> : "" }


            </React.Fragment>
        );
    }
}

export default Contscts;