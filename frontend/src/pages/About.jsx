import { ArrowRight, CheckCircle2, Target, Eye, Code, TrendingUp, Cpu, Monitor, Zap, MessageSquare } from 'lucide-react';

const About = () => {
    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero">
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag">Established in 2006</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 900 }}>
                            Sri Manjunatha <br />
                            <span className="gradient-text">Electrical Service</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8 }}>
                            ElectroMechanical Service Provider based in Tumakuru. We serve in the field of industrial motors service & rewinding, operating as a one-stop service center according to customer needs.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#about" className="btn btn-primary">Our Overview <ArrowRight size={20} /></a>
                            <a href="/contact" className="btn btn-outline">Contact Us</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container">
                            <img
                                src="service1.jpg"
                                alt="ElectroMechanical Workshop"
                                className="floating-img"
                            />
                            <div className="glow-aura"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Sri Manjunatha Electrical Service */}
            <section id="about" style={{ background: 'rgba(0, 242, 255, 0.01)', position: 'relative' }}>
                <div className="grid-2">
                    <div data-aos="fade-right">
                        <span className="section-tag">About Company</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem' }}>About Sri Manjunatha <br /><span className="gradient-text">Electrical Service</span></h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            Sri Manjunatha Electrical Service is a firm based in Tumakuru, established in 2006 that serves in the field of industrial motors service & rewinding, acting as a one-stop service center according to customer needs.
                        </p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            Sri Manjunatha Electrical Service operates with determined and well-experienced staff serving in this field to fulfill customer satisfaction at its best & in time. We have a team with GWO training and our staff is ready round-the-clock to serve our clients' needs whenever necessary.
                        </p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            Our success is based on our client's success. Therefore, we dedicate all our efforts to achieve their goals effectively and efficiently.
                        </p>

                        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            <div className="stat-item-v2" style={{ padding: '1.5rem', background: '#fff', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                                <span className="stat-num" style={{ fontSize: '1.5rem' }}>2006</span>
                                <span className="stat-label">Established Year</span>
                            </div>
                            <div className="stat-item-v2" style={{ padding: '1.5rem', background: '#fff', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                                <span className="stat-num" style={{ fontSize: '1.5rem' }}>GWO Trained</span>
                                <span className="stat-label">Expert Technical Team</span>
                            </div>
                            <div className="stat-item-v2" style={{ padding: '1.5rem', background: '#fff', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                                <span className="stat-num" style={{ fontSize: '1.5rem', marginTop: '0.8rem', marginBottom: '0.5rem' }}>24/7</span>
                                <span className="stat-label">Round-The-Clock Support</span>
                            </div>
                            <div className="stat-item-v2" style={{ padding: '1.5rem', background: '#fff', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                                <span className="stat-num" style={{ fontSize: '1.5rem', marginTop: '0.8rem', marginBottom: '0.5rem' }}>Tumakuru</span>
                                <span className="stat-label">Headquarters (Karnataka)</span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="card" style={{ padding: '3.5rem' }}>
                            <span className="section-tag">Core Values</span>
                            <h3 className="mb-4" style={{ fontSize: '2.2rem' }}>Our Principles</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                                    <div>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>CREDIBILITY</span>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>We take each client as a suitable partner through building long term relationships.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                                    <div>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>CONFIDENTIALITY</span>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Gaining our client's trust by keeping all shared information confidential.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                                    <div>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>COMMITMENT</span>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>We believe time is critical, so our commitment to schedules is key.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                                    <div>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>CREATIVITY</span>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Developing creative tools & ideas to find the best solution for specified work.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section id="services" style={{ padding: '80px 5%', background: 'rgba(0, 242, 255, 0.02)' }}>
                <div className="text-center max-w-800 mb-4" data-aos="fade-up" style={{ margin: '0 auto 4rem' }}>
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Our Services</span>
                    <h2 style={{ fontSize: '3rem' }}>What We <span className="gradient-text">Do</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1rem' }}>
                        Providing comprehensive electro-mechanical solutions and high-quality industrial motor servicing since 2006.
                    </p>
                </div>

                <div className="grid max-w-1200" style={{ margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>

                    <div className="card" data-aos="fade-up" style={{ padding: '3rem 2rem', borderRadius: '30px', background: '#ffffff', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--gradient-primary)' }}></div>
                        <div style={{ background: 'rgba(0, 242, 255, 0.1)', width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.8rem', color: 'var(--primary)' }}>
                            <Cpu size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-dark)' }}>A/C & D/C Motor Rewinding</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                            Precision coil rewinding, insulation resistance testing, stator & rotor overhaul for all industrial AC and DC motors.
                        </p>
                    </div>

                    <div className="card" data-aos="fade-up" data-aos-delay="100" style={{ padding: '3rem 2rem', borderRadius: '30px', background: '#ffffff', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'linear-gradient(135deg, #ff007a, #9d00ff)' }}></div>
                        <div style={{ background: 'rgba(255, 0, 122, 0.1)', width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.8rem', color: 'var(--secondary)' }}>
                            <Zap size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-dark)' }}>LT & HT Motor Servicing</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                            Low-tension & High-tension motor maintenance backed by 11Kv & 3Kv High Voltage Test Kit inspection and surge testing.
                        </p>
                    </div>

                    <div className="card" data-aos="fade-up" data-aos-delay="200" style={{ padding: '3rem 2rem', borderRadius: '30px', background: '#ffffff', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'linear-gradient(135deg, #9d00ff, #00f2ff)' }}></div>
                        <div style={{ background: 'rgba(157, 0, 255, 0.1)', width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.8rem', color: 'var(--accent)' }}>
                            <Code size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-dark)' }}>Generator Coil Rewinding</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                            Wind turbine generator coil rewinding, up-tower generator servicing, patch work, and brake coil overhaul.
                        </p>
                    </div>

                    <div className="card" data-aos="fade-up" data-aos-delay="300" style={{ padding: '3rem 2rem', borderRadius: '30px', background: '#ffffff', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--gradient-primary)' }}></div>
                        <div style={{ background: 'rgba(0, 242, 255, 0.1)', width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.8rem', color: 'var(--primary)' }}>
                            <TrendingUp size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-dark)' }}>Pitch Motors & Slip Ring</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                            Pitch motors, brake coil, oil pumps motor servicing, and turbine slip ring precision cleaning and overhauling.
                        </p>
                    </div>

                    <div className="card" data-aos="fade-up" data-aos-delay="400" style={{ padding: '3rem 2rem', borderRadius: '30px', background: '#ffffff', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'linear-gradient(135deg, #ff007a, #9d00ff)' }}></div>
                        <div style={{ background: 'rgba(255, 0, 122, 0.1)', width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.8rem', color: 'var(--secondary)' }}>
                            <Monitor size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-dark)' }}>Centrifugal Water Pumps</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                            Heavy-duty industrial centrifugal pump overhaul, impeller alignment, dynamic balancing & mechanical seal replacements.
                        </p>
                    </div>

                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission" style={{ padding: '60px 5%' }}>
                <div className="grid max-w-1000" style={{ margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    
                    <div className="card text-center" data-aos="fade-up" style={{
                        padding: '2.5rem 2rem',
                        background: 'linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.85)), url(electrical_workshop.jpg) center/cover',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ background: 'var(--primary)', color: 'white', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                            <Target size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>Our Mission</h3>
                        <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                            To become the most preferred electromechanical partner by providing highest quality motor servicing, rewinding, and round-the-clock technical support to achieve operational goals efficiently.
                        </p>
                    </div>

                    <div className="card text-center" data-aos="fade-up" data-aos-delay="100" style={{
                        padding: '2.5rem 2rem',
                        background: 'linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.85)), url(motor_rewinding.jpg) center/cover',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        position: 'relative',
                        overflow: 'hidden'
                    }} id="vision">
                        <div style={{ background: 'var(--secondary)', color: 'white', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                            <Eye size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>Our Vision</h3>
                        <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                            To become the largest service provider in Karnataka and beyond by setting benchmark standards in industrial motor rewinding, high voltage testing, and long-term client trust.
                        </p>
                    </div>

                </div>
            </section>

            {/* Final CTA */}
            <section id="cta" className="text-center" data-aos="zoom-in" style={{ padding: '80px 5%' }}>
                <div className="cta-content max-w-1000" style={{
                    background: '#fff',
                    padding: '5rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <span className="section-tag" style={{ position: 'relative' }}>Get In Touch</span>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.5rem', position: 'relative', fontWeight: 800 }}>Looking for expert industrial motor <br /><span className="gradient-text">servicing or rewinding?</span></h2>
                    <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--text-muted)', position: 'relative' }}>
                        Contact Sri Manjunatha Electrical Service today for consultations, testing, and emergency repairs.
                    </p>
                    <a href="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', position: 'relative' }}>
                        Contact Us Now <ArrowRight size={22} />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default About;
