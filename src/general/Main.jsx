import Navbar from './header/Navbar'
import Hero from './header/Hero'
import TopMiddle from '../components/Navbar/MiddleSection/TopMiddle'
import SecondMiddle from '../components/SecondMiddleSection/SecondMiddle'
import ThirdMiddle from '../components/ThirdMiddleSection/ThirdMiddle'

const Main = () => {
  return (
   <div>
     <Navbar/>
     <Hero/>
     <TopMiddle/>
     <SecondMiddle/>
     <ThirdMiddle/>
   </div>
  )
}

export default Main