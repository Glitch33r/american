import React, { Component } from "react";

class ImageBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block red-block">
                    <div className="block__wrap">
                        <div className="block__content block__content--w65">
                            <h1 className="block__title">OUR COMMITMENT</h1>
                            <h3 className="block__subtitle">THANKS FOR VISITING OUR WEBSITE! WE HAVE NUMEROUS LOYAL
                                CLIENTS ALL OVER THE GLOBE. THIS FACT PROVES THAT OUR COMPANY TAKES THE LEADING PLACE
                                AMONG THE COMPETITORS. SO DON'T WASTE YOUR TIME AND MONEY, LET US SOLVE YOUR
                                PROBLEMS!</h3>
                            <p className="block__desc">An impressive choice of new and used cars with photos, full
                                technical information, and quality proved by us; thousands of dealers all over the world
                                – and you can choose the best option yourself.</p><a className="block__button" href="#">READ
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