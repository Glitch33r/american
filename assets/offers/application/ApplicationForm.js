import React, { Component } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Select from 'react-select';
import  axios  from 'axios'

import Seo from "../../components/seo/Seo";

import { ClipLoader } from 'react-spinners';
import InputMask from "react-input-mask";
import ReactHtmlParser from "react-html-parser";
import serialize from "form-serialize";


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

        axios.get(url + "seo/application-form")
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

    handleSelect(optionSelected) {
        let name = this.name;
        document.getElementById(name).value=optionSelected.value;
    }


    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        console.log(form);

        const str = serialize(form);
        console.log(str);
        axios({
            method: 'post',
            url: 'http://american/app_dev.php/api/v1/page/application/submit',
            data: str,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                //handle success
                console.log(response);
                let text = document.getElementById('success');
                text.innerText = response.data['message'];

                let popUp = document.getElementsByClassName('pop-up-wrap')[0];
                popUp.classList.add('open');

                setTimeout(function () {
                    popUp.classList.remove('open');
                }, 3000);
            });
        // console.log(data.name);
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
        ];
        const optionsDE = [
            { value: '0-3 mths', label: '0-3 mths' },
            { value: '3-6 mths', label: '3-6 mths' },
            { value: '6-12 mths', label: '6-12 mths' },
            { value: '1 yr', label: '1 yr' },
            { value: '1-2 yrs', label: '1-2 yrs' },
            { value: '2-5 yrs', label: '2-5 yrs' },
            { value: '5+ yrs', label: '5+ yrs' }
        ];
        const optionsLT = [
            { value: 'Class A', label: 'Class A' },
            { value: 'Class B', label: 'Class B' },
            { value: 'No CDL', label: 'No CDL' }
        ];
        const optionsDT = [
            { value: 'Company Driver', label: 'Company Driver' },
            { value: 'Owner Operator', label: 'Owner Operator' },
            { value: 'Team Driver', label: 'Team Driver' },
            { value: 'Student Driver', label: 'Student Driver' }
        ];
        const optionsD = [
            { value: 'Local', label: 'Local' },
            { value: 'Dedicated', label: 'Dedicated' },
            { value: 'Regional', label: 'Regional' },
            { value: 'OTR (Over-the-Road)', label: 'OTR (Over-the-Road)' },
        ];
        const optionsNM = [
            { value: '0', label: '0' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3+', label: '3+' },
        ];
        const optionsNP = [
            { value: '0', label: '0' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3+', label: '3+' },
        ];
        const optionsDUI = [
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
        ];

        const customStyles = {
            control: () => ({
                display: 'flex',
                borderBottom: '1px solid #a9a9a9',
                font: "15px 'Roboto-Bold'",
                paddingLeft: '12px',
                // maxHeight: '36px'
            }),
            placeholder: () => ({
                color: 'white',
                font: "15px 'Roboto-Bold'"
            }),
            singleValue: () => ({
                color: 'white',
                // marginTop: '7px'
                paddingRight: '10px',
                position: 'absolute',
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
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45 contacts-form__inputs-wrap--select">
                                    <Select
                                        name="license"
                                        onChange={this.handleSelect}
                                        defaultValue={ {value: '', label: 'License Type *'} }
                                        styles={customStyles}
                                        options={optionsLT}
                                        isSearchable={false}
                                    />
                                    <select name={"license"} className={'select-hide'} id={'license'}>
                                        {
                                            options.map((item, index)=>
                                                <option key={index} value={item.value}>{item.label}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="last-name"  name="last-name"  onChange={this.handleChange} />
                                    <label htmlFor="last-name">Last Name *</label>
                                </div>
{/*                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="driver-type"  name="driver-type" onChange={this.handleChange} />
                                    <label htmlFor="driver-type">Driver Type *</label>
                                </div>*/}
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45 contacts-form__inputs-wrap--select">
                                    <Select
                                        name="driver-type"
                                        onChange={this.handleSelect}
                                        defaultValue={ {value: '', label: 'Driver Type *'} }
                                        styles={customStyles}
                                        options={optionsDT}
                                        isSearchable={false}
                                    />
                                    <select name={"driver-type"} className={'select-hide'} id={'driver-type'}>
                                        {
                                            options.map((item, index)=>
                                                <option key={index} value={item.value}>{item.label}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="email" id="e-mail"  name="email"  onChange={this.handleChange} />
                                    <label htmlFor="e-mail">E-mail</label>
                                </div>
{/*                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="distance"  name="distance" onChange={this.handleChange} />
                                    <label htmlFor="distance">Distance *</label>
                                </div>*/}
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45 contacts-form__inputs-wrap--select">
                                    <Select
                                        name="distance"
                                        onChange={this.handleSelect}
                                        defaultValue={ {value: '', label: 'Distance *'} }
                                        styles={customStyles}
                                        options={optionsD}
                                        isSearchable={false}
                                    />
                                    <select name={"distance"} className={'select-hide'} id={'distance'}>
                                        {
                                            options.map((item, index)=>
                                                <option key={index} value={item.value}>{item.label}</option>
                                            )
                                        }
                                    </select>
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
{/*                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="violations"  name="violations" onChange={this.handleChange} />
                                    <label htmlFor="violations">Number of moving violations in the past 3 years *</label>
                                </div>*/}
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45 contacts-form__inputs-wrap--select">
                                    <Select
                                        name="violations"
                                        onChange={this.handleSelect}
                                        defaultValue={ {value: '', label: 'Number of moving violations in the past 3 years *'} }
                                        styles={customStyles}
                                        options={optionsNM}
                                        isSearchable={false}
                                    />
                                    <select name={"violations"} className={'select-hide'} id={'violations'}>
                                        {
                                            options.map((item, index)=>
                                                <option key={index} value={item.value}>{item.label}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
{/*                             <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="stat"  name="stat"  onChange={this.handleChange} />
                                    <label htmlFor="stat">State *</label>
                                </div>*/}
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45 contacts-form__inputs-wrap--select">
                                    <Select
                                        name="stat"
                                        onChange={this.handleSelect}
                                        defaultValue={ {value: '', label: 'State *'} }
                                        styles={customStyles}
                                        options={optionsNP}
                                        isSearchable={false}
                                    />
                                    <select name={"stat"} className={'select-hide'} id={'stat'}>
                                        {
                                            options.map((item, index)=>
                                                <option key={index} value={item.value}>{item.label}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                {/*<div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">*/}
                                    {/*<input required="required" type="text" id="accidents"  name="accidents" onChange={this.handleChange} />*/}
                                    {/*<label htmlFor="accidents">Number of preventable accidents in the past 3 years *</label>*/}
                                {/*</div>*/}
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45 contacts-form__inputs-wrap--select">
                                    <Select
                                        name="accidents"
                                        onChange={this.handleSelect}
                                        defaultValue={ {value: '', label: 'Number of preventable accidents in the past 3 years *'} }
                                        styles={customStyles}
                                        options={options}
                                        isSearchable={false}
                                    />
                                    <select name={"accidents"} className={'select-hide'} id={'accidents'}>
                                        {
                                            options.map((item, index)=>
                                                <option key={index} value={item.value}>{item.label}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="zip"  name="zip"  onChange={this.handleChange} />
                                    <label htmlFor="zip">Zip *</label>
                                </div>
{/*                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="dui"  name="dui" onChange={this.handleChange} />
                                    <label htmlFor="dui">DUI in the past 5 years? *</label>
                                </div>*/}
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45 contacts-form__inputs-wrap--select">
                                    <Select
                                        name="dui"
                                        onChange={this.handleSelect}
                                        defaultValue={ {value: '', label: 'DUI in the past 5 years? *'} }
                                        styles={customStyles}
                                        options={optionsDUI}
                                        isSearchable={false}
                                    />
                                    <select name={"dui"} className={'select-hide'} id={'dui'}>
                                        {
                                            options.map((item, index)=>
                                                <option key={index} value={item.value}>{item.label}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="contacts-form__inputs">
{/*                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45">
                                    <input required="required" type="text" id="experience"  name="experience"  onChange={this.handleChange} />
                                    <label htmlFor="experience">Years of Driving Experience *</label>
                                </div>*/}
                                <div className="contacts-form__inputs-wrap contacts-form__inputs-wrap--w45 contacts-form__inputs-wrap--select">
                                    <Select
                                        name="experience"
                                        onChange={this.handleSelect}
                                        defaultValue={ {value: '', label: 'Years of Driving Experience *'} }
                                        styles={customStyles}
                                        options={optionsDE}
                                        isSearchable={false}
                                    />
                                    <select name={"experience"} className={'select-hide'} id={'experience'}>
                                        {
                                            options.map((item, index)=>
                                                <option key={index} value={item.value}>{item.label}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="contacts-form__buttons">
                                <button className="block__button block__button--red block__button--contacts" href="#">SEND</button>
                            </div>
                        </form>
                    </section>
                    <div className="pop-up-wrap">
                        <div className="pop-up">
                            <h2 id={'success'}>
                                Your mail was sanded
                            </h2>
                            <svg id="successAnimation" className="animated" xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 70 70">
                                <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z" />
                                <circle id="successAnimationCircle" cx={35} cy={35} r={24} stroke="#979797" strokeWidth={2} strokeLinecap="round" fill="transparent" />
                                <polyline id="successAnimationCheck" stroke="#979797" strokeWidth={2} points="23 34 34 43 47 27" fill="transparent" />
                            </svg>
                        </div>
                    </div>

                </div> : "" }


            </React.Fragment>
        );
    }
}

export default ApplicationForm;