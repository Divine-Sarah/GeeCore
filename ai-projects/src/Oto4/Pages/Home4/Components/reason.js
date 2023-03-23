import React from "react";
import Image1 from "../../../Assets/images/offerperfect-img-1.png";
import Image2 from "../../../Assets/images/offerperfect-img-2.png";
import Image3 from "../../../Assets/images/offerperfect-img-3.png";

function reason() {
  return (
    <div className='reason-section'>
      <div className='container mycontainer'>
        <div className='row'>
          <div className='col-12'>
            <div className='text-center md40 sm30 xs25 w800'>
              This Offer Is Perfect For Your List,{" "}
              <br className='d-none d-lg-block' /> Here Is Why…
            </div>
          </div>
        </div>

        <div className='row justify-content-around mt5'>
          <div className='col-lg-5 col-md-6 col-12 order-md-1 align-self-center'>
            <div className='md22 sm20 xs16 w700 reasonBordergreen'>
              <span>Reason #1</span>
            </div>
            <div className='md32 sm25 xs20 w700 mt2'>
              TURN YOUR SCRIPT GENERATED FROM ChatGPT TO VIDEOS
            </div>

            <div className='md18 sm14 xs14 bluelight-clr-3 w300 mt2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              cum iusto commodi in repellat blanditiis.
            </div>
            <div className='md18 sm14 xs14 bluelight-clr-3 w300 mt3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, porro! <span className='w700'>Lorem, ipsum.</span>
            </div>
          </div>
          <div className='col-md-6 col-12 align-self-center'>
            <img
              src={Image1}
              alt='offerperfect-img'
              className='img-fluid mx-auto d-block'
            />
          </div>
        </div>

        <div className='row justify-content-around mt10'>
          <div className='col-lg-5 col-md-6 col-12 align-self-center'>
            <div className='md22 sm20 xs16 w700 reasonBordergreen'>
              <span>Reason #2</span>
            </div>
            <div className='md32 sm25 xs20 w700 mt2'>
              TURN YOUR BLOG TO LIVE VIDEOS
            </div>

            <div className='md18 sm14 xs14 bluelight-clr-3 w300 mt2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              necessitatibus accusamus nihil, quaerat quam ipsa!{" "}
              <span className='w700'>lorem</span> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Adipisci non assumenda
              necessitatibus!
            </div>
          </div>
          <div className='col-md-6 col-12 align-self-center'>
            <img
              src={Image2}
              alt='offerperfect-img'
              className='img-fluid mx-auto d-block'
            />
          </div>
        </div>

        <div className='row justify-content-around mt10'>
          <div className='col-lg-5 col-md-6 col-12 order-md-12 align-self-center'>
            <div className='md22 sm20 xs16 w700 reasonBordergreen'>
              <span>Reason #3</span>
            </div>
            <div className='md32 sm25 xs20 w700 mt2'>
              UPLOAD VIDEOS TO YOUTUBE AND GET IT MONETIZED
            </div>

            <div className='md18 sm14 xs14 bluelight-clr-3 w300 mt2'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              repudiandae odio omnis.
            </div>
            <div className='md18 sm14 xs14 bluelight-clr-3 w300 mt3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              aperiam vitae obcaecati nesciunt error!
              <span className='w700'>Lorem</span> Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className='col-md-6 col-12 order-md-1 align-self-center'>
            <img
              src={Image3}
              alt='offerperfect-img'
              className='img-fluid mx-auto d-block'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default reason;
