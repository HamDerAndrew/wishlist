import React from 'react';

const Wish = (props) => {
    return ( props.wish.map( (wishItem, index) => (
        <li key={index}> 
        <div className="columns is-flex has-background-grey-lighter is-marginless">
            <div className="column">
                <p>{wishItem.wish}</p>
            </div>
            <div className="column">
                <button className="button is-danger is-small is-rounded is-pulled-right" onClick={props.deleteWish}>X</button>
            </div>
        </div>
        </li>
    ))
    );
}
 
export default Wish;