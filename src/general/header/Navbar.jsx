import { FaBars } from "react-icons/fa";
import { useState } from "react";
import NavbarLogo from "../../components/Navbar/NavbarLogo";
import NavLinks from "../../components/Navbar/NavLinks";
import NavbarButton from "../../components/Navbar/NavbarButton";
import HamburgerMenu from "../../components/Navbar/HamburgerMenu";
import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate=useNavigate()

  const toggleMenu = () => setMenuOpen(!menuOpen);
 const navigateBook=()=>{
  navigate("/booking")
 }

  return (
    <>
      {/* Background Blur when menu is open */}
      {menuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity"></div>}

      <nav className="sticky top-0 mx-auto z-50">
        <Container className="flex w-full mx-auto justify-between items-center px-6 py-4">
          <div className="flex items-center gap-x-[60px]">
            <NavbarLogo />
            <div className="hidden md:flex space-x-6">
              <NavLinks />
            </div>
          </div>

          {/* Book A Table Button */}
          <div className="hidden md:block">
            <NavbarButton text={"Book A Table"}  onClick={navigateBook}/>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden text-white" onClick={toggleMenu}>
            <FaBars size={24} />
          </div>
        </Container>

        {/* Hamburger Menu for Mobile */}
        <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </nav>

   
    </>
  );
};

export default Navbar;
