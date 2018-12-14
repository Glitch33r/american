import React, { Component } from "react";
import Slider from "react-slick";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import LazyResponsiveImage from 'react-lazy-responsive-image';
import "lazysizes";

class HomeSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    componentWillMount() {
        this.setState({loading: false});
    }

    componentWillUnmount() {
        // this.setState({loading: true});
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

        let loading = true;

        // lazysizes.init();

        // setTimeout(function () {
        //     loading = false;
        //     console.log(loading);
        // },5000);
        // console.log(this.state.loading);
        // if( this.props.arrSlider.length === 0 )  {
        //     loading = false;
        //
        // }
        // console.log(this.props.arrSlider.length);
        // let last = this.props.arrSlider.length - 1;



        return (

            <React.Fragment>

            { this.state.loading ? '' : <Slider ref={c => (this.slider = c)} {...settings}>

                {/*<div className="home-slider slider">*/}

                {
                    this.props.arrSlider.map((item, index) =>

                        <div className="home-slider__item" key={ index }>

                            <div className="home-slider__item-wrap">
                                {/*<img className="home-slider__img" src= { "/bundles/frontend/images/" + item.image }*/}

                                {/*/>*/}
                                {/*{ console.log(item.image)}*/}
                                {/*<LazyResponsiveImage*/}
                                    {/*src = { "/uploads/images/slider/" + item.image }*/}
                                    {/*className = "home-slider__img"*/}
                                    {/*sources ={{*/}
                                        {/*small: '/uploads/images/slider/sl-520/' + item.image520,*/}
                                        {/*medium:  '/uploads/images/slider/sl-960/' + item.image960,*/}
                                        {/*// large:  "/bundles/frontend/images/" + item.image,*/}
                                    {/*}}*/}
                                    {/*breakpoints={{*/}
                                        {/*small: 600,*/}
                                        {/*medium: 1024,*/}
                                        {/*// large: 1200,*/}
                                    {/*}}*/}
                                {/*/>*/}
                                <img
                                    data-sizes="auto"
                                    data-srcset={
                                        "/uploads/images/slider/sl-520/" + item.image520 + " 520w, " +
                                        "/uploads/images/slider/sl-960/" + item.image960 + " 960w, " +
                                        "/uploads/images/slider/" + item.image + " 1224w"
                                    }
                                    // data-src= { "medium" }
                                    className="lazyload home-slider__img" />

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