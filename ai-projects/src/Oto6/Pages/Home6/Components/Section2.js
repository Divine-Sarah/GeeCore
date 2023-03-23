import React from "react";
import Image from "../../../Assets/images/ai15.png";
import Image2 from "../../../Assets/images/vidFream.png";
import Image3 from "../../../Assets/images/payment2.png";
import Image4 from "../../../Assets/images/window.png";
import Image5 from "../../../Assets/images/arrow2.png";
import Image6 from "../../../Assets/images/arrow.png";

function Section2() {
  return (
    <div className='section6 container'>
      <div className='ai-element15'>
        <img src={Image} alt='' className='img-fluid center-block ai15' />
      </div>

      <div className='mycontainer2 container'>
        <div className='row justify-content-center'>
          <div className='col-12 text-center'>
            <h3 className='lg50 md40 sm30 xs24 w700 lh140'>
              <span style={{ color: "#6533ef" }}>DEMO VIDEO:</span> Watch To Be
              Amazed!
            </h3>

            <p className='lg32 md24 sm18 xs18 w400 lh150 mt1'>
              Unprecedented Sophistication &{" "}
              <br className='d-none d-lg-block' /> Effortless AI Marketing
              Technology
            </p>
          </div>

          <div className='col-12 text-center introVid-section mt4'>
            <img
              src={Image2}
              className='img-fluid mx-auto d-block vidFream'
              alt='vidFream'
            />

            <div className='col-12 introVid'>
              <div className='responsive-video'>
                <object
                  data='https://player.vimeo.com/video/643376929/?autoplay=0&amp;loop=0'
                  aria-label='/'
                ></object>
              </div>
            </div>
          </div>

          <div className='col-12 text-center mt7'>
            <h3 className='lg40 md30 sm25 xs22 w700 lh140'>
              All Upgrades Included When You Act Now
            </h3>

            <h3 className='lg30 md22 sm22 xs22 w600 lh140 mt3'>
              Get MarketingBlocks For Just{" "}
              <span style={{ color: "#ff3030" }}>
                <s>$4,997/yr</s>
              </span>{" "}
              <span className='w700' style={{ color: "#3bb349" }}>
                $497
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='button-box text-center mt4'>
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
                        src={Image6}
                        className='img-fluid center-block arrow'
                        alt='arrow'
                      />{" "}
                    </span>
                  </span>
                </a>
              </div>

              <img
                src={Image3}
                className='img-fluid mx-auto d-block payment mt1'
                alt='payment'
              />
              <img
                src={Image4}
                className='img-fluid mx-auto d-block window mt1'
                alt='window'
              />

              <h3 className='lg27 md24 sm20 xs18 w400 lh150 mt5'>
                Only $497 For 1 Year{" "}
                <span style={{ color: "#01a113" }}>
                  <b>
                    <u>UNLIMITED</u> ACCESS
                  </b>
                </span>
                <b>
                  {" "}
                  <br />
                  <u>No Upsells</u>
                </b>{" "}
                - No Hidden Fee - <b>Cancel Anytime</b>
              </h3>

              <img
                src={Image5}
                className='img-fluid mx-auto d-block arrow2 mt5'
                alt='arrow'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
