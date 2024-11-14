
const MapLocation = () => {
  return (
    <div className="mt-10 w-full h-64">
      <iframe
        title="Restaurant Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867747086516!2d144.96305791566558!3d-37.81410717975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f4f1b7%3A0x5045675218ce6e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1647387167841!5m2!1sen!2sau"
        className="w-full h-full rounded-lg"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapLocation;
