// src/components/Portfolio/HeroSection.js

import NavbarButton from "../Navbar/NavbarButton";

const HeroSection = () => {
    return (
      <section className="relative hero-section bg-cover  text-white py-32 px-5" style={{ backgroundImage: 'url("https://i.ibb.co.com/kBB5RBW/pexels-fotios-photos-776538-1.jpg")' }}>
              <div className="absolute inset-0 bg-black opacity-20 backdrop-blur-[6.5px]"></div>

        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold font-roboto">Experience Authentic Saudi Cuisine</h1>
          <p className="mt-4 text-xl">Delighting your senses with traditional flavors and contemporary presentation.</p>
          <NavbarButton className="mt-8 px-8 py-3  rounded-lg text-black hover:bg-yellow-600 transition duration-300" text={"Explore Our Menu"}/>

        </div>
      </section>
    );
  };
  
  export default HeroSection;
  