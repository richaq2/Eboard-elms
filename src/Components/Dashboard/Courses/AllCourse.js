import React from 'react';
import Footer from '../../Home/Footer';
import MiddleSidebar from '../MiddleSidebar';
import SideBar from '../SideBar';
import SidebarRight from '../SidebarRight';
import { Link } from "react-router-dom";
function AllCourse() {
    return ( 
      <>
      <SideBar/>
     <div className="main-content">
     <MiddleSidebar/>
     <div className="middle-sidebar-bottom">
       {/* header wrapper */}
  <div className="middle-sidebar-bottom bg-transparent theme-dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="card rounded-xxl p-lg--5 border-0 bg-no-repeat" style={{backgroundColor: '#e4f7fe'}}>
            <div className="card-body w-100 p-4">
              <div className="form-group mt-3 p-3 border-light border p-2 bg-white rounded-lg">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="form-group icon-input mb-0">
                      <i className="ti-search font-xs text-grey-400" />
                      <input type="text" className="style1-input border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500 bg-transparent" placeholder="Search online courses.." />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group icon-input mb-0">
                      <i className="ti-package font-xs text-grey-400" />
                      <select className="style1-select bg-transparent border-0 pl-5"> <option value>All Categories</option><option value={151781441596 }>Fashion</option><option value={139119624252 }>- Men</option><option value={139118313532 }>- Women</option><option value={139360141372 }>Electronics</option><option value={152401903676 }>Home &amp; Garden</option><option value={138866720828 }>- Decor</option><option value={138866917436 }>- Lighting</option></select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <a href="#" className="w-100 d-block btn bg-primary text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase ">Search</a>
                  </div>
                </div>
              </div>
              <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24"> <b className="text-grey-800 text-dark">Popular Search :</b> Designer, Developer, PHP, HTML, CSS, SCSS </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-12 pt-2 mb-4">
          <h2 className="fw-400 font-lg">Search <b>Results</b> <span className="fw-500 ml-2 text-grey-500 font-xssss">( 23 course is found )</span> <a href="#" className="float-right"><i className="feather-edit text-grey-500 font-xs" /></a></h2>
        </div>
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
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
          <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 p-3">
            <div className="card-image w-100 mb-3 overflow-hidden rounded-lg">
              <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
            </div>
            <div className="card-body p-0">
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">Desinger</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 450</span>
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
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Python</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 670</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Fundamentals for Scrum Master and Agile Projects </a></h4>
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
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-primary d-inline-block text-primary mr-1">Bootstrap</span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 760</span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Automate the Boring Stuff with Python Programming</a></h4>
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
                <span href="#" className="float-right"><i className="ti-arrow-circle-right font-md mt-1 d-inline-block text-grey-500" /></span>
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

export default AllCourse;