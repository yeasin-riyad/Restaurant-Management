import {  NavLink, useNavigate } from "react-router-dom";
import MiddleContainer from "../../MiddleContainer";
import NavbarButton from "../NavbarButton";
import ReuseableComponent from "./ReuseableComponent";

const TopMiddle = () => {
  const navigate=useNavigate()
  const links = [
    { path: "/", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];
  const handleNavigate=()=>{
    navigate('/about')
  }
  return (
    <div className={"relative"}>
      <MiddleContainer>
        <div
          className={"flex flex-col items-start gap-x-6 relative lg:flex-row"}
        >
          <div className="relative">
            <img
              className="w-full  h-auto lg:w-[2000px] "
              src="https://i.ibb.co.com/JQPFQbh/Frame-1707478063.png"
              alt="Burger Image"
            />
            <div className="absolute top-4 left-4 sm:top-7 sm:left-5">
              <div className="relative w-44 p-4 sm:w-60 sm:p-6 bg-white flex items-center gap-x-2 sm:gap-x-4 justify-between rounded-lg font-sans">
                <img
                  className="w-14 h-14 sm:w-auto sm:h-auto"
                  src="https://i.ibb.co.com/2PN3VGP/Ellipse-10.png"
                  alt="Radial Progress"
                />
                <img
                  className="absolute top-5 left-5 w-3 h-3 sm:top-8 sm:left-8 sm:w-auto sm:h-auto"
                  src="https://i.ibb.co.com/FwLBwFq/Ellipse-11.png"
                  alt="small circle"
                />
                <h1 className="absolute flex justify-center items-center  left-8 font-bold text-sm lg:text-2xl lg:left-12">
                  50 <span>+</span>
                </h1>
                <h1 className="font-semibold text-sm sm:text-lg">
                  Market Experiences
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {/* Additional content can go here */}
            <div className="flex gap-x-8 mt-4 lg:mt-0">
              {links?.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-gray-200 font-semibold bg-[#B52B1D] p-2"
                        : "text-[#333333]  p-2"
                    } 
                font-roboto font-medium text-[15px]`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div>
              <hr className="bg-[#B52B1D] w-full h-[2px]" />
              <h1 className="font-bebas font-bold text-4xl leading-snug text-[#181818] tracking-tighter my-4 lg:my-6">
                EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
              </h1>
              <p className="font-roboto font-normal text-lg my-4 lg:my-6">
                At our restaurant, we blend traditional Saudi Arabian flavors
                with a modern twist. We are dedicated to delivering an
                exceptional dining experience, using fresh, locally sourced
                ingredients that highlight the essence of our rich culinary
                heritage.
              </p>
              <div className="flex gap-x-7 items-center my-4 lg:my-6">
                <NavbarButton className={"py-4  "} onClick={handleNavigate} text={"ABOUT MORE"} />
                <div className="flex items-center gap-x-2">
                  <img
                    src="https://i.ibb.co.com/dLW59LS/call-alt.png"
                    alt="telephone"
                  />
                  <p>+88 3426 739 485</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex mt-4 flex-col justify-center gap-y-6  items-start lg:flex-row lg:justify-between lg:items-center lg:mt-16">
         
          <ReuseableComponent 
           img="https://i.ibb.co.com/mXR2WLx/package.png"
           alt="Package"
           heading="FAST DELIVERY"
           para="Within 30 minutes"
           />

          <ReuseableComponent
            img="https://i.ibb.co.com/hMD6Zbw/medal.png"
            alt={"Medal"}
            heading={"ABSOLUTE DINING"}
            para="Best buffet restaurant"
          />

          <ReuseableComponent
            img={"https://i.ibb.co.com/85h0KtQ/bag.png"}
            alt={"Medal"}
            heading={"PICKUP DELIVERY"}
            para={"Grab your food order"}
          />
        </div>
      </MiddleContainer>
      <img
        className="absolute right-0 bottom-48 hidden w-24 lg:block"
        src="https://i.ibb.co.com/1dY1pjk/top-view-bell-pepper-pepper-sliced-black-bowl-white-horizontal-2.png"
        alt="side-bowl"
      />
    </div>
  );
};

export default TopMiddle;
