function About() {
  return (
    <section id="my_about" className="position-relative half-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 position-relative md-mb-20px appear">
            <figure>
              <div className=" stop=atropos-rotate-touch">
                <div className="stop=atropos-scale">
                  <div className="stop=atropos-rotate">
                    <div className="stop=atropos-inner">
                      <img src="/images/iphone-mockups.png" alt="Demo Application" />
                      <span className="stop=atropos-highlight"></span>
                    </div>
                    <span className="stop=atropos-shadow"></span>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div style={{ textAlignLast: "right" }} dir="rtl" className="text-center col-lg-5 col-md-8 col-sm-10 text-lg-start"> 
            <div style={{ textAlign: "right", backgroundColor:"#FE9900" }} className="text-white bg-base-color d-inline-block mb-20px fw-600 text-uppercase border-radius-30px ps-20px pe-20px fs-12">كيف تعمل</div>
            <h3 style={{ textAlign: "right" }} className="fw-700 mb-45px text-dark-gray ls-minus-1px">استمتع برحلة مميزة مع خدماتنا</h3>
            <div className="row row-cols-1">
              {[
                {
                  title: "اكتشف اهتماماتك",
                  description: "نؤمن بأن ما نصنعه اليوم سيتحول إلى تجربة فريدة."
                },
                {
                  title: "حدد ميزانية رحلتك",
                  description: "نضمن لك رحلات مريحة ومناسبة للتكلفة."
                },
                {
                  title: "اختر رحلتك المثالية",
                  description: "خدماتنا توفر لك السهولة والسرعة للوصول إلى وجهتك."
                }
              ].map((step, index) => (
                <div key={index} className="col-12 process-step-style-05 position-relative hover-box">
                  <div className="process-step-item d-flex">
                    <div className="process-step-icon-wrap position-relative">
                      <div style={{ backgroundColor: "#B3B8EB" }} className="mx-auto process-step-icon d-flex justify-content-center align-items-center rounded-circle h-55px w-55px fs-15 fw-700">
                        <span className="number position-relative z-index-1 text-dark-gray">{String(index + 1).padStart(2, '0')}</span>
                        <div className="box-overlay bg-base-color rounded-circle"></div>
                      </div> 
                      <span className="progress-step-separator bg-dark-gray opacity-1"></span>
                    </div>
                    <div className="process-content pr-35px last-paragraph-no-margin mb-30px">
                      <span className="d-block fw-700 text-dark-gray mb-5px fs-18">{step.title}</span>
                      <p style={{ textAlign: 'right' }} className="w-70 lg-w-90 sm-w-100">{step.description}</p>
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
