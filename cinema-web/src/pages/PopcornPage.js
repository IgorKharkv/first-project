import React, {Component} from 'react';

import Popcorns from '../components/Popcorns';

class Popcorn extends Component {
    state = { 
        popcorns: [ 
            {name:'Family Size', size:'XL', price:'12.5'},
            {name:'Couple Size', size:'L', price:'10'},
            {name:'Individual Size', size:'M', price:'7.5'},
            {name:'Kids Size', size:'S', price:'5'},
        ]
     }

    render() { 
        return ( 
            <div className="popcorn">
                <Popcorns name={this.state.popcorns[0].name} size={this.state.popcorns[0].size} price={this.state.popcorns[0].price}/>
                <Popcorns name={this.state.popcorns[1].name} size={this.state.popcorns[1].size} price={this.state.popcorns[1].price}/>
                <Popcorns name={this.state.popcorns[2].name} size={this.state.popcorns[2].size} price={this.state.popcorns[2].price}/>
                <Popcorns name={this.state.popcorns[3].name} size={this.state.popcorns[3].size} price={this.state.popcorns[3].price}/>
            </div>
         );
    }
}
 
export default Popcorn;