
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import ProjectSlider from './components/ProjectSlider';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import SideNav from './components/SideNav';

const App: React.FC = () => {
  useEffect(() => {
    // Intersection observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full">
      <Navbar />
      <SideNav />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="about" className="reveal">
          <About />
        </div>
        
        <div id="services" className="reveal">
          <Services />
        </div>
        
        <div id="work" className="reveal">
          <Work />
        </div>

        <div className="reveal">
          <ProjectSlider />
        </div>
        
        <div id="testimonials" className="reveal">
          <Testimonials />
        </div>
        
        <div id="contact" className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
      
      {/* AI Strategy Companion */}
      <Chatbot />
    </div>
  );
};

export default App;
