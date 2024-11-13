import ByteTest from "../ByteTest"
import Heading from "../Heading"
import MiddleContainer from "../MiddleContainer"
import VideoSlides from "./VideoSlides"

const BottomMiddleSection = () => {
  return (
    <div className="relative">
        <MiddleContainer >
            <div className="flex flex-col gap-y-7">
                <div className="flex flex-col gap-y-4">
                    <ByteTest  header={"Crispy, Every Bite Taste"}/>
                    <Heading className={"text-4xl md:text-5xl"} header={"WHAT SOME OF MY CUSTOMERS SAY"}/>


                </div>
                <VideoSlides/>


            </div>
        </MiddleContainer>
        <img className="w-24 hidden  absolute top-40 lg:block" src="https://i.ibb.co.com/gzzSYHb/221.png"  />
        <img src="https://i.ibb.co.com/crLF6Tw/12.png" className="absolute bottom-12 right-0 hidden lg:block -z-10 w-56" alt="" srcset="" />
    </div>
  )
}

export default BottomMiddleSection