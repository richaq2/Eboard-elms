import React from 'react';
import '../../css/style.css';
import '../../css/feather.css';
import '../../css/themify-icons.css';
import { Link } from "react-router-dom";
const Header = (props) => {

    return ( 
        <>
        
         
        <div class="header-wrapper pt-3 pb-3 shadow-none">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 navbar pt-0 pb-0">
                        <Link to ="/"><p><h1 class="fredoka-font ls-3 fw-700 text-current font-xxl">E-Board <span class="d-block font-xsssss ls-1 text-grey-500 open-font ">Online Learning Course</span></h1></p></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav nav-menu float-none text-center overflow-inherit position-relative">
                                
                                
                                
                                <li class="nav-item dropdown"><Link to ="/login"><span class="nav-link "  >Dashboard </span></Link>
                                    
                                </li>
                                <li class="nav-item dropdown"><Link to ="/blog"><p class="nav-link  z-index-1"  data-toggle="dropdown">Blog </p></Link>
                                   
                                </li>
                                <li class="nav-item dropdown"><Link to ="/login"><a class="nav-link dropdown-toggle"  data-toggle="dropdown">Courses </a> </Link>
                                </li>
                                <li class="nav-item"><Link to ="/contact"><p class="nav-link">Contact</p></Link></li>
                                
                            </ul>    
                           
                    </div>
                    
                    </div>
                    <div className="col-lg-3 text-right d-none d-lg-block">
                        <span class="header-btn bg-dark fw-500 text-white font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1 mr-3"><Link style={{ textDecoration: 'none', color: 'white' }}  to="/login">Login</Link> </span>
                        <span class="header-btn bg-primary fw-500 text-white font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1"><Link style={{ textDecoration: 'none', color: 'white' }}  to="/register">Register</Link> </span>
                        </div>
                    </div>
                </div>
            </div>
        

        </>
     )
}

export default Header ;