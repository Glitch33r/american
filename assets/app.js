import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

// const checkout = document.getElementById('react-checkout-root');
//
// if (checkout) {
//     try {
//         ReactDOM.render(<Nav />, checkout);
//         console.log('OK');
//     } catch (error) {
//         console.error(error);
//     }
// }

ReactDOM.render(
    <Layout />,
    document.getElementById("root")
);