import React from 'react';

import Logo from '../Assets/images/logo-header.png';
// import Banner from '../images/banner_section-2'

function Header() {
  return (
    <div className="header container">
	
		<div className="row justify-content-center" style={{margin:"0px"}}>	
			<div className="col-12 menu">	
				<nav className="navbar navbar-expand-lg navbar-light">
					  <a className="navbar-brand" href="#/"><img src={Logo } className="img-fluid center-block" alt="images"/></a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				  				  
				  <div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="lg15 md13 sm15 xs14 WesFYW03Medium navbar-nav ml-auto text-center cl-effect-12">	
					  
					  {/* <!-- <li className="nav-item"><a className="nav-link" href="#">JV Doc</a></li> <span>|</span>
							<li className="nav-item"><a className="nav-link" href="#">DFY Swipes</a></li> <span>|</span> --> */}
							<li className="nav-item"><a className="nav-link" href="#promotool">PROMO TOOLS</a></li> 
							{/* <!--<li className="nav-item"><a className="nav-link" href="https://docs.google.com/document/d/1iPl9YkkaEZHbkBfkHf2X981eYEgsoUNT7rxBhkgkWz0/edit?usp=sharing" target="_blank">Get Links</a></li>&nbsp;&nbsp; -->
							<!-- <li className="nav-item last w600 "><a className="nav-link" href="https://warriorplus.com/aff-offer/o/z1vjvy" target="_blank">Get Affiliate Link</a></li> -->  						  		 					   */}
					</ul>					
				  </div>
				</nav>
			</div>
		</div>
	</div>
  )
}

export default Header