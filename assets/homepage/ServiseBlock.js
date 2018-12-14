
import React, { Component } from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';

class ServiseBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block dark-grey-block">
                    <div className="block__wrap">
                        <div className="block__content block__content--padding">
                            <h2 className="block__title block__title--small block__title--box aos-init" data-aos="fade-right">
                                <NavLink className="" exact to="/offers" >Driver hire</NavLink>
                            </h2>
                            <h2 className="block__title block__title--small block__title--car aos-init" data-aos="fade-right">
                                <NavLink className="" exact to="/offers#perks">Driver perks</NavLink>
                            </h2>
                            <h2 className="block__title block__title--small block__title--msg aos-init" data-aos="fade-right">
                                <NavLink className="" exact to="/offers#perks">Driver vacation</NavLink>
                            </h2>
                        </div>
                        <div className="block__img block__img--volvo"></div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ServiseBlock;