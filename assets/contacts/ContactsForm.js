import React, { Component } from "react";

class ContactsForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        for (let name of data.keys()) {
            const input = form.elements[name];
            // const parserName = input.dataset.parse;
            console.log(input.value);
        }
        // console.log(data.name);
    }

    render() {
        return (
            <div>
                <section className="block contact-block">
                    <form className="contacts-form__fields" onSubmit={this.handleSubmit}>
                        <h2 className="contacts-form__title block__title">CONTACT US</h2>
                        <div className="contacts-form__inputs">
                            <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w47">
                                <input type="text" id="name-filed" name="name" />
                                <label htmlFor="name-filed">Name</label>
                            </div>
                            <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w47">
                                <input type="text" id="surname"  name="surname" />
                                <label htmlFor="surname">Surname</label>
                            </div>

                        </div>
                        <div className="contacts-form__inputs">
                            <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w47">
                                <input type="text" id="e-mail"  name="E-mail" />
                                <label htmlFor="e-mail">E-mail</label>
                            </div>
                            <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w47">
                                <input type="text" id="phone-filed"  name="Phone" />
                                <label htmlFor="phone-filed">Phone</label>
                            </div>
                        </div>
                        <div className="contacts-form__textarea contacts-form__inputs-wrap">
                            <textarea name="message" id="message-filed" defaultValue={""} />
                            <label htmlFor="message-filed">Message</label>
                        </div>
                        <div className="contacts-form__buttons">
                            <button className="block__button block__button--red block__button--contacts" href="#">SEND</button>
                        </div>
                    </form>
                    <div className="block__contacts">
                        <div className="block__contacts-wrap">
                            <h2 className="block__title">CONTACTS</h2>
                            <h3 className="block__subtitle">4578 MARMORA ROAD, GLASGOW D04 89GR</h3>
                            <p className="block__desc">It doesn't matter where do you live. Call us and we’ll help to solve all of your problems. The support team is waiting for your calls 24 hours a day, 7 days per week. Or connect us via email.</p><a className="block__contacts-btn block__contacts-btn--facebook" href="#" /><a className="block__contacts-btn block__contacts-btn--twitter" href="#" /><a className="block__contacts-btn block__contacts-btn--google" href="#" />
                        </div>
                    </div>
                </section>
                <section className="contscts-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798864717!2d-74.25986673512958!3d40.69767006847739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1538738452219" width="100%" height="100%" frameBorder={0} style={{border: 0}} allowFullScreen />
                </section>
            </div>
        );
    }
}

export default ContactsForm;