import React, { Component } from "react";

class ParalaxBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block paralax-block">
                    <div className="paralax-block__content">
                        <h2 className="block__title">MAKING TRANSPORTATION FAST AND SAFE</h2>
                        <p className="block__desc">With an average of more than 31 million visits each month, Cars is
                            the leading online destination for car shoppers and owners. We offer credible and
                            easy-to-understand information to help consumers research, price and find new and used
                            vehicles and quality service and repair providers.</p>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ParalaxBlock;