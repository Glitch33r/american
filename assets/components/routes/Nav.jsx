import React, { Component } from "react";
import {
    // Route,
    NavLink,
    // BrowserRouter
} from "react-router-dom";



class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        // this.setState( { open: !this.state.open } );
        this.state.open ? document.body.classList.remove('fixed') : document.body.classList.add('fixed');

        this.setState(state => ({
            open: !state.open
        }));

    }

    render() {
        return (

                <div className={ this.state.open ? 'header-menu open' : "header-menu" }>
                    <div onClick={ this.handleClick } className={ 'menu-overlay' }></div>
                    <a href={'#'} onClick={ this.handleClick } className={'header-menu__link'}>Menu</a>
                    {/*<nav  className={'header-menu-wrap'}>*/}
                        <ul className="header-menu__items">
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link active"  href="index.html">HOME</a>*/}
                                <a onClick={ this.handleClick } className="header-menu__link" >X</a>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link active"  href="index.html">HOME</a>*/}
                                <NavLink className="header-menu__link" exact to="/">Driver’s statement</NavLink>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link "  href="about.html">About</a>*/}
                                <NavLink className="header-menu__link" exact to="/about">Corporate philosophy</NavLink>
                                <ul className="header-submenu__items">
                                    <li className="header-submenu__item">
                                        <a className="header-submenu__link "  href="#">Testimonials</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link " href="services.html">SERVICES</a>*/}
                                <NavLink className="header-menu__link" exact to="services">Equipment</NavLink>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link " href="blog.html"> BLOG</a>*/}
                                <NavLink className="header-menu__link" exact to="blog">Customer cool</NavLink>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link " href="blog.html"> BLOG</a>*/}
                                <NavLink className="header-menu__link" exact to="blog">Driver hire</NavLink>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link " href="blog.html"> BLOG</a>*/}
                                <NavLink className="header-menu__link" exact to="blog">Driver bonus</NavLink>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link " href="blog.html"> BLOG</a>*/}
                                <NavLink className="header-menu__link" exact to="blog">Driver perks</NavLink>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link " href="blog.html"> BLOG</a>*/}
                                <NavLink className="header-menu__link" exact to="blog">Driver vacation</NavLink>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link header-menu__link " href="contacts.html">CONTACTS</a>*/}
                                <NavLink className="header-menu__link" exact to="contacts">CONTACTS</NavLink>
                            </li>
                        </ul>
                    {/*</nav>*/}
                </div>
        );
    }
}

export default Nav;