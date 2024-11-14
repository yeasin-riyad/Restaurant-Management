// src/components/Portfolio/ChefsSpecials.js

import Heading from "../Heading";

const ChefsSpecials = () => {
    const specials = [
      { id: 1, name: "Stuffed Lamb with Herbs", description: "Slow-cooked lamb stuffed with aromatic herbs.", image: "https://i.ibb.co.com/hdvQ7s4/pexels-andrei-marina-52375517-11795635.jpg" },
      { id: 2, name: "Saffron Rice with Chicken", description: "Delicately flavored rice served with tender chicken.", image: "https://i.ibb.co.com/B6Hm63L/pexels-prabal-9609840.jpg" },
    ];
  
    return (
      <section className="chefs-specials py-8 px-5">
        <Heading className={"lg:text-4xl text-center mb-7"} header={"CHEF'S SPECIALS"}/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specials.map((special) => (
            <div key={special.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={special.image} alt={special.name} className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{special.name}</h3>
                <p className="mt-2 text-gray-600">{special.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ChefsSpecials;
  