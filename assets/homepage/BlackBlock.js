import React, { Component } from "react";

class BlackBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block black-block">
                    <div className="block__wrap">
                        <div className="block__content">
                            <h2 className="block__title block__title--with">KEYS TO SUCCESS</h2>
                            <h3 className="block__subtitle">WE CAN HELP YOU FIND ORIGINAL SPARE PARTS FOR YOUR CAR, NO
                                MATTER WHAT AGE IT IS. WE PROVIDE CAR ENGINES, ACCESSORIES AND CONSUMABLES OF THE
                                HIGHEST QUALITY FROM TRUSTED WORLDWIDE-KNOWN MANUFACTURERS.</h3>
                            <p className="block__desc block__desc--small-margin">If you have a problem, we'll quickly
                                and effectively eliminate the problem, perform all work connected with the repair of
                                your vehicle, efficiently and inexpensive. We are ready to provide you with a full range
                                of services for warranty and post-warranty maintenance and repair.</p><a
                            className="block__button block__button--red" href="#">READ MORE</a>
                        </div>
                        <div className="block__right">
                            <h2 className="block__title">COMPREHENSIVE SERVICES</h2>
                            <ul className="block__list">
                                <li className="block__list-item"><a className="block__list-link" href="#">TECHNOLOGY
                                    NEUTRALITY</a></li>
                                <li className="block__list-item"><a className="block__list-link" href="#">HOLISTIC
                                    REGULATORY REVIEW</a></li>
                                <li className="block__list-item"><a className="block__list-link" href="#">FACILITATE
                                    GLOBAL HARMONIZATION</a></li>
                                <li className="block__list-item"><a className="block__list-link" href="#">STABILITY OF
                                    THE RULE SET</a></li>
                                <li className="block__list-item"><a className="block__list-link"
                                                                    href="#">PREDICTABILITY</a></li>
                                <li className="block__list-item"><a className="block__list-link" href="#">REALISTIC
                                    BEHAVIORAL EXPECTATIONS</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default BlackBlock;