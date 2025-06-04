import Hero from '../components/Hero';
import About from '../components/About';
import Risks from '../components/Risks';
import LipovonWarning from '../components/LipovonWarning';
import ReportHelpSection from '../components/ReportHelpSection';
import DonationSection from '../components/DonationSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Risks />
      <LipovonWarning />
      <ReportHelpSection />
      <DonationSection />
    </main>
  );
};

export default Home;