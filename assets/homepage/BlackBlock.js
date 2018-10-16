import React, { Component } from "react";

class BlackBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block black-block">
                    <div className="block__wrap">
                        <div className="block__content">
                            <h2 className="block__title ">Trucks and Trailer Equipment</h2>
                            <h3 className="block__subtitle">The Grand USA Transport fleet of trucks is comprised of both new and newer Freightliner Cascadia and Volvo tractors. The age of manufacturing of our equipment ranges between 2016 — 2019 models.</h3>
                            <p className="block__desc block__desc--small-margin">As of September 2018, we currently have an additional 10 units of Freightliner Cascadias on order. All of our units are complete with refrigerators, microwaves, bunk heaters and inverters. All of our units are complete with refrigerators, microwaves, and inverters.</p><a
                            className="block__button block__button--red" href="#">READ MORE</a>
                        </div>
                        <div className="block__right">
                            <h2 className="block__title block__title--with80">All Products, All Delivered:</h2>
                            <ul className="block__list">
                                <li className="block__list-item"><a className="block__list-link" href="#">Dairy</a></li>
                                <li className="block__list-item"><a className="block__list-link" href="#">Produce</a></li>
                                <li className="block__list-item"><a className="block__list-link" href="#">Botanicals</a></li>
                                <li className="block__list-item"><a className="block__list-link" href="#">Seafood</a></li>
                                <li className="block__list-item"><a className="block__list-link"
                                                                    href="#">Meat</a></li>
                                <li className="block__list-item"><a className="block__list-link" href="#">Pharmaceuticals</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default BlackBlock;