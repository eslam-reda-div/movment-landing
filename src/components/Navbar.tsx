function Navbar() {
  return (
    <>
      {/* start header */}
      <header id="my_navbar">
        {/* start navigation */}
        <nav className="bg-white navbar navbar-expand-lg header-light disable-fixed">
          <div className="container-fluid">
            <div className="col-auto col-lg-2 me-lg-0 me-auto">
              <a className="navbar-brand" href="#my_hero">
                <img
                  style={{ width: "200px", maxHeight: "fit-content" }}
                  src="/images/logo_name.png"
                  data-at2x="/images/logo_name.png"
                  alt=""
                  className="default-logo"
                />
                <img
                  style={{ width: "200px", maxHeight: "fit-content" }}
                  src="/images/logo_name.png"
                  data-at2x="/images/logo_name.png"
                  alt=""
                  className="alt-logo"
                />
                <img
                  src="/images/logo_name.png"
                  data-at2x="/images/logo_name.png"
                  alt=""
                  className="mobile-logo"
                />
              </a>
            </div>
            <div className="col-auto col-lg-8 menu-order position-static">
              <button
                className="navbar-toggler float-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#my_about" className="nav-link">
                      عنا
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#my_feature" className="nav-link">
                      خصائص
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#my_dashboard" className="nav-link">
                      لوحة التحكم
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#my_download" className="nav-link">
                      التحميل
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#my_team" className="nav-link">
                      الفريق
                    </a>
                  </li>                  
                  <li className="nav-item">
                    <a href="#my_faqs" className="nav-link">
                      الأسئلة الشائعة
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#my_footer" className="nav-link">
                      تواصل معنا
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto col-lg-2 text-end d-none d-sm-flex">
              <div className="header-icon">
                <div className="header-button">
                  <a
                    dir="ltr"
                    style={{ backgroundColor: '#FE9900', borderColor: '#FE9900' }}
                    href="#my_download"
                    className="btn btn-small btn-switch-text btn-base-color left-icon btn-round-edge btn-box-shadow"
                  >
                    <span>
                      <span>
                        <i className="feather icon-feather-download"></i>
                      </span>
                      <span className="btn-double-text" data-text="تنزيل" style={{fontFamily: "Cairo"}}>
                        تنزيل
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* end navigation */}
      </header>
      {/* end header */}
    </>
  );
}

export default Navbar;
