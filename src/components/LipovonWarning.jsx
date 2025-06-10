import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/Button';

const handleFacebookClick = () => {
  window.open("https://www.facebook.com/pagina.ta", "_blank");
};

const handleExternalLinkClick = () => {
  window.open("https://hotnews.ro/recorder-pastile-de-slabit-virale-pe-internet-cu-risc-de-moarte-subita-contin-un-drog-din-familia-amfetaminelor-1989192?utm_source=chatgpt.com", "_blank");
};

const LipovonWarning = () => (
  <>
    {/* 🔍 SEO Metadata */}
    <Helmet>
      <title>Cum să te protejezi de capcana Lipovon | StopLipovon</title>
      <meta
        name="description"
        content="Învață cum să recunoști și să eviți pericolele asociate cu Lipovon. Sfaturi utile pentru protecția ta și a celor dragi."
      />
      <link rel="canonical" href="https://stoplipovon.ro/protejeaza-te" />
      <meta property="og:title" content="Cum să te protejezi de capcana Lipovon" />
      <meta property="og:description" content="Află cum să identifici produsele periculoase precum Lipovon și cum să te informezi corect." />
      <meta property="og:url" content="https://stoplipovon.ro/protejeaza-te" />
      <meta property="og:image" content="https://stoplipovon.ro/assets/og-protect.jpg" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* ✅ JSON-LD STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Cum să te protejezi de capcana Lipovon",
          "url": "https://stoplipovon.com/protejeaza-te",
          "description": "Află cum să recunoști produsele periculoase ca Lipovon și cum să te informezi corect pentru siguranța ta și a celor dragi.",
          "publisher": {
            "@type": "Organization",
            "name": "StopLipovon",
            "url": "https://stoplipovon.com"
          }
        })}
      </script>
    </Helmet>

    {/* 🔒 CONȚINUT PAGINĂ */}
    <section
      className="bg-[#fff] px-4 py-30 flex items-center justify-center "
      aria-label="Cum să te protejezi de capcana Lipovon"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-10 text-center">
          <h1 className="text-[#2B1970] text-4xl sm:text-5xl font-bold max-w-2xl leading-tight">
            Cum să te protejezi de capcana Lipovon?
          </h1>

          <div className="grid md:grid-cols-2 gap-6 w-full text-left max-w-5xl">
            <div className="space-y-4 pr-0 md:pr-4">
              <div className="bg-[#FFCDD2] p-4 rounded-2xl shadow-md">
                <p className="font-medium">Nu cumpăra produse fără surse clare și aprobări oficiale!</p>
              </div>
              <div className="bg-[#C8E6C9] p-4 rounded-2xl shadow-md">
                <p className="font-medium">Consultă întotdeauna un medic sau un specialist în nutriție.</p>
              </div>
              <div className="bg-[#FFE0B2] p-4 rounded-2xl shadow-md">
                <p className="font-medium">Evită vânzători dubioși de pe rețele sociale sau site-uri necunoscute.</p>
              </div>
            </div>

            <div className="space-y-4 pl-0 md:pl-4">
              <div className="bg-[#E1BEE7] p-4 rounded-2xl shadow-md">
                <p className="font-medium">Nu crede în soluții miraculoase — informarea e cheia siguranței.</p>
              </div>
              <div className="bg-[#B3E5FC] p-4 rounded-2xl shadow-md">
                <p className="font-medium">Verifică informațiile din surse oficiale și studii științifice.</p>
              </div>
              <div className="bg-[#D7CCC8] p-4 rounded-2xl shadow-md">
                <p className="font-medium">Raportează produsele suspecte către ANPC sau DSP.</p>
              </div>
            </div>
          </div>

          {/* Butoane */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            <button onClick={handleExternalLinkClick} className="bg-[#2B1970] text-white font-bold py-2 px-6 rounded-md hover:bg-[#3c2c85] transition cursor-pointer">
              Fii informat, fii în siguranță!
            </button>

            <button onClick={handleFacebookClick} className="border border-[#2B1970] text-[#2B1970] font-bold py-2 px-6 rounded-md hover:bg-[#2B1970] hover:text-white transition cursor-pointer">
              Distribuie mai departe!
            </button>
          </div>

          {/* 🔒 Disclaimer legal / Footer */}
          <p className="text-xs text-gray-500 mt-10 max-w-xl">
            Informațiile prezentate pe această pagină au un scop informativ și nu înlocuiesc sfatul medical de specialitate. Consultă întotdeauna un medic înainte de a lua decizii privind sănătatea ta. Nicio parte a conținutului nu are intenția de a diagnostica, trata sau preveni vreo afecțiune.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default LipovonWarning;
