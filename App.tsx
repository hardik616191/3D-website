
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import ProjectSlider from './components/ProjectSlider';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import SideNav from './components/SideNav';
import WorkPage from './pages/WorkPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentPath(hash);
      // Scroll to top on page change
      if (hash.startsWith('#/work') || hash === '#/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Intersection observer for reveal animations (re-init on path change)
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

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, [currentPath]);

  const isWorkPage = currentPath.startsWith('#/work');

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {isWorkPage ? (
          <WorkPage />
        ) : (
          <>
            <SideNav />
            <div id="hero">
              <Hero />
            </div>
            
            <div id="awards" className="reveal">
              <Awards />
            </div>

            <div id="about" className="reveal">
              <About />
            </div>
            
            <div id="services" className="reveal">
              <Services />
            </div>
            
            <div id="testimonials" className="reveal">
              <Testimonials />
            </div>
            
            <div id="contact" className="reveal">
              <Contact />
            </div>
          </>
        )}
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
