import React from 'react'
import Image1 from '../../../Assets/images/offerperfect-img-1.png'
import Image2 from '../../../Assets/images/offerperfect-img-2.png'
import Image3 from '../../../Assets/images/offerperfect-img-3.png'


function reason() {
  return (
    <div className="reason-section">
	<div className="container mycontainer">
		<div className="row">
			<div className="col-12">
				<div className="text-center md40 sm30 xs25 w800">
					This Offer Is Perfect For Your List, <br className="d-none d-lg-block"/> Here Is Why…
				</div>
			</div>
		</div>

		<div className="row justify-content-around mt5">
			<div className="col-lg-5 col-md-6 col-12 order-md-1 align-self-center">
				<div className="md22 sm20 xs16 w700 reasonBordergreen">
					<span>Reason #1</span>
				</div>
				<div className="md32 sm25 xs20 w700 mt2">
					MASS APPEAL SOLUTION - EVERYBODY NEEDS IT
				</div>

					  <div className="md18 sm14 xs14 bluelight-clr-3 w300 mt2">
						  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur mollitia hic rerum non soluta officia vel quas modi consectetur cum debitis porro nihil incidunt quisquam iste, quam quidem! Exercitationem, id.

				</div> 
 				<div className="md18 sm14 xs14 bluelight-clr-3 w300 mt3">
					This offer is perfect for you because EVERYBODY needs a <span className="w700">Marketing copy.</span>
				</div>
			</div>
			<div className="col-md-6 col-12 align-self-center">
				<img src={Image1}alt="offerperfect-img" className="img-fluid mx-auto d-block"/>
			</div>
		</div>


		<div className="row justify-content-around mt10">
			<div className="col-lg-5 col-md-6 col-12 align-self-center">
				<div className="md22 sm20 xs16 w700 reasonBordergreen">
					<span>Reason #2</span>
				</div>
				<div className="md32 sm25 xs20 w700 mt2">
					EVER SOLD YOUR SUBSCRIBERS ON HIGHLY-SALEABLE SERVICE?
				</div>

					  <div className="md18 sm14 xs14 bluelight-clr-3 w300 mt2">
						  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ut similique fugit iusto molestias quia nemo adipisci aut magni, vero eos! Incidunt sint aut nesciunt alias quaerat optio nam voluptatibus.
					{/* If your subscribers are looking to make money selling a service that is in high-demand and something that every business needs..., then you MUST help them get access to <span className="w700">CopyBlocks</span> as the way for them to finally make money offering a service needed worldwide. */}
				</div>
			</div>
			<div className="col-md-6 col-12 align-self-center">
				<img src={Image2} alt="offerperfect-img" className="img-fluid mx-auto d-block"/>
			</div>
		</div>


		<div className="row justify-content-around mt10">
			<div className="col-lg-5 col-md-6 col-12 order-md-12 align-self-center">
				<div className="md22 sm20 xs16 w700 reasonBordergreen">
					<span>Reason #3</span>
				</div>
				<div className="md32 sm25 xs20 w700 mt2">
					MARKETING COPY IS EVERY BUSINESS' LIFELINE
				</div>

					  <div className="md18 sm14 xs14 bluelight-clr-3 w300 mt2">
						  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque voluptas aut. Facilis esse atque neque, ut quasi quod, ullam odit dolor qui aut consequuntur quaerat? Ut asperiores illo molestiae.
					{/* No matter what your subscribers do online, they need marketing copy consistently. */}
				</div> 
					  <div className="md18 sm14 xs14 bluelight-clr-3 w300 mt3">
						  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus quod esse eligendi optio? Enim sunt fugit nihil, deserunt quos, impedit veniam vel, consequatur ducimus est et modi corrupti placeat.¬
					{/* With the FREE commercial license included during this special offer, your subscribers can use */}
					<span className="w700">CopyBlocks</span> for themselves or for clients.
				</div>
			</div>
			<div className="col-md-6 col-12 order-md-1 align-self-center">
				<img src={Image3} alt="offerperfect-img" className="img-fluid mx-auto d-block"/>
			</div>
		</div>
	</div>
</div>

  )
}

export default reason