import React from 'react';
import image1 from '../zermatt.jpeg';
import image2 from '../tuscany.jpg';
import image3 from '../koyoto.webp';
import image4 from '../loften.jpeg';
import image5 from '../dubai.webp';
import image6 from '../iceland.jpeg';
function Post() {
  return (
<section id="posts">
        <div className="row">
            <h6>Catch up to our posts</h6>
            <h1>Recent story entries</h1>
        </div>

        <div className="city-card">
        <img src={image1} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Zermatt, Switzerland</h3>
            <p>Marvel at the beauty of the iconic Matterhorn. Find the best places to stay with breathtaking views.</p>
            <a href="#">View Full Blog</a>
        </div>

        <div className="city-card">
        <img src={image2} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Tuscany, Italy</h3>
            <p>Explore the amazing Tuscany with its famous Renaissance art, architecture, and vast scenic landscapes.</p>
            <a href="#">View Full Blog</a>
        </div>

        <div className="city-card">
        <img src={image3} alt="" className="img-fluid"height="100px" width="200px"/>
            <h3>Kyoto, Japan</h3>
            <p>Discover Kyoto's temples, gardens, and traditional wooden houses. It's time to visit this historic city.</p>
            <a href="#">View Full Blog</a>
        </div>

        <div className="city-card">
        <img src={image4} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Lofoten Islands, Norway</h3>
            <p>Experience the arctic landscape and stunning architecture of Lofoten Islands. Perfect for your next postcard.</p>
            <a href="#">View Full Blog</a>
        </div>

        <div className="city-card">
        <img src={image5} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Dubai, UAE</h3>
            <p>Experience the arctic landscape and stunning architecture of Dubai. Perfect for your next postcard.</p>
            <a href="#">View Full Blog</a>
        </div>

        <div className="city-card">
        <img src={image6} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Iceland</h3>
            <p>Experience the arctic landscape and stunning architecture of  Islands. Perfect for your next postcard.</p>
            <a href="#">View Full Blog</a>
        </div>
        <div className="city-card">
        <img src={image1} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Zermatt, Switzerland</h3>
            <p>Marvel at the beauty of the iconic Matterhorn. Find the best places to stay with breathtaking views.</p>
            <a href="#">View Full Blog</a>
        </div>

        <div className="city-card">
        <img src={image2} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Tuscany, Italy</h3>
            <p>Explore the amazing Tuscany with its famous Renaissance art, architecture, and vast scenic landscapes.</p>
            <a href="#">View Full Blog</a>
        </div>

        <div className="city-card">
        <img src={image3} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Kyoto, Japan</h3>
            <p>Discover Kyoto's temples, gardens, and traditional wooden houses. It's time to visit this historic city.</p>
            <a href="#">View Full Blog</a>
        </div>

        <div className="city-card">
        <img src={image4} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Lofoten Islands, Norway</h3>
            <p>Experience the arctic landscape and stunning architecture of Lofoten Islands. Perfect for your next postcard.</p>
            <a href="#">View Full Blog</a>
        </div>

        <div className="city-card">
        <img src={image5} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Dubai, UAE</h3>
            <p>Experience the arctic landscape and stunning architecture of Dubai. Perfect for your next postcard.</p>
            <a href="#">View Full Blog</a>
        </div>

        <div className="city-card">
        <img src={image6} alt="" className="img-fluid" height="100px" width="200px"/>
            <h3>Iceland</h3>
            <p>Experience the arctic landscape and stunning architecture of  Islands. Perfect for your next postcard.</p>
            <a href="#">View Full Blog</a>
        </div>
    </section>
  );
}

export default Post;
