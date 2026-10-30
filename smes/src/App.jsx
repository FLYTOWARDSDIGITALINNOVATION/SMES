import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import IndustrialServiceDetail from './pages/IndustrialServiceDetail';
import Contact from './pages/Contact';
import Loader from './components/Loader';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });
    }, []);

    const basename = window.location.pathname.startsWith('/projects/wind') 
        ? '/projects/wind' 
        : '';

    return (
        <Router basename={basename}>
            <Loader />
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/service/:slug" element={<IndustrialServiceDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Fallback to Home for unknown routes */}
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
