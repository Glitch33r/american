import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MeetUsBlock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="content-wrap">
                <section className="team-block">

                    { this.props.whiteBlock.map((item, index) =>

                    <div className="team-block__left" key={index}>
                        <h2 className="team-block__left_title">{ item.first_blc_title }</h2>
                        <h3 className="team-block__left_subtitle">{ item.first_blc_sub_title }</h3>
                        <p className="team-block__left_desc desc--margin">
                            { item.first_blc_description }
                        </p>
                        <NavLink className="block__button block__button--red" exact to="/article" >READ MORE</NavLink>
                    </div>

                    ) }

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