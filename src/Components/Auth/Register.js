import React from 'react';
import { Link } from "react-router-dom";

function Register() {
    return ( 
        <div class="col-xl-12 vh-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
                <div class="card shadow-none border-0 ml-auto mr-auto login-card">
                    <div class="card-body rounded-0 text-left">
                        <h2 class="fw-700 display1-size display2-md-size mb-4">Create <br/>your account</h2>                        
                        <form>
                            
                            <div class="form-group icon-input mb-3">
                                <i class="font-sm ti-user text-grey-500 pr-0"></i>
                                <input type="text" class="style2-input pl-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Name"/>                        
                            </div>
                            <div class="form-group icon-input mb-3">
                                <i class="font-sm ti-email text-grey-500 pr-0"></i>
                                <input type="text" class="style2-input pl-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Email Address"/>                        
                            </div>
                            <div class="form-group icon-input mb-3">
                                <input type="Password" class="style2-input pl-5 form-control text-grey-900 font-xss ls-3" placeholder="Password"/>
                                <i class="font-sm ti-lock text-grey-500 pr-0"></i>
                            </div>
                            <div class="form-group icon-input mb-1">
                                <input type="Password" class="style2-input pl-5 form-control text-grey-900 font-xss ls-3" placeholder="Confirm Password"/>
                                <i class="font-sm ti-lock text-grey-500 pr-0"></i>
                            </div>
                            <div class="form-check text-left mb-3">
                                <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1"/>
                                <label class="form-check-label font-xsss text-grey-500" for="exampleCheck1">Accept Term and Conditions</label>
                                <a href="#" class="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a> 
                            </div>
                        </form>
                         
                        <div class="col-sm-12 p-0 text-left">
                            <div class="form-group mb-1"><a href="#" class="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">Register</a></div>
                            <h6 class="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Already have account <span class="fw-700 ml-1"><Link style={{ textDecoration: 'none', color: 'blue' }}  to="/login">Login</Link> </span></h6>
                        </div>
                         
                    </div>
                </div> 
            </div>
     );
}

export default Register;