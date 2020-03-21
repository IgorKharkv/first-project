import React, {Component} from 'react';

import Snacks from '../components/Snacks';
import './SnacksPage.css';

class SnacksPage extends Component {
    state = {
        snacks: [
            {id: 1, name: 'Snickers', price: '2$'},
            {id: 2, name: 'Pesekzman', price: '1.85$'},
            {id: 3, name: 'Kifkef', price: '1$'}
        ]
    }
    render() { 

        let sncks = (
            <div>
                {this.state.snacks.map(snack => {
                    return <Snacks name={snack.name} price={snack.price} key={snack.id}/>
                })}
            </div>
        );
        return ( 
            <div>
                {sncks}
            </div>
         );
    }
}
 
export default SnacksPage;