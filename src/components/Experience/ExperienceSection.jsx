import SectionHeading from './SectionHeading';
import ExperienceCard from './ExperienceCard';
import Container from './Container';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "10+ Years of Culinary Excellence",
      description: "Crafting unforgettable flavors and moments for over a decade with top-quality ingredients and unique recipes.",
      icon: "🥇",
    },
    {
      title: "Award-Winning Chefs",
      description: "Our chefs have been recognized for their culinary artistry with awards in innovation, taste, and presentation.",
      icon: "👨‍🍳",
    },
    {
      title: "5-Star Customer Service",
      description: "Dedicated to providing a personalized and warm dining experience that leaves lasting memories.",
      icon: "⭐",
    },
    {
      title: "Eco-Friendly & Sustainable",
      description: "Committed to sustainable sourcing, reducing waste, and promoting a greener future for our planet.",
      icon: "🌱",
    },
  ];

  return (
    <section className="py-5 bg-gray-100">
      <Container>
        <SectionHeading title="Our Experience" subtitle="Discover What Sets Us Apart" />

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
