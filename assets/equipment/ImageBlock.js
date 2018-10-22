import React, { Component } from "react";

class ImageBlock extends Component {
    render() {
        return (
            <section className="content-wrap">
                <section className="team-block">
                    <div className="team-block__left team-block__left--w650">
                        <h2 className="team-block__left_title">Trucks and Trailer Equipment</h2>
                        <h3 className="team-block__left_subtitle">The Grand USA Transport fleet of trucks is comprised of both new and newer Freightliner Cascadia and Volvo tractors. The age of manufacturing of our equipment ranges between 2016 — 2019 models.</h3>
                        <p className="team-block__left_desc desc--margin">As of September 2018, we currently have an additional 10 units of Freightliner Cascadias on order. All of our units are complete with refrigerators, microwaves, bunk heaters and inverters. All of our units are complete with refrigerators, microwaves, and inverters. Each unit of our fleet both trucks and trailers are continuously maintained to the highest levels of quality and performance standards. All mechanical work on our trucks is performed in house, on premises within the confines of a state of the art 16,000 Square Foot facility, by the most professionally trained and certified group of preeminent mechanics that money can buy. All of our units are perpetually inspected and maintained to maximize safety, performance, reliability, and absolute efficiency. We would never settle for any less. Our customers and drivers expect this. We deliver this.
                        </p>
                    </div>
                    <div className="team-block__right team-block__right--w500">
                        <div className="team-block__right_img"
                             style={{background: 'url(/bundles/frontend/images/about/250601.jpg) center center no-repeat', backgroundSize: 'contain'}}/>
                    </div>
                </section>
            </section>
        );
    }
}

export default ImageBlock;