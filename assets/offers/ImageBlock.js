import React, { Component } from "react";

class ImageBlock extends Component {
    render() {
        return (
            <section className="content-wrap">
                <section className="team-block">
                    <div className="team-block__left team-block__left--w650">
                        <h2 className="team-block__left_title">Driver’s statement</h2>
                        <h3 className="team-block__left_subtitle">”Ensuring Our Future by Building Your Future”. Grand USA Transport — A Relatively Simple and Firm Corporate Philosophy.</h3>
                        <p className="team-block__left_desc desc--margin">
                            Since our humble beginnings 7 years ago, through the present, our corporate mindset has been and remains grounded in firm basic principles of dedication, belief, hard—work, diligence, tenacity, and no limitations. We hold ourselves accountable, as we expect to hold our drivers accountable, not only to our ethics, morals, principies, but to their own. We pride ourselves in the belief that the road to achievement and success is never—ending. This road must be built on solid rock, not quicksand. Grand USA Transport provides that road to success by constantly analyzing and implementing the changes necessary so that our drivers and ourseives can realize their dreams, goals and aspirations, in parody to our own.
                        </p>
                    </div>


                    {/*{ this.props.whiteBlock.map((item, index) =>*/}

                        {/*<div className="team-block__left team-block__left--w650" key={index}>*/}
                            {/*<h2 className="team-block__left_title">{ item.first_blc_title }</h2>*/}
                            {/*<h3 className="team-block__left_subtitle">{ item.first_blc_sub_title }</h3>*/}
                            {/*<p className="team-block__left_desc desc--margin">*/}
                                {/*{ item.first_blc_description }*/}
                            {/*</p>*/}
                        {/*</div>*/}

                    {/*) }*/}

                    <div className="team-block__right team-block__right--w500">
                        <div className="team-block__right_img"
                             style={{background: 'url(/bundles/frontend/images/equipment/RenaultTruck.jpg) center center no-repeat', backgroundSize: 'contain'}}/>
                    </div>
                </section>
            </section>
        );
    }
}

export default ImageBlock;