import Navbar from './header/Navbar'
import Hero from './header/Hero'
import TopMiddle from '../components/Navbar/MiddleSection/TopMiddle'
import SecondMiddle from '../components/SecondMiddleSection/SecondMiddle'
import ThirdMiddle from '../components/ThirdMiddleSection/ThirdMiddle'
import BottomMiddleSection from '../components/BottomMiddleSection/BottomMiddleSection'

const Main = () => {
  return (
   <div>
     <Navbar/>
     <Hero/>
     <TopMiddle/>
     <SecondMiddle/>
     <ThirdMiddle/>
     <BottomMiddleSection/>
   </div>
  )
}

export default Main