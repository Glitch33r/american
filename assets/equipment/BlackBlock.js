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
                        <h2 className="block__title">Customer Reefer Relations </h2>
                        <h3 className="block__subtitle block__subtitle--marginb0">When it comes to the world of refrigerated trucking, and transport, longshots are not worth the gamble. There is too much at stake, and not worth the risk. Precision is necessity. Science is golden!</h3>
                        <p className="block__desc block__desc--small-margin">Cost matters, but it is not the only consideration. This is most definitely true regarding the need for refrigerated transport of perishable goods. Perhaps the need for reefer transport may indeed increase cost to our customer due to added energy consumptions but the tradeoff of cost-v-waste is well worth peace of mind. Perishable good that ”perish” have no value at all. Goods gone bad is most definitely ”not good". Grand USA Transport has mastered the art of the words ”Reefer Transport". Our reputation, is a standard that we as a company and as individual that stand behind our company will never compromise any less than the highest conceivable thus ensuring our customers with consistent confidence in our performance knowing that their perishable products will exit our trailers in the same condition that they were in when initially loaded into our reefer trailers, thus goods shall remain intact and pristine condition.</p>
                    </div>
                    <div className="block__right">
                        <h2 className="block__title">Cold is Cool</h2>
                        <h3 className="block__subtitle block__subtitle--marginb0">Our deliveries are timely. We absolutely create through explicit time management of our fleet the most precise routing for your goods to arrive at their ultimate destination on time, every time, through the entirety of theirjourney. </h3>
                        <p className="block__desc block__desc--small-margin">Proper temperature control is always maintained and monitored within the confines of our 30 reefer trailers. Our reefer trailers are constantly monitored for any fluctuation during the tenure of the transit of your products giving to our customers the knowledge that their goods are safe every step of the way. At Grand USA Transport your product is protected from climate related damage from the moment it is picked up through the moment it is delivered. Fresh In — Fresh Cut. That is why we only rely on top of the line equipment to ensure the product stays fresh and intact throughout its’ journey.</p>

                    </div>
                </div>
            </section>
        );
    }
}

export default BlackBlock;