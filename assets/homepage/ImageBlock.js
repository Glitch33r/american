import React, { Component } from "react";

class ImageBlock extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAnimate: true,
            animateClass: 'absolute none',
            firstBlock: ''
        }
    }
    timer() {
        let animateShow = 'animated bounceInLeft';
        let animateHide = 'animated bounceOutRight';
        if(this.state.isAnimate){
            this.setState({
                isAnimate: !this.state.isAnimate,
                animateClass: animateShow,
                firstBlock: animateHide
            });
            // setTimeout(function () {
            //     this.setState({
            //         firstBlock: hideClass
            //     });
            // }, 1000)
        }
        else {
            this.setState({
                isAnimate: !this.state.isAnimate,
                animateClass: animateHide,
                firstBlock: animateShow
            });
            setTimeout(this.hide.bind(this), 1200)
        }
    }
    hide(){
        let hideClass = 'animated bounceOutRight none';
        if(this.state.isAnimate){
            this.setState({
                animateClass: hideClass
            });
        }

    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 15000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {





        return (
            <React.Fragment>
                <section className="block red-block">
                    {/*<svg id="successAnimation" className="animated" xmlns="http://www.w3.org/2000/svg" width="120"*/}
                         {/*height="120" viewBox="0 0 70 70">*/}
                        {/*<path id="successAnimationResult" fill="#D8D8D8"*/}
                              {/*d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"/>*/}
                        {/*<circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" stroke-width="2"*/}
                                {/*stroke-linecap="round" fill="transparent"/>*/}
                        {/*<polyline id="successAnimationCheck" stroke="#979797" stroke-width="2"*/}
                                  {/*points="23 34 34 43 47 27" fill="transparent"/>*/}
                    {/*</svg>*/}
                    <div className="block__wrap" >


                        {
                            this.props.imageBlock.map((item, index) =>
                                <React.Fragment>
                                    {
                                        index < this.props.imageBlock.length-1 ?
                                            <React.Fragment>
                                                {
                                                    index == 1 ?
                                                        <div key={ index } className={"block__content block__content--w65 absolute " + this.state.animateClass}>
                                                            <h1 className="block__title aos-init" data-aos="fade-down">{ item.title }</h1>
                                                            <h3 className="block__subtitle aos-init" data-aos="fade-down">{ item.subTitle }</h3>
                                                            <p className="block__desc aos-init" data-aos="fade-down">{ item.description }</p>
                                                        </div>
                                                        :
                                                        <div key={ index } className={"block__content block__content--w65 " + this.state.firstBlock}>
                                                            <h1 className="block__title aos-init" data-aos="fade-down">{ item.title }</h1>
                                                            <h3 className="block__subtitle aos-init" data-aos="fade-down">{ item.subTitle }</h3>
                                                            <p className="block__desc aos-init" data-aos="fade-down">{ item.description }</p>
                                                        </div>
                                                }
                                            </React.Fragment>

                                            : ""
                                    }
                                </React.Fragment>
                            )
                        }






                        <div className="block__img block__img--track"></div>
                    </div>



                </section>
            </React.Fragment>
        );
    }
}

export default ImageBlock;