import React, { Component } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

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
                                <h2 className="block__title block__title--dark-gray">{item.title}</h2>
                                <h3 className="block__subtitle"><a className="block__subtitle-link" href="#">{item.subTitle}</a></h3>
                                <p className="block__desc block__desc--dark-gray">{ ReactHtmlParser(item.description) }
                                </p><a
                                className="block__button block__button--red block__button--bottom-fix" href="#">READ
                                MORE</a>
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