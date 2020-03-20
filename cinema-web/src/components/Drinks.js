import React from 'react';

import './Drinks.css';

const Drinks = (props) => {
    return(
        <div className="drinks">
            <p>KIND: {props.kind} SIZE: {props.size} PRICE:{props.price}</p>
        </div>
    );
}

export default Drinks;