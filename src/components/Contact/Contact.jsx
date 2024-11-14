import ContactForm from "./ContactForm";
import MapLocation from "./MapLocation";
import Heading from "../Heading";

const Contact = () => {
  return (
    <section className="py-12 lg:py-20 bg-customColor dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <Heading className="lg:text-4xl text-3xl text-white" header="GET IN TOUCH" />
        <p className="mt-4 text-gray-600 dark:text-white max-w-2xl mx-auto font-roboto text-lg lg:text-xl">
          We'd love to hear from you! Reach out with questions, feedback, or reservation requests.
        </p>

        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          <ContactForm />
        </div>

        <MapLocation />
      </div>
    </section>
  );
};

export default Contact;
