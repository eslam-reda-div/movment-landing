function About() {
  return (
    <>
      <section id="my_about">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 md-mb-15 xs-mb-20 offset-lg-0 offset-md-1 position-relative">
              <div
                className="w-75 skrollable skrollable-between shadow-in"
                data-animation-delay="200"
                data-shadow-animation="true"
                data-bottom-top="transform: translateY(50px)"
                data-top-bottom="transform: translateY(-50px)"
                style={{ transform: "translateY(4.87px)" }}
              >
                <img
                  src="images/demo-medical-home-02.jpg"
                  alt=""
                  className="border-radius-6px w-100"
                  data-no-retina=""
                />
                <div
                  className="position-absolute left-minus-70px lg-left-minus-15px md-left-minus-50px bottom-130px lg-bottom-90px md-mb-50px d-none d-md-flex flex-column align-items-center justify-content-center w-140px h-140px bg-white border-radius-100 p-10px box-shadow-quadruple-large appear anime-complete"
                  data-anime='{"translateY": [-15, 0], "scale": [0.5, 1], "opacity": [0,1], "duration": 800, "delay": 800, "staggervalue": 300, "easing": "easeOutQuad"}'
                >
                  <img
                    src="/images/demo-medical-home-06.png"
                    className="position-absolute top-50 translate-middle-y"
                    alt=""
                    data-no-retina=""
                  />
                  <img
                    src="/images/demo-medical-home-07.png"
                    className="animation-rotation"
                    alt=""
                    data-no-retina=""
                  />
                </div>
              </div>
              <div
                className="w-55 overflow-hidden position-absolute right-15px bottom-minus-50px skrollable skrollable-between shadow-in"
                data-shadow-animation="true"
                data-animation-delay="100"
                data-bottom-top="transform: translateY(-20px)"
                data-top-bottom="transform: translateY(20px)"
                style={{ transform: "translateY(-5.19px)" }}
              >
                <img
                  src="/images/demo-medical-home-03.jpg"
                  alt=""
                  className="border-radius-6px box-shadow-quadruple-large w-100"
                  data-no-retina=""
                />
              </div>
            </div>


            <div
              className="col-xl-5 offset-xl-1 col-lg-6 text-right text-md-start appear anime-complete"
              data-anime='{"opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 150, "easing": "easeOutQuad"}'
            >
              
              <h2 dir="rtl" style={{ textAlign: "right" }} className="fw-800 text-dark-gray ls-minus-2px">
                Welcome to our medcare hospital.
              </h2>
              <p dir="rtl" style={{ textAlign: "right", float: 'right' }} className="mb-30px w-95 lg-w-100 xs-mb-25px">
                We value each and every human life placed in our hands and
                constantly work towards meeting the expectations of our
                customers and stakeholders.
              </p>
              
              <div style={{ float: "right" }} className="zero-margin-top d-inline-block mt-40px xs-mt-30px">
                <a
                  href="#my_feature"
                  className=" xs-mt-15px btn btn-medium btn-switch-text btn-dark-gray btn-round-edge me-15px xs-me-5px"
                >
                  <span>
                    <span
                      className="btn-double-text"
                      data-text="Trusted doctor"
                    >
                      About hospital
                    </span>
                  </span>
                </a>
                <a
                  href="#my_team"
                  className="btn btn-medium btn-switch-text left-icon btn-transparent-light-gray border-color-transparent-dark-gray btn-round-edge xs-mt-15px"
                >
                  <span>
                    <span>
                      <i className="feather icon-feather-user"></i>
                    </span>
                    <span
                      className="btn-double-text"
                      data-text="Check timetable"
                    >
                      Check timetable
                    </span>
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
