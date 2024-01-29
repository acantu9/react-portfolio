import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <section>
      <Header />
      <h2>About Me</h2>
      <img src="path/to/photo.jpg" alt="Your Name" />
      <p>short bio goes here.</p>
      <Footer />
    </section>
  );
};

export default About;