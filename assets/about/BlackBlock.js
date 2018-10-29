
import React, { Component } from "react";

class BlackBlock extends Component {
    render() {
        return (
            <section className="block black-block black-block--solid">
                <div className="block__wrap">

                    <div className="block__right block__right--w100">
                        { this.props.blackBlock.map((item, index) =>
                            <React.Fragment key={index}>
                                { index != this.props.blackBlock.length - 1 ?
                                    <h2 className="block__title">{ item.listName }</h2> :

                                    <ul className="block__list block__list--flex">
                                        { this.props.blackBlock[this.props.blackBlock.length - 1].map((item, index) =>
                                            <li className="block__list-item block__list-item--w48" key={index}>
                                                <a className="block__list-link block__list-link--alter-hover block__list-link--about" href="#">{ item.title }</a>
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