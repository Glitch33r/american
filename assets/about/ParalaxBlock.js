
import React, { Component } from "react";

class ParalaxBlock extends Component {
    render() {
        return (
            <React.Fragment>
            {/*<section className="block paralax-block paralax-block--about">*/}
                {/*<div className="paralax-block-about">*/}
                    {/*<h2 className="paralax-block-about__title paralax-block-about__title--red">Our History. Growth via Vision </h2>*/}
                    {/*<h3 className="block__subtitle">It’s simple. You cannot know where you are going without having a point of origin as a*/}
                        {/*reference. This philosophy is not only applicable to people, but to businesses as well.*/}
                    {/*</h3>*/}
                    {/*<p className="block__desc">Grand USA Transport was founded 7 years ago with 2 Trucks and 2 Drivers. The 2 Drivers are the 2 founding partners. Our 3rd visionary partnerjoined the company shortly after inception. Their simple belief was then as it remains now ”Follow your dreams, create their reality with no limitations”. The dream was to create a company that would experience constructive and exponential continuous growth. It is now mid 2018, and we are holding assets totaling 30 trucks. Our fleet consist of 2016-2019 Freightliner Cascadias and Volvos, with 10 additional 2019 Freightliners on order. We anticipate a fleet of 50 units within the next 8-12 months and 100 within the next 2 calendar years. Belief, drive and vision combine can make dreams reality. We have many more dreams and the best is yet to come. To becontinued. Always Forward.</p>*/}

                {/*</div>*/}
            {/*</section>*/}

            <section className="block red-block">


                <div className="block__wrap" >
                    <div className="block__content block__content--w65" >
                        <h1 className="block__title">Our History. <br /> Growth via Vision</h1>
                        <h3 className="block__subtitle">It’s simple. You cannot know where you are going without having a point of origin as a
                            reference. This philosophy is not only applicable to people, but to businesses as well.</h3>
                        <p className="block__desc">Grand USA Transport was founded 7 years ago with 2 Trucks and 2 Drivers. The 2 Drivers are the 2 founding partners. Our 3rd visionary partnerjoined the company shortly after inception. Their simple belief was then as it remains now ”Follow your dreams, create their reality with no limitations”. The dream was to create a company that would experience constructive and exponential continuous growth. It is now mid 2018, and we are holding assets totaling 30 trucks. Our fleet consist of 2016-2019 Freightliner Cascadias and Volvos, with 10 additional 2019 Freightliners on order. We anticipate a fleet of 50 units within the next 8-12 months and 100 within the next 2 calendar years. Belief, drive and vision combine can make dreams reality. We have many more dreams and the best is yet to come. To becontinued. Always Forward.</p>

                    </div>
                    <div className="block__img block__img--track"></div>
                </div>
            </section>

            </React.Fragment>
        );
    }
}

export default ParalaxBlock;