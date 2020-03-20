import React from 'react';

import './Popcorns.css';

const Popcorns = (props) => {
    return(
        <div className="Popcorns">
             <p>NAME: {props.name} SIZE: {props.size} PRICE: {props.price}$</p>
        </div>
    );
};


export default Popcorns;