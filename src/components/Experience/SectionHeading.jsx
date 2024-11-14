const SectionHeading = ({ title, subtitle }) => {
    return (
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-gray-800 font-bebas">{title}</h2>
        <p className="text-gray-800 text-lg mt-2">{subtitle}</p>
      </div>
    );
  };
  
  export default SectionHeading;
  