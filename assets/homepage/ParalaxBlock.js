import React, { Component } from "react";

class ParalaxBlock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="block paralax-block">
                    {
                        this.props.paralaxBlock.map((item, index) =>
                            <div className="paralax-block__content" key={index}>
                                <h2 className="block__title">{ item.paralax_blc_title }</h2>
                                <p className="block__desc">{item.paralax_blc_description}</p>
                            </div>
                        )
                    }

                </section>
            </React.Fragment>
        );
    }
}

export default ParalaxBlock;