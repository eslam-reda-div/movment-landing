function Hero() {
    return (
        <>
            <section
                className="p-0 cover-background full-screen ipad-top-space-margin md-h-auto position-relative md-pb-70px"
                style={{
                    backgroundImage: 'url(/images/demo-application-home-banner.jpg)',
                    marginTop: 'inherit',
                    height: '1031px'
                }}
            >
                <div
                    id="particles-style-01"
                    className="h-100 position-absolute left-0px top-0 w-100"
                    data-particle="true"
                    data-particle-options='{"particles": {"number": {"value": 12,"density": {"enable": true,"value_area": 2000}},"color": {"value": ["#8f76f5", "#a65cef", "#c74ad2", "#e754a4", "#ff6472"]},"shape": {"type": "circle","stroke":{"width":0,"color":"#000000"},"opacity": {"value": 0.3,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}},"size": {"value": 8,"random": true,"anim": {"enable": false,"sync": true}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move": {"enable": true,"speed":1,"direction": "right","random": false,"straight": false},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true},"retina_detect": false}}'>
                    <canvas className="particles-js-canvas-el" style={{ width: '100%', height: '100%' }} width="1634" height="1031"></canvas>
                </div>
                <div className="container h-100 position-relative z-index-9">
                    <div className="row align-items-center h-100 justify-content-center">
                        <div
                            className="col-lg-6 col-md-10 text-center position-relative md-mb-50px appear anime-child anime-complete"
                            data-anime='{"el": "childs", "opacity": [0, 1], "translateY": [80, 0], "staggervalue": 200, "duration": 900, "easing": "easeOutCirc"}'
                        >
                            <div className="d-inline-block">
                                <div className="text-end w-90 lg-w-80 ms-auto animation-float">
                                    <img src="/images/hero-mockup.png" style={{height: "750px"}} alt="" data-no-retina="" />
                                </div>
                            </div>
                            <div className="w-60 position-absolute left-minus-40px lg-left-minus-30px xs-left-15px xs-w-50 bottom-minus-50px mb-30 xs-mb-15">
                                <img src="/images/demo-application-home-01-02.jpg" className="border-radius-18px box-shadow-extra-large" alt="" data-no-retina="" />
                            </div>
                        </div>
                        <div
                        
                            className="col-xl-5 ps-3 md-ps-15px col-lg-6 col-md-9 position-relative text-center text-lg-start appear anime-child anime-complete"
                            data-anime='{"el": "childs", "translateY": [50, 0], "perspective": [1200,1200], "scale": [1.1, 1], "rotateY": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad"}'
                        >
                            <div className="fs-90 xl-fs-80 lh-80 mb-35px text-dark-gray ls-minus-3px">
                                <span className="d-inline-block">Best mobile</span>
                                <span className="fw-800 d-inline-block">app award.</span>
                            </div>
                            <span className="fs-19 w-90 xs-w-100 d-block lh-32 mb-35px mx-auto mx-lg-0">
                                Your ultimate travel partner. Carries the information you need while travelling.
                            </span>
                            <div className="row pe-20px md-ps-25px sm-px-0 md-border-end-0">
                                <a href="#" className="col-6">
                                    <img src="/images/app-store-white.svg" className="box-shadow-medium-bottom box-shadow-quadruple-large-hover border-radius-4px" alt="" data-no-retina="" />
                                </a>
                                <a href="#" className="col-6">
                                    <img src="/images/play-store-white.svg" className="box-shadow-medium-bottom box-shadow-quadruple-large-hover border-radius-4px" alt="" data-no-retina="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* start marquees */}
                <div className="marquees-text fw-800 fs-250 md-fs-200 ls-minus-10px text-dark-gray text-nowrap position-absolute bottom-130px opacity-1 text-center">
                    travel application travel application
                </div>
                {/* end marquees */}
            </section>
        </>
    );
}

export default Hero;