// src/components/Portfolio/Highlights.js

import Heading from "../Heading";

const Highlights = () => {
    const highlights = [
      { id: 1, title: "Traditional Lamb Kabsa", image: "https://i.ibb.co.com/qkCsQsY/pexels-ali-dashti-506667798-17650197-1.jpg" },
      { id: 2, title: "Freshly Brewed Arabic Coffee", image: "https://i.ibb.co.com/b5kNxmm/pexels-alejandro-aznar-155337093-29389694-1.jpg" },
      { id: 3, title: "Authentic Decor & Ambience", image: "https://i.ibb.co.com/ydQ181k/pexels-bertellifotografia-16120160-1.jpg" },
    ];
  
    return (
      <section className="highlights py-8 px-5 text-center">
        <Heading className={"lg:text-4xl text-center mb-7"} header={"WHAT WE OFFER"}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={highlight.image} alt={highlight.title} className="w-full h-64 object-cover mt-1" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{highlight.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Highlights;
  