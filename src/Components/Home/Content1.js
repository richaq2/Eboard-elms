  import React from 'react';
  import '../../css/style.css';
  import '../../css/feather.css';
  import '../../css/themify-icons.css';
  import star from '../../images/star.png';
  import stardisable from '../../images/star-disable.png';
  import data from '../../images/data.jpg';
  import DSA from '../../images/DSA.jpg';
  import java from '../../images/java.jpg';
  import sql from '../../images/sql.jpg';
  import htmlcss from '../../images/htmlcss.jpg';
  import py from '../../images/py.jpg';
  import hack from '../../images/hack.jpg';
  import live from '../../images/live.png';
  import avtar1 from '../../images/avtar1.png';
  import av2 from '../../images/av2.jpg';
  import av3 from '../../images/av3.png';
  function Content1() {
    var live1 ={
      backgroundImage:"url("+{live}+")"
    }
  return ( 
      <>
  <div className="how-to-work pb-lg--7">
    <div className="container">
      <div className="row justify-content-center">
        <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
          <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">Online Popular Course</h2>
          <p className="fw-300 font-xsss lh-28 text-grey-500">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
            <div className="card-image w-100 mb-3">
              <img src={data} alt="image" className="w-100" />
            </div>
            <div className="card-body pt-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Data</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 370</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900"> Complete Data Science course </a></h4>
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 23 Lesson </h6>
              
              <div className="star float-left text-left mb-0">
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={stardisable} alt="star" className="w10 float-left mr-2" />
              </div>
              <p className="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3"> 2 customer review</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
            <div className="card-image w-100 mb-3">
              <img src={py} alt="image" className="w-100" />
            </div>
            <div className="card-body pt-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Language</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 450</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Complete Python Bootcamp From Zero to Hero in Python </a></h4>
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 24 Lesson  </h6>
             
              <div className="star float-left text-left mb-0">
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={stardisable} alt="star" className="w10 float-left mr-2" />
              </div>
              <p className="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3"> 2 customer review</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
            <div className="card-image w-100 mb-3">
              <img src={htmlcss
              } alt="image" className="w-100" />
            </div>
            <div className="card-body pt-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Development</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 670</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900"> Learn Web Development from Scratch:HTML,CSS,JavaScript</a></h4>
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 32 Lesson </h6>
              
              <div className="star float-left text-left mb-0">
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={stardisable} alt="star" className="w10 float-left mr-2" />
              </div>
              <p className="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3"> 2 customer review</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
            <div className="card-image w-100 mb-3">
              <img src={java
              } alt="image" className="w-100" />
            </div>
            <div className="card-body pt-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Language</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 670</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900"> Learn How to Code in JAVA</a></h4>
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 32 Lesson </h6>
              
              <div className="star float-left text-left mb-0">
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={stardisable} alt="star" className="w10 float-left mr-2" />
              </div>
              <p className="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3"> 2 customer review</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
            <div className="card-image w-100 mb-3">
              <img src={hack
              } alt="image" className="w-100" />
            </div>
            <div className="card-body pt-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Cyber security</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 670</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Learn ethical hacking</a></h4>
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 32 Lesson </h6>
              
              <div className="star float-left text-left mb-0">
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={stardisable} alt="star" className="w10 float-left mr-2" />
              </div>
              <p className="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3"> 2 customer review</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
            <div className="card-image w-100 mb-3">
              <img src={sql
              } alt="image" className="w-100" />
            </div>
            <div className="card-body pt-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Database</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 670</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Intoduction to SQL</a></h4>
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 32 Lesson </h6>
              
              <div className="star float-left text-left mb-0">
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={star} alt="star" className="w10 mr-1 float-left" />
                <img src={stardisable} alt="star" className="w10 float-left mr-2" />
              </div>
              <p className="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3"> 2 customer review</p>
            </div>
          </div>
        </div>
        
        </div>
        </div>
  </div>
  <div className="how-to-work pb-lg--7">
    <div className="container">
      <div className="row justify-content-center">
        <div className="page-title style1 col-xl-8 col-lg-8 col-md-10 text-center mb-5">
          <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">Are you Looking for Live Class ?</h2>
          <p className="fw-300 font-xsss lh-28 text-grey-500">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 mb-0 rounded-lg overflow-hidden live-stream bg-image-center bg-image-cover" style={{live}}>
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
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 mt-5">
          <div className="row">
            <div className="col-lg-3 col-xs-6 col-sm-6">
              <h2 className="display4-size display4-md-size fw-700 open-font mb-3">4.7</h2>
              <div className="star d-block w-100 text-left">
                <img src={star} alt="star" className="w15" />
                <img src={star} alt="star" className="w15" />
                <img src={star} alt="star" className="w15" />
                <img src={star} alt="star" className="w15" />
                <img src={stardisable} alt="star" className="w15" />
              </div>
              <h4 className="font-xssss text-grey-900 fw-700 mt-2">433 rating Based</h4>
            </div>
            <div className="col-lg-3 col-xs-6 col-sm-6">
              <h2 className="display4-size display4-md-size fw-700 open-font mb-3">210<span className="font-xxl">%</span> <i className="feather-arrow-up-right text-success font-xl" /></h2>
              <h4 className="font-xssss text-grey-500 fw-600 mt-2"> 433 rating</h4>
              <h4 className="font-xssss text-grey-900 fw-700 mt-2">Increase in revenue</h4>
            </div>
            <div className="col-lg-3 col-xs-6 col-sm-6">
              <h2 className="display4-size display4-md-size fw-700 open-font mb-3">20<span className="font-xxl">%</span> <i className="feather-arrow-down-right text-danger font-xl" /></h2>
              <h4 className="font-xssss text-grey-500 fw-600 mt-2"> 433 rating</h4>
              <h4 className="font-xssss text-grey-900 fw-700 mt-2">Increase in revenue</h4>
            </div>
            <div className="col-lg-3 col-xs-6 col-sm-6">
              <h2 className="display4-size display4-md-size fw-700 open-font mb-3">43K<span className="font-xxl">+</span> <i className="feather-arrow-up-right text-success font-xl" /></h2>
              <h4 className="font-xssss text-grey-500 fw-600 mt-2"> 433 rating</h4>
              <h4 className="font-xssss text-grey-900 fw-700 mt-2">Increase in revenue</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="feedback-wrapper  pb-5 pt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-left mb-5 pb-0">
          <h2 className="text-grey-800 fw-700 display1-size display2-md-size lh-2">Elomoas love  what we do</h2>
        </div>
        <div className="col-lg-12">
          <div className="feedback-slider owl-carousel owl-theme overflow-visible dot-none right-nav pb-4">
            <div className="owl-items text-center">
              <div className="card w-100 p-5 text-left border-0 shadow-xss rounded-lg">
                <div className="card-body pl-0 pt-0">
                  <img src={av2} alt="user" className="w45 float-left mr-3" />
                  <h4 className="text-grey-900 fw-700 font-xsss mt-0 pt-1">Goria Coast</h4>    
                  <h5 className="font-xssss fw-500 mb-1 text-grey-500">Digital Marketing Executive</h5>
                </div>
                <p className="font-xsss fw-400 text-grey-500 lh-28 mt-0 mb-0 ">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</p>
                <div className="star d-block w-100 text-right mt-4 mb-0">
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                </div>
              </div>
            </div>
            <div className="owl-items text-center">
              <div className="card w-100 p-5 text-left border-0 shadow-xss rounded-lg">
                <div className="card-body pl-0 pt-0">
                  <img src={avtar1} alt="user" className="w45 float-left mr-3" />
                  <h4 className="text-grey-900 fw-700 font-xsss mt-0 pt-1">Thomas Smith</h4>    
                  <h5 className="font-xssss fw-500 mb-1 text-grey-500">Digital Marketing Executive</h5>
                </div>
                <p className="font-xsss fw-400 text-grey-500 lh-28 mt-0 mb-0 ">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</p>
                <div className="star d-block w-100 text-right mt-4 mb-0">
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                </div>
              </div>
            </div>
            <div className="owl-items text-center">
              <div className="card w-100 p-5 text-left border-0 shadow-xss rounded-lg">
                <div className="card-body pl-0 pt-0">
                  <img src={av3} alt="user" className="w45 float-left mr-3" />
                  <h4 className="text-grey-900 fw-700 font-xsss mt-0 pt-1">Hurin Seary</h4>    
                  <h5 className="font-xssss fw-500 mb-1 text-grey-500">Digital Marketing Executive</h5>
                </div>
                <p className="font-xsss fw-400 text-grey-500 lh-28 mt-0 mb-0 ">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</p>
                <div className="star d-block w-100 text-right mt-4 mb-0">
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={stardisable} alt="star" className="w15 float-left mr-2" />
                </div>
              </div>
            </div>
            <div className="owl-items text-center">
              <div className="card w-100 p-5 text-left border-0 shadow-xss rounded-lg">
                <div className="card-body pl-0 pt-0">
                  <img src={av2} alt="user" className="w45 float-left mr-3" />
                  <h4 className="text-grey-900 fw-700 font-xsss mt-0 pt-1">Goria Coast</h4>    
                  <h5 className="font-xssss fw-500 mb-1 text-grey-500">Digital Marketing Executive</h5>
                </div>
                <p className="font-xsss fw-400 text-grey-500 lh-28 mt-0 mb-0 ">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</p>
                <div className="star d-block w-100 text-right mt-4 mb-0">
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                  <img src={star} alt="star" className="w15 mr-1 float-left mr-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="subscribe-wrapper pt-5 pb-0">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card w-100 p-lg-5 p-4 rounded-xxl border-0" style={{background: '#faece3'}}>
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="fw-700 text-grey-900 display2-size display2-md-size lh-3 mb-3">Subscribe up to our newsletter</h2>
              </div>
              <div className="col-lg-8 text-center">
                <p className="font-xsss lh-28 text-grey-500"> Lorem ipsum dolor sit amet consectetur adipisicing, elit. Neque facilis corporis perferendis, debitis error exercitationem reiciendis odio.</p>
              </div>
              <div className="col-lg-6 text-center mt-md-4 mb-3">
                <div className="form-group icon-right-input style2-input mb-0"><input type="text" placeholder="Enter Email Address" className="form-control style2 rounded-xl bg-white border-0 font-xsss fw-500 pl-3" /><i className="feather-mail text-primary font-lg m-1" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer wrapper */}
  <div className="footer-wrapper mt-0 bg-white">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-sm-9 col-xs-12 md-mb-2">
              <a href="index.html"><h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">EBoard <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">Online Learning Course</span></h1></a>
              <p className="w-100 mt-5">41 madison ave, floor 24 new work, <br />NY 10010 1-877-932-7111 <br /> support@mail.com</p>
              <ul className="list-inline">
                <li className="list-inline-item mr-3"><a href="#"><i className="ti-facebook font-sm" /></a></li>
                <li className="list-inline-item mr-3"><a href="#"><i className="ti-twitter-alt font-sm" /></a></li>
                <li className="list-inline-item mr-3"><a href="#"><i className="ti-linkedin font-sm" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="ti-instagram font-sm" /></a></li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-2 col-sm-3 col-xs-6 md-mb-2">
              <h5>Language</h5>
              <ul>
                <li><a href="#">English</a></li>
                <li><a href="#">Spanish</a></li>
                <li><a href="#">Arab</a></li>
                <li><a href="#">Urdu</a></li>
                <li><a href="#">Brazil</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
              <h5>Channel</h5>
              <ul>
                <li><a href="#">Makeup</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Girls</a></li>
                <li><a href="#">Sandals</a></li>
                <li><a href="#">Headphones</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
              <h5>About</h5>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Term of use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
              <h5 className="mb-3">Office</h5>
              <p className="w-100">41 madison ave, floor 24 new work, NY 10010 <br />1-877-932-7111</p>
              <p className="w-100">41 madison ave, floor 24 new work, NY 10010 <br />1-877-932-7111</p>
            </div>
          </div>
          <div className="middle-footer mt-5 pt-4" />
        </div>
        <div className="col-sm-12 lower-footer pt-0" />
        <div className="col-sm-6 col-xs-12">
          <p className="copyright-text">© 2021 copyright. All rights reserved.</p>
        </div>
        <div className="col-sm-6 col-xs-12 text-right">
          <p className="copyright-text float-right">Design by <a href="#" className>uitheme</a></p>
        </div>
      </div>
    </div>
  </div>
  </>
  );
  }
 
  export default Content1;

