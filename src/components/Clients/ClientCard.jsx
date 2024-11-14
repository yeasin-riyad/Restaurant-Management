
const ClientCard = ({ client }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <img
        src={client.image}
        alt={client.name}
        className="w-16 h-16 mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{client.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{client.position}</p>
      <p className="mt-4 text-gray-700 dark:text-gray-400 italic">{client.testimonial}</p>
    </div>
  );
};

export default ClientCard;
