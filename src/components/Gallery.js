import React from 'react';
import image1 from '../iceland.jpeg';
import image2 from '../italy.webp';
import image3 from '../dubai.webp';
import image4 from '../patagonia.jpeg';
function Gallery() {
  return (
<section id="skills" className="gallery">

<div class="row">
    <h6>Join our adventures</h6>
    <h1>Discover the world with us</h1>
    <div class="card-group">
        <div class="card">
        <img src={image1} alt="" className="img-fluid"/>
            <div class="card-body">
                <h5 class="card-title">Iceland</h5>
                <p class="card-text"><small class="text-body-secondary">Discover</small></p>
            </div>
        </div>
        <div class="card">
        <img src={image2} alt="" className="img-fluid"/>
            <div class="card-body">
                <h5 class="card-title">Italy</h5>
                <p class="card-text"><small class="text-body-secondary">Discover</small></p>
            </div>
        </div>
        <div class="card">
        <img src={image3} alt="" className="img-fluid"/>
            <div class="card-body">
                <h5 class="card-title">Dubai</h5>
                <p class="card-text"><small class="text-body-secondary">Discover</small></p>
            </div>
        </div>
        <div class="card">
        <img src={image4} alt="" className="img-fluid"/>
            <div class="card-body">
                <h5 class="card-title">Patagonia</h5>
                <p class="card-text"><small class="text-body-secondary">Discover</small></p>
            </div>
        </div>
    </div>
</div>
</section>
  );
}

export default Gallery;
