import React, { Component } from "react";
import Nav from "../routes/Nav";
// import { NavLink } from "react-router-dom";
import Headroom from "react-headroom";
import {
    BrowserRouter, Link, Route, NavLink
} from 'react-router-dom';


import PropTypes from 'prop-types';

class Header extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        var isActive = this.context.router.route.location.pathname === '/';
        var classNameHead = isActive ? 'black' : '';

        let className = 'homepage ';


        return (
            <React.Fragment>

                {/* Header*/}
                <Headroom className={className + classNameHead}>
                    <header >
                        <div className="header-bg">
                            <div className="header-wrap">
                                <div className="header-logo"><NavLink className="header-logo__link" exact to="/"><img
                                    className="header-logo__img" src="/bundles/frontend/images/logo_USA.svg"/></NavLink></div>
                                <Nav />
                            </div>
                        </div>

                    </header>
                </Headroom>

            </React.Fragment>

        );
    }
}


// class NavLink extends React.Component {
//     render() {
//         var isActive = this.context.router.route.location.pathname === this.props.to;
//         var className = isActive ? 'active' : '';
//
//         return(
//             <Link className={className} {...this.props}>
//                 {this.props.children}
//             </Link>
//         );
//     }
// }

Header.contextTypes = {
    router: PropTypes.object
};

export default Header;