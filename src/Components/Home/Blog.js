import React from 'react';
import Header from './Header';
import Footer from './Footer';
import star from '../../images/star.png';
import blog from '../../images/blog.jpg';
function Blog() {
    return ( 
        <>
        <Header/>
        <div>
  <div className="post-title page-nav pt-lg--7 pt-lg--7 pt-5 pb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h6 className="text-uppercase fw-600 ls-3 text-success font-xsss">Travel</h6>
          <h2 className="mt-3 mb-2"><a href="#" className="lh-2 display2-size display2-md-size mont-font text-grey-900 fw-700">Ways your mother lied to you about food stuffs</a></h2>                                
          <h6 className="font-xssss text-grey-500 fw-600 ml-3 mt-3 d-inline-block"><i className="ti-time mr-2" /> 24 May 2020</h6> 
          <h6 className="font-xssss text-grey-500 fw-600 ml-3 mt-3 d-inline-block"><i className="ti-user mr-2" /> Jack Robin</h6>
          <h6 className="font-xssss text-grey-500 fw-600 ml-3 mt-3 d-inline-block"><i className="ti-comments mr-2" /> 14 Comments</h6>
        </div>
      </div>
    </div>
  </div>
  <div className="post-image">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img src="https://via.placeholder.com/1200x600.png" alt="blog-image" className="img-fluid rounded-lg" />
        </div>
      </div>
    </div>
  </div>
  <div className="post-content pt-lg--7 pt-lg--7 pt-5 pb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-left">
          <p className="lh-32 drop-cap font-xss text-grey-600 mb-5"> <span>B</span>est is because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:</p>
          <p className="lh-32 font-xss text-grey-600">While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:</p>
          <div className="card shadow-none bg-greyblue w-100 p-4 border-0 mt-5 mb-5 rounded-lg">
            <div className="card-body">
              <i className="ti-quote-left display1-size text-grey-400 left-15" />
              <h3 className="fw-400 text-grey-800 font-xs lh-32 font-italic mb-3 mt-2">That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways</h3>
              <p className="fw-500 mb-0 text-grey-500 font-xsss ls-2">Cabe Camaren</p>
            </div>  
          </div>
          <p className="lh-32 font-xss text-grey-600 mb-5">While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:</p>
          <img src="https://via.placeholder.com/1280x600.png" alt="blog-image" className="img-fluid rounded-lg" />
          <figcaption className="wp-caption-text text-center font-xssss mt-2">Suspendisse laoreet ut ligula et semper.</figcaption>
          <p className="lh-32 mt-5 font-xss text-grey-600 mb-5"> <span>B</span>est is because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:</p>
          <div className="card shadow-none w-100 border-0 mb-5">
            <ul className="mt-0 list-inline">
              {/* <h4 class="list-inline-item mr-5 text-grey-900 font-xs fw-700">Share this article: </h4> */}
              <li className="list-inline-item"><a href="#" className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white" /></a></li>
              <li className="list-inline-item"><a href="#" className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white" /></a></li>
              <li className="list-inline-item"><a href="#" className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white" /></a></li>
              <li className="list-inline-item"><a href="#" className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white" /></a></li>
              <li className="list-inline-item"><a href="#" className="btn-round-md bg-pinterest"><i className="font-xs ti-pinterest text-white" /></a></li>
            </ul>
          </div>
          <div className="card shadow-none w-100 border-0 next-article text-center pt-5 pb-5">
            <h6 className="text-uppercase fw-600 ls-3 text-grey-500 font-xsss">Next Article</h6>                          
            <h2 className="mb-0 mt-1"><a href="#" className="text-grey-900 display1-size fw-700">It’s no secret that the digital <br /> industry is booming</a></h2>
          </div>
        </div>
        <div className="col-lg-8 offset-lg-2 comments-section bottom-border">
          <div className="comments-list">
            <h4 className="text-grey-900 font-sm fw-700 mt-5 mb-5">Comments</h4>
            <div className="section full mb-5">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                  <figure className="avatar mr-0">
                    <a href="#" className="profile-detail-bttn"><img src="https://via.placeholder.com/100x100.png" className="rounded-circle w75" alt="image" /></a>
                  </figure>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-9 pl-1 pr-0">
                  <h4 className="mt-1 font-xss text-grey-900 fw-700">Tom Kelly</h4>
                  <h6 className="text-grey-500 mb-1 mt-0 d-block fw-500 mb-0 ls-2">26 minute ago</h6>
                  <div className="star d-inline text-left">
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                  </div>
                  <p className="font-xsss fw-400 lh-26 text-grey-500 mb-1 mt-2">That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways</p>
                  <a className="font-xssss ls-3  text-uppercase fw-700" href="#">Reply</a>
                </div>
              </div>
            </div>
            <div className="section full mb-5 ml-lg-5 pl-lg-5">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                  <figure className="avatar mr-0">
                    <a href="#" className="profile-detail-bttn"><img src="https://via.placeholder.com/100x100.png" className="rounded-circle w75" alt="image" /></a>
                  </figure>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-9 pl-1 pr-0">
                  <h4 className="mt-1 font-xss text-grey-900 fw-700">Curtis Burgess</h4>
                  <h6 className="text-grey-500 mb-1 mt-0 d-block fw-500 mb-0 ls-2">26 minute ago</h6>
                  <div className="star d-inline text-left">
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                  </div>
                  <p className="font-xsss fw-400 lh-26 text-grey-500 mb-1 mt-2">That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways</p>
                  <a className="font-xssss ls-3  text-uppercase fw-700" href="#">Reply</a>
                </div>
              </div>
            </div>
            <div className="section full mb-5">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                  <figure className="avatar mr-0">
                    <a href="#" className="profile-detail-bttn"><img src="https://via.placeholder.com/100x100.png" className="rounded-circle w75" alt="image" /></a>
                  </figure>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-9 pl-1 pr-0">
                  <h4 className="mt-1 font-xss text-grey-900 fw-700">Tom Kelly</h4>
                  <h6 className="text-grey-500 mb-1 mt-0 d-block fw-500 mb-0 ls-2">26 minute ago</h6>
                  <div className="star d-inline text-left">
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                  </div>
                  <p className="font-xsss fw-400 lh-26 text-grey-500 mb-1 mt-2">That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways</p>
                  <a className="font-xssss ls-3  text-uppercase fw-700" href="#">Reply</a>
                </div>
              </div>
            </div>
            <div className="section full mb-5 ml-lg-5 pl-lg-5">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                  <figure className="avatar mr-0">
                    <a href="#" className="profile-detail-bttn"><img src="https://via.placeholder.com/100x100.png" className="rounded-circle w75" alt="image" /></a>
                  </figure>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-9 pl-1 pr-0">
                  <h4 className="mt-1 font-xss text-grey-900 fw-700">Curtis Burgess</h4>
                  <h6 className="text-grey-500 mb-1 mt-0 d-block fw-500 mb-0 ls-2">26 minute ago</h6>
                  <div className="star d-inline text-left">
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                    <img src={star} alt="star" className="w15" />
                  </div>
                  <p className="font-xsss fw-400 lh-26 text-grey-500 mb-1 mt-2">That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways</p>
                  <a className="font-xssss ls-3  text-uppercase fw-700" href="#">Reply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="post-comment pt-7 pb-7 bg-greyblue">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8  text-center">
          <h4 className="mb-4 pb-3 text-grey-900 fw-700 font-xl">Leave a Comment</h4>
          <form action="#">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group mb-3">
                  <input type="text" className="form-control style2-input border-0 bg-color-none text-grey-700" defaultValue="Name" />                        
                </div>        
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="form-group mb-3">
                  <input type="text" className="form-control style2-input border-0 bg-color-none text-grey-700" defaultValue="Email" />                        
                </div>        
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <textarea className="w-100 border-0 h125 p-3" defaultValue={"Message"} />
                </div>        
                <div className="form-group"><a href="#" className="form-control style2-input bg-current text-white font-xss fw-500 p-0 w175">Submit</a></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>

        </>
     );
}

export default Blog;