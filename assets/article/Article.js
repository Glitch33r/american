import React, { Component } from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

import  axios  from 'axios'

import Seo from "../components/seo/Seo";

import { ClipLoader } from 'react-spinners';
import ReactHtmlParser from "react-html-parser";

class Article extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],
            article: [],
        }
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1';
        axios.get(url + '/seo/corporate-philosophy')
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));
        axios.get(url + '/page/corp-philosophy/additional')
            .then(response => response.data)
            .then(data =>this.setState({article: data}));

        // axios.get('/api/v1/page/corp-philosophy/white')
        //     .then(response => this.setState({whiteBlock: response.data}));
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
                <Seo seo={this.state.seo}/>
                { loading ?
                    <React.Fragment>
                        {
                            this.state.article.map((item, index) =>
                                <div key={index}>
                                    <Breadcrumbs undercategory={ item.title } seo={ this.state.seo }/>
                                    <section className="content-wrap" >
                                        <h3 className="team-block__left_subtitle">{ item.title }</h3>
                                        <div className="team-block__left_desc">
                                            { ReactHtmlParser(item.description) }
                                        </div>
                                    </section>
                                </div>
                            )
                        }
                    </React.Fragment>
                    : ""
                }

            </React.Fragment>
        );
    }
}

export default Article;