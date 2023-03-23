import React,{useState,useEffect} from "react";
import Images from "../../../Assets/images/Ai-2.jpg";
import Images1 from "../../../Assets/images/x-mark.png";


function Popup() {
    const [showModal,setShowModal] =useState(false)
    useEffect(() => {
    document.addEventListener('mouseleave', function () {
        // modalBox.style.display = "block"
        setShowModal(true)
        })
        return ()=>  document.removeEventListener('mouseleave',()=> {
        console.log('event removed')
        });
   },[]) 
    const hideModal = () => {
        setShowModal(false)
        document.removeEventListener('mouseleave',()=> {
        console.log('event removed')
        });
 }
    return (
        <>
        
            <div id='modalBox' className={showModal ? 'show' : null }>
        <img src={Images} width='100% ' alt='' height={"80%"} />

        <div className='offer-text'>
          <h2>Get 15% OFF</h2>
          <small>on all our Templates</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            deleniti commodi. Soluta, sed eos! Error ut ipsum repellendus
            repellat mollitia, earum, quo incidunt corrupti quae odit magni
            fugiat, nisi illum.
          </p>
          <form action=''>
            <input type='email' placeholder='Email Address' />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
                <img src={Images1} alt='' className='close-icon' id='close-icon' onClick={hideModal}  />
      </div>
    </>
  );
}

export default Popup;
