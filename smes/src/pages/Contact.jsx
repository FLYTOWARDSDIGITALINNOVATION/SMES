import { ArrowRight, Phone, Mail, Clock, MapPin, Send, Zap, Shield, Target, Users, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formStatus, setFormStatus] = useState(null); // 'sending' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setErrorMessage('');

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            setFormStatus('error');
            setErrorMessage('Web3Forms Access Key is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY in frontend/.env file.');
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    from_name: `${formData.firstName} ${formData.lastName}`.trim(),
                    subject: `[Website Inquiry] ${formData.subject} - Sri Manjunatha Electrical Service`,
                    name: `${formData.firstName} ${formData.lastName}`.trim(),
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                })
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                setTimeout(() => setFormStatus(null), 8000);
            } else {
                setFormStatus('error');
                setErrorMessage(data.message || 'Failed to send message. Please contact via phone or direct email.');
            }
        } catch (error) {
            setFormStatus('error');
            setErrorMessage('Network connection error. Please check your internet or reach us directly via phone.');
        }
    };

    const whyChooseUs = [
        { icon: <Zap size={24} color="var(--primary)" />, text: "Rapid Deployment" },
        { icon: <Shield size={24} color="var(--secondary)" />, text: "Certified Technicians" },
        { icon: <Users size={24} color="var(--accent)" />, text: "24/7 Support" },
        { icon: <Target size={24} color="var(--primary)" />, text: "Safety First Approach" }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '140px', paddingBottom: '3rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
                    <span className="section-tag" style={{ justifyContent: 'center', display: 'flex', gap: '8px' }}>
                        <Send size={18} /> Contact Us
                    </span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Sri Manjunatha <br />
                        <span className="gradient-text">Electrical Service</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                        Need industrial motor servicing, rewinding, or wind turbine generator repairs? Our team is available round-the-clock to fulfill your requirements.
                    </p>
                </div>
            </section>

            {/* Contact Grid Section */}
            <section id="contact-details" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
                <div className="grid-2 max-w-1200" style={{ gap: '4rem', alignItems: 'start', margin: '0 auto' }}>

                    {/* Left Column - Contact Info */}
                    <div data-aos="fade-right">
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get in <span className="gradient-text">Touch</span></h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                                Contact Sri Manjunatha Electrical Service today for quotes, emergency repairs, or site consultations.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: 'rgba(255, 255, 255, 0.5)', padding: '1.5rem', borderRadius: '15px', border: '1px solid var(--border)' }}>
                                    <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                                        <Phone size={24} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700 }}>Phone Numbers</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                            <a href="tel:9148494151" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', textDecoration: 'none' }}>+91 91484 94151</a>
                                            <a href="tel:9902290605" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', textDecoration: 'none' }}>+91 99022 90605</a>
                                            <a href="tel:9916062960" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', textDecoration: 'none' }}>+91 99160 62960</a>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: 'rgba(255, 255, 255, 0.5)', padding: '1.5rem', borderRadius: '15px', border: '1px solid var(--border)' }}>
                                    <div style={{ background: 'rgba(255, 0, 122, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                                        <Mail size={24} color="var(--secondary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700 }}>Email Address</h4>
                                        <a href="mailto:manjunathaelec@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', textDecoration: 'none', wordBreak: 'break-all' }}>manjunathaelec@gmail.com</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: 'rgba(255, 255, 255, 0.5)', padding: '1.5rem', borderRadius: '15px', border: '1px solid var(--border)' }}>
                                    <div style={{ background: 'rgba(157, 0, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                                        <Clock size={24} color="var(--accent)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700 }}>Working Hours & GSTIN</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0 }}>24/7 Support Available | Round the Clock</p>
                                        <p style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: 600, marginTop: '4px' }}>GSTIN: 29A0RPM0727K1ZE</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: 'rgba(255, 255, 255, 0.5)', padding: '1.5rem', borderRadius: '15px', border: '1px solid var(--border)' }}>
                                    <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                                        <MapPin size={24} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700 }}>Office & Workshop Address</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>
                                            Oorukere Village & Post, Arpitha Farm House,<br />
                                             Sira Road, Tumkur – 572106, Karnataka.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Why <span className="gradient-text">Choose Us?</span></h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                {whyChooseUs.map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-white)', padding: '1rem 1.2rem', borderRadius: '12px', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }}>
                                        {item.icon}
                                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="card" data-aos="fade-left" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'var(--gradient-primary)' }}></div>
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Send Us a <span className="gradient-text">Message</span></h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Fill out the form below and our team will get back to you shortly.</p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>First Name</label>
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required 
                                        placeholder="Your first name"
                                        style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} 
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Last Name</label>
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required 
                                        placeholder="Your last name"
                                        style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} 
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                        placeholder="yourname@company.com"
                                        style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} 
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required 
                                        placeholder="+91 98765 43210"
                                        style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} 
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Subject / Service Required</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required 
                                    placeholder="e.g. Wind Turbine Generator Rewinding / AC Motor Servicing"
                                    style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem' }} 
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)' }}>Your Message</label>
                                <textarea 
                                    rows="5" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required 
                                    placeholder="Describe your requirements, motor specifications, or urgency..."
                                    style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-white)', fontSize: '1rem', resize: 'vertical' }}
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={formStatus === 'sending'} 
                                className="btn btn-primary" 
                                style={{ padding: '1.2rem', fontSize: '1.1rem', width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                            >
                                {formStatus === 'sending' ? (
                                    <>
                                        <Loader2 size={20} className="spinner" style={{ animation: 'spin 1s linear infinite' }} />
                                        Sending Email...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>

                            {formStatus === 'success' && (
                                <div style={{ background: '#ecfdf5', border: '1px solid #10b981', color: '#065f46', padding: '1.2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', marginTop: '1rem' }}>
                                    <CheckCircle size={24} color="#10b981" style={{ flexShrink: 0 }} />
                                    <div>
                                        <h5 style={{ fontWeight: 700, margin: 0, fontSize: '1rem' }}>Thank You!</h5>
                                        <p style={{ margin: '4px 0 0', fontSize: '0.9rem' }}>Your inquiry has been successfully sent to Sri Manjunatha Electrical Service. We will reach out to you shortly.</p>
                                    </div>
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div style={{ background: '#fef2f2', border: '1px solid #ef4444', color: '#991b1b', padding: '1.2rem', borderRadius: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px', marginTop: '1rem' }}>
                                    <AlertCircle size={24} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <h5 style={{ fontWeight: 700, margin: 0, fontSize: '1rem' }}>Message Delivery Note</h5>
                                        <p style={{ margin: '4px 0 0', fontSize: '0.9rem' }}>{errorMessage}</p>
                                        <div style={{ marginTop: '8px', fontSize: '0.85rem' }}>
                                            Or email us directly at <a href="mailto:manjunathaelec@gmail.com" style={{ color: '#b91c1c', fontWeight: 700, textDecoration: 'underline' }}>manjunathaelec@gmail.com</a> or call <a href="tel:9148494151" style={{ color: '#b91c1c', fontWeight: 700, textDecoration: 'underline' }}>9148494151</a>.
                                        </div>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
