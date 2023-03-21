import React from 'react'
import Image1 from '../../../Assets/images/titleBg12.png'
import Image2 from '../../../Assets/images/up1.png'
import Image3 from '../../../Assets/images/upgrade1.png'
// import Image4 from '../images/up2.png'
// import Image7 from '../images/up3.png'
// import Image8 from '../images/up4.png'
// import Image10 from '../images/up5.png'
// import Image5 from '../images/upgrade2.png'
// import Image6 from '../images/upgrade3.png'
// import Image9 from '../images/upgrade4.png'
// import Image11 from '../images/upgrade5.png'
import Image12 from '../../../Assets/images/arrow2.png'

function 	Section3() {
  return (
   <div className="section3">

	<div className="mycontainer2">				 
		<div className="row justify-content-center">		
			<div className="col-12 text-center">				
				<img src={Image1} className="img-fluid mx-auto d-block titleBg12" alt="titleBg12"/>
			</div>
			
			<div className="col-12 text-center mt1">	
				<h3 className="lg32 md24 sm18 xs20 w500 lh150" style={{color:"#fff"}}> 
					Limited Time <u>Special Bonus:</u>
				</h3> 	
			</div>		
			 
			<div className="col-12 text-center titleBg32 mt2">
				<h3 className="lg44 md30 sm24 xs22 w700 lh130">Get ALL The Upgrades Unlocked <br className="d-none d-md-block"/>
				In Your Account <span style={{color:"#fff"}}>(Worth $1,200)</span> </h3>				
			</div>	
				
			<div className="col-12 mt5">	
				<img src={Image2} className="img-fluid mx-auto d-block up-title" alt="up"/>
				<div className="col-12 section3-box1">	
					
					<h4 className="lg38 md30 sm30 xs24 w700 lh150 mt1 text-white text-center">Unlimited Access</h4>
					
					<h4 className="lg26 md22 sm23 xs18 w500 lh170 text-white text-center">Normal Price:  <s>$97 / Month</s> <span style={{color:"#fff"}}>(Included For FREE)</span> </h4>    

					<p className="lg20 md18 sm18 xs16 w500 lh150 text-center mt1" style={{color:"#fff"}}>
						Maximize Your Profits By Unlocking The <br className="d-none d-md-block"/> Supercharged Version Of MarketingBlocks
					</p>
					
					<div className="col-md-12 p-0 upgrade1Pad-box">
						<img src={Image3} className="img-fluid mx-auto d-block upgrade1Mob" alt="upgrade"/>
					</div>
					
					
					<div className="col-12 section3-box-inn1">
					<div className="row justify-content-center" style={{margin:"3% 0 0 0"}}>	
						<div className="col-lg-7 col-md-12 p-0">
							<div className="row justify-content-center m-0">	
								<div className="col-lg-6 col-md-6 section3-list-box1">
									<ul className="lg18 md18 sm16 xs14 w400 checklist4" style={{color:"#fff"}}>  
										<li><span className="w700">UNLIMITED</span> Writing Credits</li>
										<li><span className="w700">UNLIMITED</span> Projects</li>
										<li><span className="w700">UNLIMITED</span> Assets</li>
										<li><span className="w700">Removal</span> of ‘powered by’ branding</li>
										<li><span className="w700">Faster Speed</span> of Assets Generation</li>
										<li>Priority <span className="w700">VIP Support</span></li>
										<li>Create <span className="w700">UNLIMITED</span> Campaigns</li>
										<li>Create <span className="w700">UNLIMITED</span> Landing Pages</li>
										<li>Create <span className="w700">UNLIMITED</span> Ads</li>
										<li>Create <span className="w700">UNLIMITED</span> Marketing Copy</li>
										<li>Create <span className="w700">UNLIMITED</span> Promo Videos</li>
										<li>Create <span className="w700">UNLIMITED</span> Email Swipes</li>
										<li>Create <span className="w700">UNLIMITED</span> Voiceovers</li>
										<li>Create <span className="w700">UNLIMITED</span> Deisgns</li>
									</ul>
								</div>
								
								<div className="col-lg-6 col-md-6 section3-list-box2">
									<ul className="lg18 md18 sm16 xs14 w400 checklist4" style={{color:"#fff"}}>  
										<li>Create <span className="w700">UNLIMITED</span> Pages</li>
										<li>Create <span className="w700">UNLIMITED</span> Bandwidth</li>
										<li>Create <span className="w700">UNLIMITED</span> Offers</li>
										<li>Create <span className="w700">UNLIMITED</span> Clients</li>
										<li>Create <span className="w700">UNLIMITED</span> Profits</li>
										<li><span className="w700">Boost Your Revenue</span> By Creating Unlimited Online Business Assets For Sale!</li>
										<li><span className="w700">Sell as many assets</span> as you like to clients on Fiverr, UpWork, Freelancer & social media platforms.</li>
										<li><span className="w700">Never worry</span> about whether you should take up a client who’s paying you a certain amount now or wait for a client to come along who’ll pay more…</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div className="col-lg-5 col-md-8 upgrade1-img padding0 align-self-end">
							<div className="col-12 p-0 upgrade1Pc-box">
								<img src={Image3} className="img-fluid center-block upgrade1" alt="upgrade"/>
							</div>
							
						</div>
					</div>
					</div>
				</div>
			</div>
{/* 			
			<div className="col-12 mt5">	
				<img src={Image4} className="img-fluid mx-auto d-block up-title" alt="up"/>
				<div className="col-12 section3-box2">	
					
					<h4 className="lg38 md30 sm30 xs24 w700 lh150 mt1 text-white text-center">Pro + Brand Removal</h4>
					
					<h4 className="lg26 md22 sm23 xs18 w500 lh170 text-white text-center">Normal Price: <s>$127</s>  <span style={{color:"#fff"}}>(Included For FREE)</span> </h4>    

					<div className="col-12 p-0 upgrade1Pad-box">
						<img src={Image5} className="img-fluid mx-auto d-block upgrade2" alt="upgrade"/>
					</div>
					
					
					<div className="col-12 section3-box-inn2">
					<div className="row justify-content-center m-0">	
						<div className="col-lg-7 col-md-12 order-lg-12">
							
							<ul className="lg18 md18 sm16 xs14 w400 checklist4" style={{color:"#fff"}}>  
								<li>Remove <span className="w700">‘powered by marketingblocks’</span> & whitelabel everything you create & build your authority in your niche instantly.</li>

								<li>We will be your <span className="w700">best kept secret</span> & your clients won’t know we exist.</li>

								<li><span className="w700">BETTER RESULTS:</span> Let AI generate better results using the most advanced and expensive AI model int the world. </li>

								<li><span className="w700">Unlock Turbo Mode</span> for FASTER speed of assets generation</li>

								<li><span className="w700">Priority VIP support</span> via email, chat, or book a 15 mins one one Zoom calls with our team.</li>
							</ul>
							
						</div>
						
						<div className="col-lg-5 col-md-12 order-lg-1">
							<div className="col-12 p-0 upgrade1Pc-box">
							<img src={Image5} className="img-fluid mx-auto d-block upgrade2" alt="upgrade"/>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div> */}
			
			{/* <div className="col-12 mt5">	
				<img src={Image7} className="img-fluid mx-auto d-block up-title" alt="up"/>
				<div className="col-12 section3-box1">	
					
					<div className="col-12 section3-box-inn3">
					<div className="row justify-content-center m-0">	
						<div className="col-lg-6 col-md-12 align-self-center">
					
							<h4 className="lg38 md30 sm30 xs24 w700 lh150 text-white">ArtBlocks</h4>
							
							<h4 className="lg26 md22 sm23 xs18 w500 lh150 text-white mt1">Normal Price: <s>$20 per month</s> <br/> <span style={{color:"#fff"}}>(Included For FREE)</span> </h4>    

							<div className="col-12 p-0 upgrade1Pad-box">
								<img src={Image6} className="img-fluid mx-auto d-block upgrade3" alt="upgrade"/>
							</div>		

							<p className="lg18 md16 sm16 xs14 w400 lh150 mt5" style={{color:"#fff"}}>
								Unlock Unlimited Access To A Futuristic One-Click A.I. Powered App That Turns Any Text Into Compelling, High Quality & Photorealistic Images & Art You Can Use In Your Business Or Sell To Clients. <br/><br/>

								Can't tell the difference between AI generated images and picasso-level art done by humans
							</p>
							 
						</div>
						
						<div className="col-lg-6 col-md-12 align-self-center">
							
							<div className="col-12 p-0 upgrade1Pc-box">
							<img src={Image6} className="img-fluid mx-auto d-block upgrade3" alt="upgrade"/>
							</div>	
							
						</div>
					</div>
					</div>
				</div>
			</div>
			 */}
			{/* <div className="col-12 mt5">	
				<img src={Image8} className="img-fluid mx-auto d-block up-title" alt="up"/>
				<div className="col-12 section3-box2 section3-box2D">	
					
					<h4 className="lg38 md30 sm30 xs24 w700 lh140 mt1 text-white text-center">Done For You Consultancy Package <br className="d-none d-md-block"/> + Unlock Team & Client Access</h4>
					
					<h4 className="lg26 md22 sm23 xs18 w500 lh170 text-white text-center mt1">Normal Price: <s>$97</s>   <span style={{color:"#fff"}}>(Included For FREE)</span> </h4>    

					<p className="lg18 md16 sm16 xs14 w400 lh120 mt2 text-center" style={{color:"#fff"}}>
						Everything You Need To <span className="w700">Start A Widely Successful Consultancy Business With MarketingBlocks</span> <br/><br/>

						Make thousands of dollars  starting today using our <span className="w700">ready-made website, proposals, graphics, contracts, & more.</span>
					</p>
					
					<img src={Image9} className="img-fluid mx-auto d-block upgrade4 mt1" alt="upgrade"/>
					
					
					<div className="col-12 section3-box-inn4">
					<div className="row justify-content-center">	
						<div className="col-lg-4 col-md-4 section3-box-inn4-list">
						 
							<ul className="lg18 md18 sm16 xs14 w400 checklist4" style={{color:"#fff"}}>  
								<li>Stunning Ready-Made Agency Website</li>

								<li>Irresistible Proposal (Ms Word & Powerpoint)</li>

								<li>Highly Optimized Cold Call Email Sequence</li>

								<li>Pimped-To-Sell Telemarketing Scripts For Videos</li>
 
							</ul>
							
						</div>
						
						<div className="col-lg-4 col-md-4 section3-box-inn4-list">
							<ul className="lg18 md18 sm16 xs14 w400 checklist4" style={{color:"#fff"}}>  
								<li>Print-Ready Commercial Graphics Templates For Video Services (Business Card, Letterhead, Invoice, Trifold Brochure)</li>

								<li>4 ‘Done for you’ Facebook Ad Creatives</li>

								<li>‘Done for you’ Web Banners & Google Ads</li>
							</ul>
						</div>
						
						<div className="col-lg-4 col-md-4 section3-box-inn4-list">
							<ul className="lg18 md18 sm16 xs14 w400 checklist4" style={{color:"#fff"}}>  
								<li>‘Done for you’ Legal Contract Vetted By An Attorney</li>

								<li>Done For You Professional Animated Agency Sales Video that Mesmerize clients and make them chase you to sell to them.</li>
							</ul>
						</div>
					</div>
					</div>
					
					
					<p className="lg18 md16 sm16 xs14 w400 lh180 mt3 text-center" style={{color:"#fff"}}>
						<span className="w700">Create And Manage UNLIMITED WorkSpaces & Team Members.</span> <br/>

						Set up your own widely successful marketing consultancy business in minutes. <br/>

						Get ready to see an avalanche of projects headed your way.

					</p>
					 
				</div>
			</div> */}
			
			{/* <div className="col-12 mt5">	
				<img src={Image10} className="img-fluid mx-auto d-block up-title" alt="up"/>
				<div className="col-12 section3-box1">	
					
					<h4 className="lg38 md30 sm30 xs24 w700 lh150 mt1 text-white text-center">AI Authority Boost</h4>
					
					<h4 className="lg26 md22 sm23 xs18 w500 lh170 text-white text-center">Normal Price:  <s>$97</s>  <span style={{color:"#fff"}}>(Included For FREE)</span> </h4>    

					<p className="lg20 md18 sm18 xs16 w500 lh150 text-center mt1" style={{color:"#fff"}}>
						Let The Ai Answer Top (Trending) Questions On Quora, Facebook <br className="d-none d-md-block"/> Groups, Etc. And Get You Free Buyer Traffic
					</p>
					
					<div className="col-12 p-0 upgrade1Pad-box">
						<img src={Image11} className="img-fluid mx-auto d-block upgrade5" alt="upgrade"/>
					</div>	
					
					
					
					<div className="col-12 section3-box-inn5">
					<div className="row justify-content-center" style={{margin:"3% 0 0 0"}}>	
						<div className="col-lg-6 col-md-12 align-self-center">
							<ul className="lg18 md18 sm16 xs14 w400 checklist4 mt5" style={{color:"#fff"}}>  
								<li>Build trust and authority by establishing yourself as a leader in your industry and niche</li>

								<li>Save time and money by completely ditching the manual labour.</li>

								<li>No need to research for long hours and structure perfect answers</li>

								<li>Automate quora & facebook group marketing</li>

								<li>Get more leads as your answers pop out in web results even without seo</li>
								
								<li>Reach over 300 million people who use quora every month to discover and buy your products</li>

								<li>Works for every niche. perfect for beginners</li>
							</ul>
						</div>
						
						<div className="col-lg-6 col-md-12 align-self-center">
							<div className="col-12 p-0 upgrade1Pc-box">
							<img src={Image11} className="img-fluid mx-auto d-block upgrade5" alt="upgrade"/>
							</div>	
						</div>
					</div>
					</div>
				</div>
			</div> */}
			
			<div className="col-12">
				<img src={Image12} className="img-fluid mx-auto d-block arrow2 mt5" alt="arrow"/>
			</div>
		</div>
	</div>

</div>
  )
}

export default Section3