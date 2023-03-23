import React from 'react'
import Image from '../../../Assets/images/ME.jpg'

function About() {
  return (
 <div className="aboutme-banner container">
	<div className="container mycontainer">
		<div className="row justify-content-center">
			<div className="col-md-12 col-12 pt-60px ">
				<div className="text-center md40 sm30 xs25 w800 lh140">About Me</div>
				<img src={Image} alt="aboutme-img" className="img-fluid mx-auto d-block mt2" height="20px" width={"370"}/>
			</div>

			<div className="col-lg-11 col-12 mt2">
				<div className="md18 sm14 xs14 w400 lh160">
					Ifiok Nkem is a full-stack digital marketer, SaaSpreneur, JVZoo user of the year (2020 & 2021) and the #4 top selling Vendor on JVZoo for the year 2021.
				</div>
				<div className="md18 sm14 xs14 w400 lh160 mt2">
					After experiencing a massive career shift (Medical doctor turned digital marketer), he built a multi-million dollar online business starting with just $100 and a laptop he borrowed from a friend.
				</div>
				<div className="md18 sm14 xs14 w400 lh160 mt2">
					He founded SnapiLABs – a tech innovation lab that has created and successfully launched MULTIPLE SaaS Bestsellers... Over $5 million in sales and <span className="w700">40,000 happy users from 47 countries.</span>
				</div>
				<div className="md18 sm14 xs14 w400 lh160 mt2">
					Ifiok was vetted by <span className="w700 dblue-text"><u>Forbes & accepted into their prestigious Business Council</u></span> in recognition of his track record of successfully impacting entreprenuers & small businesses, industry leadership as well as personal and professional achievements.
				</div>
			</div>
		</div>
	</div>
</div>

  )
}

export default About