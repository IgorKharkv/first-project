import React from 'react';

import './Snacks.css';

const Snacks = (props) => {
    return(
        <div className="snacks">
            <p>NAME: {props.name} PRICE: {props.price}</p>
        </div>
    );
}


export default Snacks;