import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';
import NavbarButton from './NavbarButton';

const HamburgerMenu = ({ isOpen, toggleMenu,navigate }) => (
    
    
    <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[rgb(197,44,31)] transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
    >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
            <FaTimes
                onClick={toggleMenu}
                size={24}
                className="text-white cursor-pointer"
            />
        </div>

        {/* Navigation Links and Button */}
        <div className="flex flex-col p-6 space-y-8">
            <NavLinks onClick={toggleMenu} />
            <NavbarButton text={"Book A Table"}  onClick={()=>(
                navigate(),
                toggleMenu()
            )}/>
        </div>
    </div>
);

// Prop validation
HamburgerMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    navigate:PropTypes.func
};

export default HamburgerMenu;
