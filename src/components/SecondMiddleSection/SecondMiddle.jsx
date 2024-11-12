import ByteTest from "../ByteTest";
import MiddleContainer from "../MiddleContainer";
import FoodSlides from "./FoodSlides";

const SecondMiddle = () => {
  return (
    <div className={"bg-customColor relative"}>
      <MiddleContainer >
        <div className="flex flex-col items-start justify-start gap-y-6">
          <div className="flex flex-col gap-y-3">
            <ByteTest header={"Crispy, Every Bite Taste"}/>
            <h1 className="font-bebas font-bold text-6xl">POPULAR FOOD ITEMS</h1>
          </div>
          <div>
    
           
          </div>
        </div>
        <FoodSlides/>

      </MiddleContainer>
      <img className="absolute top-44 w-32 hidden lg:block" src="https://i.ibb.co.com/ZdN7fr1/top-view-bell-pepper-pepper-sliced-black-bowl-white-horizontal-2-1.png" alt="" />
    </div>
  );
};

export default SecondMiddle;