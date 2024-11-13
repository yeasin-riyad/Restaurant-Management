import ByteTest from "../ByteTest"
import Heading from "../Heading"
import MiddleContainer from "../MiddleContainer"
import VideoSlides from "./VideoSlides"

const BottomMiddleSection = () => {
  return (
    <div>
        <MiddleContainer >
            <div className="flex flex-col gap-y-7">
                <div className="flex flex-col gap-y-4">
                    <ByteTest  header={"Crispy, Every Bite Taste"}/>
                    <Heading className={"text-4xl md:text-5xl"} header={"WHAT SOME OF MY CUSTOMERS SAY"}/>


                </div>
                <VideoSlides/>




            </div>
        </MiddleContainer>
    </div>
  )
}

export default BottomMiddleSection