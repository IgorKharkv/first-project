import React, {Component} from 'react';

import Drinks from '../components/Drinks';
import './DrinksPage.css';

class DrinksPage extends Component {
    state = {
        drinks: [
            {kind: 'Soda', size: '500ml, 750ml, 1l', price: '1$, 3$, 4$'},
            {kind: 'Water', size: '500ml, 750ml, 1l', price: '0.5$, 2$, 3$'},
            {kind: 'Fanta', size: '500ml, 750ml, 1l', price: '2$, 3.5$, 5$'},
        ]
    }
    render() { 
        return ( 
            <div>
            <Drinks kind={this.state.drinks[0].kind} size={this.state.drinks[0].size} price={this.state.drinks[0].price}/>
            <Drinks kind={this.state.drinks[1].kind} size={this.state.drinks[1].size} price={this.state.drinks[1].price}/>
            <Drinks kind={this.state.drinks[2].kind} size={this.state.drinks[2].size} price={this.state.drinks[2].price}/>
            </div>
         );
    }
}
 
export default DrinksPage;