import React from "react";
import MiddleContainer from "../MiddleContainer";
import ByteTest from "../ByteTest";

const ThirdMiddle = () => {
  return (
    <div className="bg-middle-container ">
      <MiddleContainer className={""}>
        <div className="w-full  lg:w-1/2" >
          <div className="flex flex-col gap-y-4 ">
            <ByteTest header={"Book Now"} />
            <h1 className="font-bebas font-bold text-6xl text-white">
              BOOK YOUR TABLE
            </h1>
            <p className="text-white">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>
        </div>
      </MiddleContainer>
    </div>
  );
};

export default ThirdMiddle;
