import React, { Component } from "react";

class ImageBlock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="block red-block">

                        {
                            this.props.imageBlock.map((item, index) =>
                                <div className="block__wrap" key={ index }>
                                    <div className="block__content block__content--w65" >
                                        <h1 className="block__title">{ item.first_blc_title }</h1>
                                        <h3 className="block__subtitle">{ item.first_blc_sub_title }</h3>
                                        <p className="block__desc">{ item.first_blc_description }</p>
                                        <a className="block__button" href="#">READ MORE</a>
                                    </div>
                                    <div className="block__img block__img--track"></div>
                                </div>
                            )
                        }



                </section>
            </React.Fragment>
        );
    }
}

export default ImageBlock;