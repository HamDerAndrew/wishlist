import React, { Component } from 'react';
import Wish from '../Wish/Wish';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() { 
        return ( 
            <ul>
                {
                    this.props.wishes.map( (wish) => (
                        <Wish key={wish.id} wish={wish} deleteWish={this.props.deleteWish}/>
                    ))
                }
            </ul>
         );
    }
}
 
export default List;