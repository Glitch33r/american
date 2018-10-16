import React, { Component } from "react";

class ParalaxBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block paralax-block">
                    <div className="paralax-block__content">
                        <h2 className="block__title">Our deliveries are timely </h2>
                        <p className="block__desc">We absolutely create through explicit time management of our fleet the most precise routing for your goods to arrive at their ultimate destination on time, every time, through the entirety of theirjourney. Proper temperature control is always maintained and monitored within the confines of our 30 reefer trailers. </p>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ParalaxBlock;