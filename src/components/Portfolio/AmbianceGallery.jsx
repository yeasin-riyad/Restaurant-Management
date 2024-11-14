// src/components/Portfolio/AmbianceGallery.js

import Heading from "../Heading";

const AmbianceGallery = () => {
    const images = [
      "https://i.ibb.co.com/12z45NV/pexels-luis-felipe-perez-817377805-19655363-2.jpg",
      "https://i.ibb.co.com/YDWyLr7/pexels-bertellifotografia-16935961.jpg",
      "https://i.ibb.co.com/ngLV6gQ/pexels-filip-sestrenek-195922998-11474214.jpg",
    ];
  
    return (
      <section className="ambiance-gallery py-8 px-5">
        <Heading className={"lg:text-4xl text-center"} header={"OUR AMBIANCE"}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 lg:mt-7 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img src={image} alt={`Ambiance ${index + 1}`} className="w-full h-72 object-cover" />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default AmbianceGallery;
  