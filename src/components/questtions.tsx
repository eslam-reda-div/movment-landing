import React from 'react';

interface Faq {
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const faqs: Faq[] = [
    {
      question: "How long is this site live?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever unknown printer.",
    },
    {
      question: "Can I install/upload anything I want on there?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever unknown printer.",
    },
    {
      question: "How can I migrate to another site?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever unknown printer.",
    },
    {
      question: "Can I change the domain you give me?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever unknown printer.",
    },
  ];

  return (
    <section id="my_faqs" className="big-section" style={{ marginTop: '-60px', direction: 'rtl', textAlign: 'right' }}>
      <div className="container">
        <div className="row"> 
          <div className="col-xxl-4 col-lg-5 position-relative md-mb-25px appear anime-child anime-complete">
            <h2 className="fw-700 alt-font text-dark-gray ls-minus-2px">Have a hosting question?</h2>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry has been.</p>
          </div>
          <div className="col-xxl-7 col-lg-7 offset-xxl-1">  
            <div className="accordion accordion-style-02 appear anime-child anime-complete" id="accordion-style-02">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <div className="accordion-header border-bottom border-color-extra-medium-gray">
                    <a href="#" data-bs-toggle="collapse" data-bs-target={`#accordion-style-02-${index + 1}`} aria-expanded="false" data-bs-parent="#accordion-style-02" className="collapsed">
                      <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                        <i className="feather icon-extra-medium icon-feather-chevron-down"></i>
                        <span className="fw-600 fs-18">{faq.question}</span>
                      </div>
                    </a>
                  </div>
                  <div id={`accordion-style-02-${index + 1}`} className="accordion-collapse collapse" data-bs-parent="#accordion-style-02">
                    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-light-medium-gray">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>   
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-auto icon-with-text-style-08 sm-mb-10px appear anime-complete">
            <div className="feature-box feature-box-left-icon-middle">
              <div className="feature-box-icon me-10px">
                <i className="bi bi-envelope icon-small text-dark-gray" aria-hidden="true"></i>
              </div>
              <div className="feature-box-content">
                <span className="alt-font text-dark-gray fw-500 fs-18">
                  Looking for help? <a href="#" className="text-decoration-line-bottom text-dark-gray fw-600">Submit a ticket</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-auto icon-with-text-style-08 appear anime-complete">
            <div className="feature-box feature-box-left-icon-middle">
              <div className="feature-box-icon me-10px">
                <i className="bi bi-chat-dots icon-small text-dark-gray" aria-hidden="true"></i>
              </div>
              <div className="feature-box-content">
                <span className="alt-font text-dark-gray fw-500 fs-18">
                  Keep in Touch. <a href="#" className="text-decoration-line-bottom text-dark-gray fw-600">Like us on Facebook</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Faqs;
