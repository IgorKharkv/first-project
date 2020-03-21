import React, {Component} from 'react';

import Drinks from '../components/Drinks';
import './DrinksPage.css';

class DrinksPage extends Component {
    state = {
        drinks: [
            {id: 1, kind: 'Soda', size: '500ml, 750ml, 1l', price: '1$, 3$, 4$'},
            {id: 2, kind: 'Water', size: '500ml, 750ml, 1l', price: '0.5$, 2$, 3$'},
            {id: 3, kind: 'Fanta', size: '500ml, 750ml, 1l', price: '2$, 3.5$, 5$'},
        ]
    }
    render() { 

        let drnks = (
            <div>
                {this.state.drinks.map(drink => {
                    return <Drinks kind={drink.kind} size={drink.size} price={drink.price} key={drink.id}/>
                })}
            </div>
        );
        return ( 
            <div>
                {drnks}
            </div>
         );
    }
}
 
export default DrinksPage;