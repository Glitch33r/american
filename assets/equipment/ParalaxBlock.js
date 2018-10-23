import React, { Component } from "react";

class ParalaxBlock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="block paralax-block paralax-block--equipment">
                <div className="paralax-block__content">
                    <h2 className="block__title">That’s all we do!</h2>
                    <p className="block__desc">Our customers understand the nature of refrigerated transport. They also want, and demand as they should comprehensive expertise and focus from the transport delivering their products. We deliver confidence and comfort to our customers in the fact that we have mastered the science of climate control relative to their products, all with different scale and scope and each with very specific requirements regarding temperature control. Grand USA Transport will never claim that its’ expertise applies and extends to everything. The fact is and remains that we live in a world of Reefers, and that world we know COLD!</p>
                </div>
            </section>
        );
    }
}

export default ParalaxBlock;