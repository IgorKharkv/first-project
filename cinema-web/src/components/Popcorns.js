import React from 'react';

import './Card.css';

const Popcorns = (props) => {
    return(
        <div class="cards-list"> 
            <div class="card 1">
                <div class="card_image"> <img src="https://www.onceuponachef.com/images/2013/04/nigellas-party-popcorn-1120x742.jpg"  alt=""/> </div>
                <div class="card_title title-white">
                    <p>{props.name}</p>
                    <p>{props.size}</p>
                    <p>{props.price}$</p>
                </div>
            </div>
        </div>
    );
};


export default Popcorns;