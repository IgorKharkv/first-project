import React, {Component} from 'react';

import Snacks from '../components/Snacks';
import './SnacksPage.css';

class SnacksPage extends Component {
    state = {
        snacks: [
            {name: 'Snickers', price: '2$'},
            {name: 'Pesekzman', price: '1.85$'},
            {name: 'Kifkef', price: '1$'}
        ]
    }
    render() { 
        return ( 
            <div>
                <Snacks name={this.state.snacks[0].name} price={this.state.snacks[0].price}/>
                <Snacks name={this.state.snacks[1].name} price={this.state.snacks[1].price}/>
                <Snacks name={this.state.snacks[2].name} price={this.state.snacks[2].price}/>
            </div>
         );
    }
}
 
export default SnacksPage;