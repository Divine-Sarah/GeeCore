import React from 'react';
import Image from  '../../../Assets/images/promo-tool-icon-1.png'
import Image2 from  '../../../Assets/images/promo-tool-icon-2.png'
import Image3 from  '../../../Assets/images/promo-tool-icon-3.png'
import Image4 from  '../../../Assets/images/promo-tool-icon-4.png'
import Image5 from  '../../../Assets/images/promo-tool-icon-5.png'
import Image6 from  '../../../Assets/images/promo-tool-icon-6.png'

function Whitesection() {
  return (
    <div className="white_section" id="promotool ">
	<div className="container mycontainer3">
		<div className="row">
			<div className="col-md-12 col-12 threestep-banner3">
				<div className="md40 sm30 xs25 w800 text-center white lh160">
					Promo Tools
				</div>
				<div className="md18 sm14 xs16 w300 text-center white lh160">
					Here’s everything YOU are going to need to smash the leaderboard and make<br className="d-none d-md-block"/> this an easy 4-5 figure promo
				</div>
				
				
				<div className="col-12 mt3">
				<div className="row justify-content-center">
					<div className="col-md-3 col-12 mt3 promotool-box-out">
						<div className="promotool-box">
							<img src={Image} alt="" className="img-fluid mx-auto d-block"/>
							<div className="md18 sm14 xs18 w700 greylight-clr1 text-center mt2">
								PROMO DOC
							</div>
							<div className="clickhere-btn md18 sm14 xs12">
<a href="https://docs.google.com/document/d/1iPl9YkkaEZHbkBfkHf2X981eYEgsoUNT7rxBhkgkWz0/edit?usp=sharing" target="blank">									CLICK HERE
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-12 mt3 promotool-box-out">
						<div className="promotool-box">
							<img src={Image2}alt="" className="img-fluid mx-auto d-block"/>
							<div className="md18 sm14 xs18 w700 greylight-clr1 text-center mt2">
								BONUSES
							</div>
							<div className="clickhere-btn md18 sm14 xs12">
								<a href="https://copyblocks.ai/main-bonus/" target="blank">
									CLICK HERE
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-12 mt3 promotool-box-out">
						<div className="promotool-box">
							<img src={Image3} alt="" className="img-fluid mx-auto d-block"/>
							<div className="md18 sm14 xs18 w700 greylight-clr1 text-center mt2">
								EMAIL SWIPES
							</div>
							<div className="clickhere-btn md18 sm14 xs12">
						<a href="https://docs.google.com/document/d/1Xc-_UA12z_MBNhxU2m6NMid62zf15j6oX3B6PzWdkxs/edit?usp=sharing" target="blank">
									CLICK HERE
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-3 col-12 mt3 promotool-box-out">
						<div className="promotool-box">
							<img src={Image4} alt="" className="img-fluid mx-auto d-block"/>
							<div className="md18 sm14 xs18 w700 greylight-clr1 text-center mt2">
								GRAPHICS
							</div>
							<div className="clickhere-btn md18 sm14 xs12">
								<a href="https://copyblocks.ai/graphics/" target="blank">
									CLICK HERE
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-12 mt3 promotool-box-out">
						<div className="promotool-box">
							<img src={Image5} alt="" className="img-fluid mx-auto d-block"/>
							<div className="md18 sm14 xs18 w700 greylight-clr1 text-center mt2">
								ADS
							</div>
							<div className="clickhere-btn md18 sm14 xs12">
								<a href="/" target="_blank">
									CLICK HERE
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-12 mt3 promotool-box-out">
						<div className="promotool-box">
							<img src={Image6} alt="" className="img-fluid mx-auto d-block"/>
							<div className="md18 sm14 xs18 w700 greylight-clr1 text-center mt2">
								REVIEW & SOCIAL POST
							</div>
							<div className="clickhere-btn md18 sm14 xs12">
								<a href="https://docs.google.com/document/d/1jQCz5_d43-QxvCUuAnEeejsOT6Rz5yDw5OvKA9lYZIU/edit?usp=sharing" target="blank">
									CLICK HERE
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Whitesection