import React from "react";
import Image from "../Assets/images/logo.png";
// import Uncheck from '../images/uncheck.png'
import Video from "../Assets/images/videoBg.png";
import Arrow from "../Assets/images/arrow.png";
import Payment from "../Assets/images/payment.png";
import Window from "../Assets/images/window.png";

function Banner() {
  return (
    <>
      <div className='mycontainer'>
        <div className='row justify-content-center'>
          <div className='col-12 text-center'>
            <img
              src={Image}
              className='img-fluid mx-auto d-block logo'
              alt='logo'
            />

            {/* <p className="lg20 md18 sm16 xs14 w500 lh150 text-white mt3">
					<span className="banner-title">The Future of Marketing Is Here</span>
				</p> 
				 */}
            <h1
              className='lg48 md40 sm30 xs25 w400 lh130 mt2'
              style={{ color: "#fff" }}
            >
              Introducing ‘Image AI Profit Pro’.{" "}
              <br className='d-none d-md-block' />{" "}
              <span className='w700' style={{ color: "#fff" }}>
                AI Thumbnails Builder
              </span>
            </h1>
          </div>

          {/* <div className="col-12 titleBg1">
				<h3 className="titleBg1-text w500 lh150">							
				Finally, Get ALL Your Landing Pages, Promo Videos, Ads, <br className="d-none d-md-block"/> Marketing Copy, Graphics, Email Swipes, Voiceovers, Blog <br className="d-none d-md-block"/> Post, Articles, Art & <i>More...</i>Done In <u style={{color:"#ffcd32"}}>60 Secs</u> By AI
				</h3>
			</div> */}

          {/* <div className="col-12 text-center">
				<p className="lg25 md22 sm20 xs14 w400 lh140 text-white mt3">
					<span className="uncheck-box">						
						<img src={Uncheck} className="img-fluid center-block uncheck" alt="uncheck"/>  Watch AI Takes Over Your Marketing:					
					</span>
				</p>
			</div> */}
        </div>
      </div>
      <div />

      <div className='banner-section'>
        <div id='particles-js'></div>

        <div className='container-fluid' style={{ overflow: "hidden" }}>
          <div className='row justify-content-center'>
            <div className='col-12 banner-box'>
              <div className='row m-0'>
                <div className='col-md-3 p-0 text-left'></div>

                <div className='col-md-6 text-center padding0 align-self-center'>
                  <div className='video-box'>
                    <img
                      src={Video}
                      className='img-fluid center-block videoBg'
                      alt='videoBg'
                    />

                    <div
                      className='mainvideo-section'
                      style={{ marginBottom: "5%" }}
                    >
                      <div className='autoplayer-area'>
                        <div className='autoplayer-subarea autoplayer-subarea-16-by-9'>
                          <div id='autoplayer'>
                            <iframe
                              width='560'
                              height='315'
                              src='https://www.youtube.com/embed/sSpBt0IssPQ'
                              title='YouTube video player'
                              frameborder='0'
                              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                        <div className='autoplayer-overlay'>
                          <div className='autoplayer-overlay-background'></div>
                          <div className='autoplayer-overlay-content'>
                            <span className='animated infinite pulse inline-block'>
                              Click Here To Unmute Video
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-md-3 p-0 text-right">

					
						
					
					</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mycontainer2'>
        <div className='row justify-content-center'>
          <div className='col-12 text-center'>
            <h4
              className='lg26 md24 sm20 xs18 w400 lh160'
              style={{ color: "#fff" }}
            >
              Image AI Profit Pro Turns Your Texts/Ideas To ‘Images’
              <br className='d-none d-md-block' />
              and Gets Them Monetized or{" "}
              <span className='w700' style={{ color: "#fff" }}>
                Use In Your Blogs
              </span>{" "}
            </h4>
          </div>
        </div>
      </div>

      <div className='mycontainer2 mt1'>
        <div className='row justify-content-center'>
          <div className='col-12 text-center mt3'>
            <h2
              className='lg34 md26 sm26 xs20 w700 lh170'
              style={{ color: "#fff" }}
            >
              All Upgrades Included ONLY
            </h2>
            <h1
              className='lg42 md30 sm30 xs22 lh170 w700 '
              style={{ color: "#fff" }}
            >
              When You Act NOW!
            </h1>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='button-box text-center mt2'>
              <div className='mybutton mybutton-box'>
                <a
                  href='#table'
                  className='text-center xl40 lg38 md36 sm30 xs20 w700'
                >
                  <span className='mybutton-btn'>
                    <span className='mybutton-text'>
                      Get Instant Access Now
                    </span>

                    <span className='btn-arrow'>
                      <img
                        src={Arrow}
                        className='img-fluid center-block arrow'
                        alt='arrow'
                      />{" "}
                    </span>
                  </span>
                </a>
              </div>

              <img
                src={Payment}
                className='img-fluid mx-auto d-block payment mt1'
                alt='payment'
              />
              <img
                src={Window}
                className='img-fluid mx-auto d-block window mt1'
                alt='window'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
