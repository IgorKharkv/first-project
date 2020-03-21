import React from 'react';

import './Card.css';

const Snacks = (props) => {
    return(
        <div class="cards-list"> 
            <div class="card 1">
                <div class="card_image"> <img src="https://www.tasteofhome.com/wp-content/uploads/2019/05/shutterstock_273975992-1024x1024.jpg" /> </div>
                <div class="card_title title-white">
                    <p>{props.name}</p>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    );
}


export default Snacks;