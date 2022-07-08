import React from 'react';
import '../../css/style.css';
import '../../css/feather.css';
import '../../css/themify-icons.css';
function MiddleSidebar() {
    return ( 
        <>
        <div class="middle-sidebar-header bg-white">
                <button class="header-menu"></button>
                <form action="#" class="float-left header-search">
                    <div class="form-group mb-0 icon-input">
                        <i class="feather-search font-lg text-grey-400"></i>
                        <input type="text" placeholder="Start typing to search.." class="bg-transparent border-0 lh-32 pt-2 pb-2 pl-5 pr-3 font-xsss fw-500 rounded-xl w350"/>
                    </div>
                </form>
                <ul class="d-flex ml-auto right-menu-icon">
                    <li>
                        <a href="#"><span class="dot-count bg-warning"></span><i class="feather-bell font-xl text-current"></i>
                            <div class="menu-dropdown">
                                <h4 class="fw-700 font-xs mb-4">Notification</h4>
                                <div class="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                                    <img src="https://via.placeholder.com/50x50.png" alt="user" class="w40 position-absolute left-0 rounded-circle"/>
                                    <h5 class="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Hendrix Stamp <span class="text-grey-400 font-xsssss fw-600 float-right mt-1"> 3 min</span></h5>
                                    <h6 class="text-grey-500 fw-500 font-xssss lh-4">There are many variations of pass..</h6>
                                </div>
                                <div class="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                                    <img src="https://via.placeholder.com/50x50.png" alt="user" class="w40 position-absolute left-0 rounded-circle"/>
                                    <h5 class="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Goria Coast <span class="text-grey-400 font-xsssss fw-600 float-right mt-1"> 2 min</span></h5>
                                    <h6 class="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                                </div>

                                <div class="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                                    <img src="https://via.placeholder.com/50x50.png" alt="user" class="w40 position-absolute left-0 rounded-circle"/>
                                    <h5 class="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Surfiya Zakir <span class="text-grey-400 font-xsssss fw-600 float-right mt-1"> 1 min</span></h5>
                                    <h6 class="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                                </div>
                                <div class="card bg-transparent-card w-100 border-0 pl-5">
                                    <img src="https://via.placeholder.com/50x50.png" alt="user" class="w40 position-absolute left-0 rounded-circle"/>
                                    <h5 class="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Victor Exrixon <span class="text-grey-400 font-xsssss fw-600 float-right mt-1"> 30 sec</span></h5>
                                    <h6 class="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li><a href="message.html"><i class="feather-message-square font-xl text-current"></i></a></li>
                    <li>
                        <a href="#"><i class="feather-settings animation-spin d-inline-block font-xl text-current"></i>
                            <div class="menu-dropdown switchcolor-wrap">
                                <h4 class="fw-700 font-xs mb-4">Settings</h4>
                                 
                               <div class="card bg-transparent-card border-0 d-block mt-3">
                                    <h4 class="d-inline font-xssss mont-font fw-700">Dark Mode</h4>
                                    <div class="d-inline float-right mt-1">
                                        <label class="toggle toggle-dark"><input type="checkbox"/><span class="toggle-icon"></span></label>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li><a href="default-user-profile.html"><img src="https://via.placeholder.com/50x50.png" alt="user" class="w40 rounded-circle mt--1"/></a></li>
                    <li><a href="#" class="menu-search-icon"><i class="feather-search text-grey-900 font-lg"></i></a></li>
                </ul>
            </div>
        </>
     );
}

export default MiddleSidebar;