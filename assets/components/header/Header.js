import React, { Component } from "react";
import Nav from "../routes/Nav";
import { NavLink } from "react-router-dom";
import Headroom from "react-headroom";

class Header extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                {/* Header*/}
                <Headroom >
                    <header>
                        <div className="header-bg">
                            <div className="header-wrap">
                                <div className="header-logo"><NavLink className="header-logo__link" exact to="/"><img
                                    className="header-logo__img" src="/bundles/frontend/images/logo.png"/></NavLink></div>

                                <Nav />

                            </div>
                        </div>

                    </header>
                </Headroom>

            </React.Fragment>

        );
    }
}


export default Header;