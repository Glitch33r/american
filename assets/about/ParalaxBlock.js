
import React, { Component } from "react";

class ParalaxBlock extends Component {
    render() {
        return (
            <section className="block paralax-block paralax-block--about">
                <div className="paralax-block-about">
                    <h2 className="paralax-block-about__title">TESTIMONIALS</h2>
                    <div className="paralax-block-about__people-wrap">
                        <div className="paralax-block-about__people"><img className="paralax-block-about__people_img"
                                                                          src="/bundles/frontend/images/about/page2-img02.jpg"/>
                            <div className="paralax-block-about__people_desc"><a
                                className="paralax-block-about__people_link" href="#">A word of thanks to the firm that
                                deal with the transport for the girls. The journey last night took over 3.5 hours to
                                complete, but it was re-assuring to know that the girls were in a safe vehicle.</a>
                            </div>
                            <div className="paralax-block-about__people_name">ANETE PUGA, <span
                                className="paralax-block-about__people_work">client</span></div>
                        </div>
                        <div className="paralax-block-about__people"><img className="paralax-block-about__people_img"
                                                                          src="/bundles/frontend/images/about/page2-img03.jpg"/>
                            <div className="paralax-block-about__people_desc"><a
                                className="paralax-block-about__people_link" href="#">Thank you for transporting our
                                running team to Portsmouth yesterday, Wednesday 30th October. We wanted to let you know
                                that we were pleased with the arrangements.</a></div>
                            <div className="paralax-block-about__people_name">BRADLEY GROSH, <span
                                className="paralax-block-about__people_work">client</span></div>
                        </div>
                        <div className="paralax-block-about__people"><img className="paralax-block-about__people_img"
                                                                          src="/bundles/frontend/images/about/page2-img04.jpg"/>
                            <div className="paralax-block-about__people_desc"><a
                                className="paralax-block-about__people_link" href="#">Your service is often a source of
                                inspiration. It simplifies our lives and makes usually complicated processes easy</a>
                            </div>
                            <div className="paralax-block-about__people_name">DAYLE PETERS, <span
                                className="paralax-block-about__people_work">client</span></div>
                        </div>
                        <div className="paralax-block-about__people"><img className="paralax-block-about__people_img"
                                                                          src="/bundles/frontend/images/about/page2-img05.jpg"/>
                            <div className="paralax-block-about__people_desc"><a
                                className="paralax-block-about__people_link" href="#">Your service has really cut my
                                working time by 80%. It gives me goosebumps thinking about all that extra time I
                                have.</a></div>
                            <div className="paralax-block-about__people_name">
                                PATRICK POOL, <span className="paralax-block-about__people_work">client</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ParalaxBlock;