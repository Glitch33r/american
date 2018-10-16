import React, { Component } from "react";

class ArticlesBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block block-news">
                    <div className="block__wrap">
                        <div className="block-news__content">
                            <div className="block-news__item">
                                <h2 className="block__title block__title--dark-gray">Team bonus</h2>
                                <h3 className="block__subtitle"><a className="block__subtitle-link" href="#">Experienced drivers - $ 1250.00 - $ 5000.00</a></h3>
                                <p className="block__desc block__desc--dark-gray">A11 sign—on bonuses are relative to actual OTR Professional Experience.
                                    Sign-on bonus starts week #5.
                                    Amortized in equal monthly increments. Over 12 months.  Sign on bonus is pro—rated by mos. worked.
                                </p><a
                                className="block__button block__button--red block__button--bottom-fix" href="#">READ
                                MORE</a>
                            </div>
                            <div className="block-news__item">
                                <h2 className="block__title block__title--dark-gray">Safety bonus</h2>
                                <h3 className="block__subtitle"><a className="block__subtitle-link" href="#">Each driver to receive an additional $ 0.015/ mile. If all of the above pre—requisites have been achieved.</a></h3>
                                <p className="block__desc block__desc--dark-gray">Total Team mileage (48.000+) (practical dispatched mileage)
                                    Period of time: (60 days) <br/>
                                        No accidents;
                                        No log Violations;
                                        No moving Violations;
                                        No out of service Violations;
                                        No cargo claims;
                                        No weight Violations;
                                        No damages to the equipment.

                                </p><a
                                className="block__button block__button--red block__button--bottom-fix" href="#">READ
                                MORE</a>
                            </div>
                            <div className="block-news__item">
                                <h2 className="block__title block__title--dark-gray">Referall bonus</h2>
                                <h3 className="block__subtitle"><a className="block__subtitle-link" href="#">Any driver Who refers a new driver shall receive a bonus of $ 1, 200.00.</a></h3>
                                <p className="block__desc block__desc--dark-gray">This bonus shall begin on the 5th week of the new driver tenure. This bonus is to be paid in $ 100.00/m0. increments up to $1200.00. Total after 12 consecutive months.</p><a
                                className="block__button block__button--red block__button--bottom-fix" href="#">READ
                                MORE</a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ArticlesBlock;