import React from 'react';

import './Card.css';

const Drinks = (props) => {
    return(
        <div class="cards-list"> 
            <div class="card 1">
                <div class="card_image"> <img src="https://www.fodors.com/wp-content/uploads/2019/03/HERO_Worlds_Best_Soda_Bundaberg_shutterstock_679079920.jpg" /> </div>
                <div class="card_title title-white">
                    <p>{props.kind}</p>
                    <p>{props.size}</p>
                    <p>{props.price}}</p>
                </div>
            </div>
        </div>
    );
}

export default Drinks;