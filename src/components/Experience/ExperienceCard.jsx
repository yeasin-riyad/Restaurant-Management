const ExperienceCard = ({ title, description, icon }) => {
    return (
      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:scale-105">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    );
  };
  
  export default ExperienceCard;
  