
import React, { Component } from "react";

class BlackBlock extends Component {
    render() {
        return (
            <section className="block black-block">
                <div className="block__wrap">
                    <div className="block__content">
                        <h2 className="block__title">OUR VALUES</h2>
                        <div className="block__number" data-num="1">
                            <h3 className="block__subtitle block__subtitle--marginb0"><a
                                className="block__subtitle_link" href="#">OUR CARRIER</a></h3>
                            <p className="block__desc block__desc--small-margin">Will take you to your destination in
                                the shortest possible time, with maximum speed and convenience.</p>
                        </div>
                        <div className="block__number" data-num="2">
                            <h3 className="block__subtitle block__subtitle--marginb0"><a
                                className="block__subtitle_link" href="#">OUR COMPANY</a></h3>
                            <p className="block__desc block__desc--small-margin">Provides qualified staff. Buses in our
                                fleet are modern and are constantly monitored by engineers.</p>
                        </div>
                        <div className="block__number" data-num="3">
                            <h3 className="block__subtitle block__subtitle--marginb0"><a
                                className="block__subtitle_link" href="#">RATHER NARROW SPECIALIZATION</a></h3>
                            <p className="block__desc block__desc--small-margin">Allows you to focus on high quality
                                services. To each passenger we use individual approach.</p>
                        </div>
                    </div>
                    <div className="block__right">
                        <h2 className="block__title block__title--with">OUR PRICES</h2>
                        <h3 className="block__subtitle block__subtitle--marginb0">THE COMPANY OCCUPIES A LEADING
                            POSITION IN THE FIELD OF ROAD TRANSPORT.</h3>
                        <p className="block__desc block__desc--small-margin">Professionalism, quality, efficiency,
                            responsibility and high level of comfort and service is the basic concept of the company.
                            Together with the introduction of advanced technologies business, changing and image and
                            corporate communication strategy of the company.</p>
                        <ul className="block__list">
                            <li className="block__list-item"><a
                                className="block__list-link block__list-link--alter-hover" href="#">CONVEYING YOUR
                                COMPANY'S EMPLOYEES</a></li>
                            <li className="block__list-item"><a
                                className="block__list-link block__list-link--alter-hover" href="#">RENTAL CARS,
                                MINIBUSES AND BUSES WITH DRIVER</a></li>
                            <li className="block__list-item"><a
                                className="block__list-link block__list-link--alter-hover" href="#">TRANSFERS
                                (MEETING/SEEING-OFF AT AIRPORTS)</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlackBlock;