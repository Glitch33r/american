import React, { Component } from "react";

class ArticlesBlock extends Component {
    render() {
        return (
            <section className="block block-news">
                <div className="block__wrap">
                    <div className="block-news__content">
                        <div className="block-news__item">
                            <h2 className="block__title block__title--dark-gray">LEADERSHIP</h2>
                            <h3 className="block__subtitle block__subtitle--botom10"><a className="block__subtitle-link"
                                                                                        href="#">OUR GOAL IS TO PROVIDE
                                OUR CLIENTS WITH PROFESSIONAL FREIGHT SERVICES THAT ADD VALUE TO THE OVERALL SUPPLY
                                CHAIN</a></h3>
                            <p className="block__desc block__desc--dark-gray">And assist our customers in the growth and
                                success of their business with mutually beneficial results. If you want a customized
                                solution, we deliver global coverage, managed costs, and reliable project continuity.
                                When choosing our company, you choose a long-lasting partner that will help you with
                                success of your business.</p><a
                            className="block__button block__button--red block__button--bottom-fix" href="#">READ
                            MORE</a>
                        </div>
                        <div className="block-news__item">
                            <h2 className="block__title block__title--dark-gray">HISTORY</h2>
                            <h3 className="block__subtitle block__subtitle--botom10"><a className="block__subtitle-link"
                                                                                        href="#">THE FOUNDERS OF THE
                                COMPANY PURCHASED THE FIRST 5 COACHES. 10 DRIVERS WERE EMPLOYED IN THE COMPANY.</a></h3>
                            <p className="block__desc block__desc--dark-gray">The company has expanded considerably,
                                fleet doubled. Implemented the first long-distance transportation. Restructured
                                providing and servicing activities, which was sent to her separation from primary and
                                target subsidies to passenger traffic from State and local budgets.</p><a
                            className="block__button block__button--red block__button--bottom-fix" href="#">READ
                            MORE</a>
                        </div>
                        <div className="block-news__item">
                            <h2 className="block__title block__title--dark-gray">CAREERS</h2>
                            <h3 className="block__subtitle block__subtitle--botom10"><a className="block__subtitle-link"
                                                                                        href="#">BUS
                                TRANSPORTATION-PROFILING DIRECTION OF OUR COMPANY. RATHER NARROW SPECIALIZATION.</a>
                            </h3>
                            <p className="block__desc block__desc--dark-gray">Allows you to focus on high quality
                                services. To each passenger we use individual approach. Not the least is the role of
                                professionalism of drivers and their vast practical experience in the field of
                                international transport. This is an obvious advantage over other carriers that carry
                                passenger traffic.</p><a
                            className="block__button block__button--red block__button--bottom-fix" href="#">READ
                            MORE</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ArticlesBlock;