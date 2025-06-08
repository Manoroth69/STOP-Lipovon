import React from "react";
import { Helmet } from "react-helmet-async"; // pentru meta SEO
import { SiStripe } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import { SiRevolut } from "react-icons/si";
import { BiCoffee } from "react-icons/bi";
import Coffee from "../assets/Coffee.webp";


const DonationSection = () => {
  return (
    <>
      {/* 🔍 SEO Metadata */}
      <Helmet>
        <title>Stop Lipovon – Adevărul despre acest „supliment”</title>
        <meta
          name="description"
          content="Sprijină StopLipovon în lupta împotriva dezinformării și a produselor periculoase. Donează prin Stripe, PayPal sau Revolut. Împreună protejăm comunitatea!"
        />
        <link rel="canonical" href="https://stoplipovon.com/donatii" />
        <meta property="og:title" content="Donează pentru o informare corectă" />
        <meta property="og:description" content="Susține misiunea StopLipovon cu o donație. Ajută-ne să salvăm vieți și să educăm publicul!" />
        <meta property="og:url" content="https://stoplipovon.com/donatii" />
        <meta property="og:image" content="https://stoplipovon.com/assets/og-donatii.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* 🎯 Conținut */}
      <section
        className="relative bg-gradient-to-br bg-[#2a206b] py-30 px-6 md:px-12 text-slate-800 overflow-hidden"
        aria-label="Donează pentru StopLipovon"
      >
        {/* Background animat */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse -z-10"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-500 -z-10"
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Col Stânga */}
          <div className="flex flex-col  space-y-8 animate-fade-in-up">
            <header>
              <h1 className="text-4xl font-bold text-white mb-4">Susține Misiunea Noastră</h1>
              <p className="text-lg text-white ">
                Ajută-ne să informăm corect și să protejăm comunitatea. Orice donație contează și sprijină eforturile noastre
                împotriva produselor periculoase. Dacă vrei să ne susții în această campanie de informare, poți dona prin metode sigure. Mulțumim!
              </p>
            </header>

            <nav aria-label="Modalități de donație">
              <ul className="flex  flex-wrap gap-5">
                <li>
                  <a
                    href="https://donate.stripe.com/4gM28qfNF3Qx1Gh5qfcQU01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition"
                  >
                     <SiStripe title="Stripe" className="" />
                    Donează cu Stripe
                  </a>
                </li>
                
                <li>
                  <a
                    href="https://revolut.me/donatie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-black font-medium px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition"
                  >
                     <SiRevolut title="Revolut" className="" />
                    Donează cu Revolut
                  </a>
                </li>
                <li>
                  <a
                    href="https://buymeacoffee.com/stoplipovon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#FFDD00]  text-black font-medium px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition"
                  >
                     <BiCoffee title="Buy Me A Coffee" className="" />
                    Cumpara-mi o cafea!
                  </a>
                </li>
                <p className="text-xs text-gray-100 mt-4 max-w-xl">
  Donațiile sunt 100% voluntare și nu presupun niciun schimb de bunuri sau servicii. Susțin dezvoltarea conținutului informativ. Sumele colectate sunt folosite exclusiv pentru susținerea proiectului StopLipovon – mentenanță, hosting și dezvoltare de conținut informativ. 
  Nu păstrăm datele tale bancare, iar procesarea este realizată de platformele respective (Stripe,Revolut,Cumpără-mi o cafea).
</p>
              </ul>
            </nav>
          </div>

          {/* Col Dreapta */}
          <div className="bg-[#FFF3E0] rounded-3xl shadow-xl p-8 animate-fade-in-up delay-200">
           <img src={Coffee} alt="Buy me a coffee image" loading="lazy"/>
           
            
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationSection;
