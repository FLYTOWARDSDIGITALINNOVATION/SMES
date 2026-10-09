import { ArrowRight, CheckCircle2, Globe, Shield, MessageSquare, Briefcase, Users, Star, Quote, ChevronRight, Trophy, Target, Zap, Server, Code, PlaySquare, Smartphone, MonitorSmartphone, BarChart, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const electricalServices = [
        "A/C & D/C Motor Servicing & Rewinding",
        "LT & HT Motors Servicing & Rewinding",
        "Wind Turbine Generator Coil Rewinding",
        "Wind Turbine Up Tower Generator Servicing & Patch Work",
        "Wind Turbine Pitch Motors, Brake Coil, Oil Pumps Motors Servicing",
        "Wind Turbine Slip Ring Servicing",
        "Centrifugal Water Pumps Servicing"
    ];

    const clientList = [
        "Universal Energy Resources. Inc (RIG Service)",
        "L&T Limited",
        "Kirloskar Electric Company",
        "Nidec Industrial Automation Limited",
        "Renom Energy Services Pvt Ltd.",
        "Oriental Green Power Limited",
        "Beta Wind Farm Pvt Ltd",
        "Greenko Group",
        "ABB India Pvt Ltd",
        "GE Renewables R&D India Pvt Ltd"
    ];

    const whyTrustUs = [
        { title: 'Established in 2006', icon: <Target size={32} color="var(--primary)" /> },
        { title: 'GWO Trained Staff', icon: <Zap size={32} color="var(--secondary)" /> },
        { title: '24/7 Service Support', icon: <Shield size={32} color="var(--accent)" /> },
        { title: 'Highly Skilled & Experienced', icon: <Users size={32} color="var(--primary)" /> },
        { title: 'One Stop Service Center', icon: <Briefcase size={32} color="var(--secondary)" /> }
    ];

    const testimonials = [
        {
            quote: "Sri Manjunatha Electrical Service is our trusted partner for industrial motor servicing and rewinding. Outstanding technical competence!",
            author: "Maintenance Lead",
            role: "Renom Energy Services"
        },
        {
            quote: "Their round-the-clock support and up-tower generator servicing minimized our downtime drastically.",
            author: "Site Operations Manager",
            role: "Greenko Group"
        },
        {
            quote: "Highly reliable high-voltage test kit equipment and GWO trained staff for all wind turbine motor requirements.",
            author: "Technical Director",
            role: "Oriental Green Power"
        }
    ];

    const faqs = [
        { q: "What services does Sri Manjunatha Electrical Service provide?", a: "We specialize in A/C & D/C, LT & HT Motor Servicing & Rewinding, Wind Turbine Generator Coil Rewinding, Pitch Motors, Slip Ring Servicing, and Centrifugal Water Pumps." },
        { q: "Where is Sri Manjunatha Electrical Service located?", a: "We are located at Oorukere Village & Post, Arpitha Farm House, Sira Road, Tumkur – 572106." },
        { q: "Are your technicians certified?", a: "Yes! We have a team with GWO training and well-experienced staff ready round the clock." },
        { q: "How can we request a service?", a: "You can reach us directly via phone at 9148494151 / 9902290605 / 9916062960 or email us at manjunathaelec@gmail.com." }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', marginBottom: '1rem', lineHeight: 1.15, fontWeight: 900, letterSpacing: '-1px' }}>
                            Sri Manjunatha <br />
                            <span className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', display: 'block', marginTop: '0.5rem' }}>
                                ELECTRICAL SERVICE
                            </span>
                        </h1>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '1.2rem 0 1.8rem', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)', background: '#e2f8ff', padding: '0.4rem 1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                                Est. 2006
                            </span>
                            <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                                ⚡ One-Stop Industrial Service Center
                            </span>
                        </div>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '620px', lineHeight: 1.8, fontWeight: 400 }}>
                            Serving in the field of industrial motor service, precision coil rewinding, and specialized electro-mechanical & generator solutions.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#services" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 10px 25px rgba(0, 242, 255, 0.3)' }}>
                                Explore Our Services <ArrowRight size={20} />
                            </a>
                            <Link to="/contact" className="btn btn-outline" style={{ border: '1px solid var(--border)', padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>Get a Quote</Link>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px' }}>
                            <img
                                src="electrical_workshop.jpg"
                                alt="Electrical Service Workshop"
                                className="floating-img"
                                style={{ borderRadius: '30px', width: '100%' }}
                            />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section id="about" style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div className="max-w-1000 text-center" data-aos="fade-up" style={{ margin: '0 auto' }}>
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>About Us</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Quality ElectroMechanical Services <br /><span className="gradient-text">Since 2006</span></h2>
                    <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '4rem' }}>
                        Sri Manjunatha Electrical Service is a firm based in Tumakuru, established in 2006 that serves in the field of industrial motors service & rewinding. We act as a one-stop service center according to customer needs with a dedicated team having GWO training, available round-the-clock.
                    </p>
                </div>

                <div className="stats-grid-v2 text-center" style={{ justifyContent: 'center', width: '100%', margin: '0 auto', background: 'var(--bg-white)', padding: '3.5rem', borderRadius: '30px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }} data-aos="fade-up">
                    <div className="stat-item-v2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                            <Users size={32} color="var(--primary)" />
                        </div>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Experienced Technicians</span>
                    </div>
                    <div className="stat-item-v2" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)', paddingLeft: '3rem', paddingRight: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(255, 0, 122, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                            <Trophy size={32} color="var(--secondary)" />
                        </div>
                        <span className="stat-num" style={{ fontSize: '2.0rem', marginBottom: '0.2rem' }}>2006</span>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Established Year</span>
                    </div>
                    <div className="stat-item-v2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(157, 0, 255, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                            <Shield size={32} color="var(--accent)" />
                        </div>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Safety & Quality Assured</span>
                    </div>
                </div>
            </section>

            {/* Core Solutions Grid */}
            <section id="services">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Our Expertise</span>
                    <h2 style={{ fontSize: '3rem' }}>ElectroMechanical <span className="gradient-text">Services</span></h2>
                </div>

                <div className="grid max-w-1200" style={{ margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', padding: '0 1.5rem' }}>

                    {/* Card 1 */}
                    <div className="card" data-aos="fade-up" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid var(--primary)', transition: 'transform 0.3s ease' }}>
                        <div>
                            <div style={{ width: '100%', height: '180px', borderRadius: '15px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                <img src="motor_rewinding.jpg" alt="A/C & D/C Motor Servicing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>A/C & D/C Motor Rewinding</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                Complete overhauling, precision coil rewinding, stator and rotor repairs for all types of A/C & D/C industrial motors.
                            </p>
                        </div>
                        <Link to="/service" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>Learn More</Link>
                    </div>

                    {/* Card 2 */}
                    <div className="card" data-aos="fade-up" data-aos-delay="100" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid var(--secondary)', transition: 'transform 0.3s ease' }}>
                        <div>
                            <div style={{ width: '100%', height: '180px', borderRadius: '15px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                <img src="service2.png" alt="LT & HT Motors Servicing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>LT & HT Motors Servicing</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                High-tension & Low-tension motor maintenance backed by 11Kv & 3Kv High Voltage Test Kit inspection.
                            </p>
                        </div>
                        <Link to="/service" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>Learn More</Link>
                    </div>

                    {/* Card 3 */}
                    <div className="card" data-aos="fade-up" data-aos-delay="200" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid var(--accent)', transition: 'transform 0.3s ease' }}>
                        <div>
                            <div style={{ width: '100%', height: '180px', borderRadius: '15px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                <img src="electrical_workshop.jpg" alt="Wind Turbine Generator Coil Rewinding" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>Generator Coil Rewinding</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                Wind turbine generator coil rewinding with high thermal endurance insulation and quality testing.
                            </p>
                        </div>
                        <Link to="/service" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>Learn More</Link>
                    </div>

                    {/* Card 4 */}
                    <div className="card" data-aos="fade-up" data-aos-delay="300" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid var(--primary)', transition: 'transform 0.3s ease' }}>
                        <div>
                            <div style={{ width: '100%', height: '180px', borderRadius: '15px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                <img src="service1.jpg" alt="Up Tower Generator Patch Work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>Up Tower Generator Servicing</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                Specialized up-tower generator servicing and patch work restoring turbine operational efficiency.
                            </p>
                        </div>
                        <Link to="/service" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>Learn More</Link>
                    </div>

                    {/* Card 5 */}
                    <div className="card" data-aos="fade-up" data-aos-delay="400" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid var(--secondary)', transition: 'transform 0.3s ease' }}>
                        <div>
                            <div style={{ width: '100%', height: '180px', borderRadius: '15px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                <img src="service4.jpg" alt="Pitch Motors & Brake Coil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>Pitch Motors, Brake Coil & Oil Pumps</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                Precision servicing for pitch motors, electromagnetic brake coils, and oil pumps motor rewinding.
                            </p>
                        </div>
                        <Link to="/service" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>Learn More</Link>
                    </div>

                    {/* Card 6 */}
                    <div className="card" data-aos="fade-up" data-aos-delay="500" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid var(--accent)', transition: 'transform 0.3s ease' }}>
                        <div>
                            <div style={{ width: '100%', height: '180px', borderRadius: '15px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                <img src="motor_rewinding.jpg" alt="Centrifugal Water Pumps Servicing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>Centrifugal Water Pumps & Slip Ring</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                Heavy-duty centrifugal water pump overhaul, impeller alignment, and turbine slip ring servicing.
                            </p>
                        </div>
                        <Link to="/service" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>Learn More</Link>
                    </div>

                </div>
            </section>

            {/* Why Businesses Trust Us */}
            <section style={{ background: 'rgba(157, 0, 255, 0.02)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Core Value</span>
                    <h2 style={{ fontSize: '3rem' }}>Why Businesses <span className="gradient-text">Trust Us</span></h2>
                </div>
                <div className="grid max-w-1200" style={{ margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {whyTrustUs.map((item, i) => (
                        <div key={i} className="card" style={{ padding: '2.5rem 1.5rem', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'grab' }}
                            data-aos="fade-up" data-aos-delay={i * 100}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                {item.iconAlternative || item.icon}
                            </div>
                            <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-dark)' }}>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </section>


            {/* Testimonials */}
            <section style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Client Feedback</span>
                    <h2 style={{ fontSize: '3rem' }}>What Our <span className="gradient-text">Clients Say</span></h2>
                </div>

                <div className="grid max-w-1200" style={{ margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((test, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ display: 'flex', gap: '5px', marginBottom: '1.5rem' }}>
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="var(--accent)" color="var(--accent)" />)}
                                </div>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '2rem', fontStyle: 'italic' }}>
                                    "{test.quote}"
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                                <img src={`https://ui-avatars.com/api/?name=${test.author.replace(' ', '+')}&background=random&color=fff`} alt={test.author} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                <div>
                                    <h5 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>{test.author}</h5>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{test.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
                <div className="grid-2 max-w-1200" style={{ margin: '0 auto', gap: '4rem', alignItems: 'center' }}>
                    <div data-aos="fade-right">
                        <span className="section-tag">Your Questions Answered</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Reliable Industrial <br /><span className="gradient-text">Electrical Services</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
                            Need specialized industrial motor servicing, coil rewinding, or generator patch work? Our technical team is available round-the-clock to fulfill your requirements.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem' }}>
                            Get a Quick Quote <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div data-aos="fade-left">
                        <div className="faq-grid" style={{ gridTemplateColumns: '1fr', gap: '1.2rem', maxHeight: '480px', overflowY: 'auto', paddingRight: '10px' }}>
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="card" style={{ padding: '1.8rem', borderLeft: '4px solid var(--primary)', transition: 'all 0.3s ease' }}>
                                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', gap: '12px', fontWeight: 700 }}>
                                        <div style={{ background: 'rgba(0, 242, 255, 0.1)', color: 'var(--primary)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.85rem', fontWeight: 800 }}>Q</div>
                                        {faq.q}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '40px', lineHeight: 1.6, fontSize: '0.98rem' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section id="launch">
                <div className="cta-content" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    background: '#fff',
                    padding: '5rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'var(--gradient-primary)' }}></div>
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Get In Touch</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        Need Industrial <span className="gradient-text">Electrical Solutions?</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', margin: '1rem auto 2.5rem', maxWidth: '600px', color: 'var(--text-muted)' }}>
                        Contact Sri Manjunatha Electrical Service for quick consultations and emergency repair services.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:9148494151" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Call Now: 9148494151 <ArrowRight size={20} />
                        </a>
                        <Link to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem' }}>Contact Us</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
