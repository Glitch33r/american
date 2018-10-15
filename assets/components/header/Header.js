import React, { Component } from "react";
import Nav from "../routes/Nav";


class Header extends Component {

    constructor(props) {
        super(props);

    }






    render() {
        return (
            <React.Fragment>
                {/* Header*/}
                <header>
                    <div className="header-bg">
                        <div className="header-wrap">
                            <div className="header-logo"><a className="header-logo__link" href="index.html"><img
                                className="header-logo__img" src="/bundles/frontend/images/logo.png"/></a></div>

                            <Nav />

                        </div>
                    </div>

                </header>








            </React.Fragment>

        );
    }
}


export default Header;