import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Hosting</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3>Our Branches</h3>
              <ul>
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;
                  <a href="#">
                    AIC Building, 3rd floor <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Office no-7, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;NITTE College Campus
                  </a>
                </li>
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;
                  <a href="#">Ras Al Khaima National ENT <br />&nbsp;&nbsp;&nbsp;&nbsp;MUSCUT, OMEN</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 .item.text">
              <h3>2STAR IT SOLUTIONS PRIVATE LIMITED</h3>
              <p>
                "2 Star IT Solution Pvt Ltd is a leading provider of electronic gadgets, offering a diverse
                range of high-quality products. We combine innovation with exceptional service to simplify
                and elevate your tech experience."
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="socialbtns" align="center">
                <ul>
                  <li><a href="https://www.facebook.com/profile.php?id=61551733299783" className="fa fa-lg fa-facebook">
                  <img class="link-img image-block"
                                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"/>
                    </a></li>
                  <li><a href="https://twitter.com/2staritsolution" className="fa fa-lg fa-twitter">
                  <img class="link-img image-block"
                                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"/>
                    </a></li>
                  <li><a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=2staritsolution@gmail.com&tf=1" className="fa fa-lg fa-google-plus">
                  <img class="link-img image-block"
                                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"/></a></li>
                  <li><a href="#" className="fa fa-lg fa-github">
                  <img class="link-img image-block"
                                src="https://img.icons8.com/?size=24&id=106564&format=png"/></a></li>
                  <li><a href="https://www.linkedin.com/in/2star-it-solution" className="fa fa-lg fa-linkedin">
                  <img class="link-img image-block"
                                src="https://img.icons8.com/?size=24&id=BRElTmOLC6Bh&format=png"/></a></li>
                  <li><a href="https://www.instagram.com/2staritsolution/?hl=en" className="fa fa-lg fa-instagram">
                  <img class="link-img image-block"
                                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"/></a></li>
                  <li><a href="#" className="fa fa-lg fa-youtube">
                  <img class="link-img image-block"
                                src="https://img.icons8.com/?size=16&id=aEN7nXI1-gjP&format=png"/></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="copyright">2STAR IT SOLUTION © 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
