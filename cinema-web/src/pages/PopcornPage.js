import React, {Component} from 'react';

import Popcorns from '../components/Popcorns';
import './PopcornPage.css';

class Popcorn extends Component {
    state = { 
        popcorns: [ 
            {id: 1, name:'Family Size', size:'XL', price:'12.5'},
            {id: 2, name:'Couple Size', size:'L', price:'10'},
            {id: 3, name:'Individual Size', size:'M', price:'7.5'},
            {id: 4, name:'Kids Size', size:'S', price:'5'},
        ]
     }

    render() { 
        //variable that allows us to output list dynamicaly
        let ppcorns = (
            <div>
                {this.state.popcorns.map(popcorn => {   //maping thro the popcorns state (list)
                    return <Popcorns name={popcorn.name} size={popcorn.size} price={popcorn.price} key={popcorn.id}/> //returning jsx
                })}
            </div>
        )
        return ( 
            <div className="popcorn">
                {ppcorns}
            </div>
         );
    }
}
 
export default Popcorn;