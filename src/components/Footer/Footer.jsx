import Heading from '../Heading';
import MiddleContainer from '../MiddleContainer'
import FooterIcons from './FooterIcons';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <div id='contact' className="relative  bg-interior-design min-h-screen flex items-center bg-center bg-cover lg:bg-top">
      <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-[6.5px]"></div>
      
      <div className="relative z-10 w-full">
        <MiddleContainer>
            <div className='flex flex-col gap-y-10 justify-around lg:gap-y-20'>
                <Heading className={"text-white text-center sm:text-3xl md:text-4xl"} header={"WE READY TO HAVE YOU THE BEST DINING EXPERIENCES"}/>
                <FooterIcons/>
                <SocialMediaIcons/>

            </div>
        </MiddleContainer>
        <div>

        </div>


      </div>
    </div>
  )
}

export default Footer;
