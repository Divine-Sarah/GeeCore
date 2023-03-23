import React from 'react'
import Image1 from '../../../Assets/images/final1.png'
import Image2 from '../../../Assets/images/step2bb.png'
import Image3 from '../../../Assets/images/step3b.png'

function Edege() {
  return (
    <div className="edge-features-banner">
	<div className="container mycontainer3">
		<div className="row justify-content-center">
		
			<div className="col-12">
				<h3 className="text-center w700 md40 sm30 xs25 white lh150">
					Help Your Subscribers Write & Sell <br className="d-none d-md-block"/> Marketing copy To Local Businesses <br className="d-none d-md-block"/> In ANY Niche - In Just Three Steps!
				</h3>
			</div>
		
			<div className="step1-box">
				
				<div className="row justify-content-around m-0">
					<div className="col-lg-4 col-md-5 col-12 mt4 align-self-center">
						<h3 className="md30 sm25 xs20 w700"><span className="step-count1">Step 1</span></h3>
						<p className="md26 sm20 xs18 w500 mt5 mobile-center">Enter Product Name & Description</p>
					</div>
					<div className="col-md-7 col-12 mt4  align-self-center">
						<img src={Image1} alt="step-img" className="img-fluid mx-auto d-block"/>
					</div>				
				</div>
				
			</div>
			
			<div className="step2-box">
				
				<div className="row justify-content-around m-0">
					<div className="col-lg-4 col-md-5 col-12 order-md-12 mt4 align-self-center">
						<h3 className="md30 sm25 xs20 w700"><span className="step-count2">Step 2</span></h3>
						<p className="md26 sm20 xs18 w500 mt5 mobile-center">Select The Type Of Copy & Tone</p>
					</div>
					<div className="col-md-7 col-12 mt4 order-md-1 align-self-center">
						<img src={Image2} alt="step-img" className="img-fluid mx-auto d-block"/>
					</div>				
				</div>
				
			</div>
			
			<div className="step3-box">
				
				<div className="row justify-content-around m-0">
					<div className="col-lg-4 col-md-5 col-12 mt4 align-self-center">
						<h3 className="md30 sm25 xs20 w700"><span className="step-count3">Step 3</span></h3>
						<p className="md26 sm20 xs18 w500 mt5 mobile-center">AI Generates 100% Original Copy blocks</p>
					</div>
					<div className="col-md-7 col-12 mt4  align-self-center">
						<img src={Image3} alt="step-img" className="img-fluid mx-auto d-block"/>
					</div>			
				</div>
				
			</div>

		</div>

	</div>
</div>

  )
}

export default Edege