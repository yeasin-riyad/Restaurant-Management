import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/clients', label: 'Clients' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
];

const NavLinks = ({ onClick }) => (
    <>
        {links.map((link) => (
            <NavLink
                key={link.path}
                to={link.path}
                onClick={onClick}
                className={({ isActive }) =>
                    `${isActive ? 'text-yellow-400 font-semibold' : 'text-white hover:text-gray-300'} 
                    font-raleway font-medium text-[15px]`
                }
            >
                {link.label}
            </NavLink>
        ))}
    </>
);

NavLinks.propTypes = {
    onClick: PropTypes.func,
};

export default NavLinks;
