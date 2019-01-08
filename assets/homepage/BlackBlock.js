import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class BlackBlock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listName: ""
        }

    }



    render() {

        return (
            <React.Fragment>
                <section className="block black-block">

                    {
                        this.props.blackBlock.map((item, index) =>
                            <div className="block__wrap" key = {index}>
                                <div className="block__content aos-init" data-aos="fade-up" >
                                    <h2 className="block__title"  >{ item.second_blc_title }</h2>
                                    <h3 className="block__subtitle aos-init">{ item.second_blc_sub_title }</h3>
                                    <p className="block__desc block__desc--small-margin">{ item.second_blc_description }</p>
                                    {/*<a className="block__button block__button--red" href="#">READ MORE</a>*/}
                                </div>
                                <div className="block__right">

                                    <h2 className="block__title block__title--with80 aos-init" data-aos="fade-left">{
                                        this.props.blackBlockList.map((item, index) =>
                                            <span key={index}>
                                                { index == 0 ? item.listName : '' }
                                            </span>
                                        )
                                    }
                                    </h2>
                                    <ul className="block__list" key={index}>
                                    {
                                        this.props.blackBlockList.map((item, index) =>
                                            <li className="block__list-item" key={index}>

                                                <NavLink className="header-menu__link" exact to={"/product/" +  item.title.toString().toLowerCase().replace(/ /g, '-') }>
                                                    <span className="block__list-link block__list-link--alter-hover aos-init" data-aos="fade-left">
                                                        { item.title }
                                                    </span>
                                                </NavLink>

                                            </li>
                                        )
                                    }
                                    </ul>
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