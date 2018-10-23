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
                        <h2 className="block__title">CUSTOMER REEFER RELATIONS</h2>
                        <div className="block__number" data-num="1">
                            <div className={'block__number-wrap'}>
                                <h3 className="block__subtitle block__subtitle--marginb0"><a
                                    className="block__subtitle_link" href="#">Refrigerated trucking</a></h3>
                                <p className="block__desc block__desc--small-margin">When it comes to the world of refrigerated trucking, and transport, longshots are not worth the gamble. There is too much at stake, and not worth the risk. Precision is necessity. Science is golden!</p>
                            </div>
                        </div>
                        <div className="block__number" data-num="2">
                            <div className={'block__number-wrap'}>
                                <h3 className="block__subtitle block__subtitle--marginb0"><a
                                    className="block__subtitle_link" href="#">Grand USA Transport has mastered the art of the words ”Reefer Transport"</a></h3>
                                <p className="block__desc block__desc--small-margin">Cost matters, but it is not the only consideration. This is most definitely true regarding the need for refrigerated transport of perishable goods. Perhaps the need for reefer transport may indeed increase cost to our customer due to added energy consumptions but the tradeoff of cost-v-waste is well worth peace of mind.</p>
                            </div>
                        </div>
                        <div className="block__number" data-num="3">
                            <div className={'block__number-wrap'}>
                                <h3 className="block__subtitle block__subtitle--marginb0"><a
                                    className="block__subtitle_link" href="#">Our reputation, is a standard</a></h3>
                                <p className="block__desc block__desc--small-margin">Our reputation, is a standard that we as a company and as individual that stand behind our company will never compromise any less than the highest conceivable thus ensuring our customers with consistent confidence in our performance. </p>
                            </div>
                        </div>
                    </div>
                    <div className="block__right">
                        <h2 className="block__title">Cold is Cool</h2>
                        <h3 className="block__subtitle block__subtitle--marginb0">Our deliveries are timely. We absolutely create through explicit time management of our fleet the most precise routing for your goods to arrive at their ultimate destination on time, every time, through the entirety of theirjourney. </h3>
                        <p className="block__desc block__desc--small-margin">Proper temperature control is always maintained and monitored within the confines of our 30 reefer trailers. Our reefer trailers are constantly monitored for any fluctuation during the tenure of the transit of your products giving to our customers the knowledge that their goods are safe every step of the way. At Grand USA Transport your product is protected from climate related damage from the moment it is picked up through the moment it is delivered. Fresh In — Fresh Cut. That is why we only rely on top of the line equipment to ensure the product stays fresh and intact throughout its’ journey.</p>
                        <ul className="block__list">
                            <li className="block__list-item"><a
                                className="block__list-link block__list-link--alter-hover" href="#">Proper temperature control</a>
                            </li>
                            <li className="block__list-item"><a
                                className="block__list-link block__list-link--alter-hover" href="#">Our deliveries are timely.</a>
                            </li>
                            <li className="block__list-item"><a
                                className="block__list-link block__list-link--alter-hover" href="#">At Grand USA Transport your product is protected.</a>
                            </li>
                            <li className="block__list-item"><a
                                className="block__list-link block__list-link--alter-hover" href="#">The product stays fresh and intact throughout its’ journey.</a>
                            </li>
                            <li className="block__list-item"><a
                                className="block__list-link block__list-link--alter-hover" href="#">We are maintained to the highest levels of quality.</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlackBlock;