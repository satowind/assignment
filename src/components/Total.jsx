import React from 'react';

const Total = () => {
    return ( 
        <div className="row pad">

        <div className="col-sm-3  hidden-xs">
            <button type="submit" className="btn btn-primary btn-block btn-lg">Complete payment</button>
        </div>
        <div className="col-sm-9">
            <h2 className="pull-right">TOTAL: ₦2556.64</h2>
        </div>
        <div className="col-sm-3 hidden-lg hidden-sm hidden-md">
            <button type="submit" className="btn btn-primary btn-block btn-lg">Complete payment</button>
        </div>
          
      </div>

     );
}
 
export default Total;