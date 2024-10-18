function About() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row align-items-center justify-content-center"> 
                        <div className="col-lg-6 col-md-10 md-mb-15 xs-mb-20 offset-lg-0 offset-md-1 position-relative"> 
                            <div className="w-75 skrollable skrollable-between shadow-in" data-animation-delay="200" data-shadow-animation="true" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)" style={{ transform: "translateY(4.87px)" }}>
                                <img src="images/demo-medical-home-02.jpg" alt="" className="border-radius-6px w-100" data-no-retina="" />
                                <div className="position-absolute left-minus-70px lg-left-minus-15px md-left-minus-50px bottom-130px lg-bottom-90px md-mb-50px d-none d-md-flex flex-column align-items-center justify-content-center w-140px h-140px bg-white border-radius-100 p-10px box-shadow-quadruple-large appear anime-complete" data-anime='{"translateY": [-15, 0], "scale": [0.5, 1], "opacity": [0,1], "duration": 800, "delay": 800, "staggervalue": 300, "easing": "easeOutQuad"}'>
                                    <img src="/images/demo-medical-home-06.png" className="position-absolute top-50 translate-middle-y" alt="" data-no-retina="" />
                                    <img src="/images/demo-medical-home-07.png" className="animation-rotation" alt="" data-no-retina="" />
                                </div>
                            </div>
                            <div className="w-55 overflow-hidden position-absolute right-15px bottom-minus-50px skrollable skrollable-between shadow-in" data-shadow-animation="true" data-animation-delay="100" data-bottom-top="transform: translateY(-20px)" data-top-bottom="transform: translateY(20px)" style={{ transform: "translateY(-5.19px)" }}>
                                <img src="/images/demo-medical-home-03.jpg" alt="" className="border-radius-6px box-shadow-quadruple-large w-100" data-no-retina="" />
                            </div>
                        </div> 
                        <div className="col-xl-5 offset-xl-1 col-lg-6 text-right text-md-start appear anime-complete" data-anime='{"opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 150, "easing": "easeOutQuad"}'>
                            <span className="fs-18 fw-600 text-dark-gray mb-20px d-flex align-items-center">
                                <span className="text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-light-sea-green-transparent-light me-15px">
                                    <i className="bi bi-layout-text-sidebar-reverse text-base-color fs-20"></i>
                                </span>
                                About medcare hospital
                            </span>
                            <h2 className="fw-800 text-dark-gray ls-minus-2px">Welcome to our medcare hospital.</h2> 
                            <p className="mb-30px w-95 lg-w-100 xs-mb-25px">We value each and every human life placed in our hands and constantly work towards meeting the expectations of our customers and stakeholders.</p> 
                            <div className="row align-items-center text-right text-sm-start">
                                <div className="col-sm-auto xs-mb-10px">
                                    <h2 className="alt-font text-dark-gray mb-0 d-inline-block align-middle me-10px fw-800">722+</h2>
                                    <div className="text-center bg-golden-yellow text-white fs-14 ls-1px border-radius-4px d-inline-block ps-15px pe-15px lh-34 align-middle me-5px">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                </div>
                                <div className="col-sm border-start border-2 border-color-dark-gray ps-25px ms-10px xl-ps-20px xs-border-start-0 xs-ps-15px xs-pe-15px xs-m-0">
                                    <p className="m-0 lh-24 text-dark-gray fw-600">5 star reviews from our satisfied people.</p>
                                </div>
                            </div>
                            <div className="d-inline-block mt-40px xs-mt-30px">
                                <a href="demo-medical-about.html" className="btn btn-medium btn-switch-text btn-dark-gray btn-round-edge me-15px xs-me-5px">
                                    <span>
                                        <span className="btn-double-text" data-text="Trusted doctor">About hospital</span> 
                                    </span>
                                </a>
                                <a href="demo-medical-timetable.html" className="btn btn-medium btn-switch-text left-icon btn-transparent-light-gray border-color-transparent-dark-gray btn-round-edge xs-mt-15px">
                                    <span>
                                        <span><i className="feather icon-feather-calendar"></i></span>
                                        <span className="btn-double-text" data-text="Check timetable">Check timetable</span> 
                                    </span>
                                </a>
                            </div>
                        </div> 
                    </div> 
                </div>
            </section>
        </>
    );
}

export default About;
