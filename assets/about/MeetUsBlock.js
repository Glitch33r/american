import React, { Component } from "react";

class MeetUsBlock extends Component {
    render() {
        return (
            <section className="content-wrap">
                <section className="team-block">
                    <div className="team-block__left">
                        <h2 className="team-block__left_title">We Are Family</h2>
                        <h3 className="team-block__left_subtitle">Grand USA Transport — Intimacy, Family, to Ourselves, our Drivers and our Customers.</h3>
                        <p className="team-block__left_desc desc--margin">From inception, we have always maintained and projected ourselves as what we are at our core.
                            Simply, a family owned business based on core principles, based on actions not words, honesty, integrity, values, ethics, morals and intimacy. We not only hold these traits true to ourselves as people but apply these traits to our corporate selves as well. We keep it real.
                            We are proud that throughout our tenure as a company, we have maintained our base
                            principles and have applied them to management and more importantly, our drivers.
                        </p>
                        {/*<ul className="team-block__left_list">*/}
                            {/*<li className="team-block__left_item">Tom James / consectetuer</li>*/}
                            {/*<li className="team-block__left_item">Edna Barton / consectetuer</li>*/}
                            {/*<li className="team-block__left_item">Sandra Bullock / sit amet adipiscing elit</li>*/}
                            {/*<li className="team-block__left_item">Bradley Grosh / sit amet adipiscing elit</li>*/}
                            {/*<li className="team-block__left_item">Jessica Priston / accumsan</li>*/}
                            {/*<li className="team-block__left_item">Julia Berzkalna / accumsan</li>*/}
                            {/*<li className="team-block__left_item">Alice Puse / congue fermentum</li>*/}
                            {/*<li className="team-block__left_item">Alan Smith / congue fermentum</li>*/}
                        {/*</ul>*/}
                    </div>
                    <div className="team-block__right">
                        <div className="team-block__right_img"
                             style={{background: 'url(/bundles/frontend/images/about/250601.jpg) center center no-repeat', backgroundSize: 'contain'}}/>
                    </div>
                </section>
            </section>
        );
    }
}

export default MeetUsBlock;