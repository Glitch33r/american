import React, { Component } from "react";

class BlackBlock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listName: ""
        }

    }

    componentDidMount() {

    }

    render() {
        return (
            <section className="block black-block ">
                <div className="block__wrap">
                    <div className="block__content">
                        <h2 className="block__title">Driver perks</h2>
                        <ul className="block__list">
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Salary wired every Friday (required full docs submission)
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    High weekly mileage (up to 6.500 per team)
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Generous pay/mile
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Multi—run stops ~ paid per stop
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Paid detention time
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Paid layover time
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Flexible home time
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Equipment (2016-2019 Freighﬂiner Cascadia & Volvo)
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Additional home time (granted ifrequested in advance)
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    On the job accident/occupational insurance
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Equipment maintenance ~ performed entirely on our premises
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Generous vacation time
                                </a>
                            </li>
                            <li className="block__list-item">
                                <a className="block__list-link block__list-link--alter-hover" href="#">
                                    Rotating driver performance bonus
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="block__right">
                        <h2 className="block__title">Driver vacation</h2>
                        <h3 className="block__subtitle block__subtitle--marginb0">Grand USA Transport, LLC. Believes its’ vacation package to be among the most generous in the business. </h3>
                        <p className="block__desc block__desc--small-margin">All vacation request must be submitted minimum 3 weeks in advance for up to 2 week vacation, 1 month for 3-4 weeks vacation. Our vacation plan is as follows:</p>
                        <ul className="block__list">
                            <li className="block__list-item"><a
                                className="block__list-link" href="#">1 year/ 1 week</a>
                            </li>
                            <li className="block__list-item"><a
                                className="block__list-link" href="#">2 years/ 10 day</a>
                            </li>
                            <li className="block__list-item"><a
                                className="block__list-link" href="#">3 years/ 2 weeks</a>
                            </li>
                            <li className="block__list-item"><a
                                className="block__list-link" href="#">5 years/ 3 weeks</a>
                            </li>
                            <li className="block__list-item"><a
                                className="block__list-link" href="#">10 years/ 4 weeks</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlackBlock;