import React from 'react';

const Wish = (props) => {
    
    const { id, item } = props.wish

    return ( 
        <li > 
        <div className="columns is-flex has-background-grey-lighter is-marginless">
            <div className="column">
                <p>{item}</p>
            </div>
            <div className="column">
                <button className="button is-danger is-small is-rounded is-pulled-right" onClick={() => props.deleteWish(id)}>X</button>
            </div>
        </div>
        </li>

    );
}
 
export default Wish;