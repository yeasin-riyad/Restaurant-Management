import Heading from "../Heading";

const ClientsHeader = () => {
  return (
    <div className="text-center">
      {/* <h2 className="text-3xl lg:text-4xl  text-gray-800 dark:text-white"></h2> */}
      <Heading className={"font-bold text-white"} header={"OUR CLIENTS"}/>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto font-roboto">
        We are proud to serve a diverse range of clients who value quality and authenticity. Here’s what some of them have to say.
      </p>
    </div>
  );
};

export default ClientsHeader;
