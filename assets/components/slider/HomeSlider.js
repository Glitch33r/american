import React, { Component } from "react";
import Slider from "react-slick";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import LazyResponsiveImage from 'react-lazy-responsive-image';

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

        // let last = this.props.arrSlider.length - 1;

        console.log();

        return (

            <React.Fragment>

            { loading ? '' : <Slider ref={c => (this.slider = c)} {...settings}>

                {/*<div className="home-slider slider">*/}

                {
                    this.props.arrSlider.map((item, index) =>

                        <div className="home-slider__item" key={ index }>

                            <div className="home-slider__item-wrap">
                                {/*<img className="home-slider__img" src= { "/bundles/frontend/images/" + item.image }*/}

                                {/*/>*/}
                                <LazyResponsiveImage
                                    src = { "/bundles/frontend/images/" + item.image }
                                    className ="home-slider__img"
                                    sources ={{
                                        small: '/uploads/images/slider/sl-520/' + item.image520,
                                        medium:  '/uploads/images/slider/sl-960/' + item.image960,
                                        // large:  "/bundles/frontend/images/" + item.image,
                                    }}
                                    breakpoints={{
                                        small: 600,
                                        medium: 900,
                                        // large: 1200,
                                    }}
                                />
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