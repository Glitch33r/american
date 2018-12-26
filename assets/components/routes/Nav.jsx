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
            open: false,
            subOpen: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.submenuHandle = this.submenuHandle.bind(this);
    }

    handleClick () {
        // this.setState( { open: !this.state.open } );
        if(screen.width > 992) return;
        this.state.open ? document.body.classList.remove('fixed') : document.body.classList.add('fixed');
        this.state.open ?
            document.getElementById('burger').classList.remove('--is-active') :
            document.getElementById('burger').classList.add('--is-active');

        this.setState(state => ({
            open: !state.open
        }));

    }

    submenuHandle (event) {
        if(screen.width > 992) return;
        // console.log();
        let el = event.target;
        while (el.parentElement){
            if(el.classList.contains('header-menu__item') && this.state.subOpen == false) {
                el.classList.add('open-sub');
                this.setState(state => ({
                    subOpen: !state.subOpen
                }));
                break;
            }
            if(el.classList.contains('header-menu__item') && this.state.subOpen == true) {
                el.classList.remove('open-sub');
                this.setState(state => ({
                    subOpen: !state.subOpen
                }));
                break;
            }
            el = el.parentElement;
            console.log(el);
        }

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
                                <NavLink onClick={ this.handleClick } className="header-menu__link" exact to="/" >HOME</NavLink>
                            </li>
                            <li className="header-menu__item">
                                <NavLink onClick={ this.handleClick } className="header-menu__link" exact to="/corporate-philosophy" >Corporate philosophy</NavLink>
                            </li>
                            <li className="header-menu__item">
                                <NavLink onClick={ this.handleClick } className="header-menu__link" exact to="/equipment">Equipment</NavLink>

                            </li>
                            <li className="header-menu__item">
                                <NavLink onClick={ this.handleClick } className="header-menu__link" exact to="/offers">Drivers</NavLink>
                                <ul className="header-submenu__items">
                                    <span className={'header-submenu__open-link'} onClick={ this.submenuHandle } > > </span>
                                    <li className="header-submenu__item">
                                        <NavLink className="header-submenu__link " exact to="/offers/careers" >CAREERS</NavLink>
                                    </li>
                                    <li className="header-submenu__item">
                                        <NavLink className="header-submenu__link " exact to="/offers/application-form" >APPLICATION FORM</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="header-menu__item">
                                <NavLink onClick={ this.handleClick } className="header-menu__link" exact to="/contacts">safety program</NavLink>
                            </li>
                            <li className="header-menu__item">
                                <NavLink onClick={ this.handleClick } className="header-menu__link" exact to="/contacts">CONTACTS</NavLink>
                            </li>
                        </ul>
                    {/*</nav>*/}
                </div>
        );
    }
}

export default Nav;