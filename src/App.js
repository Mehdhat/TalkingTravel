import React from 'react';
import Navbar from './components/Navbar';
import Story from './components/Story';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Post from './components/Post';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Story />
      <About/>
      <Gallery />
      <ContactUs />
      <Post />
      <Footer />
    </div>
  );
}

export default App;