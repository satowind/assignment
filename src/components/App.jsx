import React from 'react';
import Header from './Header';
import Form from './Form';
import Card from './Card';
import PaymentBreakDown from './Payment_break_down';
import Total from './Total';

class App extends React.Component {
    state = { credit : '',expire:'' }


    onCreditChange = (credit)=>{
        this.setState( { credit } )
   }

   onExpireChange = (expire)=>{
    this.setState( { expire} )
}


    render() { 

        const {credit , expire } = this.state;
        return ( 

            <div className="container">
                <Header></Header>

                <div className="row border" >
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-8">
                                <h3>Payment Information</h3>
                                <p className="light">Choose your method of payment.</p>
                                
                            </div>
                            <div className="col-sm-4">
                                <img className="payment" width="100" src="Images/PAYPAL.svg" alt=""/>
                                <img className="payment img_dis" width="30" src="Images/DISCOVER.svg" alt=""/>
                                <img className="payment" width="30" src="Images/VISA.svg" alt=""/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-sm-5">

                            <br/>

                      <Card credit={credit} expire={expire}></Card>
                    </div>
                    <div className="col-sm-7">
                    <Form onCreditChange={this.onCreditChange} onExpireChange={this.onExpireChange}></Form>
                    </div>
                   
                </div>
                <PaymentBreakDown></PaymentBreakDown>
                <Total></Total>

            </div>
           
         );
    }
}
 
export default App;