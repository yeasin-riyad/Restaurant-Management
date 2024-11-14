import Hero from '../general/header/Hero'
import SecondMiddle from '../components/SecondMiddleSection/SecondMiddle'
import TopMiddle from './Navbar/MiddleSection/TopMiddle'
import ThirdMiddle from './ThirdMiddleSection/ThirdMiddle'
import BottomMiddleSection from './BottomMiddleSection/BottomMiddleSection'
import Testimonials from './Portfolio/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero/>
     <TopMiddle/>
     <SecondMiddle/>
     <ThirdMiddle/>
     <Testimonials/>
     <BottomMiddleSection/>
    </div>
  )
}

export default Home