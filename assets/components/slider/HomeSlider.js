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
                                                                 src="/bundles/frontend/images/slider001.jpg"/></div>
                    <span className="home-slider__title">Trucks and Trailer Equipment<span
                        className="home-slider__desc">Each unit of our fleet both trucks and trailers are continuously maintained to the highest levels of quality
and performance standards. All mechanical work on our trucks is performed in house, on premises
within the confines of a state of the art 16,000 Square Foot facility, by the most professionally trained
and certified group of preeminent mechanics that money can buy.
</span></span>
                </div>
                <div className="home-slider__item">
                    <div className="home-slider__item-wrap"><img className="home-slider__img"
                                                                 src="/bundles/frontend/images/slider002.jpg"/></div>
                    <span className="home-slider__title">Relationship with Our Drivers<span
                        className="home-slider__desc">We extend to our drivers both philosophically and pragmatically all that we hold true to ourselves as management. We offer an environment not only based on our own needs but more importantly their needs. Without them, there is no us.</span></span>
                </div>
                <div className="home-slider__item">
                    <div className="home-slider__item-wrap"><img className="home-slider__img"
                                                                 src="/bundles/frontend/images/slider003.jpg"/></div>
                    <span className="home-slider__title">We Are Family<span
                        className="home-slider__desc">Our drivers are our foundation our rock, our boots on the ground, our infantry. They are the engine that facilitates the means to achieve all dreams, possibilities, growth and ultimately ourjointly held achieved realities.
</span></span>
                </div>
                {/*</div>*/}
            </Slider>
        );
    }
}

export default HomeSlider;