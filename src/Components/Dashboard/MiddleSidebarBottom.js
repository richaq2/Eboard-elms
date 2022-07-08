  import React from 'react';
  import SidebarRight from './SidebarRight';

  function MiddleSidebarBottom() {
  return (  
  
  <div className="middle-sidebar-bottom">
    <div className="middle-sidebar-left">
      <div className="row">
        <div className="col-lg-12 mb-3">
          <div class="dash" className="card rounded-xxl p-lg--5 border-0 bg-no-repeat bg-image-contain bg-grey" style={{backgroundposition:  "right 50px top 10px",}}>
            <div className="card-body p-4">
              <h2 className="display3-size fw-400 display2-md-size sm-mt-7 xs-pt-10">Find a perfect <b className="d-lg-block">Online Course</b></h2>    
              <h4 className="text-grey-500 font-xssss fw-500 ml-1">For only course you need to learn web development</h4>
              <div className="form-group mt-lg-5 p-3 p-2 bg-white rounded-lg ">
                <div className="row ">
                  <div className="col-lg-5 " >
                    <div className="form-group icon-input mb-0">
                      <i className="ti-search font-xs text-grey-400" />
                      <input type="text" className="style1-input bg-transparent border-0 pl-5 font-xsss mb-0 text-black fw-500" placeholder="Search online courses.." />
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
          <div className="col-lg-12 pt-5 mb-3">
            <h2 className="fw-400 font-lg d-block">Popular <b> Classes</b> <a href="#" className="float-right"><i className="feather-edit text-grey-500 font-xs" /></a></h2>
          </div>
          <div className="col-lg-12 pt-2">
            <div className="owl-carousel category-card owl-theme overflow-hidden overflow-visible-xl nav-none">
              <div className="item">
                <div className="card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Python</span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">899/-</span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Complete Python Bootcamp From Zero to Hero in Python </a></h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 32 Lesson </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                     
                      <li><button className="btn btn-primary">Enroll</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">Desinger</span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 40</span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Complete Python Bootcamp From Zero to Hero in Python </a></h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 24 Lesson </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                      <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mr-1">Bootstrap</span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 60</span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Java Programming Masterclass for Developers</a></h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 14 Lesson </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                      <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">Develop</span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 370</span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">The Data Science Course Complete Data Science </a></h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 23 Lesson </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                      <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">Develop</span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 370</span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">The Data Science Course Complete Data Science </a></h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 23 Lesson </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                      <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 pt-0 mb-3">
            <h2 className="fw-400 font-lg d-block">Latest <b> Classes</b> <a href="#" className="float-right"><i className="feather-edit text-grey-500 font-xs" /></a></h2>
          </div>
          <div className="col-lg-12 pt-2">
            <div className="owl-carousel category-card owl-theme overflow-hidden overflow-visible-xl nav-none">
              <div className="item">
                <div className="card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">Desinger</span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 450</span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Complete Python Bootcamp From Zero to Hero in Python </a></h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 24 Lesson </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                      <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">Python</span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 670</span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Fundamentals for Scrum Master and Agile Projects </a></h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 32 Lesson </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                      <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-primary d-inline-block text-primary mr-1">Bootstrap</span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 760</span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">Automate the Boring Stuff with Python Programming</a></h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 14 Lesson </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                      <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">Develop</span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 370</span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">The Data Science Course Complete Data Science </a></h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 23 Lesson </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                      <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a href="default-course-details.html" className="video-bttn position-relative d-block"><img src="https://via.placeholder.com/400x300.png" alt="image" className="w-100" /></a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">Develop</span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span> 370</span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">The Data Science Course Complete Data Science </a></h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 23 Lesson </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block" /></a></li>
                      <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></li>
                      <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SidebarRight/>
    <button class="btn btn-circle text-white btn-neutral sidebar-right">
                    <i class="ti-angle-left"></i>  
                </button>
    </div>

    
    );
    }
    export default MiddleSidebarBottom;
