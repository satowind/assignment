import React from 'react';

class Card extends React.Component {
    //state = {  }
    render() { 
        const {expire , credit} = this.props
        return ( 
            <div className="card">
                <p className="card_p c1">CARD NUMBER</p> 
                <p className="card_p c2">{credit}</p>
                <p className="card_p c3">EXPIRATION DATE</p>
                <p className="card_p c4">{expire}</p>
                <p className="card_p c5">John Doe</p>
                <img className="master" width="80" src="Images/mastercardlogo.svg" alt=""/> 
                <img className="master2" width="80" src="Images/hello.png" alt=""/> 

            </div>
         );
    }
}
 
export default Card;