import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) setActiveDropdown(null);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (name, e) => {
        if (window.innerWidth <= 968) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === name ? null : name);
        }
    };

    return (
        <nav>
            <Link to="/" className="logo">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Sri Manjunatha Electrical Service Logo" style={{ height: '80px', width: 'auto' }} />
            </Link>

            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <li onClick={closeMenu}><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li onClick={closeMenu}><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>

                <li className={`dropdown ${activeDropdown === 'services' ? 'mobile-active' : ''}`}>
                    <Link to="/service" onClick={(e) => toggleDropdown('services', e)}>
                        Services <ChevronDown size={12} strokeWidth={3} className={activeDropdown === 'services' ? 'rotate' : ''} />
                    </Link>
                    <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`} style={{ minWidth: '320px', padding: '0.8rem 0' }}>
                        <li onClick={closeMenu}><Link to="/service/ac-motor-servicing">A/C Motor Servicing & Rewinding</Link></li>
                        <li onClick={closeMenu}><Link to="/service/dc-motor-servicing">D/C Motors Servicing & Rewinding</Link></li>
                        <li onClick={closeMenu}><Link to="/service/lt-motor-servicing">LT Motors Servicing & Rewinding</Link></li>
                        <li onClick={closeMenu}><Link to="/service/ht-motor-servicing">HT Motors Servicing & Rewinding</Link></li>
                        <li onClick={closeMenu}><Link to="/service/wtg-generator-coil-rewinding">WTG Generator Coil Rewinding</Link></li>
                        <li onClick={closeMenu}><Link to="/service/wtg-up-tower-generator-servicing">WTG Up Tower Generator Servicing</Link></li>
                        <li onClick={closeMenu}><Link to="/service/wtg-up-tower-patch-work">WTG Up Tower Patch Work</Link></li>
                        <li onClick={closeMenu}><Link to="/service/pitch-motors-brake-coil-oil-pumps">Pitch Motors, Brake Coil & Oil Pumps</Link></li>
                        <li onClick={closeMenu}><Link to="/service/wtg-slip-ring-servicing">WTG Slip Ring Servicing</Link></li>
                        <li onClick={closeMenu}><Link to="/service/centrifugal-water-pumps-servicing">Centrifugal Water Pumps Servicing</Link></li>
                    </ul>
                </li>

                <li onClick={closeMenu}><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

                
                <li className="nav-btn-mobile" onClick={closeMenu}>
                    <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
                </li>
            </ul>

            <Link to="/contact" className="btn btn-primary nav-btn-desktop" style={{ padding: '0.6rem 2rem', fontSize: '0.85rem' }}>
                Enquire Now
            </Link>
        </nav>
    );
};

export default Navbar;
