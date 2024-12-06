import React from 'react';

interface Faq {
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const faqs: Faq[] = [
    {
      question: "ما هو Mouvement وكيف يعمل؟",
      answer: "Mouvement هو تطبيق مبتكر مصمم لتحسين خدمات النقل العام من خلال توفير التتبع في الوقت الفعلي، والتحسين المدعوم بالذكاء الاصطناعي، وسهولة حجز الرحلات. يستخدم نموذج البرمجيات كخدمة (SaaS) لمساعدة الشركات على إدارة عمليات الحافلات بكفاءة مع توفير طريقة سلسة للركاب لتتبع رحلاتهم وحجزها.",
    },
    {
      question: "ما مدى دقة التتبع في الوقت الفعلي للحافلات؟",
      answer: "التتبع في الوقت الفعلي في Mouvement دقيق للغاية، حيث يوفر تحديثات مباشرة عن مواقع الحافلات. يستخدم التطبيق تقنية GPS متقدمة لضمان معرفة الركاب دائمًا بموقع حافلتهم بالضبط، مما يساعدهم على التخطيط لرحلاتهم بثقة.",
    },
    {
      question: "هل يمكنني حجز تذاكر الحافلات مباشرة من خلال التطبيق؟",
      answer: "نعم، يمكنك ذلك! يتيح لك Mouvement حجز تذاكر الحافلات بسهولة مباشرة من خلال التطبيق. ما عليك سوى اختيار المسار والجدول الزمني المطلوب، وإكمال الحجز في خطوات بسيطة.",
    },
    {
      question: "كيف يقوم الذكاء الاصطناعي بتحسين توزيع الحافلات؟",
      answer: "يقوم الذكاء الاصطناعي في Mouvement بتحليل البيانات في الوقت الفعلي حول حركة الحافلات وطلب الركاب لضبط توزيع الحافلات بشكل ديناميكي. يساعد هذا في تقليل الازدحام، وتحسين استهلاك الوقود، وضمان وجود الحافلات حيث تكون الحاجة إليها أكبر، مما يحسن الكفاءة والموثوقية بشكل عام.",
    },
  ];

  return (
    <section id="my_faqs" className="big-section" style={{ marginTop: '-60px', direction: 'rtl', textAlign: 'right' }}>
      <div className="container">
        <div className="row"> 
          <div className="col-xxl-4 col-lg-5 position-relative md-mb-25px appear anime-child anime-complete">
            <h2 className="fw-700 text-dark-gray ls-minus-2px">هل لديك سؤال؟</h2>
            <p>نحن هنا للإجابة على جميع استفساراتك حول خدماتنا</p>
          </div>
          <div className="col-xxl-7 col-lg-7 offset-xxl-1">  
            <div className="accordion accordion-style-02 appear anime-child anime-complete" id="accordion-style-02">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <div className="accordion-header border-bottom border-color-extra-medium-gray">
                    <a href="#" data-bs-toggle="collapse" data-bs-target={`#accordion-style-02-${index + 1}`} aria-expanded="false" data-bs-parent="#accordion-style-02" className="collapsed">
                      <div className="mb-0 accordion-title position-relative text-dark-gray pe-30px">
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
      </div> 
    </section>
  );
};

export default Faqs;
