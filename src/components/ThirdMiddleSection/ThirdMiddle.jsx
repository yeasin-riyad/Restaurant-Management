import React from "react";
import MiddleContainer from "../MiddleContainer";
import ByteTest from "../ByteTest";
import Form from "../Form";
import Heading from "../Heading";

const ThirdMiddle = () => {
  return (
    <div className="bg-middle-container  min-h-screen flex items-center bg-center bg-cover lg:bg-top">
      <MiddleContainer className={"lg:pb-7"}>
        <div className="w-full  lg:w-1/2">
          <div className="flex flex-col gap-y-4 lg:gap-y-7 ">
            <ByteTest header={"Book Now"} />
            <Heading
              className={"text-white"}
              header={"BOOK YOUR TABLE"}
            ></Heading>
            <p className="text-white text-lg">
              We are thrilled to welcome you! Please provide the details below
              to reserve your table and enjoy an exceptional dining experience
              with us.
            </p>
            <Form />
          </div>
        </div>
      </MiddleContainer>
    </div>
  );
};

export default ThirdMiddle;
