import React, { Component } from "react";
import {
    // Route,
    NavLink,
    // BrowserRouter
} from "react-router-dom";

class Nav extends Component {
    render() {
        return (

                <div className="header-menu">
                    <ul className="header-menu__items">
                        <li className="header-menu__item">
                            {/*<a className="header-menu__link active"  href="index.html">HOME</a>*/}
                            <NavLink className="header-menu__link" exact to="/app_dev.php">HOME</NavLink>
                        </li>
                        <li className="header-menu__item">
                            {/*<a className="header-menu__link "  href="about.html">About</a>*/}
                            <NavLink className="header-menu__link" exact to="/about">About</NavLink>
                            <ul className="header-submenu__items">
                                <li className="header-submenu__item">
                                    <a className="header-submenu__link "  href="content.html">Testimonials</a>
                                </li>
                            </ul>
                        </li>
                        <li className="header-menu__item">
                            {/*<a className="header-menu__link " href="services.html">SERVICES</a>*/}
                            <NavLink className="header-menu__link" exact to="services">SERVICES</NavLink>
                        </li>
                        <li className="header-menu__item">
                            {/*<a className="header-menu__link " href="blog.html"> BLOG</a>*/}
                            <NavLink className="header-menu__link" exact to="blog">BLOG</NavLink>
                        </li>
                        <li className="header-menu__item">
                            {/*<a className="header-menu__link header-menu__link " href="contacts.html">CONTACTS</a>*/}
                            <NavLink className="header-menu__link" exact to="contacts">CONTACTS</NavLink>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default Nav;