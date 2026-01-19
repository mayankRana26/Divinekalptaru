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
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
// import FloatingContactButtons from './components/FloatingContactButtons';
import FixedContactBar from './components/FixedContactBar';
import Online from './pages/online' ;



function App() {
  return (
    <div className="flex flex-col min-h-screen antialiased ">
      <Header />
      
      {/* main grow kare, taaki footer bottom pe rahe */}
      <main className="flex-grow pt-16">
        <ScrollToTopOnNavigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/online" element={<Online />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <FixedContactBar />
    </div>
  );
}


export default App;


