function About() {
  return (
    <section id="my_about" className="position-relative half-section">
      <div className="container-fluid">
        <div className="row">
          <div className="p-0 overlap-section position-absolute right-0px text-end w-auto xs-w-200px z-index-minus-1 skrollable skrollable-between" 
               style={{ transform: 'translateY(-17.1822px)', marginTop: '-589px' }}>
            {/* <img src="/images/demo-application-home-bg-right.png" alt="Background Right" /> */}
          </div>
        </div>
      </div>
      <div className="position-absolute left-0px bottom-minus-100px w-auto xs-w-180px z-index-minus-1 skrollable skrollable-between" 
           style={{ transform: 'translateY(-4.26587px)' }}>
        {/* <img src="/images/demo-application-home-bg-left.png" alt="Background Left" /> */}
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 position-relative md-mb-20px appear">
            <figure>
              <div className="atropos atropos-rotate-touch">
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="atropos-inner">
                      <img src="/images/iphone-mockups.png" alt="Demo Application" />
                      <span className="atropos-highlight"></span>
                    </div>
                    <span className="atropos-shadow"></span>
                  </div>
                </div>
              </div>
              {/* <figcaption className="position-absolute bottom-90px xs-bottom-50px right-0px transform-3d xs-w-80 z-index-9">
                <img src="/images/demo-application-home-02-2.png" className="animation-float" alt="Floating Animation" />
              </figcaption> */}
            </figure>
          </div>
          <div style={{ textAlignLast: "right" }} dir="rtl" className="col-lg-5 col-md-8 col-sm-10 text-center text-lg-start"> 
            <div style={{ textAlign: "right", backgroundColor:"#FE9900" }} className="bg-base-color d-inline-block mb-20px fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12">How it works</div>
            <h3 style={{ textAlign: "right" }} className="fw-700 mb-45px text-dark-gray ls-minus-1px">Find amazing travel places and hotels.</h3>
            <div className="row row-cols-1">
              {["Explore your interests", "Select budget range", "Create the perfect trip"].map((step, index) => (
                <div key={index} className="col-12 process-step-style-05 position-relative hover-box">
                  <div className="process-step-item d-flex">
                    <div className="process-step-icon-wrap position-relative">
                      <div style={{ backgroundColor: "#B3B8EB" }} className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-55px w-55px fs-15 fw-700">
                        <span className="number position-relative z-index-1 text-dark-gray">{String(index + 1).padStart(2, '0')}</span>
                        <div className="box-overlay bg-base-color rounded-circle"></div>
                      </div> 
                      <span className="progress-step-separator bg-dark-gray opacity-1"></span>
                    </div>
                    <div className="process-content pr-35px last-paragraph-no-margin mb-30px">
                      <span className="d-block fw-700 text-dark-gray mb-5px fs-18">{step}</span>
                      <p style={{ textAlign: 'right' }} className="w-70 lg-w-90 sm-w-100">We believe that what we create today will transform to brand.</p>
                    </div>
                  </div> 
                </div>
              ))}
            </div>  
          </div> 
        </div>
      </div>
    </section>
  );
}

export default About;
