
import React, { Component } from "react";

class RedBlock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <section className="block red-block">
                    <div className="block__wrap" >

                        { this.props.redBlock.map((item, index) =>

                        <div className="block__content block__content--w65" key={index}>
                            <h2 className="block__title">{ item.second_blc_title }</h2>
                            <h3 className="block__subtitle">{ item.second_blc_sub_title }</h3>
                            <p className="block__desc">{ item.second_blc_description }</p>
                        </div>

                        ) }

                        <div className="block__img block__img--track"></div>
                    </div>
                </section>
        );
    }
}

export default RedBlock;