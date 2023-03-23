import React from 'react'
import Image from '../../../Assets/images/noRestriction.png'
import Image1 from '../../../Assets/images/restrictions.png'

function Section39() {
  return (
    <div className="section39"> 
	<div className="mycontainer2">	
		<div className="row justify-content-center">
		
			<div className="col-12 text-center titleBg25">
				<h3 className="lg40 md30 sm25 xs22 w700 lh140 text-white">Take On As Many Clients As You Want.</h3>
			</div>
			
			<div className="col-12 text-center">	
				<h2 className="lg40 md30 sm24 xs22 w700 lh140 upper mt3"> 
					<span className="title21"> 
						<img src={Image} className="img-fluid center-block noRestriction" alt="icon"/>  No Restrictions.
					</span>
				</h2> 
				
			</div>
			
		</div>
		
		<div className="row justify-content-center mt5">
			
			<div className="col-md-6">
				<img src={Image1} className="img-fluid mx-auto d-block restrictions" alt="restrictions"/> 
			</div>
			
			<div className="col-md-6 section39-text">
				<h2 className="lg34 md26 sm26 xs22 w700 lh140 mt6">FREE Commercial License</h2>	
				
				<p className="section39-text-pra w400 lh160  mt4">
					You will already be using MarketingBlocks to make some insane profits for your own company. But how about leveraging these tools to help other businesses too in order to earn more money? This commercial license helps you do exactly that! <br/><br/>

					The demand for marketing services is extremely high. From large to small companies, everyone is desperate for effective marketing strategies. <br/><br/>

					That’s where you come in.  <br/><br/>

					Simply use the tools in MarketingBlocks to generate high-converting online business assets & sell them to these businesses for BIG MONEY.  <br/><br/>

					You can also onboard clients on a retainer basis and provide them with this service to make some additional income.

				</p>
				
			</div>
			
		</div>
	</div>
</div>
  )
}

export default Section39