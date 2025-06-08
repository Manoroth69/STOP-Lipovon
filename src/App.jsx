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
import Confidentialitate from './components/Confidentialitate';
import Termeni from './components/Termeni';
import Disclaimer from './components/Disclaimer';
import CookieConsent from "./components/CookieConsent";
import PoliticaCookies from './components/PoliticaCookies';
import Author from './components/Author';


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
        <Route path="/confidentialitate" element={<Confidentialitate />} />
        <Route path="/termeni" element={<Termeni />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
        <Route path="/autor" element={<Author />} />
        
        {/* alte pagini */}
       
      </Routes>
      
      <Footer />
      <CookieConsent />
    </>
  );
};

export default App;