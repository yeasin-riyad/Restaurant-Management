import ClientsHeader from './ClientsHeader';
import ClientCard from './ClientCard';
import clientsData from './clientsData';

const ClientsSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-customColor dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <ClientsHeader/>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientsData.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
