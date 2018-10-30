import React, { Component } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class ArticlesBlock extends Component {




    render() {
        return (
            <React.Fragment>
                <section className="block block-news">

                    { this.props.additional.map((item, index) =>

                    <div className="block__wrap" key={index}>
                        <div>
                            <h2 className="block__title block__title--dark-gray aos-init" data-aos="fade-down">{ item.second_blc_title }</h2>
                            <h3 className="block__subtitle block__subtitle--red aos-init" data-aos="fade-down">{ item.second_blc_sub_title }</h3>
                            <p className="block__desc block__desc--dark-gray block__desc--mb100 aos-init" data-aos="fade-down">
                                { item.second_blc_description }
                            </p>
                        </div>
                    </div>

                    ) }

                </section>
            </React.Fragment>
        );
    }
}

export default ArticlesBlock;