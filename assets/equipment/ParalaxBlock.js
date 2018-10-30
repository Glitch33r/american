import React, { Component } from "react";

class ParalaxBlock extends Component {

    render() {
        return (
            <section className="block paralax-block paralax-block--equipment">

                { this.props.paralax.map((item, index) =>

                <div className="paralax-block__content aos-init" data-aos="fade-up-right" key={index}>
                    <h2 className="block__title">{ item.paralax_blc_title }</h2>
                    <p className="block__desc">{ item.paralax_blc_description }</p>
                </div>

                ) }

            </section>
        );
    }
}

export default ParalaxBlock;