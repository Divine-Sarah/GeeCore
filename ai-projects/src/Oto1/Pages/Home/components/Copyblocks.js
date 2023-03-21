import React from 'react'
// import Image from '../images/ifiok-img.png'
import Image1 from '../../../Assets/images/facebook-icon.png'
import Image2 from '../../../Assets/images/skype-icon.png'

function Copyblocks() {
  return (
   <div className="copyblocks-section container">
	<div className="container mycontainer3">
		<div className="row justify-content-center">
			<div className="col-lg-10 col-md-12  col-12 mt3">
				<div className="copyblocks-video-banner">
					<div className="md40 sm30 xs25 w800 text-center lh160">
						Have Questions For Us?
					</div>
					<div className="md18 sm14 xs16 w300 text-center greylight-clr1 lh160">
						If you need any help with your promo, Feel free to get in touch at any time.
					</div>
					
					{/* <img src={Image} alt="ifiok-img" className="img-fluid mx-auto d-block mt2"/> */}
					<div className="md24 sm20 xs18 text-center w700">Dr. Ifiok NKEM</div>
					<div className="text-center mt2">
						<a href="https://www.facebook.com/ifiok.nkem" target="blank">
							<img src={Image1} alt="" className="img-fluid"/>
						</a>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="skype:ifioknkem?chat">
							<img src={Image2} alt="" className="img-fluid"/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Copyblocks