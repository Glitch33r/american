import React, { Component } from "react";
import Content from "../components/content/Content";

class BlackBlock extends Component {

    render() {
        return (
            <section className="block black-block ">
                <div className="block__wrap">
                    <div className="block__content">

                        { this.props.listLeft.map((item, index) =>
                            <React.Fragment key={index}>
                                { index != this.props.listLeft.length - 1 ?
                                    <h2 className="block__title">{ item.listName }</h2>
                                    :

                                    this.props.listLeft[this.props.listLeft.length - 1].map((item, index) =>
                                    <div className="block__number aos-init" data-aos="fade-right" data-num="1">
                                        <div className={'block__number-wrap'} key={index}>
                                            <h3 className="block__subtitle block__subtitle--marginb0">
                                                <span className="block__subtitle_link">{ item.maintitle }</span>
                                            </h3>
                                            <p className="block__desc block__desc--small-margin">
                                                { item.title }
                                            </p>
                                        </div>
                                    </div>
                                    )

                                }
                            </React.Fragment>
                        ) }
                    </div>



                    <div className="block__right">
                        { this.props.listRight.map((item, index) =>
                            <React.Fragment key={index}>
                                { index != this.props.listRight.length - 1 ?
                                    <React.Fragment>
                                        <h2 className="block__title">{ item.listright_blc_title }</h2>
                                        <h3 className="block__subtitle block__subtitle--marginb0 aos-init" data-aos="fade-left">{ item.listright_blc_sub_title }</h3>
                                        <p className="block__desc block__desc--small-margin aos-init" data-aos="fade-left">
                                            { item.listright_blc_description }
                                        </p>
                                    </React.Fragment>
                                    :
                                    <ul className="block__list">
                                        { this.props.listRight[this.props.listRight.length - 1].map((item, index) =>
                                        <li className="block__list-item" key={index}>
                                            <a className="block__list-link block__list-link--alter-hover aos-init" data-aos="fade-down" href="#">{ item.title }</a>
                                        </li>
                                        ) }
                                    </ul>
                                }
                            </React.Fragment>
                        ) }
                    </div>



                </div>
            </section>
        );
    }
}

export default BlackBlock;