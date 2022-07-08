import React from "react";
import '../../css/style.css';
import '../../css/feather.css';
import '../../css/themify-icons.css';
import { Link } from "react-router-dom";
function Login()  {
   
 
 
  return (
    <>
      <div  >
       
        <div className="col-xl-12 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
          <div className="card shadow-none border-0 ml-auto mr-auto login-card">
            <div className="card-body rounded-0 text-left">
              <h2 className="fw-700 display1-size display2-md-size mb-3">
                Login into <br />
                your account
              </h2>
              <form>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-email text-grey-500 pr-0"></i>
                  <input
                    type="text"
                    className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Your Email Address" 
                  />
                </div>
                <div className="form-group icon-input mb-1">
                  <input
                    type="Password"
                    className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                    placeholder="Password" 
                  />
                  <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                </div>
                <div className="form-check text-left mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label font-xsss text-grey-500"
                    for="exampleCheck1"
                  >
                    Remember me
                  </label>
                  <a
                    href="forgot.html"
                    className="fw-600 font-xsss text-grey-700 mt-1 float-right"
                  >
                    Forgot your Password?
                  </a>
                  
                </div>
               
              </form>

              <div className="col-sm-12 p-0 text-left">
                <div className="form-group mb-1">
                  <a
                    href="#"
                    className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                  >
                    Login
                  </a>
                </div>
                <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                  Dont have account
                  <span className="fw-700 ml-1"><Link style={{ textDecoration: 'none', color: 'blue' }}  to="/register">Register</Link> 
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Login;
