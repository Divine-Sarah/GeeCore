import React from 'react'
import Arrow from '../../../Assets/images/arrow.png'
import Payment from '../../../Assets/images/payment2.png'
import Window from '../../../Assets/images/window2.png'
import Ai from '../../../Assets/images/ai43.png'

function Section50() {
  return (
   <div class="section50">
	<div class="mycontainer2">
		<div class="row justify-content-center">
		
			<div class="col-12 text-center titleBg30"><h3 class="lg40 md30 sm30 xs22 w700 lh140">Frequently Asked Questions</h3></div>
			
		</div>
		
		<div class="row justify-content-center mt3"> 
		
			<div class="col-md-6  p-2">
				<div class="row m-0"> 			
					<div class="col-12 faq-box-out">
					<div class="col-12 faq-box">
						<h3 class="lg22 md22 sm18 xs16 w700 lh150"> 	
							Q. Are There Any Limitations or Restrictions?
						</h3>
						
						<p class="lg18 md18 sm14 xs14 w400 lh160 gray mt2">
                This bundle deal includes the unlimited upgrade which unlocks unlimited projects & assets. Unlimited copy credits, unlimited projects, unlimited pages, unlimited ads, unlimited graphics, unlimited videos, unlimited emails, unlimited voiceovers, unlimited clients, unlimited profits, unlimited arts. The bonus add-on tools (eraser, animer, colorizer, and briefs) have 100 as limits. Everything else is unlimited.
</p>
					</div>
					</div>
					
					
					
					<div class="col-12 faq-box-out">
					<div class="col-12 faq-box">
						<h3 class="lg22 md22 sm18 xs16 w700 lh150"> 	
							Q. How Do I Get Support?
						</h3>
						
						<p class="lg18 md18 sm14 xs14 w400 lh160 gray mt2">
							Simply write us an email or chat with us and have your queries answered within no time.
						</p>
					</div>
					</div>
					
				</div>
			</div>
				
				
			<div class="col-md-6 p-2">
				<div class="row m-0"> 
					<div class="col-12 faq-box-out">
					<div class="col-12 faq-box">
						<h3 class="lg22 md22 sm18 xs16 w700 lh150"> 	
							Q. Do I Need To Install Any Software?
						</h3>
						
						<p class="lg18 md18 sm14 xs14 w400 lh160 gray mt2">
							No need to install or download anything. MarketingBlocks is fully cloud-based so you can effortlessly generate content on the go! 
						</p>
					</div>
					</div>

				
					<div class="col-12 faq-box-out">
					<div class="col-12 faq-box">
						<h3 class="lg22 md22 sm18 xs16 w700 lh150"> 	
							Q. Do You Have a 100% Money-Back Guarantee?
						</h3>
						
						<p class="lg18 md18 sm14 xs14 w400 lh160 gray mt2">
							Yes. If you are not happy with your experience, email us & get a full refund within 30 days of your purchase. 
						</p>
					</div>
					</div>
					
				</div>			
			</div>
			
		</div>
		
	</div>
	

	
	<div class="container">	
		<div class="row justify-content-center mt6">
			<div class="col-12 benefit-box2">
				
				<h3 class="lg40 md30 sm25 xs22 w700 lh140">All Upgrades Included When You Act Now</h3>	
				
				<h3 class="lg30 md22 sm22 xs22 w600 lh140 mt3">Get MarketingBlocks For Just <span style={{color:"#ff3030"}}><s>$4,997/yr</s></span> <span class="w700" style={{color:"#3bb349"}}>$497</span></h3> 
				
				{/* <!-- <p class="lg24 md22 sm20 xs18 w700 lh150 mt2 text-center"> 
					<span class="title24 title24B">
						<img src="images/offer.png" class="img-fluid center-block offer" alt="offer">
						Coupon Code: VIP50 For $50 Off
					</span>
				</p> --> */}
			
				
				<div class="row justify-content-center m-0">	
					<div class="col-xl-8 col-lg-9 col-md-10 mybutton mybutton-box mt4">

					<a href="#table" class="text-center xl40 lg38 md36 sm25 xs20 w700">
							<span class="mybutton-btn">
								<span class="mybutton-text">Get Instant Access Now</span>
							
								<span class="btn-arrow"><img src={Arrow} class="img-fluid center-block arrow" alt="arrow"/> </span> 
							</span> 
						</a>

					</div>
					
				</div>
				
				<img src={Payment} class="img-fluid mx-auto d-block payment mt2" alt="payment"/>
				<img src={Window}class="img-fluid mx-auto d-block window mt1" alt="window"/>  
				
			</div>
			
			<div class="col-12 mt2 text-center">
				<h3 class="lg27 md24 sm20 xs18 w400 lh150 mt3">Only $497 Yearly For <span style={{color:"#01a113"}}><b><u>UNLIMITED</u> ACCESS</b></span><b> <br/>
				<u>No Upsells</u></b> - No Hidden Fee - <b>Cancel Anytime</b>
				</h3>
			</div>
			
		</div>
		
	</div>
	
	
	
	<div class="ai-element43"><img src={Ai} alt="" class="img-fluid center-block ai43"/></div>	
</div>
  )
}

export default Section50