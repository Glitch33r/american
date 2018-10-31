import React, { Component } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser';
import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { NavLink } from "react-router-dom";

class ArticlesBlock extends Component {




    render() {
        return (
            <React.Fragment>
                <section className="block block-news">
                    <div className="block__wrap">
                        <div className="block-news__content">
                    {
                        this.props.articlesBlock.map((item, index) =>
                            <div className="block-news__item" key={index}>
                                <h2 className="block__title block__title--dark-gray aos-init" data-aos="fade-down">{item.title}</h2>
                                <h3 className="block__subtitle"><a className="block__subtitle-link aos-init" data-aos="fade-down" href="#">{item.subTitle}</a></h3>
                                <p className="block__desc block__desc--dark-gray aos-init" data-aos="fade-right">{ ReactHtmlParser(item.description) }
                                </p>
                                <NavLink className="block__button block__button--red block__button--bottom-fix" exact to="/offers#body" >READ MORE</NavLink>
                            </div>
                        )
                    }
                        </div>
                    </div>

                </section>
            </React.Fragment>
        );
    }
}

export default ArticlesBlock;