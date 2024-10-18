function Navbar() {
    return (
        <>
            {/* start header */}
            <header dir="rtl">
                {/* start navigation */}
                <nav className="navbar navbar-expand-lg header-light bg-white disable-fixed">
                    <div className="container-fluid">
                        <div className="col-auto col-lg-2 me-lg-0 me-auto">
                            <a className="navbar-brand" href="demo-medical.html">
                                <img src="/images/demo-medical-logo-black.png" data-at2x="/images/demo-medical-logo-black@2x.png" alt="" className="default-logo" />
                                <img src="/images/demo-medical-logo-black.png" data-at2x="/images/demo-medical-logo-black@2x.png" alt="" className="alt-logo" />
                                <img src="/images/demo-medical-logo-black.png" data-at2x="/images/demo-medical-logo-black@2x.png" alt="" className="mobile-logo" />
                            </a>
                        </div>
                        <div className="col-auto col-lg-8 menu-order position-static">
                            <button className="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNav"> 
                                <ul className="navbar-nav"> 
                                    <li className="nav-item"><a href="demo-medical.html" className="nav-link">Home</a></li>
                                    <li className="nav-item"><a href="demo-medical-about.html" className="nav-link">About</a></li>
                                    <li className="nav-item"><a href="demo-medical-treatments.html" className="nav-link">Treatments</a></li>
                                    <li className="nav-item"><a href="demo-medical-doctors.html" className="nav-link">Doctors</a></li>
                                    <li className="nav-item"><a href="demo-medical-timetable.html" className="nav-link">Timetable</a></li> 
                                    <li className="nav-item"><a href="demo-medical-contact.html" className="nav-link">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto col-lg-2 text-end d-none d-sm-flex">
                            <div className="header-icon"> 
                                <div className="header-button">
                                    <a dir="ltr" href="demo-medical-appointment.html" className="btn btn-small btn-switch-text btn-base-color left-icon btn-round-edge btn-box-shadow">
                                        <span>
                                            <span><i className="feather icon-feather-calendar"></i></span>
                                            <span className="btn-double-text" data-text="Book online">Book online</span> 
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
