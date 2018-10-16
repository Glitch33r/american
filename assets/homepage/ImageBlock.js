import React, { Component } from "react";

class ImageBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block red-block">
                    <div className="block__wrap">
                        <div className="block__content block__content--w65">
                            <h1 className="block__title">Driver’s Statement</h1>
                            <h3 className="block__subtitle">”Ensuring Our Future by Building Your Future”
                                Grand USA Transport — A Relatively Simple and Firm Corporate Philosophy.</h3>
                            <p className="block__desc">Since our humble beginnings 7 years ago, through the present, our corporate mindset has been and remains grounded in firm basic principles of dedication, belief, hard—work, diligence, tenacity, and no limitations. We hold ourselves accountable, as we expect to hold our drivers accountable, not only to our ethics, morals, principies, but to their own.</p><a className="block__button" href="#">READ
                            MORE</a>
                        </div>
                        <div className="block__img block__img--track"></div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ImageBlock;