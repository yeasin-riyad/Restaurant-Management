import Container from "../../components/Container";
import NavbarButton from "../../components/Navbar/NavbarButton";

const Hero = () => {
  return (
    <div className={""}>
      <Container>
        <div
          className={
            " flex  flex-col items-center justify-between  md:flex-row lg:py-28"
          }
        >
          <div className=" leading-none md:leading-tight">
            <h1 className="text-[30px] bg-transparent font-bebas relative font-bold leading-tight  my-5  text-white lg:absolute lg:text-[80px] lg:top-56 z-20 lg:tracking-tight lg:my-0 lg:bg-custom-gradient">
              TASTE THE AUTHENTIC <br />
              SAUDI CUISINE
            </h1>

            <p className="w-full mb-5 text-xl  text-white leading-8 font-roboto font-normal lg:text-2xl lg:max-w-[600px] lg:mt-48">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.{" "}
            </p>
            <NavbarButton className={"py-4  "} text={"Explore Menu"} />
          </div>

          <div className="py-7 lg:py-0">
            <div className=" flex  flex-col items-end relative ">
              <img
                className="absolute -top-5 right-0  lg:-top-9 lg:-right-7"
                src="https://i.ibb.co.com/SdbSz6k/Vector.png"
                alt="Vector"
              />
              <img
                className=" lg:max-h-[450px] z-10 "
                src="https://i.ibb.co.com/BLdxCCx/image-1.png"
                alt="Image1"
              />
              <img
                className="bg-yellow-300 p-2 w-[75px] h-[75px]  bottom-6 right-5 rounded-full absolute lg:bottom-0 lg:-right-14 z-20 lg:w-auto lg:h-auto"
                src="https://i.ibb.co.com/5s8ykCs/Frame-1707478070.png"
                alt="Offer"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
