import React, { Component } from "react";
import Slider from "react-slick";

class HomeSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dotsClass: 'tns-nav',
            fade: true,
            autoplay: true,
            autoplaySpeed: 2500
        };
        return (
            <Slider {...settings}>
                {/*<div className="home-slider slider">*/}
                <div className="home-slider__item">
                    <div className="home-slider__item-wrap"><img className="home-slider__img"
                                                                 src="/bundles/frontend/images/slider01.jpg"/></div>
                    <span className="home-slider__title">THE COMPANY YOU CAN TRUST<span
                        className="home-slider__desc">Sell your old car profitably. Due to our convenient marketplace structure you can sell your vehicle quickly. We have low commission and additional marketing tools for promotion of your lot.</span></span>
                </div>
                <div className="home-slider__item">
                    <div className="home-slider__item-wrap"><img className="home-slider__img"
                                                                 src="/bundles/frontend/images/slider02.jpg"/></div>
                    <span className="home-slider__title">REACHING OUT TO THE WORLD<span
                        className="home-slider__desc">An impressive choice of new and used cars with photos, full technical information, and quality proved by us; thousands of dealers all over the world – and you can choose the best option yourself.</span></span>
                </div>
                <div className="home-slider__item">
                    <div className="home-slider__item-wrap"><img className="home-slider__img"
                                                                 src="/bundles/frontend/images/slider03.jpg"/></div>
                    <span className="home-slider__title">WAREHOUSE DISTRIBUTION<span
                        className="home-slider__desc">Sell your old car profitably. Due to our convenient marketplace structure you can sell your vehicle quickly. We have low commission and additional marketing tools for promotion of your lot.</span></span>
                </div>
                {/*</div>*/}
            </Slider>
        );
    }
}

export default HomeSlider;