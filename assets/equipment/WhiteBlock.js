import React, { Component } from "react";

class WhiteBlock extends Component {
    render() {
        return (
            <section className="content-wrap">
                <section className="team-block">

                    { this.props.whiteBlock.map((item, index) =>

                        <React.Fragment key={index}>
                            <div className="team-block__left team-block__left--w650" >
                                <h2 className="team-block__left_title">{ item.first_blc_title }</h2>
                                <h3 className="team-block__left_subtitle">{ item.first_blc_sub_title }</h3>
                                <p className="team-block__left_desc desc--margin">
                                    { item.first_blc_description }
                                </p>
                            </div>
                            <div className="team-block__right team-block__right--w500">
                                <div className="team-block__right_img"
                                     style={{background: 'url(/uploads/images/first-blc-eq/' + item.image + ') center center no-repeat', backgroundSize: 'contain'}}/>
                            </div>
                        </React.Fragment>

                    ) }

                </section>
            </section>
        );
    }
}

export default WhiteBlock;