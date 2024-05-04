import React from 'react';

function ContactUs() {
  return (
    <section id="form">
      <div className="row">
        <h6>Let's build a community</h6>
        <h1>Join our next destination</h1>
        <div className="container-form">
          <h2>Share your travels</h2>
          <p>Suggest a new travel destination that you want to see and you will feature it in our blog.</p>
          <form action="" className="travel-form">
            <input type="text" placeholder="Destination name" />
            <select name="" id="">
              <option value="">Country of Destination</option>
            </select>
            <input type="text" placeholder="Your name" />
            <select name="" id="">
              <option value="">Shooting Category</option>
            </select>
            <textarea name="" id="" placeholder="Describe what kind of photos you want to focus"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;