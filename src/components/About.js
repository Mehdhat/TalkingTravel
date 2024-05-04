import React from 'react';
import image from '../e427422dc25efbed8f79661ee8c8df21.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

function About() {
    return (
        <section id="about">
        <div className="about-section wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
                        <div className="card border-0">
                        <img src={image} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-sec">
                        <h6>Future Destination</h6>
                        <h1>Our swiss adventure blog</h1>
                        <p>Visiting the swiss alps?ant to know the requirements on traveling to Switzerland during the
                            pandemic? Our blog might help?</p>
                            <a href=""><PlayCircleFilledIcon />Watch Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
    }
    export default About;