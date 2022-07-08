import React from 'react';
import '../../css/style.css';
import '../../css/feather.css';
import '../../css/themify-icons.css';
import { Link } from "react-router-dom";
function SideBar() {
    return (
        <>
        <nav class="navigation scroll-bar">
            <div class="container pl-0 pr-0">
                <div class="nav-content">
                    <div class="nav-top">
                        <a href="/"><i class="feather-slack text-success display1-size mr-3 ml-3"></i><span class="d-inline-block fredoka-font ls-3 fw-600 text-current font-xl logo-text mb-0">EBoard </span> </a>
                        <a href="/" class="close-nav d-inline-block d-lg-none"><i class="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 "></i></a>
                    </div>
                    <div class="nav-caption fw-600 font-xssss text-grey-500"><span>New </span>Feeds</div>
                    <ul class="mb-3">
                        <li class="logo d-none d-xl-block d-lg-block"></li>
                        <li><span className="nav-content-bttn open-font bg-primary-gradiant" data-tab="chats"><Link   to="/allcourse"><i class="feather-tv mr-3"></i><span>All course</span></Link></span></li>
                        <li><span  class="nav-content-bttn open-font" data-tab="favorites"><Link to="/explore-channel"><i class="feather-globe mr-3"></i><span>Explore Channel</span></Link></span></li>
                        <li><span class="nav-content-bttn open-font" data-tab="favorites"><Link to="/live-stream"><i class="feather-play-circle mr-3"></i><span>Live Stream</span></Link></span></li>
                        <li class="flex-lg-brackets"><span data-tab="archived" class="nav-content-bttn open-font"><Link to="/mycourse"><i class="feather-video mr-3"></i><span>My Course</span></Link></span></li>                        
                    </ul>
                    <div class="nav-caption fw-600 font-xssss text-grey-500"><span></span> Account</div>
                    <ul class="mb-3">
                        <li class="logo d-none d-xl-block d-lg-block"></li>
                        <li><span  class="nav-content-bttn open-font h-auto pt-2 pb-2"><Link to="/setting"><i class="font-sm feather-settings mr-3 text-grey-500"></i><span>Settings</span></Link></span></li>
                        <li><span  class="nav-content-bttn open-font h-auto pt-2 pb-2"><Link to="/analytics"><i class="font-sm feather-pie-chart mr-3 text-grey-500"></i><span>Analytics</span></Link></span></li>
                        <li><span  class="nav-content-bttn open-font h-auto pt-2 pb-2"><Link to="/message"><i class="font-sm feather-message-square mr-3 text-grey-500"></i><span>Chat</span></Link></span></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        </>
      );
}

export default SideBar;