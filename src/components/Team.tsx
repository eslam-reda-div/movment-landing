function Team() {
    return (
        <>
            <section className="position-relative">
                <div
                    id="particles-03"
                    data-particle="true"
                    data-particle-options='{"particles": {"number": {"value": 5,"density": {"enable": true,"value_area": 1000}}, "color": {"value": ["#b7b9be", "#dd6531"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000"}}, "opacity": {"value": 0.5,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}}, "size": {"value": 8,"random": true,"anim": {"enable": false,"sync": true}}, "move": {"enable": true,"speed": 2,"direction": "right","random": false,"straight": false}}, "interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true}},"retina_detect": false}'
                    className="position-absolute h-100 top-0 left-0 z-index-minus-1"
                >
                    <canvas className="particles-js-canvas-el" style={{ width: "100%", height: "100%" }} width="423" height="737"></canvas>
                </div>
                <div className="container">
                    <div className="row justify-content-center mb-3">
                        <div className="col-lg-7 text-center appear anime-complete" data-anime='{"opacity": [0,1], "duration": 800, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad"}'>
                            <span className="fw-600 ls-1px fs-16 alt-font mb-5px d-inline-block text-uppercase text-base-color">Meet our people</span>
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-2px">Leading experts</h2>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center appear anime-child anime-complete" data-anime='{"el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 800, "delay":0, "staggervalue": 300, "easing": "easeOutQuad"}'>
                        {/* start team member item */}
                        <div className="col text-center team-style-05 md-mb-40px">
                            <div className="position-relative border-radius-4px overflow-hidden mb-30px last-paragraph-no-margin">
                                <img src="images/team-08.jpg" alt="" data-no-retina="" />
                                <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-40px lg-p-30px team-content bg-gradient-dark-orange-transparent">
                                    <div className="social-icon fs-20">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="http://www.dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-dribbble"></i></a>
                                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-twitter"></i></a>
                                    </div>                                
                                </div>
                            </div>
                            <div className="alt-font fw-600 text-dark-gray lh-22 fs-18">Bryan Jonhson</div>
                            <span>Director</span>
                        </div>
                        {/* end team member item */}
                        {/* start team member item */}
                        <div className="col text-center team-style-05 md-mb-40px">
                            <div className="position-relative border-radius-4px overflow-hidden mb-30px last-paragraph-no-margin">
                                <img src="images/team-09.jpg" alt="" data-no-retina="" />
                                <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-40px team-content bg-gradient-dark-orange-transparent">
                                    <div className="social-icon fs-20">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="http://www.dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-dribbble"></i></a>
                                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-twitter"></i></a>
                                    </div>                              
                                </div>
                            </div>
                            <div className="alt-font fw-600 text-dark-gray lh-22 fs-18">Jeremy Dupont</div>
                            <span>Specialist</span>
                        </div>
                        {/* end team member item */}   
                        {/* start team member item */ }
                        <div className="col text-center team-style-05 xs-mb-40px">
                            <div className="position-relative border-radius-4px overflow-hidden mb-30px last-paragraph-no-margin">
                                <img src="images/team-10.jpg" alt="" data-no-retina="" />
                                <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-40px team-content bg-gradient-dark-orange-transparent">
                                    <div className="social-icon fs-20">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="http://www.dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-dribbble"></i></a>
                                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-twitter"></i></a>
                                    </div>                               
                                </div>
                            </div>
                            <div className="alt-font fw-600 text-dark-gray lh-22 fs-18">Matthew Taylor</div>
                            <span>Manager</span>
                        </div>
                        {/* end team member item */}
                        {/* start team member item */} 
                        <div className="col text-center team-style-05">
                            <div className="position-relative border-radius-4px overflow-hidden mb-30px last-paragraph-no-margin">
                                <img src="images/team-11.jpg" alt="" data-no-retina="" />
                                <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-40px team-content bg-gradient-dark-orange-transparent">
                                    <div className="social-icon fs-20">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="http://www.dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-dribbble"></i></a>
                                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa-brands fa-twitter"></i></a>
                                    </div>                               
                                </div>
                            </div>
                            <div className="alt-font fw-600 text-dark-gray lh-22 fs-18">Johncy Parker</div>
                            <span>Consultant</span>
                        </div>
                        {/* end team member item */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;
