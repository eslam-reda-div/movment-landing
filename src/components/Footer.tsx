function Footer() {
    return (
        <>
            <footer className="p-0">
                <div className="footer-top bg-dark-gray pt-35px pb-35px border-radius-6px lg-no-border-radius position-relative overflow-hidden">
                    <div className="position-absolute right-minus-100px bottom-minus-80px margin-100px-top opacity-1 w-250px">
                        <img src="/images/demo-medical-pattern-white.svg" alt="" className="" data-no-retina="" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            {/* start footer column */}
                            <div className="col-xl-3 col-sm-6 order-1 text-center text-sm-start xs-mb-20px">
                                <a href="/demo-medical.html" className="footer-logo d-inline-block">
                                    <img src="/images/demo-medical-logo-white.png" data-at2x="/images/demo-medical-logo-white@2x.png" alt="" />
                                </a>
                            </div>
                            {/* end footer column */}
                            {/* start footer column */}
                            <div className="col-xl-6 order-3 order-xl-2 lg-mt-10px">
                                <ul className="footer-navbar text-center lh-normal text-white">
                                    <li className="nav-item"><a href="/demo-medical.html" className="text-white nav-link">Home</a></li>
                                    <li className="nav-item"><a href="/demo-medical-about.html" className="text-white nav-link">About</a></li>
                                    <li className="nav-item"><a href="/demo-medical-treatments.html" className="text-white nav-link">Treatments</a></li>
                                    <li className="nav-item"><a href="/demo-medical-doctors.html" className="text-white nav-link">Doctors</a></li>
                                    <li className="nav-item"><a href="/demo-medical-timetable.html" className="text-white nav-link">Timetable</a></li>
                                    <li className="nav-item"><a href="/demo-medical-contact.html" className="text-white nav-link">Contact</a></li>
                                </ul>
                            </div>
                            {/* end footer column */}
                            {/* start footer column */}
                            <div className="col-xl-3 col-sm-6 position-relative text-center text-sm-end elements-social social-icon-style-08 order-2 order-xl-3">
                                <ul className="small-icon light">
                                    <li><a className="text-white facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a className="text-white instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a className="text-white twitter" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a className="text-white dribbble" href="http://www.dribbble.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                            {/* end footer column */}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 align-items-center pt-30px pb-30px">
                        {/* start copyright */}
                        <div className="col last-paragraph-no-margin fs-15 text-center text-md-start sm-mb-10px">
                            <p>© 2024 Crafto is Proudly Powered by <a href="https://www.themezaa.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-line-bottom text-dark-gray fw-600">ThemeZaa</a></p>
                        </div>
                        {/* end copyright */}
                        {/* start footer menu */}
                        <div className="col text-end fs-15 text-center text-md-end">
                            <ul className="footer-navbar lh-normal">
                                <li className="me-35px sm-me-20px"><a href="#">Terms and conditions</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                        {/* end footer menu */}
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
