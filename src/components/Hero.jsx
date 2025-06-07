import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import HeroImg from '../assets/HeroImg.webp';
import { FaChevronRight, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/sharer/sharer.php?u=https://stoplipovon.ro", "_blank");
  };

  return (
    <main role="main" className="bg-blue-fade w-full px-4 py-25 mt-10 relative text-white">
      <Helmet>
        <title>Lipovon – Cât de sigur este cu adevărat? | StopLipovon.ro</title>
        <meta
          name="description"
          content="Află adevărul despre Lipovon – pastila ce conține Sibutramină, o substanță interzisă și periculoasă pentru sănătatea ta. Protejează-te!"
        />
        <meta name="keywords" content="Lipovon, Sibutramină, pastile periculoase, suplimente, sănătate, riscuri" />
        <meta name="author" content="STOP Lipovon" />
        <link rel="canonical" href="https://stoplipovon.com" />

        {/* Open Graph */}
        <meta property="og:title" content="Lipovon – Pastila Care Poate Ucide" />
        <meta property="og:description" content="Descoperă riscurile reale ale produsului Lipovon. Informații verificate despre Sibutramină." />
        <meta property="og:image" content="https://stoplipovon.com/assets/HeroImg.webp" />
        <meta property="og:url" content="https://stoplipovon.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lipovon – Avertisment Sănătate" />
        <meta name="twitter:description" content="Lipovon conține Sibutramină, o substanță interzisă. Informează-te!" />
        <meta name="twitter:image" content="https://stoplipovon.com/assets/HeroImg.webp" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Lipovon – Cât de sigur este cu adevărat?",
            "url": "https://stoplipovon.com",
            "description": "Află adevărul despre Lipovon – pastila ce conține Sibutramină, o substanță interzisă.",
            "author": {
              "@type": "Organization",
              "name": "STOP Lipovon"
            }
          })}
        </script>
      </Helmet>

      <section aria-label="Avertisment despre pastila Lipovon" className="w-full flex justify-between items-center px-4">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          <header className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-hero-title-primary">
              Lipovon – cât de sigur este <span className="text-highlight-dark relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#c849f8]">cu adevărat?</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-hero">
              Nu te baza pe reclame. Consultă un medic sau o persoană de încredere înainte de a consuma Lipovon.
            </h2>

            <p className="text-lg text-hero">
              Promovată ca supliment natural, Lipovon conține{" "}
              <a href="https://webgate.ec.europa.eu/rasff-window/screen/notification/540980" target="_blank" rel="noopener noreferrer" className="text-highlight font-bold underline">Sibutramină</a> – o substanță interzisă în UE din 2010,
              asociată cu infarct, AVC și depresie severă. Sibutramina nu ar trebui să se regăsească în nicio pastilă comercializată online.
            </p>

            <div className="flex gap-4 pt-4">
              <Link to="/riscuri">
                <Button className="flex items-center gap-1.5 hover:bg-blue-100 transition z-10">
                  Află Riscurile
                  <FaChevronRight className="text-black text-lg" />
                </Button>
              </Link>

              <Button onClick={handleFacebookClick} variant="secondary" className="flex items-center gap-2">
                <FaFacebookF className="text-blue-600" />
                Distribuie
              </Button>
            </div>

            <p className="text-xs text-hero mt-4">
              *Acest site are scop informativ și nu substituie sfatul unui medic autorizat. Consultați un specialist înainte de a lua decizii legate de sănătate. Nu suntem afiliați cu distribuitorii sau producătorii Lipovon.
            </p>
          </header>

          <div className="relative w-full flex items-center justify-end">
            <motion.img
              src={HeroImg}
              alt="Cutie Lipovon și avertisment despre Sibutramină"
              loading="lazy"
              width={450}
              height={450}
              className="z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
