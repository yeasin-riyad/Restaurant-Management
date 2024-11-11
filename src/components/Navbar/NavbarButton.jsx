import { twMerge } from "tailwind-merge";
import PropTypes from 'prop-types';

const NavbarButton = ({text,onClick,className}) => (
  <button onClick={onClick}
    className={twMerge("bg-[#FEBF00] font-roboto font-bold py-[10px] px-6  text-[16px] hover:bg-gray-100 transition",className)}
  >
    {text}
  </button>
);
NavbarButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick:PropTypes.func,
    className: PropTypes.string,
  };

export default NavbarButton;
