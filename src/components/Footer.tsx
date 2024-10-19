function Footer() {
  return (
    <>
      <footer id="my_footer" className="p-0">
        <div className="overflow-hidden footer-top bg-dark-gray pt-35px pb-35px border-radius-6px lg-no-border-radius position-relative">
          <div className="position-absolute right-minus-100px bottom-minus-80px margin-100px-top opacity-1 w-250px">
            <img
              src="/images/demo-medical-pattern-white.svg"
              alt=""
              className=""
              data-no-retina=""
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              {/* start footer column */}
              <div className="order-1 text-center col-xl-3 col-sm-6 text-sm-start xs-mb-20px">
                <a href="#my_hero" className="footer-logo d-inline-block">
                  <img
                    style={{ maxHeight: "max-content", width: "200px" }}
                    src="/images/logo_name_white.png"
                    data-at2x="/images/logo_name_white.png"
                    alt=""
                  />
                </a>
              </div>
              {/* end footer column */}
              {/* start footer column */}
              <div className="order-3 col-xl-6 order-xl-2 lg-mt-10px">
                <ul className="text-center text-white footer-navbar lh-normal">
                  <li className="nav-item">
                    <a
                      href="#my_team"
                      className="text-white nav-link"
                    >
                      الفريق
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#my_download"
                      className="text-white nav-link"
                    >
                      التحميل
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#my_dashboard"
                      className="text-white nav-link"
                    >
                      لوحة التحكم
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#my_feature"
                      className="text-white nav-link"
                    >
                      الخصائص
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#my_about"
                      className="text-white nav-link"
                    >
                      عنا
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#my_hero"
                      className="text-white nav-link"
                    >
                      الرئيسية
                    </a>
                  </li>
                </ul>
              </div>
              {/* end footer column */}
              {/* start footer column */}
              <div className="order-2 text-center col-xl-3 col-sm-6 position-relative text-sm-end elements-social social-icon-style-08 order-xl-3">
                <ul className="small-icon light">
                  <li>
                    <a
                      className="text-white facebook"
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white instagram"
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white twitter"
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white dribbble"
                      href="http://www.dribbble.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* end footer column */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 align-items-center pt-30px pb-30px">
            {/* start copyright */}
            <div className="text-center col last-paragraph-no-margin fs-15 text-md-start sm-mb-10px">
              <p>
                © 2024 All rights reserved for movment. Designed by Eslam reda
              </p>
            </div>
            {/* end copyright */}
            {/* start footer menu */}
            {/* <div className="text-center col text-end fs-15 text-md-end">
              <ul className="footer-navbar lh-normal">
                <li className="me-35px sm-me-20px">
                  <a href="#">Terms and conditions</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div> */}
            {/* end footer menu */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
