import React from "react";
import Table from "../../../Assets/images/tableLogo1.png";
import Paytm from "../../../Assets/images/paytm4.png";
// import Window2 from '../images/window4.png'
import Window3 from "../../../Assets/images/window3.png";

function Section48() {
  return (
    <div class='section48' id='table'>
      <div class='mycontainer2'>
        <div class='row justify-content-center'>
          <div class='col-12 titleBg23'>
            <h3 class='lg40 md30 sm25 xs22 w700 lh140'>Video AI Profit</h3>
          </div>
        </div>

        <div class='row justify-content-center mt4'>
          <div class='col-md-6 table-box-out1' id='table'>
            <div class='col-12 table-box1'>
              <div class='col-12 pro-top'>
                <div class='col-12 pro-title-box-out'>
                  <div class='col-12 pro-title-box'>
                    <img
                      src={Table}
                      class='img-fluid mx-auto d-block tableLogo'
                      alt='logo'
                    />

                    <p class='md20 sm16 xs14 w700 lh160 text-center mt3'>
                      <span class='personal'>DIAMOND</span>
                    </p>
                  </div>
                </div>

                <div class='col-12 pro-list'>
                  <ul class='price-checklist1 lg18 md18 sm16 xs14 w500 lh130 text-left mt2'>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-12 text-center mt6'>
                {/* <!--	<h1 class="lg33 md33 sm28 xs24 w700 lh140 mt1 text-center text-white">Commercial License Included <br class="d-none d-lg-block"/> When You Act Now</h1> --> */}

                <h3 class='lg27 md24 sm20 xs18 w400 lh150 mt2 text-white'>
                  Image Pro Bundle <br class='d-none d-lg-block' /> 1 Million
                  Credits
                </h3>
                <h3 class='lg27 md24 sm20 xs18 w400 lh160'>
                  {" "}
                  <span style={{ color: "#ff6363" }}>
                    <s>$997 / yr</s>
                  </span>{" "}
                  <span
                    class='lg34 md30 sm28 xs22 w700'
                    style={{ color: "#fff000" }}
                  ></span>
                  $297 / yr{" "}
                </h3>

                {/* <!-- <h1 class="lg33 md33 sm28 xs24 w700 lh150 mt1 text-center text-white">All Upsells Included</h1> --> */}

                {/* <!-- <p class="lg18 md18 sm14 xs14 w700 lh150 mt5 text-center"> <span class="title24">
						<img src="images/offer.png" class="img-fluid center-block offer" alt="offer">
						Coupon Code: MB50 For $50 Off</span> </p> -->  */}

                <div class='mt6'>
                  <a href='https://www.jvzoo.com/b/107509/391483/2'>
                    <img
                      src='https://i.jvzoo.com/107509/391483/2'
                      alt='MarketingBlocks - Special BUNDLE - Diamond - Diamond'
                      border='0'
                      class='img-fluid mx-auto d-block'
                    />
                  </a>
                </div>

                <img
                  src={Paytm}
                  class='img-fluid mx-auto d-block paytm4 mt3'
                  alt='paytm'
                />
                <img
                  src={Window3}
                  class='img-fluid mx-auto d-block window mt1'
                  alt='window'
                />

                <p class='lg18 md18 sm16 xs14 w400 lh150 mt3 text-center text-white'>
                  <span class='w700' style={{ color: "rgb(244,67,54)" }}>
                    Only $297 Yearly For <u>1 Million</u> Credits
                  </span>
                  <br class='d-none d-lg-block' />{" "}
                  <u class='w700'>No Upsells</u> - No Hidden Fee -{" "}
                  <span class='w700'>Cancel Anytime</span>
                </p>
              </div>
            </div>
          </div>

          {/* <!--
			<div class="col-12 text-center mt2">
				<h3 class="lg27 md24 sm20 xs18 w400 lh150 mt2">Only $297 Yearly For <span style="color:#8bc34a"><b><u>UNLIMITED</u> ACCESS</span> <br/>
				<u>No Upsells</u></b> - No Hidden Fee - <b>Cancel Anytime</b>
				</h3>
			</div> --> */}
        </div>
      </div>
    </div>
  );
}

export default Section48;
