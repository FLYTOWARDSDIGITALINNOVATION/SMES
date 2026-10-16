import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#0a0a0a', paddingTop: '2.5rem', paddingBottom: '1.5rem', borderTop: '1px solid var(--border)' }}>
            <div className="footer-grid max-w-1200" style={{ margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1.5fr 1.3fr', gap: '2rem', padding: '0 2rem' }}>

                {/* Column 1: Brand */}
                <div>
                    <Link to="/" className="logo" style={{ marginBottom: '1rem', display: 'block', textDecoration: 'none' }}>
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Sri Manjunatha Electrical Service Logo" style={{ height: '70px', width: 'auto' }} />
                    </Link>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                        ElectroMechanical Service Provider. Established in 2006, serving industrial motor service, rewinding & electrical solutions.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 style={{ marginBottom: '1rem', fontWeight: 800, color: 'white', fontSize: '1.05rem' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/about" className="footer-link">About Us</Link></li>
                        <li><Link to="/service" className="footer-link">Services</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h4 style={{ marginBottom: '1rem', fontWeight: 800, color: 'white', fontSize: '1.05rem' }}>Our Core Services</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
                        <li><Link to="/service/ac-motor-servicing" className="footer-link">A/C & D/C Motor Servicing & Rewinding</Link></li>
                        <li><Link to="/service/lt-motor-servicing" className="footer-link">LT & HT Motors Servicing & Rewinding</Link></li>
                        <li><Link to="/service/wtg-generator-coil-rewinding" className="footer-link">Wind Turbine Generator Coil Rewinding</Link></li>
                        <li><Link to="/service/wtg-up-tower-generator-servicing" className="footer-link">Up Tower Generator Servicing</Link></li>
                        <li><Link to="/service/pitch-motors-brake-coil-oil-pumps" className="footer-link">Pitch Motors, Brake Coil & Slip Ring</Link></li>
                    </ul>
                </div>

                {/* Column 4: Address & Contact info next to Core Services */}
                <div>
                    <h4 style={{ marginBottom: '1rem', fontWeight: 800, color: 'white', fontSize: '1.05rem' }}>Contact Info</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                            <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
                            <span>Oorukere Village & Post, Arpitha Farm House, Sira Road, Tumkur – 572106</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <Phone size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                            <span style={{ color: 'white', fontWeight: 600 }}>9148494151, 9902290605, 9916062960</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <Mail size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                            <a href="mailto:manjunathaelec@gmail.com" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="footer-link">manjunathaelec@gmail.com</a>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '2.5rem', padding: '1.2rem 2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Copyright &copy; 2026 Sri Manjunatha Electrical Service | GSTIN: 29A0RPM0727K1ZE
            </div>

            {/* Embedded styles specifically for footer links to keep hover effects clean */}
            <style jsx>{`
                .footer-link {
                    color: var(--text-muted);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: inline-block;
                }
                .footer-link:hover {
                    color: var(--primary);
                    transform: translateX(5px);
                }
                .social-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    background: var(--primary);
                    transform: translateY(-3px);
                }
            `}</style>
        </footer>
    );
};

export default Footer;
