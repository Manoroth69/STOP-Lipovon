import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';


// Pages
import Home from './pages/Home';
import About from './components/About';
import Risks from './components/Risks';
import LipovonWarning from './components/LipovonWarning';
import DonationSection from './components/DonationSection';
import ReportHelpSection from './components/ReportHelpSection';
import Footer from './components/Footer';
// alte pagini...

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/despre" element={<About />} />
        <Route path="/riscuri" element={<Risks />} />
        <Route path="/protejeaza-te" element={<LipovonWarning />} />
        <Route path="/donatii" element={<DonationSection />} />
        <Route path="/ajutor" element={<ReportHelpSection />} />
        {/* alte pagini */}
       
      </Routes>
      <Footer />
    </>
  );
};

export default App;