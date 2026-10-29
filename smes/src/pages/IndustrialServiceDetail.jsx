import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
    Wrench, Hammer, ShieldCheck, Navigation, 
    ArrowRight, CheckCircle2, Settings, 
    Users, Clock, Zap, ChevronRight, Phone, ClipboardCheck,
    Activity, Cpu, Layers, AlertTriangle, Check, HelpCircle,
    FileText, Award, Gauge, Shield, ChevronDown
} from 'lucide-react';

const IndustrialServiceDetail = () => {
    const { slug } = useParams();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        setOpenFaq(null);
    }, [slug]);

    const getImgUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

    const serviceData = {
        // 1. A/C Motor Servicing & Rewinding
        "ac-motor-servicing": {
            title: "A/C Motor Servicing & Rewinding",
            subtitle: "Industrial Single-Phase & 3-Phase AC Induction Motors",
            tagline: "Precision Stator Rewinding, Dynamic Rotor Balancing & Performance Restoration Since 2006",
            heroImage: "services/ac_motor.jpg",
            detailImage: "motor_rewinding.jpg",
            fieldMeta: { location: "Tumakuru Central Workshop", tech: "Thermostatic Oven & Dual-Plane Balancing", status: "Active Workshop" },
            icon: <Wrench size={40} />,
            quickStats: [
                { label: "Voltage Range", val: "415V / 690V / 3.3kV" },
                { label: "Capacity Range", val: "0.5 HP – 500+ HP" },
                { label: "Insulation Class", val: "Class H (180°C) / Class F" },
                { label: "Standard", val: "IS 325 & IEC 60034" }
            ],
            overview: "Sri Manjunatha Electrical Service is a trusted specialist in the servicing, stator overhaul, and rewinding of all AC induction motors, including squirrel-cage, slip-ring, flame-proof, and crane-duty motors. We deploy 100% pure electrolytic dual-coated copper wire (Grade-1/Grade-2), high-dielectric Nomex slot liners, and multi-stage oven varnish baking to guarantee maximum electrical efficiency, minimum operational heat, and prolonged motor lifespan.",
            specs: [
                { label: "Motor Types Handled", value: "Squirrel Cage, Slip Ring, Crane Duty, Cooling Tower, Multi-speed" },
                { label: "Winding Wire", value: "Dual-coated Enamelled Copper (Polyesterimide / Polyamide-imide overcoat)" },
                { label: "Slot & Phase Insulation", value: "DuPont Nomex 410, Mylar composite, Class H slot wedges" },
                { label: "Varnish & Baking", value: "Solventless Class H synthetic varnish, baked at 120°C–140°C" },
                { label: "Bearings Used", value: "SKF / FAG / TIMKEN with high-temperature synthetic grease" },
                { label: "Quality Deliverables", value: "Comprehensive pre & post testing report with insulation resistance (Megger)" }
            ],
            symptoms: [
                {
                    problem: "Motor Overheating & Frequent Thermal Tripping",
                    cause: "Inter-turn short circuits, phase unbalance, or degraded slot insulation.",
                    solution: "Complete de-winding, core loss audit, precision coil forming with Class H insulation, and controlled temperature baking."
                },
                {
                    problem: "High Vibration & Bearing Seizure",
                    cause: "Mechanical unbalance of rotor, shaft eccentricity, or lack of proper lubrication.",
                    solution: "Two-plane computerized dynamic rotor balancing and induction heater fitting of genuine SKF/FAG bearings."
                },
                {
                    problem: "Low Insulation Resistance (< 2 MΩ)",
                    cause: "Moisture ingress, chemical fumes, or conductive carbon dust accumulation.",
                    solution: "High-temperature oven pre-heating, ultrasonic slot cleaning, and double-dip varnish impregnation."
                },
                {
                    problem: "Single Phasing / Locked Rotor Burnout",
                    cause: "Supply voltage fluctuation, phase loss, or persistent mechanical stall.",
                    solution: "Complete rewinding with reinforced phase separators and thermal overload protection verification."
                }
            ],
            capabilities: [
                { title: "Precision Stator Rewinding", desc: "Coil winding with exact turn counts, slot pitch, and copper gauge matching OEM electrical characteristics." },
                { title: "Dynamic Rotor Balancing", desc: "ISO 1940 standard two-plane dynamic balancing to reduce operating vibration to below 1.5 mm/s RMS." },
                { title: "Controlled Oven Baking", desc: "Automated baking ovens ensuring uniform varnish polymerisation without hot-spot brittleness." },
                { title: "Shaft & End-Shield Reconditioning", desc: "In-house precision lathe machining, metal spraying, and bronze sleeving for damaged bearing journals." },
                { title: "Surge Comparison Testing", desc: "High-voltage surge testing to pinpoint weak inter-turn insulation before dispatch." },
                { title: "On-Site Vibration & Megger Audits", desc: "Mobile testing engineers dispatched to customer plants for preventive motor health checks." }
            ],
            process: [
                { step: "01", title: "Intake & Surge Diagnostic", desc: "Initial megger insulation check, winding resistance balancing, drop testing, and mechanical play inspection." },
                { step: "02", title: "Thermal Strip & Slot Cleaning", desc: "Controlled oven burn-off of damaged winding to protect core silicon-steel laminations, followed by sandblast cleaning." },
                { step: "03", title: "Coil Winding & Insertion", desc: "Precision loop winding with dual-coated magnet copper wire, Nomex slot liners, and glass-tape phase barriers." },
                { step: "04", title: "Varnish Impregnation & Baking", desc: "Double-dip varnish immersion followed by 8-hour thermostatically controlled curing at 130°C." },
                { step: "05", title: "Dynamic Balancing & Full Load Test", desc: "Computerized rotor balancing, new SKF bearing fitting, no-load & full-load trial run, and test certification." }
            ],
            faqs: [
                { q: "What is the typical turnaround time for AC motor rewinding?", a: "Standard motors up to 50 HP are usually rewound and tested within 24 to 48 hours. For critical emergency industrial breakdowns, we offer priority 24-hour turnaround service." },
                { q: "Do you use genuine copper wire and branded bearings?", a: "Yes, we exclusively utilize 100% electrolytic Grade-1/Grade-2 enamelled copper wire from certified manufacturers and genuine SKF/FAG/TIMKEN bearings." },
                { q: "Do you provide test certificates with the serviced motor?", a: "Every motor dispatched from Sri Manjunatha Electrical Service comes with a complete test certificate recording insulation resistance (Megger), winding resistance per phase, no-load current, and vibration levels." },
                { q: "Can your team inspect motors directly at our factory?", a: "Yes, our field technicians provide on-site diagnostics, laser alignment, vibration analysis, and motor dismantling support across industrial clusters." }
            ]
        },

        // 2. D/C Motors Servicing & Rewinding
        "dc-motor-servicing": {
            title: "D/C Motors Servicing & Rewinding",
            subtitle: "Industrial Series, Shunt & Compound DC Motors",
            tagline: "Precision Armature Rewinding, Commutator Diamond Undercutting & Sparkless Operation",
            heroImage: "services/dc_motor.jpg",
            detailImage: "electrical_workshop.jpg",
            fieldMeta: { location: "Tumakuru Central Workshop", tech: "Micro Lathe & Commutator Undercutter", status: "Active Workshop" },
            icon: <Hammer size={40} />,
            quickStats: [
                { label: "Voltage Rating", val: "110V / 220V / 440V DC" },
                { label: "Capacity Range", val: "Up to 300+ KW" },
                { label: "Banding Type", val: "Resin Glass Tape" },
                { label: "Commutator Tol.", val: "0.02 mm Runout" }
            ],
            overview: "Direct Current (DC) motors play a critical role in steel mills, paper processing lines, extruders, and heavy cranes requiring precise variable speed and high starting torque. Sri Manjunatha Electrical Service delivers specialized DC motor refurbishment, heavy-duty armature rewinding, mica slot undercutting, field/interpole coil refurbishment, and dynamic neutral axis setting for smooth, spark-free commutation.",
            specs: [
                { label: "Motor Configurations", value: "DC Shunt, DC Series, Compound Wound, Separately Excited" },
                { label: "Armature Winding", value: "Heavy-duty lap and wave winding with high-temperature magnet wire" },
                { label: "Armature Banding", value: "High-tensile non-magnetic resin glass tape (Resiglass) banding" },
                { label: "Commutator Machining", value: "Diamond-tipped tool lathe skimming with mica undercutting to 1.0mm depth" },
                { label: "Brush Rigging", value: "Complete brush holder overhaul, spring tension calibration, and carbon brush seating" },
                { label: "Electrical Testing", value: "Bar-to-bar drop test, ground insulation check, and neutral axis setting" }
            ],
            symptoms: [
                {
                    problem: "Heavy Sparking at Commutator Brushes",
                    cause: "Uneven commutator surface, high mica segments, incorrect brush grade, or shifted neutral plane.",
                    solution: "Commutator diamond skimming, automatic mica undercutting, chamfering copper bar edges, and neutral plane calibration."
                },
                {
                    problem: "Armature Overheating & Burnt Segments",
                    cause: "Shorted armature coils, open solder joints at commutator risers, or continuous overload.",
                    solution: "Bar-to-bar micro-ohm drop test, complete armature stripping, new winding insertion, and silver-brazed riser joints."
                },
                {
                    problem: "Loss of Speed Control & Unstable Torque",
                    cause: "Weak or partially grounded shunt field coils or interpole distortion.",
                    solution: "Field coil impedance test, rewinding defective field coils with Class H insulation, and magnetic polarity audit."
                },
                {
                    problem: "Excessive Carbon Dust & Brush Wear",
                    cause: "Incorrect spring tension, improper carbon brush grade, or rough commutator surface.",
                    solution: "Installing site-matched electrographite carbon brushes, spring tension recalibration, and mirror polishing."
                }
            ],
            capabilities: [
                { title: "Armature Rewinding & Banding", desc: "Precision wave and lap rewinding with resin-glass thermal banding engineered to withstand high centrifugal RPM forces." },
                { title: "Commutator Skimming & Undercutting", desc: "Diamond lathe turning to achieve under 0.02mm runout, followed by deep mica slot undercutting and edge deburring." },
                { title: "Field & Interpole Coil Servicing", desc: "Complete rebuilding of shunt field coils, series coils, and interpoles with vacuum varnish treatment." },
                { title: "Brush Rigging & Neutral Axis Tuning", desc: "Spring tension calibration and inductive neutral plane alignment to ensure spark-free running under varying loads." },
                { title: "Bar-to-Bar Drop Testing", desc: "High-sensitivity millivolt drop test across every commutator segment to verify zero shorts or open circuits." },
                { title: "Variable Voltage DC Test Bench", desc: "Full-speed running validation on regulated DC power supplies before final customer sign-off." }
            ],
            process: [
                { step: "01", title: "Bar-to-Bar Drop Profiling", desc: "Drop test of every commutator bar, insulation resistance check, and visual inspection of brush wear and riser joints." },
                { step: "02", title: "Commutator Turning & Undercutting", desc: "Machining the commutator on precision lathe, grooving out insulating mica, and chamfering copper segment edges." },
                { step: "03", title: "Armature Coil Rewinding", desc: "Winding with heavy-gauge dual-coated wire, silver soldering leads to risers, and high-tensile glass-tape banding." },
                { step: "04", title: "Oven Baking & Impregnation", desc: "Controlled pre-heat, solventless Class H varnish immersion, and thermostatic oven baking." },
                { step: "05", title: "Neutral Setting & DC Trial Run", desc: "Dynamic running trial on variable DC power, neutral brush axis adjustment, and sparkless commutation certification." }
            ],
            faqs: [
                { q: "Why is commutator undercutting necessary for DC motors?", a: "Mica insulation between copper bars does not wear as fast as copper. If not undercut, 'high mica' causes the brushes to bounce, producing violent arcing and burning. Undercutting removes mica below copper level for smooth brush contact." },
                { q: "How do you ensure the armature doesn't throw coils at high speed?", a: "We apply high-tensile resin-impregnated fiberglass tape (Resiglass) banding over the coil overhangs, which cures into a rigid high-strength ring capable of enduring extreme centrifugal stresses." },
                { q: "Can you rewind both series and shunt field coils?", a: "Yes, we rewind main shunt field coils, heavy copper strip series coils, and interpoles (compoles) to exact original magnetic turn specifications." },
                { q: "Do you supply replacement carbon brushes?", a: "Yes, we stock and custom-cut electrographite, metal-graphite, and carbon brushes specifically matched to your DC motor's current density and voltage rating." }
            ]
        },

        // 3. LT Motors Servicing & Rewinding
        "lt-motor-servicing": {
            title: "LT Motors Servicing & Rewinding",
            subtitle: "Low Tension Industrial Motors (Up to 415V / 690V)",
            tagline: "Rapid Turnaround Emergency Rewinding & Overhaul for Plant Operations",
            heroImage: "services/lt_motor.jpg",
            detailImage: "service1.jpg",
            fieldMeta: { location: "Industrial Facilities & Workshop", tech: "Surge Comparator & Multi-Range Megger", status: "Active Operations" },
            icon: <Zap size={40} />,
            quickStats: [
                { label: "Voltage Class", val: "Up to 415V / 690V" },
                { label: "Frame Sizes", val: "63 to 355 Frame" },
                { label: "Turnaround", val: "Same Day / 24-48 Hrs" },
                { label: "Protection", val: "IP55 / IP56 Sealed" }
            ],
            overview: "Low Tension (LT) motors form the lifeblood of industrial production, driving pumps, blowers, extruders, compressors, and material handling systems across Karnataka and South India. Sri Manjunatha Electrical Service provides emergency 24/7 turnaround rewinding, bearing replacement, end-shield housing restoration, and preventive maintenance for all LT motors up to 415V/690V.",
            specs: [
                { label: "Frame Range", value: "IEC standard frames 63 through 355 (Cast iron & Aluminium bodies)" },
                { label: "Winding Gauge", value: "Precision swg copper wire matching original efficiency class (IE2, IE3, IE4)" },
                { label: "Insulation Class", value: "Class H (180°C) Nomex / Class F standard" },
                { label: "Terminal Blocks", value: "Heavy-duty anti-tracking BMC terminal boards & brass link sets" },
                { label: "End Cover Machining", value: "Precision boring, sleeving, and thread repairs" },
                { label: "Diagnostic Tests", value: "Surge comparison, phase resistance balance, no-load & full-load trial" }
            ],
            symptoms: [
                {
                    problem: "Stator Winding Burnout (Burnt Smell & Breaker Trip)",
                    cause: "Phase failure, sustained overload, low supply voltage, or blocked ventilation fan.",
                    solution: "High-grade rewinding with dual-coated Class H copper, reinforced phase dividers, and new cooling fan/cowl installation."
                },
                {
                    problem: "Shaft Loose in Bearing Housing (End-Shield Play)",
                    cause: "Bearing spin inside the housing due to lack of grease or vibration.",
                    solution: "Lathe boring and cast-iron/bronze sleeving of bearing housing to exact tolerance fit."
                },
                {
                    problem: "Water / Moisture Contamination Inside Terminal Box",
                    cause: "Damaged rubber gaskets or loose cable glands leading to flashover.",
                    solution: "Terminal block replacement, resin potting of lead exits, and IP55 weatherproofing gaskets."
                },
                {
                    problem: "Loud Hum with High No-Load Amperage",
                    cause: "Shorted lamination core or uneven air gap between rotor and stator.",
                    solution: "Core lamination audit, air gap alignment, and stator rewinding with uniform phase resistance."
                }
            ],
            capabilities: [
                { title: "24-Hour Emergency Rewinding", desc: "Dedicated emergency crew for industrial plant breakdowns to get production lines rolling within 24 hours." },
                { title: "Efficiency Class Restoration", desc: "Coil winding geometries optimized to preserve original motor efficiency (IE2, IE3 premium efficiency)." },
                { title: "Mechanical Journal Sleeving", desc: "Precision machining of worn bearing journals and end-shields to manufacturer H7 tolerance standards." },
                { title: "SKF / FAG Induction Bearing Fit", desc: "Controlled electromagnetic induction heating ensures zero damage to bearing raceways during fitment." },
                { title: "Terminal Box & Lead Modernization", desc: "Installation of flexible silicone leads, heavy brass terminals, and anti-vibration locking nuts." },
                { title: "Laser Shaft Alignment Support", desc: "On-site laser optical alignment between motor shaft and driven equipment to eliminate coupling wear." }
            ],
            process: [
                { step: "01", title: "Visual & Electrical Diagnostics", desc: "Megger check, winding resistance test, air gap measurement, and bearing play assessment." },
                { step: "02", title: "Burnout Stripping & Cleaning", desc: "Oven de-winding to protect core teeth, ultrasonic slot cleaning, and slot paper insertion." },
                { step: "03", title: "Dual-Layer Copper Insertion", desc: "Precision coil insertion, Nomex phase barrier placement, and tight glass-cord lacing." },
                { step: "04", title: "Double-Dip Varnish Baking", desc: "Impregnation in synthetic insulating resin followed by 130°C thermostatic oven baking." },
                { step: "05", title: "Bearing Fit & Final Inspection", desc: "Induction fitting of SKF bearings, end-cover assembly, no-load trial, and test report delivery." }
            ],
            faqs: [
                { q: "Can rewinding maintain the original motor energy efficiency?", a: "Yes. When done correctly with exact copper wire gauge, correct coil turn counts, and low-temperature stripping that preserves magnetic core laminations, rewound motors retain over 98-99% of original efficiency." },
                { q: "How quickly can an LT motor be repaired during an emergency?", a: "For emergency breakdowns, our team works around the clock to strip, rewind, bake, and test standard LT motors within 24 hours." },
                { q: "Do you supply new cooling fans and terminal boxes?", a: "Yes, we stock cast iron and polypropylene cooling fans, fan covers, and heavy-duty terminal blocks for all standard motor frame sizes." },
                { q: "What tests are performed prior to dispatch?", a: "We perform insulation resistance testing (1000V Megger), phase resistance balance check, surge comparison test, and 30-minute no-load vibration/temperature run." }
            ]
        },

        // 4. HT Motors Servicing & Rewinding
        "ht-motor-servicing": {
            title: "HT Motors Servicing & Rewinding",
            subtitle: "High Tension Industrial Motors (3.3kV / 6.6kV / 11kV)",
            tagline: "Form-Wound HV Coils, Corona Discharge Suppression & 11kV Test Apparatus",
            heroImage: "services/ht_motor.jpg",
            detailImage: "service2.png",
            fieldMeta: { location: "Heavy Industrial Sites & Power Plants", tech: "11kV & 3kV High Voltage Test Kit", status: "Certified Facility" },
            icon: <ShieldCheck size={40} />,
            quickStats: [
                { label: "Voltage Classes", val: "3.3kV / 6.6kV / 11kV" },
                { label: "Coil Construction", val: "Formed Diamond Coils" },
                { label: "Corona Protection", val: "Semiconductive Tape" },
                { label: "HV Proof Test", val: "Calibrated 11kV Test Kit" }
            ],
            overview: "High Tension (HT) motors powering power stations, cement plants, steel mills, and water supply grids operate under extreme electrical, thermal, and mechanical stresses. Handling HT motors requires advanced high-voltage engineering expertise. Sri Manjunatha Electrical Service specializes in 3.3kV, 6.6kV, and 11kV motor overhaul, formed diamond coil manufacturing, corona suppression taping, and calibrated high-voltage dielectric testing.",
            specs: [
                { label: "Voltage Ratings", value: "3,300 Volts (3.3kV), 6,600 Volts (6.6kV), 11,000 Volts (11kV)" },
                { label: "Coil Architecture", value: "Pre-formed rigid diamond coils with resin-rich mica paper taping" },
                { label: "Corona Suppression", value: "Semiconductive slot tape & silicon carbide stress-grading end-turn tapes" },
                { label: "End-Turn Bracing", value: "Epoxy-glass surge rings with resin-glass cord spacing blocks" },
                { label: "Impregnation System", value: "Resin-Rich hot press curing / Vacuum Pressure Impregnation (VPI)" },
                { label: "HV Verification", value: "High-Pot testing up to 23kV, Polarization Index (PI), and Tan Delta audit" }
            ],
            symptoms: [
                {
                    problem: "Inter-Turn Insulation Breakdown / Stator Flashover",
                    cause: "Corona discharge tracking, moisture ingress, or high-voltage switching surges.",
                    solution: "Manufacturing formed diamond coils with resin-rich mica tape and stress-grading corona suppression tapes."
                },
                {
                    problem: "End-Turn Vibration & Loosened Slot Wedges",
                    cause: "Electromagnetic starting shocks loosening coil bracing rings and slot wedges.",
                    solution: "Magnetic slot wedge replacement, rigid epoxy-glass ring bracing, and conformable tying cords."
                },
                {
                    problem: "Low Polarization Index (PI < 2.0)",
                    cause: "Severe moisture absorption in stator winding or carbon dust accumulation.",
                    solution: "Hot-air circulation oven baking, ultrasonic cleaning, and multi-layer dielectric re-varnishing."
                },
                {
                    problem: "White Powdery Residue on Coil Surface (Corona Pitting)",
                    cause: "Lack of proper semiconductor grounding tape in slot exits leading to partial discharge.",
                    solution: "Application of semiconductive slot conductive paints and stress-grading tapes."
                }
            ],
            capabilities: [
                { title: "Form-Wound HV Diamond Coils", desc: "Rigid diamond coil forming with hot-press cell consolidation using high-grade mica paper tape for 11kV service." },
                { title: "Corona & Partial Discharge Shielding", desc: "Application of conductive slot-liner tapes and non-linear stress grading tape to suppress partial discharge." },
                { title: "11kV & 3kV High Voltage Test Kit", desc: "Calibrated on-site high-voltage testing equipment to verify dielectric puncture strength per IEEE/IEC standards." },
                { title: "Polarization Index (PI) Profiling", desc: "10-minute vs 1-minute Megger ratio testing to verify absolute winding dryness and insulation health." },
                { title: "Rigid End-Turn Ring Bracing", desc: "High-strength epoxy glass surge rings and spacer blocks to withstand direct-on-line start mechanical shock." },
                { title: "Magnetic Slot Wedge Replacement", desc: "Installation of magnetic and epoxy-glass wedges to reduce stator iron losses and eliminate magnetic hum." }
            ],
            process: [
                { step: "01", title: "Dielectric Diagnostics & PI Audit", desc: "High-voltage step test, Polarization Index (PI) assessment, and micro-ohm winding resistance balance measurement." },
                { step: "02", title: "Precision Coil Manufacture", desc: "Rectangular copper conductor forming, mica taping, hot-press sizing, and stress-grading application." },
                { step: "03", title: "Stator Insertion & Bracing", desc: "Insertion into stator core slots, magnetic slot wedging, and rigid overhang bracing with epoxy surge rings." },
                { step: "04", title: "Resin Curing & VPI Treatment", desc: "Vacuum Pressure Impregnation with solventless epoxy resin followed by controlled curing cycle." },
                { step: "05", title: "11kV High-Pot Proof Test", desc: "Full AC/DC high-potential proof test, Tan Delta dissipation check, and complete technical audit sign-off." }
            ],
            faqs: [
                { q: "What test apparatus do you use for HT motor verification?", a: "We utilize dedicated 11kV & 3kV High Voltage Test Kits, 5000V digital insulation resistance testers (Megger), micro-ohm meters for resistance balance, and surge comparison analyzers." },
                { q: "What is the difference between LT and HT rewinding?", a: "LT motors use round enamelled copper wire with drop-in coils, whereas HT motors (3.3kV-11kV) require rectangular copper conductors formed into rigid diamond coils, wrapped in multi-layer mica tape, and protected with corona suppression tapes." },
                { q: "Can you repair HT motors directly on-site at power/cement plants?", a: "Yes, our specialized engineers provide on-site diagnostics, coil wedge tightening, end-turn re-bracing, bearing changes, and high-voltage testing directly on-site." },
                { q: "What is an acceptable Polarization Index (PI) for an HT motor?", a: "A PI ratio (10-minute IR / 1-minute IR) above 2.0 indicates healthy, dry insulation. Values below 1.5 require thorough baking and re-conditioning." }
            ]
        },

        // 5. WTG Generator Coil Rewinding
        "wtg-generator-coil-rewinding": {
            title: "WTG Generator Coil Rewinding",
            subtitle: "Wind Turbine Generator Solutions (DFIG, PMSG & SCIG)",
            tagline: "Class H Inverter-Grade Copper Winding Built for Harsh Wind Farm Environments",
            heroImage: "services/wtg_generator.jpg",
            detailImage: "installation.png",
            fieldMeta: { location: "Wind Farm Sites & Tumakuru Facility", tech: "Class H Inverter-Grade Copper Wire", status: "Active Field Operations" },
            icon: <Activity size={40} />,
            quickStats: [
                { label: "Generator Types", val: "DFIG, PMSG, SCIG" },
                { label: "Capacity Range", val: "250 kW – 3.0+ MW" },
                { label: "Insulation Class", val: "Class H (180°C+)" },
                { label: "Turbine Makes", val: "Gamesa, Vestas, Suzlon, GE" }
            ],
            overview: "Wind turbine generators endure intense cyclic torque, harsh desert or coastal dust, sub-zero winters, and pulse-width modulated (PWM) inverter voltage spikes. Standard motor windings fail quickly under these conditions. Sri Manjunatha Electrical Service provides specialized stator and rotor rewinding for Doubly-Fed Induction Generators (DFIG) and permanent magnet generators across leading turbine models (Vestas, Suzlon, Gamesa, GE, Enercon, Inox, ReGen).",
            specs: [
                { label: "Applicable Turbine OEMs", value: "Suzlon (S88, S97, S111), Gamesa (G58, G97), Vestas (V82, V90), GE 1.5/1.6, Inox" },
                { label: "Winding Wire Standard", value: "Corona-resistant inverter-grade magnet wire (NEMA MG1 Part 31 compliant)" },
                { label: "Rotor Overhang Protection", value: "High-tensile non-magnetic fiberglass banding resisting 2000+ RPM centrifugal loads" },
                { label: "Inter-Turn Insulation", value: "Class H Nomex-Kapton composite slot liners & mica-polyester phase barriers" },
                { label: "Varnish Impregnation", value: "Solventless flexible epoxy resin designed for cyclic thermal expansion" },
                { label: "Testing Protocols", value: "Surge comparison, phase balance, insulation resistance, and rotor balance" }
            ],
            symptoms: [
                {
                    problem: "Converter dv/dt Inverter Spike Burnout",
                    cause: "Steep voltage wavefronts from frequency converters causing inter-turn insulation puncture.",
                    solution: "Rewinding with corona-resistant inverter-grade copper wire and triple-layer phase separators."
                },
                {
                    problem: "Rotor Coil Movement & Centrifugal Ground Fault",
                    cause: "Extreme rotational speed fluctuations loosening rotor coils and damaging lead connections.",
                    solution: "Reinforced rotor rewinding, high-tensile glass tape banding, and silver-brazed flexible lead connectors."
                },
                {
                    problem: "Stator Phase-to-Phase Short Circuit Under High Wind",
                    cause: "Thermal overload during peak generation periods degrading organic insulation materials.",
                    solution: "Class H Nomex/Mica insulation rebuild and vacuum varnish impregnation with high thermal endurance."
                },
                {
                    problem: "Rotor Ground Fault via Carbon Dust Contamination",
                    cause: "Slip ring carbon and copper dust sucked into rotor end-windings.",
                    solution: "High-pressure dry cleaning, anti-tracking barrier paint application, and rotor end-turn encapsulation."
                }
            ],
            capabilities: [
                { title: "Inverter-Grade Corona Resistant Wire", desc: "NEMA MG1 Part 31 certified wire designed specifically to withstand 2,000V microsecond inverter voltage spikes." },
                { title: "DFIG Rotor Rewinding Expertise", desc: "Complete 3-phase rotor rewinding with reinforced coil overhangs to handle high centrifugal forces." },
                { title: "Thermal Cycle Shock Endurance", desc: "Insulation systems tested for continuous cyclic thermal expansion from -20°C idle to +150°C full-load." },
                { title: "Peak Wind Season Fast Turnaround", desc: "Prioritized emergency rewinding lines to minimize turbine revenue loss during high-wind season." },
                { title: "Complete Stator & Rotor Core Refurbishment", desc: "Silicon steel lamination inspection, de-burring, and anti-rust dielectric coating." },
                { title: "Comprehensive Electrical Certificate", desc: "Surge testing, megger testing, and dynamic balancing certified by experienced electrical engineers." }
            ],
            process: [
                { step: "01", title: "Winding Pattern Mapping", desc: "Precise blueprinting of stator and rotor winding pitch, group series/parallel taps, and lead connections." },
                { step: "02", title: "Thermal De-Winding & Slot Clean", desc: "Controlled oven burn-off protecting core magnetic properties, followed by ultrasonic slot sandblasting." },
                { step: "03", title: "Precision Rewinding & Wedging", desc: "Winding with inverter-grade copper, Nomex slot liners, and high-strength epoxy-glass wedges." },
                { step: "04", title: "Multi-Dip Class H Baking", desc: "Multi-stage varnish baking cycle in temperature-monitored ovens to ensure solid void-free impregnation." },
                { step: "05", title: "Dynamic Rotor Balance & Testing", desc: "Computerized dynamic balancing, high-potential proof testing, and packaging for secure wind-farm transport." }
            ],
            faqs: [
                { q: "Why do wind turbine generators need inverter-grade wire?", a: "Modern wind turbines use DFIG or full-scale power converters that generate rapid PWM switching pulses. Standard wire insulation breaks down under these voltage spikes, causing premature coil failure. Inverter-grade wire has specialized enamels that eliminate partial discharge." },
                { q: "Which wind turbine generator models do you repair?", a: "We service generators from Suzlon, Gamesa, Vestas, GE, Inox, ReGen, Wind World, and Siemens across capacities from 250 kW to 3.0+ MW." },
                { q: "How do you test the rotor of a DFIG generator?", a: "We test rotor winding resistance balance with a micro-ohmmeter, perform high-voltage surge tests on each phase, megger at 1000V/2500V, and dynamically balance the complete rotor on our balancing rig." },
                { q: "What is your turnaround time during high wind season?", a: "We maintain dedicated rewind benches for wind farm clients during peak season to complete full rewinds in 3 to 5 days." }
            ]
        },

        // 6. WTG Up Tower Generator Servicing
        "wtg-up-tower-generator-servicing": {
            title: "WTG Up Tower Generator Servicing",
            subtitle: "Nacelle-Level In-Situ Maintenance at 80m–120m Height",
            tagline: "GWO-Certified Climbers, In-Situ Bearing Replacement & Crane-Free Cost Savings",
            heroImage: "services/wtg_uptower.jpg",
            detailImage: "service4.jpg",
            fieldMeta: { location: "Turbine Nacelle (80m – 120m Height)", tech: "GWO Certified Climbers & Laser Alignment", status: "Field Operations Active" },
            icon: <Wrench size={40} />,
            quickStats: [
                { label: "Working Height", val: "Up to 120+ Meters" },
                { label: "Cost Saving", val: "Saves 70%+ vs Crane Hire" },
                { label: "Certification", val: "GWO & IRATA Certified" },
                { label: "Turnaround", val: "24 – 48 Hours" }
            ],
            overview: "Lowering a 6-to-12 ton wind generator to ground level with heavy mobile cranes costs ₹5 to ₹15 Lakhs in crane mobilization, road access, and days of turbine downtime. Sri Manjunatha Electrical Service eliminates this massive expenditure. Our GWO-certified up-tower technical crew performs complete generator servicing, bearing replacements, laser shaft alignment, and diagnostic testing directly inside the turbine nacelle at 80–120 meters height.",
            specs: [
                { label: "Target Nacelle Components", value: "Generator Drive-End (DE) & Non-Drive-End (NDE) bearings, couplings, slip rings" },
                { label: "Climbing Credentials", value: "Global Wind Organisation (GWO BST: Working at Height, First Aid, Manual Handling)" },
                { label: "Bearing Type Installed", value: "SKF INSOCOAT ceramic-coated electrical insulated bearings" },
                { label: "Shaft Alignment Tool", value: "Precision dual-laser optical shaft alignment system (< 0.05mm tolerance)" },
                { label: "Heating Equipment", value: "Portable induction bearing heater calibrated for nacelle use" },
                { label: "Vibration Diagnostics", value: "Pre & post servicing FFT vibration spectrum analysis" }
            ],
            symptoms: [
                {
                    problem: "High Generator Bearing Vibration & High Temperature Alarm",
                    cause: "Bearing fluting due to stray shaft currents, grease degradation, or mechanical fatigue.",
                    solution: "In-situ extraction of damaged bearing and induction fitting of genuine SKF INSOCOAT ceramic-coated bearings."
                },
                {
                    problem: "Misalignment Between Gearbox & Generator Shafts",
                    cause: "Thermal expansion, foundation elastomer settle, or heavy cyclic torque.",
                    solution: "Dual-laser precision optical alignment within 0.05mm offset and angular tolerance."
                },
                {
                    problem: "Oil Mist & Carbon Powder Contamination Inside Nacelle",
                    cause: "Leaking mechanical seals and slip ring wear spreading conductive grime over stator windings.",
                    solution: "Dry ice or chemical degreasing of winding surfaces and replacement of shaft oil seals."
                },
                {
                    problem: "Loose Foundation Bolts & Flexible Coupling Damage",
                    cause: "Continuous cyclic turbulence loosening mounting hardware.",
                    solution: "Hydraulic bolt torque auditing to OEM spec and replacement of damaged flexible coupling inserts."
                }
            ],
            capabilities: [
                { title: "Crane-Free In-Situ Bearing Replacement", desc: "Replacing drive-end and non-drive-end generator bearings inside the nacelle using compact hydraulic pullers and induction heaters." },
                { title: "SKF INSOCOAT Insulated Bearings", desc: "Fitting ceramic-coated bearings that block circulating electrical currents and prevent fluting damage." },
                { title: "Dual-Laser Optical Shaft Alignment", desc: "Precision alignment of the high-speed gearbox shaft and generator coupling to reduce vibration and extend gearbox life." },
                { title: "Winding Degreasing & Insulation Cleaning", desc: "Specialized solvent or dry-ice blast cleaning to purge conductive grease and carbon buildup." },
                { title: "GWO Safety Certified Technicians", desc: "All technicians are rigorously trained in Global Wind Organisation safety protocols and rescue procedures." },
                { title: "Real-Time Vibration FFT Spectrum Analysis", desc: "On-site vibration frequency analysis to verify bearing health before returning the turbine to generation." }
            ],
            process: [
                { step: "01", title: "Tower Ascend & LOTO Isolation", desc: "Lockout-Tagout (LOTO) electrical isolation, nacelle safety setup, and compact tool hoisting via service lift." },
                { step: "02", title: "Coupling Disassembly & Pulling", desc: "Decoupling high-speed shaft and hydraulic puller extraction of worn bearings without lowering the generator." },
                { step: "03", title: "Induction Heating & Bearing Fit", desc: "Even heating of ceramic-insulated SKF INSOCOAT bearing and precision fitment onto generator journal." },
                { step: "04", title: "Laser Optical Shaft Alignment", desc: "Laser alignment between gearbox and generator within 0.05mm tolerance, followed by coupling torque." },
                { step: "05", title: "Rotation Check & Grid Sync", desc: "No-load spin check, live vibration audit, thermal imaging check, and return to active generation." }
            ],
            faqs: [
                { q: "How much cost is saved by doing up-tower generator servicing?", a: "By avoiding 100-ton to 300-ton mobile crane mobilization, specialized trailers, and crane pad preparations, clients save between 60% and 80% of total maintenance costs." },
                { q: "What are INSOCOAT bearings and why are they used?", a: "INSOCOAT bearings have an aluminium-oxide ceramic coating on the outer ring that provides electrical insulation of up to 3,000V DC, preventing stray currents from causing micro-arcing (fluting) and bearing failure." },
                { q: "How long does an up-tower generator bearing replacement take?", a: "Our specialized up-tower team completes a standard generator bearing replacement and laser alignment within 24 to 36 hours." },
                { q: "Are your technicians certified to climb turbines?", a: "Yes, all our climbing engineers and technicians hold valid GWO (Global Wind Organisation) certifications in Working at Height, First Aid, Fire Awareness, and Manual Handling." }
            ]
        },

        // 7. WTG Up Tower Generator Patch Work
        "wtg-up-tower-patch-work": {
            title: "WTG Up Tower Generator Patch Work",
            subtitle: "Emergency In-Situ Stator Coil Fault Isolation & Splicing",
            tagline: "24–48 Hour Emergency Nacelle Repair to Restore Power Generation",
            heroImage: "services/wtg_patchwork.jpg",
            detailImage: "service1.jpg",
            fieldMeta: { location: "Turbine Nacelle Interior", tech: "Portable In-Situ Coil Patch Kit", status: "Active Site Teams" },
            icon: <Hammer size={40} />,
            quickStats: [
                { label: "Restoration Time", val: "24 – 48 Hours" },
                { label: "Savings", val: "Avoids Months of Downtime" },
                { label: "Dielectric Strength", val: "Rated for 155°C / 5kV" },
                { label: "Deployment", val: "Immediate On-Site Team" }
            ],
            overview: "When a single coil in a 2 MW wind generator flashes over or develops an earth fault, standard procedure requires waiting weeks for a crane and months for full rewinding. In peak wind season, every day offline means thousands of units of lost revenue. Sri Manjunatha Electrical Service provides pioneering up-tower coil isolation, silver-brazed jumper splicing, and high-dielectric resin patch repairs directly inside the nacelle, getting your turbine back online in 24 to 48 hours.",
            specs: [
                { label: "Repair Method", value: "Faulted coil isolation, silver-brazed jumper bridge, and vacuum epoxy potting" },
                { label: "Insulation Materials", value: "Class H multi-layer mica tape, Nomex sleeves, and rapid-cure epoxy resin" },
                { label: "Conductive Bridge", value: "Oxygen-free high-conductivity (OFHC) copper jumpers matching phase cross-section" },
                { label: "Brazing Method", value: "High-temperature silver solder (45% Ag) with localized inert thermal shielding" },
                { label: "Curing Technique", value: "Infrared heat-gun / UV thermal curing rated for 155°C continuous operation" },
                { label: "Post-Patch Verification", value: "High-voltage surge testing, phase resistance balance, and Megger reading > 50 MΩ" }
            ],
            symptoms: [
                {
                    problem: "Turbine Trips on 'Generator Earth Fault' / 'Phase Asymmetry'",
                    cause: "Localized insulation breakdown in a single stator slot resulting in phase-to-ground flashover.",
                    solution: "Surgical isolation of faulted coil section, copper jumper bridging, and multi-layer mica insulation rebuild."
                },
                {
                    problem: "Turn-to-Turn Short in Single Stator Coil",
                    cause: "Inverter voltage spike puncture creating a localized thermal hot spot.",
                    solution: "Identifying faulted turn, localized coil extraction, and resin encapsulation."
                },
                {
                    problem: "Damaged Stator Lead at Terminal Connection Block",
                    cause: "Vibration fatigue causing mechanical fracture of stator main cable lug.",
                    solution: "Silver brazing replacement flexible lead with stress-relief heat-shrink tubing."
                },
                {
                    problem: "Arc Damage on End-Winding Overhang",
                    cause: "Accumulation of moisture and carbon bridging phase barriers.",
                    solution: "Excavation of charred carbonized material, rebuilding phase divider, and dielectric coating."
                }
            ],
            capabilities: [
                { title: "Rapid Emergency Mobilization", desc: "Dedicated emergency patch team dispatched to wind farm sites with portable test kits and repair consumables." },
                { title: "Pinpoint Fault Localization", desc: "Using micro-ohmmeter and surge tester to find the exact failed stator slot without dismantling the machine." },
                { title: "Silver-Brazed Jumper Splicing", desc: "High-amperage silver soldering with customized high-conductivity copper jumpers matching phase resistance." },
                { title: "High-Dielectric Resin Encapsulation", desc: "Multi-layer mica taping and fast-curing thermal epoxy potting rated for 155°C continuous operation." },
                { title: "Zero Core Damage Technique", desc: "Surgical removal of damaged coil section without harming neighboring healthy coils or core laminations." },
                { title: "Post-Patch Electrical Verification", desc: "On-site verification ensuring full insulation resistance matching factory baseline values before turbine start." }
            ],
            process: [
                { step: "01", title: "Emergency Dispatch & Safety Lockout", desc: "Mobilization of up-tower specialists, turbine safety lockout, and equipment hoisting into the nacelle." },
                { step: "02", title: "Micro-Ohm Fault Localization", desc: "Resistance testing across each stator coil group to pinpoint the exact failed coil and determine jumper route." },
                { step: "03", title: "Coil Splicing & Silver Brazing", desc: "Cutting out faulted turn, preparing copper ends, and silver brazing an OFHC copper jumper bridge." },
                { step: "04", title: "Mica Taping & Resin Encapsulation", desc: "Wrapping with multi-layer resin-rich mica tape and thermal epoxy potting with controlled heat-gun curing." },
                { step: "05", title: "Insulation Test & Return to Grid", desc: "5000V Megger test, surge verification, manual rotor rotation check, and successful grid synchronization." }
            ],
            faqs: [
                { q: "Is a generator patch repair safe for long-term turbine operation?", a: "Yes. When performed with proper silver brazing and Class H mica insulation, a patch repair is a proven industry solution that safely runs the turbine until the scheduled off-season overhaul." },
                { q: "How much power loss does a patched coil cause?", a: "By isolating a single coil in a stator with hundreds of coils, the reduction in electrical output is negligible (< 0.5%), while preventing 100% downtime." },
                { q: "How quickly can your patch team reach our wind farm?", a: "We maintain ready-to-deploy mobile repair kits and can reach major wind farm belts across Karnataka, Tamil Nadu, Andhra Pradesh, and Maharashtra within hours." },
                { q: "What tests prove the patch repair was successful?", a: "We conduct 1000V/2500V Megger insulation testing (targeting > 50 MΩ), micro-ohm resistance balance check across all 3 phases, and full-voltage grid sync monitoring." }
            ]
        },

        // 8. Pitch Motors, Brake Coil & Oil Pumps
        "pitch-motors-brake-coil-oil-pumps": {
            title: "Pitch Motors, Brake Coil & Oil Pumps",
            subtitle: "Wind Turbine Auxiliary Drives, Solenoids & Actuators",
            tagline: "Complete Overhaul & Rewinding for Critical Wind Turbine Safety Systems",
            heroImage: "services/pitch_motor.jpg",
            detailImage: "motor_rewinding.jpg",
            fieldMeta: { location: "Tumakuru Service Center", tech: "Dynamic Tachometer & Resistance Bench", status: "Active Operations" },
            icon: <Settings size={40} />,
            quickStats: [
                { label: "Components Covered", val: "Pitch Motors, Brakes, Pumps" },
                { label: "Drive Types", val: "AC & DC Servo Motors" },
                { label: "Brake Coils", val: "Electromagnetic Solenoids" },
                { label: "Testing", val: "Holding Torque & Potting" }
            ],
            overview: "Wind turbine blade pitch drives, high-speed shaft mechanical brake coils, and hydraulic lubrication pumps are critical safety components. A failure in a pitch motor prevents aerodynamic feathering, while a burnt brake coil can result in catastrophic overspeed. Sri Manjunatha Electrical Service specializes in precision overhaul, rewinding, encoder calibration, and vacuum encapsulation for pitch motors, brake coils, and hydraulic pump motors across all major wind OEMs.",
            specs: [
                { label: "Blade Pitch Motors", value: "AC permanent magnet servo motors & DC compound pitch motors (SSB, LUST, Moog)" },
                { label: "Electromagnetic Brake Coils", value: "Solenoid brake coils for high-speed shaft & yaw brakes (Stromag, Pintsch Bubenzer)" },
                { label: "Hydraulic Pump Motors", value: "Flange-mounted cooling & lubrication pump motors with high-pressure oil seals" },
                { label: "Encapsulation System", value: "Vibration-proof vacuum epoxy potting protecting against turbine nacelle shocks" },
                { label: "Feedback Device Calibration", value: "Encoder, resolver, and incremental pulse generator testing on specialized test benches" },
                { label: "Torque & Pull-In Testing", value: "Full voltage holding torque test and electromagnetic pull-in / drop-out validation" }
            ],
            symptoms: [
                {
                    problem: "Blade Pitch Error / Asymmetric Pitch Angle Trip",
                    cause: "Pitch motor stator winding short, burnt armature, or failing optical encoder.",
                    solution: "Complete pitch motor stator/armature rewinding, encoder test and replacement, and bench calibration."
                },
                {
                    problem: "Brake Coil Burnout & Failure to Release",
                    cause: "Thermal degradation from continuous energization or high-voltage inductive kickback.",
                    solution: "Rewinding solenoid coil with Class H wire, vacuum epoxy potting, and surge varistor check."
                },
                {
                    problem: "Hydraulic Power Pack Oil Pump Motor Failure",
                    cause: "Ingress of hydraulic oil past damaged mechanical shaft seal causing winding burn.",
                    solution: "Motor stator rewinding, dynamic rotor balancing, and installation of Viton high-temperature oil seals."
                },
                {
                    problem: "Intermittent Pitch Brake Slipping",
                    cause: "Oil on friction lining, incorrect air gap, or weakened magnetic pull.",
                    solution: "Brake disc degreasing, friction pad renewal, and air gap adjustment to OEM specifications."
                }
            ],
            capabilities: [
                { title: "High-Torque Pitch Motor Rewinding", desc: "Rewinding AC/DC pitch motors with dual-coated magnet wire to withstand rapid acceleration and reversing." },
                { title: "Vacuum Potted Brake Coils", desc: "Encapsulating brake coils in solid epoxy to eliminate moisture penetration and thermal degradation." },
                { title: "Hydraulic Pump Motor Overhaul", desc: "Submersible and flange pump motor rewinding with new high-pressure Viton seals and SKF bearings." },
                { title: "Encoder & Resolver Diagnostic Bench", desc: "Bench testing optical encoders, resolvers, and tachometers for signal accuracy and phase alignment." },
                { title: "Electromagnetic Pull-In Testing", desc: "Testing brake coil pull-in voltage, drop-out voltage, and holding power under variable ambient temperatures." },
                { title: "Emergency Spares Inventory", desc: "Maintaining pre-rewound emergency backup units for rapid turbine swap-out." }
            ],
            process: [
                { step: "01", title: "Bench Performance & Torque Audit", desc: "Electrical testing of open circuits, ground faults, brake release air gap, and motor torque output." },
                { step: "02", title: "Precision Rewinding & Potting", desc: "Dual-enamelled copper coil winding with vacuum epoxy potting against vibration shock." },
                { step: "03", title: "Seal & Bearing Renewal", desc: "Replacing mechanical oil seals, Viton O-rings, and low-friction high-speed bearings." },
                { step: "04", title: "Feedback Calibration", desc: "Aligning encoder zero position and checking resolver signal waveform on oscilloscope." },
                { step: "05", title: "Holding & Pull-In Test", desc: "Full voltage pull-in and drop-out validation for brake coils and motor torque trial." }
            ],
            faqs: [
                { q: "Which pitch motor and brake brands do you service?", a: "We service pitch motors and brake coils from SSB Antriebe, LUST, Moog, Stromag, Pintsch Bubenzer, Keb, and Lenze used in major wind turbine models." },
                { q: "How do you protect brake coils from burning out again?", a: "We utilize Class H (180°C) enamelled copper wire with vacuum epoxy potting that dissipates heat rapidly and shields the coil against harsh ambient moisture and vibration." },
                { q: "Can you calibrate the pitch motor encoder after rewinding?", a: "Yes, our electronic test bench allows precise alignment of absolute optical encoders and resolvers to match the turbine control system zero reference." },
                { q: "What is the typical turnaround time for brake coils and pitch motors?", a: "Standard overhaul and rewinding for pitch motors and brake coils takes 24 to 48 hours." }
            ]
        },

        // 9. WTG Slip Ring Servicing
        "wtg-slip-ring-servicing": {
            title: "WTG Slip Ring Servicing",
            subtitle: "Wind Turbine Rotor Current Transfer & Brush Gear Assemblies",
            tagline: "In-Situ Precision Skimming, Carbon Brush Matching & Anti-Flashover Treatment",
            heroImage: "services/slip_ring.jpg",
            detailImage: "electrical_workshop.jpg",
            fieldMeta: { location: "Wind Farm Sites & Workshop", tech: "True-Running Diamond Tool & Precision Megger", status: "Active Field Operations" },
            icon: <Layers size={40} />,
            quickStats: [
                { label: "Current Transfer", val: "Up to 800+ Amps" },
                { label: "Surface Finish", val: "Mirror Ra < 0.8 µm" },
                { label: "Execution", val: "In-Situ Nacelle Service" },
                { label: "Insulation Level", val: "3kV Anti-Tracking" }
            ],
            overview: "Slip rings in Doubly-Fed Induction Generators (DFIG) transfer hundreds of amperes between the spinning rotor and power converter. Grooving, copper dusting, sparks, flashovers, and uneven brush wear lead to severe generator trips and rotor damage. Sri Manjunatha Electrical Service offers comprehensive in-situ slip ring surface machining, brush gear overhaul, site-matched carbon brush selection, and anti-flashover barrier treatment.",
            specs: [
                { label: "Ring Materials Serviced", value: "Bronze, phosphor bronze, brass, stainless steel, and copper alloy rings" },
                { label: "Machining Accuracy", value: "In-situ micro-lathe skimming to < 0.03mm radial runout" },
                { label: "Surface Roughness", value: "Fine diamond polishing achieving Ra 0.4 to 0.8 µm mirror finish" },
                { label: "Brush Grades Supplied", value: "Metal-graphite (high copper content) & electrographite matched to site humidity" },
                { label: "Brush Holder Alignment", value: "Constant-force spring tension calibration and clearance verification" },
                { label: "Phase Barrier Treatment", value: "High-dielectric anti-tracking varnish application preventing phase flashover" }
            ],
            symptoms: [
                {
                    problem: "Heavy Sparking & Arcing Around Slip Rings",
                    cause: "Grooved or out-of-round rings, high brush vibration, or incorrect brush spring pressure.",
                    solution: "In-situ true-run skimming, mirror polishing, and recalibrating constant-force spring holders."
                },
                {
                    problem: "Phase-to-Phase Flashover Across Phase Dividers",
                    cause: "Conductive copper and carbon dust accumulation across the insulation barrier discs.",
                    solution: "Deep ultrasonic cleaning, replacing cracked divider discs, and applying anti-flashover dielectric varnish."
                },
                {
                    problem: "Uneven / Rapid Carbon Brush Wear",
                    cause: "Rough ring surface finish, improper brush grade for low humidity, or current density unbalance.",
                    solution: "Diamond polishing ring surface and supplying site-humidity matched metal-graphite brushes."
                },
                {
                    problem: "High Rotor Temperature & Resistance Fluctuations",
                    cause: "Oxidation and copper transfer creating high contact resistance between brush and ring.",
                    solution: "Surface reconditioning, brush seating, and infrared thermal scan verification under load."
                }
            ],
            capabilities: [
                { title: "In-Situ True-Running Surface Skimming", desc: "Machining the slip ring surface directly inside the turbine nacelle without taking down the rotor, eliminating all runout." },
                { title: "Mirror Diamond Surface Polishing", desc: "Fine polishing down to Ra < 0.8 µm to reduce brush friction, lower operating temperatures, and prolong brush life." },
                { title: "Constant-Force Brush Rigging Overhaul", desc: "Cleaning brush pockets, aligning holder angles, and calibrating springs to exact OEM contact pressure." },
                { title: "Site-Matched Carbon Brush Grades", desc: "Supplying premium metal-graphite brushes with optimal copper content tailored to local wind farm humidity." },
                { title: "Anti-Flashover Dielectric Coating", desc: "Coating phase dividers with Class H anti-tracking varnish that repels conductive dust and moisture." },
                { title: "Thermal Imaging Full-Load Validation", desc: "Live infrared thermography check under peak generation to confirm uniform current distribution and cool running." }
            ],
            process: [
                { step: "01", title: "Runout & Roughness Audit", desc: "Dial indicator measurement of radial runout, surface roughness (Ra) audit, and brush spring tension check." },
                { step: "02", title: "In-Situ Precision Skimming", desc: "Mounting precision micro-lathe attachment in nacelle to skim grooves and flat spots." },
                { step: "03", title: "Diamond Emery Mirror Polish", desc: "Multi-stage fine abrasive and diamond paste polishing to achieve smooth mirror finish." },
                { step: "04", title: "Brush Rigging & Spring Overhaul", desc: "Replacing worn brushes, calibrating constant-force springs, and cleaning holder pockets." },
                { step: "05", title: "Anti-Tracking Barrier Coating & Trial", desc: "Applying dielectric anti-flashover coating, insulation resistance check, and full-load trial." }
            ],
            faqs: [
                { q: "Can slip rings be skimmed without lowering the generator?", a: "Yes. Our team mounts specialized in-situ skimming fixtures directly inside the turbine nacelle, restoring true-round geometry without crane hire or rotor removal." },
                { q: "Why is correct carbon brush grade selection critical?", a: "Wind farms in dry inland regions experience rapid brush dusting if the brush grade lacks sufficient lubricating graphite. Coastal sites require different metal-graphite ratios to prevent ring tarnishing. We supply brushes engineered for your site conditions." },
                { q: "What causes flashovers between slip ring phases?", a: "Carbon and copper dust combine with ambient moisture to form conductive bridges across the insulation divider discs. When voltage surges occur, current flashes over, causing severe arc damage. Our anti-tracking coating prevents this." },
                { q: "How often should wind turbine slip rings be serviced?", a: "We recommend inspecting and blowing out dust every 6 months, with light polishing and brush renewal during annual preventive maintenance." }
            ]
        },

        // 10. Centrifugal Water Pumps Servicing
        "centrifugal-water-pumps-servicing": {
            title: "Centrifugal Water Pumps Servicing",
            subtitle: "Industrial, Commercial & Municipal Centrifugal Pumping Systems",
            tagline: "Impeller Dynamic Balancing, Mechanical Seal Replacement & Complete Overhaul",
            heroImage: "services/water_pump.jpg",
            detailImage: "service4.jpg",
            fieldMeta: { location: "Tumakuru Service Center & Industrial Plants", tech: "Hydrostatic Test Bench & Dynamic Balancing", status: "Active Workshop" },
            icon: <ClipboardCheck size={40} />,
            quickStats: [
                { label: "Pump Types", val: "Single & Multi-Stage" },
                { label: "Capacity Range", val: "Up to 500 m³/hr Flow" },
                { label: "Seal Types", val: "Mechanical & Gland Pack" },
                { label: "Hydrostatic Test", val: "Up to 25 Bar Pressure" }
            ],
            overview: "Centrifugal water pumps are vital for cooling tower circulation, boiler feed systems, effluent treatment, municipal water supply, and agricultural irrigation. Pump wear results in dropping flow rates, cavitation damage, and high energy bills. Sri Manjunatha Electrical Service delivers complete pump overhauls, dynamic impeller balancing, mechanical seal replacement, shaft straightening, wear-ring machining, and driving motor rewinding.",
            specs: [
                { label: "Pump Configurations", value: "End suction, horizontal split case, vertical multistage, submersible pumps" },
                { label: "Impeller Balancing", value: "Two-plane dynamic balancing to ISO 1940 Grade G2.5 standard" },
                { label: "Mechanical Seals", value: "Silicon carbide, tungsten carbide, and carbon/ceramic cartridge seals" },
                { label: "Shaft & Sleeve Work", value: "Stainless steel (SS 304/316) shaft sleeves & precision lathe straightening" },
                { label: "Wear Rings Fitted", value: "Bronze and stainless steel casing wear rings machined to exact running clearances" },
                { label: "Pressure Testing", value: "Hydrostatic volute casing pressure test to 1.5x operating pressure" }
            ],
            symptoms: [
                {
                    problem: "Low Discharge Flow & Insufficient Head Pressure",
                    cause: "Worn impeller vanes, excessive clearance at casing wear rings, or cavitation erosion.",
                    solution: "Impeller re-profiling, dynamic balancing, and machining new bronze wear rings to restore design clearance."
                },
                {
                    problem: "Water Leakage Around Pump Shaft Gland",
                    cause: "Damaged mechanical seal faces, cracked silicon carbide ring, or grooved shaft sleeve.",
                    solution: "Replacing shaft sleeve and installing high-grade silicon carbide/tungsten carbide mechanical seals."
                },
                {
                    problem: "Excessive Pump Vibration & Bearing Noise",
                    cause: "Unbalanced impeller, bent pump shaft, or coupling misalignment with electric motor.",
                    solution: "Shaft runout straightening, dynamic balancing of impeller assembly, and laser optical shaft alignment."
                },
                {
                    problem: "Cavitation Noise (Pumping 'Gravel' Sound)",
                    cause: "NPSH deficiency, clogged suction line, or pitted impeller eye.",
                    solution: "Cavitation weld reclamation with stainless steel electrodes and flow inlet smoothing."
                }
            ],
            capabilities: [
                { title: "Dynamic Impeller Balancing", desc: "Two-plane dynamic balancing of impellers to ISO 1940 Grade G2.5 standards for vibration-free flow." },
                { title: "Mechanical Seal Renewal", desc: "Installation of high-pressure silicon carbide and tungsten carbide mechanical seals tailored to fluid temperature." },
                { title: "Shaft Straightening & Sleeve Machining", desc: "Precision hydraulic press straightening and machining of stainless steel wear sleeves." },
                { title: "Casing Wear Ring Replacement", desc: "Machining and fitting bronze or stainless steel wear rings to eliminate internal recirculation and restore head." },
                { title: "Hydrostatic Volute Pressure Testing", desc: "Pressure testing up to 25 bar to verify zero casing porosity or flange leakage before installation." },
                { title: "Turnkey Motor-Pump Laser Alignment", desc: "Complete servicing of both the pump and driving electric motor with laser shaft alignment on baseplate." }
            ],
            process: [
                { step: "01", title: "Disassembly & Clearance Audit", desc: "Dimensional audit of impeller wear, casing clearance, shaft runout check, and bearing inspection." },
                { step: "02", title: "Descaling & Blast Cleaning", desc: "Removal of lime deposits, rust, scale, and cavitation pitting from pump casing and volute passages." },
                { step: "03", title: "Machining & Impeller Balancing", desc: "Machining new wear rings, shaft sleeve fitting, and two-plane computerized dynamic balancing." },
                { step: "04", title: "Mechanical Seal & Bearing Fit", desc: "Fitting new mechanical seal, high-grade SKF deep groove bearings, and reassembling casing." },
                { step: "05", title: "Hydrostatic Test & Base Alignment", desc: "Hydrostatic pressure testing to guarantee leak-free performance and final alignment check on motor base." }
            ],
            faqs: [
                { q: "How do new wear rings restore pump flow and efficiency?", a: "As wear rings wear down, high-pressure water recirculates back into the pump suction eye instead of discharging, wasting up to 20-30% of energy. Machining new wear rings closes this gap and restores full flow." },
                { q: "What types of mechanical seals do you install?", a: "We install single and double cartridge mechanical seals with silicon carbide (SiC), tungsten carbide (TC), and carbon faces with Viton, EPDM, or PTFE elastomers depending on the liquid and temperature." },
                { q: "Can you service both the pump and its electric motor together?", a: "Yes! Sri Manjunatha Electrical Service provides complete turnkey servicing of both the centrifugal pump and the driving AC electric motor, including rewinding and laser shaft alignment on the shared baseplate." },
                { q: "Do you supply replacement impellers and shafts?", a: "Yes, we machine custom bronze, cast iron, and stainless steel (SS316) pump shafts, sleeves, and impellers in-house." }
            ]
        }
    };

    // Alias mapping for service-01 .. service-10 and fallbacks
    const aliasMap = {
        "service-01": "ac-motor-servicing",
        "service-1": "ac-motor-servicing",
        "service-02": "dc-motor-servicing",
        "service-2": "dc-motor-servicing",
        "service-03": "lt-motor-servicing",
        "service-3": "lt-motor-servicing",
        "service-04": "ht-motor-servicing",
        "service-4": "ht-motor-servicing",
        "service-05": "wtg-generator-coil-rewinding",
        "service-5": "wtg-generator-coil-rewinding",
        "service-06": "wtg-up-tower-generator-servicing",
        "service-6": "wtg-up-tower-generator-servicing",
        "service-07": "wtg-up-tower-patch-work",
        "service-7": "wtg-up-tower-patch-work",
        "service-08": "pitch-motors-brake-coil-oil-pumps",
        "service-8": "pitch-motors-brake-coil-oil-pumps",
        "service-09": "wtg-slip-ring-servicing",
        "service-9": "wtg-slip-ring-servicing",
        "service-10": "centrifugal-water-pumps-servicing",
        "installation": "ac-motor-servicing",
        "blade-repair": "wtg-generator-coil-rewinding",
        "rope-access": "wtg-up-tower-generator-servicing",
        "hse-safety": "ht-motor-servicing",
        "third-party-inspection": "centrifugal-water-pumps-servicing"
    };

    const resolvedSlug = aliasMap[slug] || slug;
    const current = serviceData[resolvedSlug] || serviceData["ac-motor-servicing"];

    const toggleFaq = (idx) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <main className="detail-page">
            {/* Split Modern Hero Section */}
            <section className="detail-hero-section">
                <div className="container hero-container">
                    <div className="hero-text-content" data-aos="fade-right">
                        <div className="hero-breadcrumbs">
                            <Link to="/">Home</Link>
                            <ChevronRight size={14} />
                            <Link to="/service">Services</Link>
                            <ChevronRight size={14} />
                            <span>{current.title}</span>
                        </div>
                        <span className="section-tag hero-badge">{current.subtitle}</span>
                        <h1 className="hero-heading">{current.title}</h1>
                        <p className="hero-tagline">{current.tagline}</p>

                        {/* Quick Stats Pill Grid */}
                        <div className="quick-stats-grid">
                            {current.quickStats.map((item, i) => (
                                <div key={i} className="quick-stat-card">
                                    <span className="qs-label">{item.label}</span>
                                    <span className="qs-val">{item.val}</span>
                                </div>
                            ))}
                        </div>

                        {/* Hero CTAs */}
                        <div className="hero-actions">
                            <a href="https://wa.me/919148494151" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <Zap size={18} /> Request Free Quote
                            </a>
                            <a href="tel:+919148494151" className="btn-outline">
                                <Phone size={18} /> Call: 9148494151
                            </a>
                        </div>
                    </div>

                    <div className="hero-image-box" data-aos="fade-left">
                        <div className="hero-featured-wrapper">
                            <img 
                                src={getImgUrl(current.heroImage)} 
                                alt={current.title} 
                                className="hero-featured-img" 
                            />
                            <div className="hero-img-overlay"></div>
                            <div className="hero-floating-badge">
                                <div className="badge-status-dot"></div>
                                <div>
                                    <span className="badge-title">{current.fieldMeta.status}</span>
                                    <span className="badge-sub">{current.fieldMeta.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview & Technical Specifications Matrix */}
            <section className="specs-overview-section">
                <div className="container">
                    <div className="grid-2 align-start">
                        <div data-aos="fade-up">
                            <span className="section-tag">Engineering Excellence</span>
                            <h2 className="section-h2">Complete Diagnostic & <br/><span className="gradient-text">Overhaul Capabilities</span></h2>
                            <p className="p-overview">{current.overview}</p>
                            
                            <div className="trust-badges-row">
                                <div className="trust-card">
                                    <Award className="trust-icon" />
                                    <div>
                                        <h4>18+ Years Experience</h4>
                                        <p>Serving industries & wind farms since 2006</p>
                                    </div>
                                </div>
                                <div className="trust-card">
                                    <Shield className="trust-icon" />
                                    <div>
                                        <h4>100% Tested & Certified</h4>
                                        <p>Insulation resistance & surge test report with every motor</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Specs Table */}
                        <div className="specs-table-wrapper" data-aos="fade-left">
                            <h3 className="specs-table-title"><Gauge size={20} /> Technical Specifications Matrix</h3>
                            <div className="specs-table">
                                {current.specs.map((row, i) => (
                                    <div key={i} className="spec-row">
                                        <span className="spec-k">{row.label}</span>
                                        <span className="spec-v">{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Symptoms & Engineered Solutions */}
            <section className="symptoms-section">
                <div className="container">
                    <div className="section-header-center" data-aos="fade-up">
                        <span className="section-tag">Failure Diagnostics</span>
                        <h2 className="section-h2">Common Symptoms & <span className="gradient-text">Engineered Solutions</span></h2>
                        <p className="section-desc">Our root-cause failure analysis pinpoints the exact cause of motor and generator breakdown to prevent repeat outages.</p>
                    </div>

                    <div className="symptoms-grid">
                        {current.symptoms.map((item, i) => (
                            <div key={i} className="symptom-card" data-aos="fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="symptom-top">
                                    <AlertTriangle className="sym-warn-icon" size={22} />
                                    <h4>{item.problem}</h4>
                                </div>
                                <div className="symptom-cause">
                                    <span className="sc-label">Root Cause:</span>
                                    <p>{item.cause}</p>
                                </div>
                                <div className="symptom-solution">
                                    <span className="sc-label">Our Engineered Solution:</span>
                                    <p>{item.solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive Capabilities Grid (6 items) */}
            <section className="capabilities-section">
                <div className="container">
                    <div className="section-header-center" data-aos="fade-up">
                        <span className="section-tag">Scope of Work</span>
                        <h2 className="section-h2">Specialized Workshop & <span className="gradient-text">On-Site Capabilities</span></h2>
                    </div>

                    <div className="capabilities-6-grid">
                        {current.capabilities.map((cap, i) => (
                            <div key={i} className="cap-card" data-aos="fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                                <div className="cap-icon-box">{current.icon}</div>
                                <h3>{cap.title}</h3>
                                <p>{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Workshop & Technology Showcase */}
            <section className="showcase-detail-section">
                <div className="container">
                    <div className="showcase-box" data-aos="zoom-in">
                        <div className="showcase-img-col">
                            <img src={getImgUrl(current.detailImage)} alt={current.title} className="detail-showcase-img" />
                            <div className="showcase-badge-floating">
                                <span className="sbf-title">Workshop Technology</span>
                                <span className="sbf-desc">{current.fieldMeta.tech}</span>
                            </div>
                        </div>
                        <div className="showcase-info-col">
                            <span className="section-tag">Precision Infrastructure</span>
                            <h2>Modern Testing & <br/><span className="gradient-text">Winding Equipment</span></h2>
                            <p>Every motor that enters our workshop is subjected to calibrated diagnostic testing. Our facility is equipped with temperature-regulated baking ovens, high-precision balancing machines, and 11kV high-voltage test apparatus to verify zero insulation degradation.</p>
                            <ul className="showcase-checklist">
                                <li><Check size={18} /> High-Precision Automatic Coil Winding Machines</li>
                                <li><Check size={18} /> Controlled Thermostatic Baking Ovens (Up to 180°C)</li>
                                <li><Check size={18} /> Dual-Plane Computerized Dynamic Rotor Balancing</li>
                                <li><Check size={18} /> 11kV & 3kV High Voltage Test Kit & Surge Comparators</li>
                                <li><Check size={18} /> Electromagnetic Bearing Induction Heaters</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5-Phase Execution Methodology */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header-center" data-aos="fade-up">
                        <span className="section-tag">Execution Methodology</span>
                        <h2 className="section-h2">Our 5-Phase Quality <span className="gradient-text">Standard</span></h2>
                        <p className="section-desc">Strict quality controls at every step from incoming inspection to high-voltage proof certification.</p>
                    </div>

                    <div className="process-5-grid">
                        {current.process.map((step, i) => (
                            <div key={i} className="p5-card" data-aos="fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <span className="p5-step">{step.step}</span>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical FAQs Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header-center" data-aos="fade-up">
                        <span className="section-tag">Common Inquiries</span>
                        <h2 className="section-h2">Frequently Asked <span className="gradient-text">Questions</span></h2>
                    </div>

                    <div className="faq-accordion-wrapper" data-aos="fade-up">
                        {current.faqs.map((faq, i) => (
                            <div key={i} className={`faq-item ${openFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                                <div className="faq-question">
                                    <div className="faq-q-left">
                                        <HelpCircle className="faq-icon" size={20} />
                                        <h4>{faq.q}</h4>
                                    </div>
                                    <ChevronDown className={`faq-chevron ${openFaq === i ? 'rotate' : ''}`} size={20} />
                                </div>
                                {openFaq === i && (
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Direct Contact & Quote CTA */}
            <section className="detail-cta-section">
                <div className="container">
                    <div className="cta-banner-box" data-aos="zoom-in">
                        <div className="cta-left">
                            <span className="cta-tag">24/7 Breakdown & Servicing Support</span>
                            <h2>Need Immediate Motor or <br/><span className="gradient-text">Generator Assistance?</span></h2>
                            <p>Contact our senior electrical engineers directly for instant quotation, emergency site audits, or pickup arrangements.</p>
                            <div className="cta-contact-pills">
                                <span className="cta-pill"><Phone size={15} /> 9148494151</span>
                                <span className="cta-pill"><Phone size={15} /> 9902290605</span>
                                <span className="cta-pill"><Phone size={15} /> 9916062960</span>
                            </div>
                        </div>
                        <div className="cta-right">
                            <a href="https://wa.me/919148494151" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
                                <Zap size={20} /> WhatsApp Us Now
                            </a>
                            <Link to="/contact" className="btn-outline btn-large">
                                Submit Online Inquiry <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .detail-page {
                    overflow-x: hidden;
                    width: 100%;
                    background: #ffffff;
                }
                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }

                /* Hero Section */
                .detail-hero-section {
                    padding: 140px 0 70px;
                    background: #ffffff;
                    border-bottom: 1px solid #f1f5f9;
                }
                .hero-container {
                    display: grid;
                    grid-template-columns: 1.15fr 0.85fr;
                    gap: 3.5rem;
                    align-items: center;
                }
                .hero-breadcrumbs {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    margin-bottom: 1.2rem;
                    font-weight: 500;
                }
                .hero-breadcrumbs a {
                    color: var(--text-muted);
                    text-decoration: none;
                    transition: 0.2s;
                }
                .hero-breadcrumbs a:hover {
                    color: var(--primary);
                }
                .hero-breadcrumbs span {
                    color: var(--text-dark);
                    font-weight: 600;
                }
                .hero-badge {
                    display: inline-block;
                    margin-bottom: 1rem;
                }
                .hero-heading {
                    font-size: clamp(2.2rem, 4vw, 3.4rem);
                    font-weight: 800;
                    line-height: 1.15;
                    color: var(--text-dark);
                    margin-bottom: 1rem;
                    letter-spacing: -1px;
                }
                .hero-tagline {
                    font-size: 1.15rem;
                    color: var(--text-muted);
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }

                /* Quick Stats Grid */
                .quick-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    margin-bottom: 2.2rem;
                }
                .quick-stat-card {
                    background: white;
                    border: 1px solid var(--border);
                    padding: 0.9rem 1.2rem;
                    border-radius: 14px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.02);
                }
                .qs-label {
                    display: block;
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                    color: var(--text-muted);
                    font-weight: 700;
                    margin-bottom: 3px;
                }
                .qs-val {
                    font-size: 1rem;
                    font-weight: 800;
                    color: var(--primary);
                }

                .hero-actions {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .btn-primary {
                    background: var(--gradient-primary);
                    color: white;
                    padding: 0.95rem 2rem;
                    border-radius: 50px;
                    font-weight: 700;
                    text-decoration: none !important;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: 0.3s ease;
                    box-shadow: 0 10px 25px rgba(15, 154, 42, 0.25);
                }
                .btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(15, 154, 42, 0.35);
                }
                .btn-outline {
                    border: 2px solid var(--border);
                    color: var(--text-dark);
                    padding: 0.95rem 2rem;
                    border-radius: 50px;
                    font-weight: 700;
                    text-decoration: none !important;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: white;
                    transition: 0.3s ease;
                }
                .btn-outline:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    transform: translateY(-3px);
                }

                /* Hero Featured Image */
                .hero-featured-wrapper {
                    position: relative;
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 25px 60px rgba(0,0,0,0.12);
                    aspect-ratio: 4/3;
                }
                .hero-featured-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.8s ease;
                }
                .hero-featured-wrapper:hover .hero-featured-img {
                    transform: scale(1.03);
                }
                .hero-img-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.6) 100%);
                }
                .hero-floating-badge {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    right: 20px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(15px);
                    padding: 1rem 1.4rem;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
                }
                .badge-status-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: var(--primary);
                    box-shadow: 0 0 10px var(--primary);
                    flex-shrink: 0;
                }
                .badge-title {
                    display: block;
                    font-size: 0.92rem;
                    font-weight: 800;
                    color: var(--text-dark);
                }
                .badge-sub {
                    font-size: 0.8rem;
                    color: var(--text-muted);
                }

                /* Specs & Overview Section */
                .specs-overview-section {
                    padding: 90px 0;
                }
                .grid-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3.5rem;
                }
                .align-start {
                    align-items: start;
                }
                .section-h2 {
                    font-size: clamp(2rem, 3.2vw, 2.7rem);
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    line-height: 1.2;
                }
                .p-overview {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 2rem;
                }
                .trust-badges-row {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                }
                .trust-card {
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;
                    background: white;
                    padding: 1.2rem 1.5rem;
                    border-radius: 18px;
                    border: 1px solid var(--border);
                }
                .trust-icon {
                    color: var(--primary);
                    width: 36px;
                    height: 36px;
                    flex-shrink: 0;
                }
                .trust-card h4 {
                    font-size: 1.05rem;
                    font-weight: 750;
                    margin-bottom: 2px;
                }
                .trust-card p {
                    font-size: 0.88rem;
                    color: var(--text-muted);
                    margin: 0;
                }

                /* Specs Table */
                .specs-table-wrapper {
                    background: white;
                    border: 1px solid var(--border);
                    border-radius: 24px;
                    padding: 2.2rem;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.03);
                }
                .specs-table-title {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 1.25rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    color: var(--text-dark);
                    padding-bottom: 1rem;
                    border-bottom: 2px solid #f0f3f6;
                }
                .specs-table {
                    display: flex;
                    flex-direction: column;
                }
                .spec-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 1rem 0;
                    border-bottom: 1px solid #f1f4f8;
                    gap: 1rem;
                }
                .spec-row:last-child {
                    border-bottom: none;
                }
                .spec-k {
                    font-size: 0.92rem;
                    color: var(--text-muted);
                    font-weight: 600;
                    flex: 1;
                }
                .spec-v {
                    font-size: 0.95rem;
                    color: var(--text-dark);
                    font-weight: 750;
                    text-align: right;
                    flex: 1.2;
                }

                /* Symptoms Section */
                .symptoms-section {
                    padding: 90px 0;
                    background: #ffffff;
                    border-top: 1px solid #f1f5f9;
                    border-bottom: 1px solid #f1f5f9;
                }
                .section-header-center {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 3.5rem;
                }
                .section-desc {
                    font-size: 1.05rem;
                    color: var(--text-muted);
                    line-height: 1.6;
                    margin-top: 1rem;
                }
                .symptoms-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }
                .symptom-card {
                    background: white;
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    padding: 1.8rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    transition: 0.3s ease;
                }
                .symptom-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(234, 88, 12, 0.4);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.06);
                }
                .symptom-top {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                }
                .sym-warn-icon {
                    color: #ea580c;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
                .symptom-top h4 {
                    font-size: 1.1rem;
                    font-weight: 750;
                    color: var(--text-dark);
                    line-height: 1.35;
                }
                .sc-label {
                    display: block;
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 800;
                    margin-bottom: 3px;
                }
                .symptom-cause .sc-label {
                    color: #b45309;
                }
                .symptom-cause p {
                    font-size: 0.92rem;
                    color: var(--text-muted);
                    line-height: 1.5;
                    margin: 0;
                }
                .symptom-solution {
                    background: #f0fdf4;
                    padding: 0.9rem 1.1rem;
                    border-radius: 12px;
                    border-left: 3px solid var(--primary);
                }
                .symptom-solution .sc-label {
                    color: var(--primary);
                }
                .symptom-solution p {
                    font-size: 0.92rem;
                    color: #166534;
                    line-height: 1.5;
                    margin: 0;
                }

                /* Capabilities 6-Grid */
                .capabilities-section {
                    padding: 90px 0;
                }
                .capabilities-6-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
                    gap: 1.8rem;
                }
                .cap-card {
                    background: white;
                    border: 1px solid var(--border);
                    border-radius: 24px;
                    padding: 2.2rem;
                    transition: 0.3s ease;
                }
                .cap-card:hover {
                    border-color: var(--primary);
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.05);
                }
                .cap-icon-box {
                    width: 60px;
                    height: 60px;
                    background: rgba(15, 154, 42, 0.08);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary);
                    margin-bottom: 1.4rem;
                }
                .cap-card h3 {
                    font-size: 1.25rem;
                    font-weight: 750;
                    margin-bottom: 0.8rem;
                }
                .cap-card p {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    line-height: 1.6;
                    margin: 0;
                }

                /* Showcase Detail */
                .showcase-detail-section {
                    padding: 60px 0 90px;
                }
                .showcase-box {
                    background: white;
                    border: 1px solid var(--border);
                    border-radius: 32px;
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.04);
                }
                .showcase-img-col {
                    position: relative;
                    min-height: 420px;
                }
                .detail-showcase-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .showcase-badge-floating {
                    position: absolute;
                    bottom: 25px;
                    left: 25px;
                    background: rgba(0,0,0,0.75);
                    backdrop-filter: blur(10px);
                    color: white;
                    padding: 1rem 1.4rem;
                    border-radius: 14px;
                }
                .sbf-title {
                    display: block;
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #86efac;
                    font-weight: 700;
                    margin-bottom: 2px;
                }
                .sbf-desc {
                    font-size: 0.95rem;
                    font-weight: 600;
                }
                .showcase-info-col {
                    padding: 3.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .showcase-info-col h2 {
                    font-size: 2.2rem;
                    font-weight: 800;
                    line-height: 1.2;
                    margin: 1rem 0;
                }
                .showcase-info-col p {
                    font-size: 1.05rem;
                    color: var(--text-muted);
                    line-height: 1.7;
                    margin-bottom: 1.8rem;
                }
                .showcase-checklist {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                }
                .showcase-checklist li {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.98rem;
                    font-weight: 600;
                    color: var(--text-dark);
                }
                .showcase-checklist li svg {
                    color: var(--primary);
                    flex-shrink: 0;
                }

                /* Process 5-Grid */
                .process-section {
                    padding: 90px 0;
                    background: #ffffff;
                    border-top: 1px solid #f1f5f9;
                    border-bottom: 1px solid #f1f5f9;
                }
                .process-5-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1.5rem;
                }
                .p5-card {
                    background: white;
                    border: 1px solid var(--border);
                    border-radius: 22px;
                    padding: 2.2rem 1.6rem;
                    position: relative;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.02);
                }
                .p5-step {
                    display: inline-block;
                    font-size: 2.4rem;
                    font-weight: 900;
                    color: var(--primary);
                    opacity: 0.15;
                    line-height: 1;
                    margin-bottom: 1rem;
                }
                .p5-card h3 {
                    font-size: 1.15rem;
                    font-weight: 750;
                    margin-bottom: 0.8rem;
                    line-height: 1.35;
                }
                .p5-card p {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    line-height: 1.55;
                    margin: 0;
                }

                /* FAQ Section */
                .faq-section {
                    padding: 90px 0;
                }
                .faq-accordion-wrapper {
                    max-width: 850px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .faq-item {
                    background: white;
                    border: 1px solid var(--border);
                    border-radius: 18px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: 0.2s;
                }
                .faq-item:hover {
                    border-color: var(--primary);
                }
                .faq-question {
                    padding: 1.4rem 1.8rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                }
                .faq-q-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .faq-icon {
                    color: var(--primary);
                    flex-shrink: 0;
                }
                .faq-question h4 {
                    font-size: 1.08rem;
                    font-weight: 750;
                    margin: 0;
                    color: var(--text-dark);
                }
                .faq-chevron {
                    color: var(--text-muted);
                    transition: transform 0.3s ease;
                    flex-shrink: 0;
                }
                .faq-chevron.rotate {
                    transform: rotate(180deg);
                    color: var(--primary);
                }
                .faq-answer {
                    padding: 0 1.8rem 1.5rem 3.8rem;
                    color: var(--text-muted);
                    font-size: 0.98rem;
                    line-height: 1.7;
                }

                /* CTA Banner */
                .detail-cta-section {
                    padding: 40px 0 100px;
                }
                .cta-banner-box {
                    background: linear-gradient(135deg, #0e1e13 0%, #173822 100%);
                    color: white;
                    border-radius: 36px;
                    padding: 4rem 3.5rem;
                    display: grid;
                    grid-template-columns: 1.3fr 0.9fr;
                    gap: 3rem;
                    align-items: center;
                    box-shadow: 0 25px 60px rgba(15, 154, 42, 0.15);
                }
                .cta-tag {
                    color: #86efac;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    font-weight: 700;
                    display: block;
                    margin-bottom: 0.8rem;
                }
                .cta-left h2 {
                    font-size: clamp(2rem, 3.2vw, 2.7rem);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 1rem;
                    color: white;
                }
                .cta-left p {
                    font-size: 1.05rem;
                    color: rgba(255,255,255,0.75);
                    line-height: 1.6;
                    margin-bottom: 1.8rem;
                }
                .cta-contact-pills {
                    display: flex;
                    gap: 0.8rem;
                    flex-wrap: wrap;
                }
                .cta-pill {
                    background: rgba(255,255,255,0.12);
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: white;
                }
                .cta-right {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .btn-large {
                    padding: 1.1rem 2.2rem;
                    font-size: 1.05rem;
                    justify-content: center;
                }

                @media (max-width: 992px) {
                    .hero-container,
                    .grid-2,
                    .showcase-box,
                    .cta-banner-box {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                    .showcase-info-col {
                        padding: 2.5rem 1.8rem;
                    }
                    .cta-banner-box {
                        padding: 3rem 2rem;
                    }
                }
            `}</style>
        </main>
    );
};

export default IndustrialServiceDetail;
