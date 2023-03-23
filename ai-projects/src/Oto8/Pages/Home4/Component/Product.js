import React from 'react'
import Image from '../../../Assets/images/myproduct-convert.png'

function Product() {
  return (
   <div className="product-section">
	<div className="container mycontainer">
		<div className="row">
			<div className="col-md-12 col-12 p-0">
				<div className="text-center md40 sm30 xs25 w800">
					Do My Products Convert?<br className="d-none d-md-block"/> Take A Look...
				</div>
			</div>
		</div>

		<div className="row justify-content-center mt4">
			<div className="col-md-6 col-md-6 col-12 align-self-center">
				<img src={Image} className="img-fluid mx-auto d-block" alt=''/>
			</div>
			<div className="col-md-6 col-12 align-self-center">
				<div className="md30 sm20 xs18 lh160 w400">
					My Offers Have Generated Over $5 Million In Sales With Our Funnels Converting As High As 21% During Launch @ DOUBLE digits EPCs 
				</div>

				<div className="md18 sm14 xs14 bluelight-clr-3 lh30px mt2">
					 I was awarded the JVZoo user of the year for both 2020 and 2021... and the #4 best selling vendor for the year for 2021.
				</div>
			</div>
		</div>
	</div>
	<div className="container mycontainer2">


	</div>
</div>
  )
}

export default Product