import React from "react";
import { Helmet } from "react-helmet-async"; // pentru meta SEO
import { SiStripe } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import { SiRevolut } from "react-icons/si";

const DonationSection = () => {
  return (
    <>
      {/* 🔍 SEO Metadata */}
      <Helmet>
        <title>Donează pentru o informare corectă | StopLipovon</title>
        <meta
          name="description"
          content="Sprijină StopLipovon în lupta împotriva dezinformării și a produselor periculoase. Donează prin Stripe, PayPal sau Revolut. Împreună protejăm comunitatea!"
        />
        <link rel="canonical" href="https://stoplipovon.ro/donatii" />
        <meta property="og:title" content="Donează pentru o informare corectă" />
        <meta property="og:description" content="Susține misiunea StopLipovon cu o donație. Ajută-ne să salvăm vieți și să educăm publicul!" />
        <meta property="og:url" content="https://stoplipovon.ro/donatii" />
        <meta property="og:image" content="https://stoplipovon.ro/assets/og-donatii.jpg" />
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Col Stânga */}
          <div className="flex flex-col  space-y-8 animate-fade-in-up">
            <header>
              <h1 className="text-4xl font-bold text-white mb-4">Susține Misiunea Noastră</h1>
              <p className="text-lg text-white ">
                Ajută-ne să informăm corect și să protejăm comunitatea. Orice donație contează și sprijină eforturile noastre
                împotriva produselor periculoase.
              </p>
            </header>

            <nav aria-label="Modalități de donație">
              <ul className="flex  flex-wrap gap-5">
                <li>
                  <a
                    href="https://buy.stripe.com/test_donatie"
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
                    href="https://www.paypal.com/donate/test"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition flex items-center gap-3"
                  >
                     <FaPaypal title="PayPal" className="" />
                    Donează cu PayPal
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
              </ul>
            </nav>
          </div>

          {/* Col Dreapta */}
          <div className="bg-[#FFF3E0] rounded-3xl shadow-xl p-8 animate-fade-in-up delay-200">
            <h2 className="text-2xl font-semibold mb-4">Ai întrebări? Trimite-ne un mesaj!</h2>
            <form className="space-y-4 ">
              <div>
                <label htmlFor="nume" className="block mb-1 font-medium">
                  Nume (opțional)
                </label>
                <input
                  type="text"
                  id="nume"
                  placeholder="Prenume și/sau nume"
                  className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Adresă de email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="exemplu@email.com"
                  className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              <div>
                <label htmlFor="mesaj" className="block mb-1 font-medium">
                  Mesajul tău
                </label>
                <textarea
                  id="mesaj"
                  rows="4"
                  required
                  placeholder="Scrie întrebarea sau sugestia ta aici..."
                  className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              <button
                type="submit"
                className="bg-[#2B1970] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md hover:scale-105 cursor-pointer"
              >
                Trimite Mesajul
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationSection;
