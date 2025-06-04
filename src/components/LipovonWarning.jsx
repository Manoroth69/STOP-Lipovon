import React from "react";
import { Helmet } from "react-helmet-async"; // pentru meta SEO
import { Button } from '@/components/ui/Button';
const handleFacebookClick = () => {
    window.open("https://www.facebook.com/pagina.ta", "_blank");
  };

const handleExternalLinkClick = () => {
  window.open("https://hotnews.ro/recorder-pastile-de-slabit-virale-pe-internet-cu-risc-de-moarte-subita-contin-un-drog-din-familia-amfetaminelor-1989192?utm_source=chatgpt.com", "_blank");
};
const LipovonWarning = () => (
 
  <>
  
    {/* 🔍 SEO Metadata pentru pagina "Protejează-te de Lipovon" */}
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
    </Helmet>

    {/* 🧠 Conținut vizual */}
    <section
      className="bg-[#fff] px-4 py-30 flex items-center justify-center min-h-screen"
      aria-label="Cum să te protejezi de capcana Lipovon"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* TITLU */}
          <h1 className="text-black text-4xl sm:text-5xl font-bold max-w-2xl leading-tight">
            Cum să te protejezi de capcana Lipovon?
          </h1>

          {/* GRID SFATURI */}
          <div className="grid md:grid-cols-2 gap-6 w-full text-left max-w-5xl">
            {/* Col Stânga */}
            <div className="space-y-4 pr-0 md:pr-4">
              <div className="bg-[#FFCDD2] p-4 rounded-2xl shadow-md">
                <p className="font-medium">
                  Nu cumpăra produse fără surse clare și aprobări oficiale!
                </p>
              </div>
              <div className="bg-[#C8E6C9] p-4 rounded-2xl shadow-md">
                <p className="font-medium">
                  Consultă întotdeauna un medic sau un specialist în nutriție înainte să iei orice supliment.
                </p>
              </div>
              <div className="bg-[#FFE0B2] p-4 rounded-2xl shadow-md">
                <p className="font-medium">
                  Evită să cumperi de la vânzători dubioși de pe rețele sociale sau site-uri neautorizate.
                </p>
              </div>
            </div>

            {/* Col Dreapta */}
            <div className="space-y-4 pl-0 md:pl-4">
              <div className="bg-[#E1BEE7] p-4 rounded-2xl shadow-md">
                <p className="font-medium">
                  Nu te lăsa păcălit de reclame cu „soluții miraculoase” – dacă pare prea frumos ca să fie adevărat, probabil e o minciună.
                </p>
              </div>
              <div className="bg-[#B3E5FC] p-4 rounded-2xl shadow-md">
                <p className="font-medium">
                  Informează-te din surse verificate – site-uri oficiale, studii științifice, organizații de sănătate.
                </p>
              </div>
              <div className="bg-[#D7CCC8] p-4 rounded-2xl shadow-md">
                <p className="font-medium">
                  Dacă ai dubii, raportează produsul către Protecția Consumatorului sau Direcția de Sănătate Publică.
                </p>
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
        </div>
      </div>
    </section>
  </>
);

export default LipovonWarning;

