import React from 'react';
import MiddleSidebar from './MiddleSidebar';
import SideBar from './SideBar';
import avtar1 from '../../images/avtar1.png';
import av2 from '../../images/av2.jpg';
import av3 from '../../images/av3.png';
function Chat() {
    return ( 
        <>
       
        <SideBar/>
       <div className="main-content">
       <MiddleSidebar/>
       <div className="middle-sidebar-bottom">
       <div className="middle-sidebar-left bg-white dark-bg-transparent mr-3 pr-0">
  <div className="row">
    <div className="col-lg-6 col-xl-4 col-md-6 chat-left scroll-bar border-right-light pl-4 pr-4">
      <form action="#" className="mt-0 pl-3 pt-3">
        <div className="search-form">
          <i className="ti-search font-xs" />
          <input type="text" className="form-control text-grey-500 mb-0 bg-greylight border-0" placeholder="Search here." />
        </div>
      </form>
      <div className="section full mt-2 mb-2 pl-3">
        <ul className="list-group list-group-flush">
          <li className="bg-transparent list-group-item no-icon pl-0"><figure className="avatar float-left mb-0 mr-3"><img src={av2} alt="image" className="w45" /></figure><h3 className="fw-700 mb-0 mt-1"><a className="font-xsss text-grey-900 text-dark d-block" href="chat.html">Byrom Guitte</a></h3> <span className="d-block text-success">typing...</span> <span className="badge mt-0 text-grey-500 badge-pill">4:09 pm</span><div className="snippet float-right " data-title=".dot-typing"><div className="stage"><div className="dot-typing bg-primary" /></div></div></li>
          <li className="bg-transparent list-group-item no-icon pl-0"><figure className="avatar float-left mb-0 mr-3"><img src={avtar1} alt="image" className="w45" /></figure><h3 className="fw-700 mb-0 mt-1"><a className="font-xsss text-grey-900 text-dark d-block" href="chat.html">Victor Exrixon</a></h3> <span className="d-block">What's up, how are you?</span> <span className="badge badge-primary text-white badge-pill">2</span></li>
          <li className="bg-transparent list-group-item no-icon pl-0"><figure className="avatar float-left mb-0 mr-3"><img src={av3} alt="image" className="w45" /></figure><h3 className="fw-700 mb-0 mt-1"><a className="font-xsss text-grey-900 text-dark d-block" href="chat.html">Surfiya Zakir</a></h3> <span className="d-block">What's up, how are you?</span> <span className="badge badge-danger text-white badge-pill">6</span></li>
          <li className="bg-transparent list-group-item no-icon pl-0"><figure className="avatar float-left mb-0 mr-3"><img src={avtar1} alt="image" className="w45" /></figure><h3 className="fw-700 mb-0 mt-1"><a className="font-xsss text-grey-900 text-dark d-block" href="chat.html">Goria Coast</a></h3> <span className="d-block">What's up, how are you?</span> <span className="badge badge-primary text-white badge-pill">8</span></li>
          <li className="bg-transparent list-group-item pl-0"><figure className="avatar float-left mb-0 mr-3"><img src={av2} alt="image" className="w45" /></figure><h3 className="fw-700 mb-0 mt-1"><a className="font-xsss text-grey-900 text-dark d-block" href="chat.html">Hurin Seary</a></h3> <span className="d-block">What's up, how are you?</span></li>
          
          
          
          
          
          <li className="bg-transparent list-group-item pl-0"><figure className="avatar float-left mb-0 mr-3"><img src={avtar1} alt="image" className="w45" /></figure><h3 className="fw-700 mb-0 mt-1"><a className="font-xsss text-grey-900 text-dark d-block" href="chat.html">Goria Coast</a></h3> <span className="d-block">What's up, how are you?</span></li>
          <li className="bg-transparent list-group-item pl-0"><figure className="avatar float-left mb-0 mr-3"><img src={av2} alt="image" className="w45" /></figure><h3 className="fw-700 mb-0 mt-1"><a className="font-xsss text-grey-900 text-dark d-block" href="chat.html">Hurin Seary</a></h3> <span className="d-block">What's up, how are you?</span></li>
        </ul>
      </div>
    </div>
    <div className="col-lg-6 col-xl-8 col-md-6 pl-0 d-none d-lg-block d-md-block">
      <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar">
        <div className="chat-body p-3 ">
          <div className="messages-content pb-5">
            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av2} alt="image" />
                </figure>
                <div>
                  <h5>Byrom Guittet</h5>
                  <div className="time text-success">online</div>
                </div>
              </div>
              <div className="message-wrap">I'm fine, how are you 😃</div>
            </div>
            <div className="message-item outgoing-message">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av3} alt="image" />
                </figure>
                <div>
                  <h5>Hendrix Stamp</h5>
                  <div className="time">01:35 PM<i className="ti-double-check text-info" /></div>
                </div>
              </div>
              <div className="message-wrap bg-primary">I want those files for you. I want you to send 1 PDF and 1 image file.</div>
            </div>
            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av2} alt="image" />
                </figure>
                <div>
                  <h5>Byrom Guittet</h5>
                  <div className="time">01:35 PM</div>
                </div>
              </div>
              <div className="message-wrap">Okay i will send you once i have done</div>
            </div>
            
            <div className="message-item outgoing-message">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av3} alt="image" />
                </figure>
                <div>
                  <h5>Hendrix Stamp</h5>
                  <div className="time">01:35 PM<i className="ti-double-check text-info" /></div>
                </div>
              </div>
              
              <div className="message-wrap bg-primary">Hey mate! How are things going ?</div>
            </div>
            <div className="message-item">
            <div className="message-user">
                <figure className="avatar">
                  <img src={av2} alt="image" />
                </figure>
                <div>
                  <h5>Byrom Guittet</h5>
                  <div className="time">01:35 PM</div>
                </div>
              </div>
              <div className="message-wrap">Just doing the assignments</div>
              
            </div>
            <div className="message-item outgoing-message">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av3} alt="image" />
                </figure>
                <div>
                  <h5>Hendrix Stamp</h5>
                  <div className="time">01:35 PM<i className="ti-double-check text-info" /></div>
                </div>
              </div>
              <div className="message-wrap bg-primary" style={{marginBottom: 90}}>Okay cool!!</div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
      <div className="chat-bottom dark-bg p-3 shadow-xss" style={{width: '98%'}}>
        <form className="chat-form">
          <button className="bg-success float-left"><i className="ti-microphone text-white" /></button>
          <div className="form-group"><input type="text" placeholder="Start typing.." className='text-black' /></div>          
          <button className="bg-primary"><i className="ti-arrow-right text-white" /></button>
        </form>
      </div> 
    </div>
  </div>
</div>
<div className="middle-sidebar-right scroll-bar">
  <div className="middle-sidebar-right-content">
    <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0">
      <div className="card-body p-2 d-block text-center bg-no-repeat bg-image-topcenter" style={{backgroundImage: 'url(images/user-pattern.png)'}}>
        <a href="#" className="position-absolute right-0 mr-4"><i className="feather-edit text-grey-500 font-xs" /></a>
        <figure className="avatar ml-auto mr-auto mb-0 mt-2 w90"><img src="https://via.placeholder.com/60x60.png" alt="image" className="float-right shadow-sm rounded-circle w-100" /></figure>
        <div className="clearfix" />
        <h2 className="text-black font-xss lh-3 fw-700 mt-3 mb-1">Hendrix Stamp</h2>
        <h4 className="text-grey-500 font-xssss mt-0"><span className="d-inline-block bg-success btn-round-xss m-0" /> Available</h4>
        <div className="clearfix" />
        <div className="col-12 text-center mt-4 mb-2">
          <a href="#" className="p-0 ml-1 btn btn-round-md rounded-xl bg-lightblue"><i className="text-current ti-comment-alt font-sm" /></a>
          <a href="#" className="p-0 ml-1 btn btn-round-md rounded-xl bg-lightblue"><i className="text-current ti-lock font-sm" /></a>
          <a href="#" className="p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
        </div>
        <ul className="list-inline border-0 mt-4">
          <li className="list-inline-item text-center mr-4"><h4 className="fw-700 font-md">500+ <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
          <li className="list-inline-item text-center mr-4"><h4 className="fw-700 font-md">88.7 k <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
          <li className="list-inline-item text-center"><h4 className="fw-700 font-md">1,334 <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
        </ul>
        <div className="col-12 pl-0 mt-4 text-left">
          <h4 className="text-grey-800 font-xsss fw-700 mb-3 d-block">My Skill <a href="#"><i className="ti-angle-right font-xsssss text-grey-700 float-right " /></a></h4>
          <div className="carousel-card owl-carousel owl-theme overflow-visible nav-none">
            <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/60x60.png" alt="icon" className="p-3" /></a></div>
            <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/60x60.png" alt="icon" className="p-3" /></a></div>
            <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/60x60.png" alt="icon" className="p-3" /></a></div>
            <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/60x60.png" alt="icon" className="p-3" /></a></div>
            <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/60x60.png" alt="icon" className="p-3" /></a></div>
          </div>
        </div>  
      </div>
    </div>
    <div className="card theme-light-bg overflow-hidden rounded-xxl border-0 mb-3">
      <div className="card-body d-flex justify-content-between align-items-end p-4">
        <div>
          <h4 className="font-xsss text-grey-900 mb-2 d-flex align-items-center justify-content-between mt-2 fw-700">
            Dark Mode
          </h4>
        </div>
        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input dark-mode-switch" id="darkmodeswitch" />
          <label className="custom-control-label bg-success" htmlFor="darkmodeswitch" />
        </div>
      </div>
    </div>
    <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0">
      <div className="card-body d-block text-left">
        <h1 className="text-grey-800 font-xl fw-900 mb-4 lh-3">Sign up for our newsletter</h1>
        <form action="#" className="mt-3">
          <div className="form-group icon-input">
            <i className="ti-email text-grey-500 font-sm" />
            <input type="text" className="form-control mb-2 bg-greylight border-0 style1-input pl-5" placeholder="Enail address" />
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="blankCheckbox" defaultValue="option1" aria-label />
            <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox">By checking this box, you confirm that you have read and are agreeing to our terms of use regarding.</label>
          </div>
        </form>
        <ul className="d-flex align-items-center justify-content-between mt-3">
          <li><a href="#" className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white" /></a></li>
          <li><a href="#" className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white" /></a></li>
          <li><a href="#" className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white" /></a></li>
          <li><a href="#" className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white" /></a></li>
          <li><a href="#" className="btn-round-md bg-pinterest"><i className="font-xs ti-pinterest text-white" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>


       </div>
       </div>
       </>
     );
}

export default Chat;