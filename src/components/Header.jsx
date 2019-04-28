import React from 'react';

const Header = () => {
    return ( 
        <>

            <div className="header">
                <div className="row">	        		       
                    <div  className="col-sm-2 col-sm-offset-4 nav_li"><a className="nav_a" href="http://google.com">TRIPS</a></div>
                    <div className="col-sm-3 nav_li"><a className="nav_a" href="http://google.com">RECENTLY VIEWED</a></div>
                    <div className="col-sm-2 nav_li"><a className="nav_a" href="http://google.com">BOOKINGS</a></div>
                    <div className="col-sm-1 nav_li"><img width="50" src="Images/USER.svg" alt=""/></div>
                </div>
       
        	</div>

        </>
     );
}
 
export default Header;