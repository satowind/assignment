import React from 'react';


class Form extends React.Component {

    state = { credit:'4324 5433 9382 1030', expire: '03/24' };

    componentDidMount(){
        this.props.onCreditChange(this.state.credit)
        this.props.onExpireChange(this.state.expire)
    }

    onCreditChange= (event) => {

        this.setState( { credit : event.target.value} )
        this.props.onCreditChange(event.target.value)

    }

    onExpireChange= (event) => {

        this.setState( { expire : event.target.value} )
        this.props.onExpireChange(event.target.value)

    }


    render() { 
        return ( 
            <form>
                        <br/>

                            
                                <div className="row">
                             
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="labels" htmlFor="exampleInputEmail1">Credit card number</label>
                                            <input type="text" className="form-control input-lg" id="exampleInputEmail1" name="credit" value={this.state.credit} onChange={this.onCreditChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="labels" htmlFor="exampleInputPassword1">Security code</label>
                                            <input type="text" className="form-control input-lg" id="exampleInputPassword1" placeholder="420"/>
                                        </div>
                                        
                                        <div className="radio">
                                            <label className="labels">
                                            <input type="radio" /> Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">

                                        <div className="form-group">
                                            <label className="labels" htmlFor="exampleInputEmail1">Expiration date</label>
                                            <input type="text" className="form-control input-lg" id="exampleInputEmail1" value={this.state.expire} onChange={this.onExpireChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="labels" htmlFor="exampleInputPassword1">Postal Code</label>
                                            <input type="text" className="form-control input-lg" id="exampleInputPassword1" placeholder="10119"/>
                                        </div>
                                        
                                        
                                        
                                    </div>
                                    
                                </div>
                                <button type="submit" className="btn btn-primary btn-block btn-lg">Add card</button>
                         </form>       
                    
         );
    }
}
 
export default Form;