import React, { Component } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Select from 'react-select';
import  axios  from 'axios'

import Seo from "../../components/seo/Seo";

import { ClipLoader } from 'react-spinners';
import InputMask from "react-input-mask";
import ReactHtmlParser from "react-html-parser";


class ApplicationForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            seo: [],
            contactBlock: [],
            selectedOption: null,

        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let url = 'http://' + this.props.domain + '/api/v1/';

        axios.get(url + "seo/contacts")
            .then(response => response.data)
            .then(data =>this.setState({seo: data}));
        // axios.get(url + "page/contacts")
        //     .then(response => response.data)
        //     .then(data =>this.setState({contactBlock: data}));
    }

    handleChange(event) {
        if( event.target.value != '' ){
            event.target.classList.add('no-empty');
        }
        else {
            event.target.classList.remove('no-empty');
        }
    }


    render() {
        let loading = true;
        if( this.state.seo.length == 0 )  {
        // if( this.state.seo.length == 0 || this.state.contactBlock.length == 0 )  {
            loading = false;
        }
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]

        const customStyles = {
            control: () => ({
                display: 'flex',
                borderBottom: '1px solid #a9a9a9',
                font: "15px 'Roboto-Bold'",
                paddingLeft: '12px'
            }),
            placeholder: () => ({
                color: 'white',
                font: "15px 'Roboto-Bold'"
            }),
            singleValue: () => ({
                color: 'white',
            }),
            option: () => ({
                font: "15px 'Roboto-Bold'",
                padding: '5px 10px',
                ':hover': {
                    backgroundColor: 'grey',
                    color: 'white',
                },
            }),
        }

        return (

            <React.Fragment>
                <div className={ loading ? "loading-success sweet-loading" : 'load sweet-loading' }>
                    <ClipLoader
                        sizeUnit={ "px" }
                        size={ 150 }
                        color={ '#123abc' }
                        loading={ this.state.loading }
                    />
                </div>

                { loading ? <div>
                    <Breadcrumbs seo={ this.state.seo }/>

                    <section className="block contact-block contact-block--application-form" >
                        <form className="contacts-form__fields contacts-form__fields--application-form" name="lol" onSubmit={this.handleSubmit}>
                            <h2 className="contacts-form__title block__title">APPLY NOW!</h2>
                            <div className="contacts-form__inputs">
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="name-filed" name="name" onChange={this.handleChange} />
                                    <label htmlFor="name-filed">First Name *</label>
                                </div>
                                {/*<div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">*/}
                                    {/*<input required="required" type="text" id="license-type"  name="license-type" onChange={this.handleChange} />*/}
                                    {/*<label htmlFor="license-type">License Type *</label>*/}
                                {/*</div>*/}
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <Select
                                        defaultValue={ {value: '', label: 'License Type'} }
                                        styles={customStyles}
                                        options={options}
                                    />
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="last-name"  name="last-name"  onChange={this.handleChange} />
                                    <label htmlFor="last-name">Last Name *</label>
                                </div>
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="driver-type"  name="driver-type" onChange={this.handleChange} />
                                    <label htmlFor="driver-type">Driver Type *</label>
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="email" id="e-mail"  name="email"  onChange={this.handleChange} />
                                    <label htmlFor="e-mail">E-mail</label>
                                </div>
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="distance"  name="distance" onChange={this.handleChange} />
                                    <label htmlFor="distance">Distance *</label>
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    {/*<input type="text" id="phone-filed"  name="telephone" onChange={this.handleChange} />*/}
                                    <InputMask required="required" name="telephone" id="phone-filed" mask="+1 999 999 99 99" maskChar={null} onChange={this.handleChange}>
                                        {/*{(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}*/}
                                    </InputMask>
                                    <label htmlFor="phone-filed">Phone Number *</label>
                                </div>
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="preferred-haul-type"  name="preferred-haul-type" onChange={this.handleChange} />
                                    <label htmlFor="preferred-haul-type">Preferred Haul Type (Ex. Dry Van, Flatbed, etc.)</label>
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="city"  name="city"  onChange={this.handleChange} />
                                    <label htmlFor="city">City *</label>
                                </div>
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="violations"  name="violations" onChange={this.handleChange} />
                                    <label htmlFor="violations">Number of moving violations in the past 3 years *</label>
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="stat"  name="stat"  onChange={this.handleChange} />
                                    <label htmlFor="stat">State *</label>
                                </div>
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="accidents"  name="accidents" onChange={this.handleChange} />
                                    <label htmlFor="accidents">Number of preventable accidents in the past 3 years *</label>
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
                            <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                <input required="required" type="text" id="zip"  name="zip"  onChange={this.handleChange} />
                                <label htmlFor="zip">Zip *</label>
                            </div>
                            <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                <input required="required" type="text" id="dui"  name="dui" onChange={this.handleChange} />
                                <label htmlFor="dui">DUI in the past 5 years? *</label>
                            </div>
                            </div>
                            <div className="contacts-form__inputs">
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="experience"  name="experience"  onChange={this.handleChange} />
                                    <label htmlFor="experience">Years of Driving Experience *</label>
                                </div>
                            </div>
                            <div className="contacts-form__buttons">
                                <button className="block__button block__button--red block__button--contacts" href="#">SEND</button>
                            </div>
                        </form>
                    </section>


                </div> : "" }


            </React.Fragment>
        );
    }
}

export default ApplicationForm;