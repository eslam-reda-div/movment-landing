function Team() {
    return (
        <>
            <section id="my_team" className="position-relative">
                <div
                    id="particles-03"
                    data-particle="true"
                    data-particle-options='{"particles": {"number": {"value": 5,"density": {"enable": true,"value_area": 1000}}, "color": {"value": ["#b7b9be", "#dd6531"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000"}}, "opacity": {"value": 0.5,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}}, "size": {"value": 8,"random": true,"anim": {"enable": false,"sync": true}}, "move": {"enable": true,"speed": 2,"direction": "right","random": false,"straight": false}}, "interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true}},"retina_detect": false}'
                    className="top-0 left-0 position-absolute h-100 z-index-minus-1"
                >
                    <canvas className="particles-js-canvas-el" style={{ width: "100%", height: "100%" }} width="423" height="737"></canvas>
                </div>
                <div className="container">
                    <div className="mb-3 row justify-content-center">
                        <div className="text-center col-lg-7 appear anime-complete" data-anime='{"opacity": [0,1], "duration": 800, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad"}'>
                            <span className="fw-600 ls-1px fs-16 alt-font mb-5px d-inline-block text-uppercase" style={{color:"#595B99"}}>تعرف على فريقنا</span>
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-2px">خبراء رائدون</h2>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center appear anime-child anime-complete" data-anime='{"el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 800, "delay":0, "staggervalue": 300, "easing": "easeOutQuad"}'>
                        {/* بداية عنصر عضو الفريق */}
                        <div className="text-center col team-style-05 md-mb-40px">
                            <div className="overflow-hidden position-relative border-radius-4px mb-30px last-paragraph-no-margin">
                                <img src="images/team-09.jpg" alt="" data-no-retina="" />
                                <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-40px lg-p-30px team-content bg-gradient-dark-orange-transparent">
                                    <div className="social-icon fs-20">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-solid fa-envelope"></i></a>
                                        <a href="http://www.dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-solid fa-phone"></i></a>
                                    </div>                                
                                </div>
                            </div>
                            <div className="alt-font fw-600 text-dark-gray lh-22 fs-18">أحمد محمد</div>
                            <span>المدير</span>
                        </div>
                        {/* نهاية عنصر عضو الفريق */}
                        {/* بداية عنصر عضو الفريق */}
                        <div className="text-center col team-style-05 md-mb-40px">
                            <div className="overflow-hidden position-relative border-radius-4px mb-30px last-paragraph-no-margin">
                                <img src="images/team-09.jpg" alt="" data-no-retina="" />
                                <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-40px team-content bg-gradient-dark-orange-transparent">
                                    <div className="social-icon fs-20">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-solid fa-envelope"></i></a>
                                        <a href="http://www.dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-solid fa-phone"></i></a>
                                    </div>                              
                                </div>
                            </div>
                            <div className="alt-font fw-600 text-dark-gray lh-22 fs-18">عمر خالد</div>
                            <span>متخصص</span>
                        </div>
                        {/* نهاية عنصر عضو الفريق */}   
                        {/* بداية عنصر عضو الفريق */}
                        <div className="text-center col team-style-05 xs-mb-40px">
                            <div className="overflow-hidden position-relative border-radius-4px mb-30px last-paragraph-no-margin">
                                <img src="images/team-09.jpg" alt="" data-no-retina="" />
                                <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-40px team-content bg-gradient-dark-orange-transparent">
                                    <div className="social-icon fs-20">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-solid fa-envelope"></i></a>
                                        <a href="http://www.dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-solid fa-phone"></i></a>
                                    </div>                             
                                </div>
                            </div>
                            <div className="alt-font fw-600 text-dark-gray lh-22 fs-18">سارة أحمد</div>
                            <span>مدير</span>
                        </div>
                        {/* نهاية عنصر عضو الفريق */}
                        {/* بداية عنصر عضو الفريق */}
                        <div className="text-center col team-style-05">
                            <div className="overflow-hidden position-relative border-radius-4px mb-30px last-paragraph-no-margin">
                                <img src="images/team-11.jpg" alt="" data-no-retina="" />
                                <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-40px team-content bg-gradient-dark-orange-transparent">
                                    <div className="social-icon fs-20">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-solid fa-envelope"></i></a>
                                        <a href="http://www.dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-solid fa-phone"></i></a>
                                    </div>                              
                                </div>
                            </div>
                            <div className="alt-font fw-600 text-dark-gray lh-22 fs-18">ليلى محمد</div>
                            <span>مستشار</span>
                        </div>
                        {/* نهاية عنصر عضو الفريق */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;
