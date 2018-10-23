import React, { Component } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class ArticlesBlock extends Component {




    render() {
        return (
            <React.Fragment>
                <section className="block block-news">
                    <div className="block__wrap">
                        <div>
                            <h2 className="block__title block__title--dark-gray">Trucks trailers</h2>
                            <h3 className="block__subtitle block__subtitle--red">Grand USA Transport LLC — Temperature Controlled Fleet, Always Cold. It’s all that we know.</h3>
                            <p className="block__desc block__desc--dark-gray block__desc--mb100">We live & breathe ”Reefer” transportation that we do. We understand climate control. Designed for durability related to sustainment, and shelf life extension of the products contained within.
                                We know that shipments of various goods deemed ”perishable” need to be handled meticulously, each differently, each with care. Grand USA Transport prides itself in the fact that not only do we comprehensively understand the specific needs of product that is perishable, we understand that tainted goods = worthless goods.
                                Our units are maintained to the highest standard in the industry, which guarantees the accuracy of the interior reefer climate is accurate to protect the cargo within from pick up to delivery. Our reefer trailers are continuously monitored throughout the span of their respective transport. No matter the product or temperature required, chilled, frozen, fresh.
                                We utilize trailers manufactured by Wabash & Utility. Our refrigeration units are manufactured by Carrier.

                            </p>
                        </div>
                    </div>

                </section>
            </React.Fragment>
        );
    }
}

export default ArticlesBlock;