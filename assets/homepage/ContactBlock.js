import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

class ContactBlock extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="block contact-block">
                    <div className="block__map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23342.88386017628!2d-75.06919339602631!3d40.02826459813392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b5d06953d285%3A0x9926cb7c5ae611c1!2zNjIyNSBUYWNvbnkgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxMzUsINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1542025636755"
                            width="100%" height="100%" frameBorder={0} style={{border: 0}} allowFullScreen />
                        {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798864717!2d-74.25986673512958!3d40.69767006847739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1538738452219"*/}
                                {/*width="100%" height="100%" frameBorder={0} style={{border: 0}} allowFullScreen />*/}
                    </div>
                    {
                        this.props.contactBlock.map((item, index) =>
                            <div className="block__contacts" key={index}>
                                <div className="block__contacts-wrap">
                                    <h2 className="block__title aos-init" data-aos="fade-right">{ item.title }</h2>
                                    <h3 className="block__subtitle aos-init" data-aos="fade-right">{ ReactHtmlParser(item.address) }</h3>
                                    <h3 className="block__subtitle aos-init" data-aos="fade-right"><a className={'block__subtitle'} href={'mailto:' + item.email }> { item.email }</a></h3>
                                    <h3 className="block__subtitle aos-init" data-aos="fade-right"><a className={'block__subtitle'} href={'tel:' + item.phone }> { item.phone }</a></h3>

                                    <a className="block__contacts-btn block__contacts-btn--facebook aos-init" data-aos="fade-right" href="#" />
                                    <a className="block__contacts-btn block__contacts-btn--twitter aos-init" data-aos="fade-right" href="#" />
                                    {/*<a className="block__contacts-btn block__contacts-btn--google aos-init" data-aos="fade-right" href="#" />*/}
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        );
    }
}

export default ContactBlock;