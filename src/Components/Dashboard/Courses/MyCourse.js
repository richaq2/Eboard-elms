import React from 'react';
import SideBar from '../SideBar';
import MiddleSidebar from '../MiddleSidebar';
import SidebarRight from '../SidebarRight';
import Footer from '../../Home/Footer';
function MyCourse() {
    return (
      <>
      <SideBar/>
     <div className="main-content">
     <MiddleSidebar/>
     <div className="middle-sidebar-bottom">
       {/* header wrapper */}
  <div className="middle-sidebar-bottom bg-transparent theme-dark-bg">
  <div className="container">
        <center> <p style={{fontSize:'30px',fontWeight:'bolder'}}>My Courses</p></center>
   
      <div className="row">
        
        
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 p-3">
            <div className="card-image w-100 mb-3 overflow-hidden rounded-lg">
              <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
            </div>
            <div className="card-body p-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Python</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 240</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Complete Python Bootcamp From Zero to Hero in Python </a></h4>
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 32 Lesson </h6>
              <div className="progress mt-4 h5 w-100 mb-3">
                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={96} aria-valuemin={0} aria-valuemax={96} style={{width: '96%'}} />
              </div>
              <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                <a href="#" className="float-right"><i className="ti-arrow-circle-right font-md mt-1 d-inline-block text-grey-500" /></a>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 p-3">
            <div className="card-image w-100 mb-3 overflow-hidden rounded-lg">
              <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
            </div>
            <div className="card-body p-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">Desinger</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 40</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Complete Python Bootcamp From Zero to Hero in Python </a></h4>
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 24 Lesson </h6>
              <div className="progress mt-4 h5 w-100 mb-3">
                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={96} aria-valuemin={0} aria-valuemax={96} style={{width: '96%'}} />
              </div>
              <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                <a href="#" className="float-right"><i className="ti-arrow-circle-right font-md mt-1 d-inline-block text-grey-500" /></a>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 p-3">
            <div className="card-image w-100 mb-3 overflow-hidden rounded-lg">
              <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
            </div>
            <div className="card-body p-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mr-1">Bootstrap</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 60</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Java Programming Masterclass for Developers</a></h4>
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 14 Lesson </h6>
              <div className="progress mt-4 h5 w-100 mb-3">
                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={96} aria-valuemin={0} aria-valuemax={96} style={{width: '96%'}} />
              </div>
              <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                <a href="#" className="float-right"><i className="ti-arrow-circle-right font-md mt-1 d-inline-block text-grey-500" /></a>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 p-3">
            <div className="card-image w-100 mb-3 overflow-hidden rounded-lg">
              <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
            </div>
            <div className="card-body p-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">Develop</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 370</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">The Data Science Course Complete Data Science </a></h4>
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 23 Lesson </h6>
              <div className="progress mt-4 h5 w-100 mb-3">
                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={96} aria-valuemin={0} aria-valuemax={96} style={{width: '96%'}} />
              </div>
              <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                <a href="#" className="float-right"><i className="ti-arrow-circle-right font-md mt-1 d-inline-block text-grey-500" /></a>
              </ul>
            </div>
          </div>
        </div>
        
        
       

      </div>
    </div>
  </div>
  <SidebarRight/>
  </div>
  <Footer/>
  </div>
  
        
      </>

    );
}

export default MyCourse;