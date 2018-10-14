import React, { Component } from "react";

class ArticlesBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block block-news">
                    <div className="block__wrap">
                        <div className="block-news__content">
                            <div className="block-news__item">
                                <h2 className="block__title block__title--dark-gray">WHO WE ARE</h2>
                                <h3 className="block__subtitle"><a className="block__subtitle-link" href="#">WHEN YOU
                                    PURCHASE FROM US, YOU CAN BE SURE THAT YOU GET THE BEST SERVICE POSSIBLE. OUR JOB IS
                                    TO GIVE YOU WHAT YOU NEED – AND WE DO IT PERFECTLY.</a></h3>
                                <p className="block__desc block__desc--dark-gray">You can find service centers of our
                                    company all over the world – from the USA to Japan. There is no better and cheaper
                                    way to buy, sell, rent or repair a car than to use our services. If you have any
                                    questions concerning our job, our support team will be glad to answer them.</p><a
                                className="block__button block__button--red block__button--bottom-fix" href="#">READ
                                MORE</a>
                            </div>
                            <div className="block-news__item">
                                <h2 className="block__title block__title--dark-gray">WHY US?</h2>
                                <h3 className="block__subtitle"><a className="block__subtitle-link" href="#">WE CAN HELP
                                    YOU FIND ORIGINAL SPARE PARTS FOR YOUR CAR, NO MATTER WHAT AGE IT IS. WE PROVIDE CAR
                                    ENGINES</a></h3>
                                <p className="block__desc block__desc--dark-gray">We provide car engines, accessories
                                    and consumables of the highest quality from trusted worldwide-known
                                    manufacturers.</p><a
                                className="block__button block__button--red block__button--bottom-fix" href="#">READ
                                MORE</a>
                            </div>
                            <div className="block-news__item">
                                <h2 className="block__title block__title--dark-gray">WHAT WE DO</h2>
                                <h3 className="block__subtitle"><a className="block__subtitle-link" href="#">LOOKING FOR
                                    THE ORIGINAL SPARE PARTS FOR YOUR CAR CAN BE A REAL PROBLEM, ESPECIALLY IF YOUR RIDE
                                    IS A RARE OR OLD MODEL.</a></h3>
                                <p className="block__desc block__desc--dark-gray">We can find any detail for any car you
                                    can imagine quickly. Our company collaborates with thousands of collectors,
                                    warehouses and private workshops to obtain even the rarest automotive goods. We
                                    offer car parts for over 2000 of models. Learn more by talking to our
                                    representatives.Sell or buy cars easier than ever.</p><a
                                className="block__button block__button--red block__button--bottom-fix" href="#">READ
                                MORE</a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ArticlesBlock;