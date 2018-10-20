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
        this.state.open ?
            document.getElementById('burger').classList.remove('--is-active') :
            document.getElementById('burger').classList.add('--is-active');

        this.setState(state => ({
            open: !state.open
        }));

    }

    render() {
        return (

                <div className={ this.state.open ? 'header-menu open' : "header-menu" }>
                    <div onClick={ this.handleClick } className={ 'menu-overlay' }></div>
                    <a href={'#'} onClick={ this.handleClick } className={'header-menu__link header-menu__link--burger'}>
                        <div className="burger" id={'burger'}>
                            <span></span>
                        </div>
                    </a>
                    {/*<nav  className={'header-menu-wrap'}>*/}
                        <ul className="header-menu__items">
                            <li className="header-menu__item">
                                <NavLink className="header-menu__link" exact to="/" >HOME</NavLink>
                                {/*<a onClick={ this.handleClick } className="header-menu__link" >X</a>*/}
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link active"  href="index.html">HOME</a>*/}
                                <NavLink className="header-menu__link" exact to="/statement" >Corporate principles</NavLink>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link "  href="about.html">About</a>*/}
                                <NavLink className="header-menu__link" exact to="/about">Equipment</NavLink>
                                <ul className="header-submenu__items">
                                    <li className="header-submenu__item">
                                        <a className="header-submenu__link " exact to="/testimonials" >Testimonials</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link " href="services.html">SERVICES</a>*/}
                                <NavLink className="header-menu__link" exact to="/services">For Drivers</NavLink>
                            </li>
                            {/*<li className="header-menu__item">*/}
                                {/*/!*<a className="header-menu__link " href="blog.html"> BLOG</a>*!/*/}
                                {/*<NavLink className="header-menu__link" exact to="blog">Customer cool</NavLink>*/}
                            {/*</li>*/}
                            {/*<li className="header-menu__item">*/}
                                {/*/!*<a className="header-menu__link " href="blog.html"> BLOG</a>*!/*/}
                                {/*<NavLink className="header-menu__link" exact to="blog">Driver hire</NavLink>*/}
                            {/*</li>*/}
                            {/*<li className="header-menu__item">*/}
                                {/*/!*<a className="header-menu__link " href="blog.html"> BLOG</a>*!/*/}
                                {/*<NavLink className="header-menu__link" exact to="blog">Driver bonus</NavLink>*/}
                            {/*</li>*/}
                            {/*<li className="header-menu__item">*/}
                                {/*/!*<a className="header-menu__link " href="blog.html"> BLOG</a>*!/*/}
                                {/*<NavLink className="header-menu__link" exact to="blog">Driver perks</NavLink>*/}
                            {/*</li>*/}
                            {/*<li className="header-menu__item">*/}
                                {/*/!*<a className="header-menu__link " href="blog.html"> BLOG</a>*!/*/}
                                {/*<NavLink className="header-menu__link" exact to="blog">Driver vacation</NavLink>*/}
                            {/*</li>*/}
                            <li className="header-menu__item">
                                {/*<a className="header-menu__link header-menu__link " href="contacts.html">CONTACTS</a>*/}
                                <NavLink className="header-menu__link" exact to="/contacts">CONTACTS</NavLink>
                            </li>
                        </ul>
                    {/*</nav>*/}
                </div>
        );
    }
}

export default Nav;