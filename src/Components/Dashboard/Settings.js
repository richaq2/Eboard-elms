import React from 'react';
import MiddleSidebar from './MiddleSidebar';
import SideBar from './SideBar';

function Settings() {
    return ( 
        <>
        <SideBar/>
       <div className="main-content">
       <MiddleSidebar/>
       <div className="middle-sidebar-bottom">
      <div className="middle-sidebar-bottom bg-lightblue theme-dark-bg">
  <div className="middle-sidebar-left">
    <div className="middle-wrap">
      <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
        <div className="card-body p-lg-5 p-4 w-100 border-0">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="mb-4 font-lg fw-700 mont-font mb-5">Settings</h4>
              <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">Genaral</div>
              <ul className="list-inline mb-4">
                <li className="list-inline-item d-block border-bottom mr-0"><a href="account-information.html" className="pt-2 pb-2 d-flex"><i className="btn-round-md bg-blue-gradiant text-white feather-home font-md mr-3" /> <h4 className="fw-600 font-xssss mb-0 mt-3">Acount Information</h4><i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3" /></a></li>
                <li className="list-inline-item d-block border-bottom mr-0"><a href="contact-information.html" className="pt-2 pb-2 d-flex"><i className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md mr-3" /> <h4 className="fw-600 font-xssss mb-0 mt-3">Saved Address</h4><i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3" /></a></li>
                <li className="list-inline-item d-block mr-0"><a href="social.html" className="pt-2 pb-2 d-flex"><i className="btn-round-md bg-red-gradiant text-white feather-twitter font-md mr-3" /> <h4 className="fw-600 font-xssss mb-0 mt-3">Social Acount</h4><i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3" /></a></li>
              </ul>
              <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">Acount</div>
              <ul className="list-inline mb-4">
                <li className="list-inline-item d-block border-bottom mr-0"><a href="payment.html" className="pt-2 pb-2 d-flex"><i className="btn-round-md bg-mini-gradiant text-white feather-credit-card font-md mr-3" /> <h4 className="fw-600 font-xssss mb-0 mt-3">My Cards</h4><i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3" /></a></li>
                <li className="list-inline-item d-block  mr-0"><a href="password.html" className="pt-2 pb-2 d-flex"><i className="btn-round-md bg-blue-gradiant text-white feather-inbox font-md mr-3" /> <h4 className="fw-600 font-xssss mb-0 mt-3">Password</h4><i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3" /></a></li>
              </ul>
              <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">Other</div>
              <ul className="list-inline">
                <li className="list-inline-item d-block border-bottom mr-0"><a href="#" className="pt-2 pb-2 d-flex"><i className="btn-round-md bg-gold-gradiant text-white feather-bell font-md mr-3" /> <h4 className="fw-600 font-xssss mb-0 mt-3">Notification</h4><i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3" /></a></li>
                <li className="list-inline-item d-block border-bottom mr-0"><a href="#" className="pt-2 pb-2 d-flex"><i className="btn-round-md bg-blue-gradiant text-white feather-help-circle font-md mr-3" /> <h4 className="fw-600 font-xssss mb-0 mt-3">Help</h4><i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3" /></a></li>
                <li className="list-inline-item d-block mr-0"><a href="#" className="pt-2 pb-2 d-flex"><i className="btn-round-md bg-red-gradiant text-white feather-lock font-md mr-3" /> <h4 className="fw-600 font-xssss mb-0 mt-3">Logout</h4><i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="middle-sidebar-right right-scroll-bar">
    <div className="middle-sidebar-right-content">
      
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
  <button className="btn btn-circle text-white btn-neutral sidebar-right">
    <i className="ti-angle-left" />  
  </button>
</div>

       </div>
       </div>
       </>
     );
}

export default Settings;