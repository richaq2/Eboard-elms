import React from 'react';
import MiddleSidebar from './MiddleSidebar';
import SideBar from './SideBar';
import Footer from '../Home/Footer'
import live from '../../images/live.png'
import avtar1 from '../../images/avtar1.png';
import av2 from '../../images/av2.jpg';
import av3 from '../../images/av3.png';
function LiveStream() {
    return ( 
        <>
        <SideBar/>
        <div className="main-content">
            <MiddleSidebar/>
        <div className="middle-sidebar-bottom">
        
  <div className="middle-sidebar-left">
    <div className="row">
      <div className="col-xl-8 col-xxl-9">
        <div className="card border-0 mb-0 rounded-lg overflow-hidden live-stream bg-image-center bg-image-cover" style={{backgroundImage: `url(${live})`}}>
          <div className="card-body d-flex justify-content-start p-2 position-absolute top-0 w-100 bg-gradiant-top">
            <figure className="avatar mb-0 mt-0 overflow-hidden"><img src={avtar1} alt="image" className="z-index-1 shadow-sm rounded-circle w40" /></figure><h5 className="text-white mt-1 fw-700 ml-2 z-index-1 ">Cabe Deo <span className="d-block font-xsssss mt-1 fw-400 text-grey-300 z-index-1 ">2 hour</span></h5>
            <span className="live-tag position-absolute right-15 mt-2 bg-danger p-2 z-index-1  rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
          </div>
          <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
            <a href="#" className="btn-round-xl d-md-inline-block d-none bg-blur m-3 mr-0 z-index-1"><i className="feather-grid text-white font-md" /></a>
            <a href="#" className="btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1"><i className="feather-mic-off text-white font-md" /></a>       
            <a href="#" className="btn-round-xxl bg-danger z-index-1"><i className="feather-phone-off text-white font-md" /></a>   
            <a href="#" className="btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1"><i className="ti-video-camera text-white font-md" /></a>   
            <a href="#" className="btn-round-xl d-md-inline-block d-none bg-blur m-3 ml-0 z-index-1"><i className="ti-settings text-white font-md" /></a>  
            <span className="p-2 bg-blur z-index-1 text-white fw-700 font-xssss rounded-lg right-15 position-absolute mb-4 bottom-0">44:00</span>    
          </div>
        </div>
        <div className="card d-block border-0 rounded-lg overflow-hidden dark-bg-transparent bg-transparent mt-4 pb-4">
          <div className="row">
            <div className="col-10"><h2 className="fw-700 font-md d-block lh-4 mb-2">Learn Web development from scratch: HTML,CSS,JavaScript</h2></div>
            <div className="col-2">
              <a href="#" className="btn-round-md ml-3 mb-2 d-inline-block float-right rounded-lg bg-danger"><i className="feather-bookmark font-sm text-white" /></a>
              <a href="#" className="btn-round-md ml-0 d-inline-block float-right rounded-lg bg-greylight" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="feather-share-2 font-sm text-grey-700" />
              </a>
              <div className="dropdown-menu dropdown-menu-right p-3 border-0 shadow-xss" aria-labelledby="dropdownMenu2">
                <ul className="d-flex align-items-center mt-0 float-left">
                  <li className="mr-2"><h4 className="fw-600 font-xss text-grey-900  mt-2 mr-3">Share: </h4></li>
                  <li className="mr-2"><a href="#" className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white" /></a></li>
                  <li className="mr-2"><a href="#" className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white" /></a></li>
                  <li className="mr-2"><a href="#" className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white" /></a></li>
                  <li className="mr-2"><a href="#" className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white" /></a></li>
                  <li className="mr-2"><a href="#" className="btn-round-md bg-pinterest"><i className="font-xs ti-pinterest text-white" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <span className="font-xssss fw-700 text-grey-900 d-inline-block ml-0 text-dark"><b>Cassica Vanni</b></span>
          <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey" />
          <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Developer</span>
          <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Design</span>
          <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Developer</span>
          <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">HTML5</span>
          <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Javascript</span>
          <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey" />
          <span className="font-xssss fw-700 text-primary d-inline-block ml-0 "><b>Follow Author</b></span>
        </div>
        <div className="card d-block border-0 bg-transparent dark-bg-transparent">
          <ul className="memberlist mt-0 mb-2 ml-0">
            <li className="pl-4 w-auto"> <span className='text-success'>200+</span><a href="#" className="fw-500 text-warning font-xssss">Member already downloaded</a></li>
          </ul>
        </div>
      </div>
      <div className="col-xl-4 col-xxl-3">
        <div className="card w-100 d-block chat-body p-0 border-0 shadow-xss rounded-lg mb-3 position-relative">
          <div className="messages-content scroll-bar p-3">
            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av2} />
                </figure>
                <div>
                  <h5 className="font-xssss mt-2">Byrom Guittet</h5>
                  <div className="time">01:35 PM</div>
                </div>
              </div>
              <div className="message-wrap shadow-none">I'm fine, how are you 😃</div>
            </div>
            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av2} />
                </figure>
                <div>
                  <h5 className="font-xssss mt-2">Byrom Guittet</h5>
                  <div className="time">01:35 PM<i className="ti-double-check text-info" /></div>
                </div>
              </div>
              <div className="message-wrap shadow-none">I want those files for you. I want you to send 1 PDF and 1 image file.</div>
            </div>
            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av2} />
                </figure>
                <div>
                  <h5 className="font-xssss mt-2">Byrom Guittet</h5>
                  <div className="time">01:35 PM</div>
                </div>
              </div>
              <div className="message-wrap shadow-none">I've found some cool photos for our travel app.</div>
            </div>
            <div className="message-item outgoing-message">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av3}/>
                </figure>
                <div>
                  <h5>You</h5>
                  <div className="time">01:35 PM<i className="ti-double-check text-info" /></div>
                </div>
              </div>
              <div className="message-wrap text-black">Hey mate! How are things going ?</div>
            </div>
            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av2} />
                </figure>
                <div>
                  <h5 className="font-xssss mt-2">Byrom Guittet</h5>
                  <div className="time">01:35 PM</div>
                </div>
              </div>
              <div className="message-wrap shadow-none">I'm fine, how are you 😃</div>
            </div>
            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av2} alt="image" />
                </figure>
                <div>
                  <h5 className="font-xssss mt-2">Byrom Guittet</h5>
                  <div className="time">01:35 PM<i className="ti-double-check text-info" /></div>
                </div>
              </div>
              <div className="message-wrap shadow-none">I want those files for you. I want you to send 1 PDF and 1 image file.</div>
            </div>
            <div className="message-item">
              <div className="message-user">
                <figure className="avatar">
                  <img src={av2} alt="image" />
                </figure>
                <div>
                  <h5 className="font-xssss mt-2">Byrom Guittet</h5>
                  <div className="time">01:35 PM</div>
                </div>
              </div>
              <div className="message-wrap shadow-none">I've found some cool photos for our travel app.</div>
            </div>
          </div>
          <form className="chat-form position-absolute bottom-0 w-100 left-0 bg-white z-index-1 p-3 shadow-xs theme-dark-bg ">
            <button className="bg-success float-left"><i className="ti-microphone text-white" /></button>
            <div className="form-group"><input type="text" placeholder="Start typing.." /></div>          
            <button className="bg-primary"><i className="ti-arrow-right text-white" /></button>
          </form>
        </div>
      </div>
    </div>
  </div>
 <div className="middle-sidebar-right right-scroll-bar">
  <div className="middle-sidebar-right-content">
    <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0">
      <div className="card-body p-2 d-block text-center bg-no-repeat bg-image-topcenter" style={{backgroundImage: 'url(images/user-pattern.png)'}}>
        <a href="#" className="position-absolute right-0 mr-4"><i className="feather-edit text-grey-500 font-xs" /></a>
        <figure className="avatar ml-auto mr-auto mb-0 mt-2 w90"><img src="https://via.placeholder.com/50x50.png" alt="image" className="float-right shadow-sm rounded-circle w-100" /></figure>
        <div className="clearfix" />
        <h2 className="text-black font-xss lh-3 fw-700 mt-3 mb-1">Hendrix Stamp</h2>
        <h4 className="text-grey-500 font-xssss mt-0"><span className="d-inline-block bg-success btn-round-xss m-0" /> Available</h4>
        <div className="clearfix" />
        <div className="col-12 text-center mt-4 mb-2">
          <a href="#" className="p-0 ml-1 btn btn-round-md rounded-xl bg-lightblue"><i className="text-current ti-comment-alt font-sm" /></a>
          <a href="#" className="p-0 ml-1 btn btn-round-md rounded-xl bg-lightblue"><i className="text-current ti-lock font-sm" /></a>
          <a href="#" className="p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-primary font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
        </div>
        <ul className="list-inline border-0 mt-4">
          <li className="list-inline-item text-center mr-4"><h4 className="fw-700 font-md">500+ <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
          <li className="list-inline-item text-center mr-4"><h4 className="fw-700 font-md">88.7 k <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
          <li className="list-inline-item text-center"><h4 className="fw-700 font-md">1,334 <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
        </ul>
        <div className="col-12 pl-0 mt-4 text-left">
          <h4 className="text-grey-800 font-xsss fw-700 mb-3 d-block">My Skill <a href="#"><i className="ti-angle-right font-xsssss text-grey-700 float-right " /></a></h4>
          <div className="carousel-card owl-carousel owl-theme overflow-visible nav-none">
            <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3" /></a></div>
            <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3" /></a></div>
            <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3" /></a></div>
            <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3" /></a></div>
            <div className="item"><a href="#" className="btn-round-xxxl border bg-greylight"><img src="https://via.placeholder.com/50x50.png" alt="icon" className="p-3" /></a></div>
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
  </div>
</div>

</div>
<Footer/>

</div>
</>
 
     );
}

export default LiveStream;