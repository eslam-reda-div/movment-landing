function Download() {
    return (
        <>
            <section className="overflow-hidden position-relative bg-gradient-very-light-gray py-0 lg-pt-8 lg-pb-8">
                <div
                    id="particles-style-02"
                    className="h-100 position-absolute left-0px top-0 w-100"
                    data-particle="true"
                    data-particle-options='{"particles": {"number": {"value": 18,"density": {"enable": true,"value_area": 2000}},"color": {"value": ["#8f76f5", "#a65cef", "#c74ad2", "#e754a4", "#ff6472"]},"shape": {"type": "circle","stroke":{"width":0,"color":"#000000"},"opacity": {"value": 0.3,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}},"size": {"value": 8,"random": true,"anim": {"enable": false,"sync": true}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move": {"enable": true,"speed":1,"direction": "right","random": false,"straight": false},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true},"retina_detect": false}}'>
                    <canvas className="particles-js-canvas-el" style={{ width: '100%', height: '100%' }} width="1634" height="517"></canvas>
                </div>
                <div className="container">
                    <div className="row align-items-center ps-50px pe-50px lg-px-0 position-relative z-index-1 justify-content-md-center">
                        <div className="col-lg-6 md-mb-50px">
                            <div className="row">
                                <div className="col-sm-6 xs-mb-30px">
                                    <img
                                        src="/images/demo-application-home-06.jpg"
                                        className="w-100 box-shadow-quadruple-large border-radius-10px skrollable skrollable-between"
                                        data-bottom-top="transform: translateY(-250px)"
                                        data-top-bottom="transform: translateY(200px)"
                                        alt=""
                                        style={{ transform: 'translateY(84.0116px)' }}
                                        data-no-retina=""
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <img
                                        src="/images/demo-application-home-07.jpg"
                                        className="w-100 box-shadow-quadruple-large border-radius-10px skrollable skrollable-between"
                                        data-bottom-top="transform: translateY(200px)"
                                        data-top-bottom="transform: translateY(-300px)"
                                        alt=""
                                        style={{ transform: 'translateY(-25.7752px)' }}
                                        data-no-retina=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-8 text-center text-lg-start">
                            <h3 className="fw-800 text-dark-gray ls-minus-1px">Download the travellers app now!</h3>
                            <span className="fs-18 w-80 xl-w-100 d-block mb-35px">
                                Your ultimate travel partner. Carries the information you need while travelling.
                            </span>
                            <div className="row pe-20px xl-pe-0 justify-content-center justify-content-lg-start">
                                <a href="#" className="col-6 col-lg-6 col-sm-5">
                                    <img
                                        src="/images/app-store-white.svg"
                                        className="box-shadow-medium-bottom border-radius-6px"
                                        alt=""
                                        data-no-retina=""
                                    />
                                </a>
                                <a href="#" className="col-6 col-lg-6 col-sm-5">
                                    <img
                                        src="/images/play-store-white.svg"
                                        className="box-shadow-medium-bottom border-radius-6px"
                                        alt=""
                                        data-no-retina=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Download;
