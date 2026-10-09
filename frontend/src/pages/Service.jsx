import { Wrench, Hammer, ShieldCheck, Activity, Navigation, ArrowRight, Settings, ClipboardCheck } from 'lucide-react';

const Service = () => {
    const services = [
        {
            num: "01",
            title: "A/C Motor Servicing & Rewinding",
            subtitle: "AC Electrical Motors",
            desc: "Comprehensive servicing, stator rewinding, bearing replacement, and dynamic testing for single-phase and three-phase AC industrial motors.",
            icon: <Wrench size={40} />,
            image: "motor_rewinding.jpg",
            tags: ["A/C Motor Rewinding", "Stator Overhaul", "Insulation Resistance Test"],
            link: "/contact",
            delay: "0s",
            meta: { location: "Tumakuru Workshop", tech: "Winding Baking Oven", status: "Operational" }
        },
        {
            num: "02",
            title: "D/C Motors Servicing & Rewinding",
            subtitle: "DC Electrical Motors",
            desc: "Precision armature rewinding, commutator turning & undercutting, brush replacement, and field coil servicing for DC motors.",
            icon: <Hammer size={40} />,
            image: "electrical_workshop.jpg",
            tags: ["D/C Motor Servicing", "Armature Rewinding", "Commutator Repair"],
            link: "/contact",
            delay: "0.1s",
            meta: { location: "Tumakuru Workshop", tech: "Coil Winding Machine", status: "Operational" }
        },
        {
            num: "03",
            title: "LT Motors Servicing & Rewinding",
            subtitle: "Low Tension Motors",
            desc: "Complete maintenance, rewinding, and overhauling for Low Tension (LT) industrial motors up to 415V.",
            icon: <Activity size={40} />,
            image: "service1.jpg",
            tags: ["LT Motors", "Coil Rewinding", "Varnish Impregnation"],
            link: "/contact",
            delay: "0.2s",
            meta: { location: "Industrial Site", tech: "Surge Meter Test", status: "Certified" }
        },
        {
            num: "04",
            title: "HT Motors Servicing & Rewinding",
            subtitle: "High Tension Motors",
            desc: "Specialized high-tension motor servicing, coil rewinding, and dielectric strength testing backed by 11Kv & 3Kv High Voltage Test Kit.",
            icon: <ShieldCheck size={40} />,
            image: "service2.png",
            tags: ["HT Motors", "11Kv & 3Kv Test Kit", "HV Coil Rewinding"],
            link: "/contact",
            delay: "0.3s",
            meta: { location: "Industrial Site", tech: "11Kv & 3Kv High Voltage Test Kit", status: "Certified" }
        },
        {
            num: "05",
            title: "Wind Turbine Generator Coil Rewinding",
            subtitle: "Wind Energy Solutions",
            desc: "High thermal endurance coil rewinding for wind turbine generators ensuring maximum efficiency and reliability.",
            icon: <Navigation size={40} />,
            image: "electrical_workshop.jpg",
            tags: ["WTG Generator", "Coil Rewinding", "Class H Insulation"],
            link: "/contact",
            delay: "0.4s",
            meta: { location: "Wind Farm Site", tech: "GWO Trained Staff", status: "Active On-Site" }
        },
        {
            num: "06",
            title: "Wind Turbine Up Tower Generator Servicing",
            subtitle: "On-Site Maintenance",
            desc: "Specialized on-site up-tower generator servicing, bearing replacement, alignment, and diagnostic testing.",
            icon: <Wrench size={40} />,
            image: "service4.jpg",
            tags: ["Up Tower Servicing", "WTG Generator", "Bearing Alignment"],
            link: "/contact",
            delay: "0.5s",
            meta: { location: "Turbine Nacelle", tech: "GWO Certified Team", status: "Field Active" }
        },
        {
            num: "07",
            title: "Wind Turbine Up Tower Generator Patch Work",
            subtitle: "Emergency Generator Patch Work",
            desc: "In-situ coil patch work and emergency electrical repairs inside the nacelle without lowering the generator.",
            icon: <Hammer size={40} />,
            image: "service1.jpg",
            tags: ["Generator Patch Work", "In-Situ Repairs", "Downtime Reduction"],
            link: "/contact",
            delay: "0.6s",
            meta: { location: "Turbine Nacelle", tech: "On-Site Patch Kits", status: "Active Site" }
        },
        {
            num: "08",
            title: "Wind Turbine Pitch Motors, Brake Coil, Oil Pumps Motors Servicing & Rewinding",
            subtitle: "Turbine Auxiliary Motors",
            desc: "Complete servicing and rewinding for turbine pitch motors, electromagnetic brake coils, and hydraulic oil pump motors.",
            icon: <Settings size={40} />,
            image: "motor_rewinding.jpg",
            tags: ["Pitch Motors", "Brake Coil", "Oil Pumps Motors"],
            link: "/contact",
            delay: "0.7s",
            meta: { location: "Service Center", tech: "Resistance Meter & Tachometer", status: "Tested" }
        },
        {
            num: "09",
            title: "Wind Turbine Slip Ring Servicing",
            subtitle: "Electrical Power Transfer",
            desc: "Slip ring surface cleaning, brush gear inspection, insulation resistance testing, and contact ring re-surfacing.",
            icon: <Activity size={40} />,
            image: "electrical_workshop.jpg",
            tags: ["Slip Ring Servicing", "Brush Gear Alignment", "Contact Ring Cleaning"],
            link: "/contact",
            delay: "0.8s",
            meta: { location: "Wind Farm Site", tech: "Tachometer & Multimeter", status: "Tested" }
        },
        {
            num: "10",
            title: "Centrifugal Water Pumps Servicing",
            subtitle: "Industrial Water Pumps",
            desc: "Heavy-duty industrial centrifugal pump overhaul, impeller alignment, dynamic balancing, seal replacement, and motor rewinding.",
            icon: <ClipboardCheck size={40} />,
            image: "service4.jpg",
            tags: ["Water Pumps Servicing", "Impeller Alignment", "Mechanical Seals"],
            link: "/contact",
            delay: "0.9s",
            meta: { location: "Service Center", tech: "Bearing Induction Heater", status: "Operational" }
        }
    ];

    return (
        <main className="service-page">
            <div className="mesh-bg"></div>

            {/* Premium Header */}
            <section className="service-hero">
                <div className="max-w-1000" data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>ElectroMechanical Services</span>
                    <h1 className="hero-title">
                        Sri Manjunatha <br />
                        <span className="gradient-text">Electrical Services</span>
                    </h1>
                    <p className="hero-desc">
                        Established in 2006, Sri Manjunatha Electrical Service offers complete industrial motor servicing, coil rewinding, and wind turbine generator solutions with high quality and 24/7 technical support.
                    </p>
                </div>
            </section>

            {/* Staggered Narrative Rows */}
            <div className="service-container">
                {services.map((item, idx) => (
                    <section key={idx} className={`service-row ${idx % 2 !== 0 ? 'row-reverse' : ''}`} id={`service-${item.num}`}>
                        <div className="service-image-side" data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}>
                            <div className="parallax-img-box">
                                <img src={item.image} alt={item.title} className="service-main-img" />
                                <div className="tech-meta-badge">
                                    <div className="meta-item">
                                        <span className="meta-label">Deployment Site</span>
                                        <span className="meta-val">{item.meta.location}</span>
                                    </div>
                                    <div className="meta-divider"></div>
                                    <div className="meta-item">
                                        <span className="meta-label">Primary Technology</span>
                                        <span className="meta-val">{item.meta.tech}</span>
                                    </div>
                                    <div className="meta-divider"></div>
                                    <div className="meta-item">
                                        <span className="meta-label">Operation Status</span>
                                        <span className="meta-val status-active">{item.meta.status}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="service-content-side" data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}>
                            <div className="ghost-number">{item.num}</div>
                            <h2 className="service-row-title">{item.title}</h2>
                            <p className="service-row-desc">{item.desc}</p>
                            
                            <div className="tag-group">
                                {item.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="service-tag-item">{tag}</span>
                                ))}
                            </div>

                            {item.link && (
                                <a href={item.link} className="btn-service">
                                    Service Details <ArrowRight size={18} />
                                </a>
                            )}
                        </div>
                    </section>
                ))}
            </div>

            <style>{`
                .service-page {
                    overflow-x: hidden;
                }
                .service-hero {
                    padding: 120px 8% 50px;
                    text-align: center;
                }
                .hero-desc {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    max-width: 680px;
                    margin: 0 auto;
                    line-height: 1.7;
                }
                .service-container {
                    padding-bottom: 80px;
                }
                .service-row {
                    display: flex;
                    align-items: center;
                    gap: 3.5rem;
                    padding: 50px 8%;
                    max-width: 1200px;
                    margin: 0 auto;
                    min-height: auto;
                }
                .row-reverse {
                    flex-direction: row-reverse;
                }
                .service-image-side {
                    flex: 1;
                    position: relative;
                }
                .parallax-img-box {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.08);
                }
                .service-main-img {
                    width: 100%;
                    height: 280px;
                    object-fit: cover;
                    transform: scale(1.02);
                    transition: transform 0.6s ease;
                }
                .service-row:hover .service-main-img {
                    transform: scale(1.05);
                }
                .tech-meta-badge {
                    position: absolute;
                    bottom: 15px;
                    left: 15px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(15px);
                    padding: 0.8rem 1.2rem;
                    border-radius: 14px;
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    z-index: 5;
                    border: 1px solid rgba(255,255,255,0.3);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
                    width: calc(100% - 30px);
                    justify-content: space-between;
                }
                .meta-item {
                    display: flex;
                    flex-direction: column;
                }
                .meta-label {
                    font-size: 0.6rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--text-muted);
                    font-weight: 700;
                    margin-bottom: 2px;
                }
                .meta-val {
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--text-dark);
                }
                .status-active {
                    color: var(--primary);
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                .status-active::before {
                    content: '';
                    width: 5px;
                    height: 5px;
                    background: var(--primary);
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(2.5); opacity: 0; }
                }
                .meta-divider {
                    width: 1px;
                    height: 20px;
                    background: var(--border);
                }
                .service-content-side {
                    flex: 1;
                    position: relative;
                }
                .ghost-number {
                    position: absolute;
                    top: -35px;
                    left: -10px;
                    font-size: 5rem;
                    font-weight: 900;
                    color: var(--primary);
                    opacity: 0.05;
                    font-family: 'Outfit';
                    z-index: -1;
                    line-height: 1;
                }
                .service-row-title {
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                    font-weight: 800;
                    line-height: 1.3;
                }
                .service-row-desc {
                    font-size: 1rem;
                    color: var(--text-muted);
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                }
                .tag-group {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    margin-bottom: 1.8rem;
                }
                .service-tag-item {
                    padding: 0.5rem 1.2rem;
                    background: rgba(15, 154, 42, 0.05);
                    border: 1px solid rgba(15, 154, 42, 0.1);
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--primary);
                }
                .btn-service {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 1rem 2rem;
                    background: var(--text-dark);
                    color: white;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    transition: all 0.4s ease;
                }
                .btn-service:hover {
                    background: var(--primary);
                    transform: translateX(10px);
                }

                @media (max-width: 1024px) {
                    .service-row {
                        flex-direction: column !important;
                        gap: 3rem;
                        padding: 60px 5%;
                        text-align: center;
                    }
                    .service-main-img {
                        height: 350px;
                    }
                    .service-row-title {
                        font-size: 2.5rem;
                    }
                    .tag-group {
                        justify-content: center;
                    }
                    .ghost-number {
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: 7rem;
                    }
                    .tech-meta-badge { 
                        bottom: 15px; 
                        left: 15px; 
                        width: calc(100% - 30px);
                        padding: 1rem;
                        gap: 1rem;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .meta-divider { display: none; }
                }
            `}</style>
        </main>
    );
};

export default Service;
