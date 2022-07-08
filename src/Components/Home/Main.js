import React from "react";
import "../../css/style.css";
import "../../css/feather.css";
import "../../css/themify-icons.css";
import Header from '../../images/Header.png';

function Main() {
  return (
    
      <div class="banner-wrapper bg-after-fluid">
        <div class="container ">
          <div class="row">
            <div class="col-xl-6 col-lg-5 order-lg-2 ">
                        <img src={Header} alt="e-learning" class="pt-lg--10 w-100 aos-init" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500" width="300" height="550" />
                    </div>
            <div class="col-xl-6 col-lg-7 order-lg-1 pt-lg--10 pb-lg--10 xl-p-5">
              <h2
                class="display3-size display2-md-size fw-700 aos-init"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                Find the best perfect Online Course
              </h2>
              <h4
                class="text-grey-500 font-xssss fw-500 ml-1 aos-init lh-24"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                For only course you need to learn web development
              </h4>
              <div
                class="form-group mt-lg-5 p-3 border-light border p-2 bg-white rounded-lg aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                <div class="row">
                  <div class="col-lg-5">
                    <div class="form-group icon-input mb-0">
                      <i class="ti-search font-xs text-grey-400"></i>
                      <input
                        type="text"
                        class="style1-input bg-transparent border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500"
                        placeholder="Search online courses.."
                      />
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="form-group icon-input mb-0">
                      <i class="ti-package font-xs text-grey-400"></i>
                      <select class="style1-select bg-transparent border-0 pl-5">
                        {" "}
                        <option value="">All Categories</option>
                        <option value="151781441596 ">Fashion</option>
                        <option value="139119624252 ">- Men</option>
                        <option value="139118313532 ">- Women</option>
                        <option value="139360141372 ">Electronics</option>
                        <option value="152401903676 ">Home &amp; Garden</option>
                        <option value="138866720828 ">- Decor</option>
                        <option value="138866917436 ">- Lighting</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <a
                      href="#"
                      class="w-100 d-block btn bg-primary text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                    >
                      Search
                    </a>
                  </div>
                </div>
              </div>
              <h4 class="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                {" "}
                <b class="text-grey-800">Popular Search :</b> Designer,
                Developer, PHP, HTML, CSS, SCSS{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Main;
