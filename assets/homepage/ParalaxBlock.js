import React, { Component } from "react";

class ParalaxBlock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        );
    }
}

export default ParalaxBlock;