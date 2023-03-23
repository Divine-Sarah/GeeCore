import React from 'react'

function Footer() {
  return (
    <footer className="footerBG ">
	<div className="container mycontainer">
		<div className="row">
			<div className="col-md-5 col-12">
				<div className="text-sm-left text-center w300 footer-color xs15 mt2">© CopyBlocks By MarketingBlocks. All rights Reserved</div>
			</div>
			<div className="col-md-7 col-12">
				<div className="text-center w300 footer-color md18 sm14 xs16 mt1 xsmt4">
					<a href="/" className="white" target="_blank">Terms & Conditions</a>&nbsp; | &nbsp;
					<a href="/" className="white" target="_blank">Privacy Policy</a>&nbsp; | &nbsp; 
					<a href="/" className="white" target="_blank">Earnings Disclaimer</a>&nbsp; | &nbsp;
					<a href="/" className="white" target="_blank">Cookie Policy</a>
				</div>
			</div>
		</div>
	</div>
</footer>
  )
}

export default Footer