import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from '../components/checkout';

const checkout = document.getElementById('react-checkout-root');

if (checkout) {
    try {
        ReactDOM.render(<Checkout />, checkout);
    } catch (error) {
        console.error(error);
    }
}