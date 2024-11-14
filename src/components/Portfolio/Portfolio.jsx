// src/components/Portfolio/Portfolio.js

import HeroSection from './HeroSection';
import Highlights from './Highlights';
import ChefsSpecials from './ChefsSpecials';
import AmbianceGallery from './AmbianceGallery';
import Testimonials from './Testimonials';
import Reservations from './Reservations';

const Portfolio = () => {
  return (
    <div className="portfolio bg-gray-100 text-gray-900 font-roboto">
      <HeroSection />
      <Highlights />
      <ChefsSpecials />
      <AmbianceGallery />
      <Testimonials />
      <Reservations />
    </div>
  );
};

export default Portfolio;
