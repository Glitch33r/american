import React, { Component } from "react";

class MeetUsBlock extends Component {
    render() {
        return (
            <section className="content-wrap">
                <section className="team-block">
                    <div className="team-block__left">
                        <h2 className="team-block__left_title">MEET OUR TEAM</h2>
                        <h3 className="team-block__left_subtitle">PROFESSIONALISM, QUALITY, EFFICIENCY, RESPONSIBILITY AND
                            HIGH LEVEL OF COMFORT AND SERVICE IS THE BASIC CONCEPT OF THE COMPANY.</h3>
                        <p className="team-block__left_desc desc--margin">Together with the introduction of advanced
                            technologies business, changing and image and corporate communication strategy of the
                            company.</p>
                        <ul className="team-block__left_list">
                            <li className="team-block__left_item">Tom James / consectetuer</li>
                            <li className="team-block__left_item">Edna Barton / consectetuer</li>
                            <li className="team-block__left_item">Sandra Bullock / sit amet adipiscing elit</li>
                            <li className="team-block__left_item">Bradley Grosh / sit amet adipiscing elit</li>
                            <li className="team-block__left_item">Jessica Priston / accumsan</li>
                            <li className="team-block__left_item">Julia Berzkalna / accumsan</li>
                            <li className="team-block__left_item">Alice Puse / congue fermentum</li>
                            <li className="team-block__left_item">Alan Smith / congue fermentum</li>
                        </ul>
                    </div>
                    <div className="team-block__right">
                        <div className="team-block__right_img"
                             style={{background: 'url(/bundles/frontend/images/about/page2-img01.jpg) center center no-repeat'}}/>
                    </div>
                </section>
            </section>
        );
    }
}

export default MeetUsBlock;