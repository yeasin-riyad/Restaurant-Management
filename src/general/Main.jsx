import Navbar from './header/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
   <div>
     <Navbar/>
     <Outlet/>
     
     <Footer/>
   </div>
  )
}

export default Main