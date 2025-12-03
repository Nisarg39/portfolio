import { useEffect } from 'react';
import { About, Contact, Experience, Hero, Works, StarsCanvas, Services, FAQ } from '../components';

const HomePage = () => {

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Handle browser back/forward
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <About />
      <Services />
      <Experience />
      <Works />
      <FAQ />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default HomePage;
