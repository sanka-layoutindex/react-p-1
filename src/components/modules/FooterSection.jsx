import React from "react";
import logo_white from "../../assets/images/logo-white.png";
import fb from "../../assets/images/Facebook.png";
import twitter from "../../assets/images/Twitter.png";
import insta from "../../assets/images/Instagram.png";
import linkdin from "../../assets/images/LinkedIn.png";

function FooterSection() {
  return (
    <>
      <div className="paddingGlobal footer">
        <div className="containerLarge">
          <div className="content">
            <div>
              <div className="titleWrapper">
                <h5 className="fcWhite fw600">Company</h5>
              </div>
              <ul className="navbar2">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/why">Why Choose us</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/testimonial">Testimonial</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="titleWrapper">
                <h5 className="fcWhite fw600">Resources</h5>
              </div>
              <ul className="navbar2">
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms and Condition</a>
                </li>
                <li>
                  <a href="/blogs">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="titleWrapper">
                <h5 className="fcWhite fw600">Product</h5>
              </div>
              <ul className="navbar2">
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms and Condition</a>
                </li>
                <li>
                  <a href="/blogs">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="logo">
              <div className="imageWrapper">
                <img className="img-fluid" src={logo_white} alt="logo" />
              </div>
              <div className="titleWrapper">
                <h5 className="fcWhite fw600">Subscribe to our Newsletter</h5>
              </div>
              <form>
                <input type="text" placeholder="Enter your Email" />
                <input type="submit" name="Subscribe" value="Subscribe" />
              </form>
            </div>
          </div>
          <div className="copyright">
            <p className="textSmall fcWhite">© Copyright Finsweet 2022</p>
            <div className="social">
              <a href="/fb">
                <img class="img-fluid" src={fb} alt="fb" />
              </a>
              <a href="/tw">
                <img class="img-fluid" src={twitter} alt="fb" />
              </a>
              <a href="/ins">
                <img class="img-fluid" src={insta} alt="fb" />
              </a>
              <a href="/lin">
                <img class="img-fluid" src={linkdin} alt="fb" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
