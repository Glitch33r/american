
import React, { Component } from "react";

class ServiseBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block dark-grey-block">
                    <div className="block__wrap">
                        <div className="block__content block__content--padding">
                            <h2 className="block__title block__title--small block__title--box">Driver hire</h2>
                            <h2 className="block__title block__title--small block__title--car">Driver perks</h2>
                            <h2 className="block__title block__title--small block__title--msg">Driver vacation</h2>
                        </div>
                        <div className="block__img block__img--volvo"></div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ServiseBlock;