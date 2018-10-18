import React, { Component } from "react";

class BlackBlock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="block black-block">

                    {
                        this.props.blackBlock.map((item, index) =>
                            <div className="block__wrap" key = {index}>
                                <div className="block__content">
                                    <h2 className="block__title ">{ item.second_blc_title }</h2>
                                    <h3 className="block__subtitle">{ item.second_blc_sub_title }</h3>
                                    <p className="block__desc block__desc--small-margin">{ item.second_blc_description }</p>
                                    <a className="block__button block__button--red" href="#">READ MORE</a>
                                </div>
                                <div className="block__right">
                                    {/*<h2 className="block__title block__title--with80">{ this.props.blackBlockList[0].listName }</h2>*/}
                                    {
                                        this.props.blackBlockList.map((item, index) =>
                                        <ul className="block__list" key={index}>
                                            <li className="block__list-item"><a className="block__list-link" href="#">{ item.title }</a></li>
                                        </ul>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }


                </section>
            </React.Fragment>
        );
    }
}

export default BlackBlock;