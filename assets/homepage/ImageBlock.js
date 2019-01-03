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