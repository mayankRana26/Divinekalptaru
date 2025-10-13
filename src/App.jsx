import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Services from './pages/Services'; 

// 🟢 FIX: ServiceDetail को अब एक अलग फ़ाइल से import करेंगे
import ServiceDetail from './pages/ServiceDetail'; 
import Footer from './components/Footer';


function App() {
    return (
        <div className="min-h-screen antialiased">
            <Header />
            <main className="pt-16"> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:id" element={<ServiceDetail />} />

                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;