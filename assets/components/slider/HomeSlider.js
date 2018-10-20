import React, { Component } from "react";
import Slider from "react-slick";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class HomeSlider extends Component {

    constructor(props) {
        super(props);

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    componentDidMount() {
        // this.slider.onReInit();
    }


    render() {

        // this.next();

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            lazyLoad: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dotsClass: 'tns-nav',
            fade: true,
            // autoplay: true,
            // autoplaySpeed: 2500,

        };

        let loading = false;
        if( this.props.arrSlider.length === 0 )  {
            loading = true;
        }

        return (

            <React.Fragment>

            { loading ? '' : <Slider ref={c => (this.slider = c)} {...settings}>

                {/*<div className="home-slider slider">*/}

                {
                    this.props.arrSlider.map((item, index) =>
                        <div className="home-slider__item" key={ index }>

                            <div className="home-slider__item-wrap">
                                <img className="home-slider__img" src= { "/bundles/frontend/images/" + item.image }/>
                            </div>
                            <span className="home-slider__title">
                                    { ReactHtmlParser(item.title) }
                                <span className="home-slider__desc">
                                    { item.description }
                                    </span>
                                </span>
                        </div>
                    )
                }

            </Slider>
            }
            </React.Fragment>

        );
    }
}

export default HomeSlider;