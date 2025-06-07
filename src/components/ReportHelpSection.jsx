import React from "react";
import { Helmet } from "react-helmet-async"; // SEO metadata

const ReportHelpSection = () => {
  return (
    <>
      {/* 🔍 SEO Metadata */}
      <Helmet>
        <title>Raportează produsul Lipovon | StopLipovon</title>
        <meta
          name="description"
          content="Ai luat Lipovon sau un alt produs periculos? Află cum poți să-l raportezi autorităților și să ceri ajutor. Informații utile de la StopLipovon."
        />
        <link rel="canonical" href="https://stoplipovon.com/ajutor" />
        <meta property="og:title" content="Raportează produsul Lipovon" />
        <meta property="og:description" content="Ghid rapid pentru raportare și instituții utile în caz de probleme cauzate de Lipovon sau produse similare." />
        <meta property="og:url" content="https://stoplipovon.com/ajutor" />
        <meta property="og:image" content="https://stoplipovon.com/assets/og-raportare.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section
        className="bg-[#D1F2FA] py-30 px-6  md:px-16 text-slate-800"
        aria-label="Ajutor și raportare produs periculos"
      >
        <div className="max-w-6xl mx-auto space-y-8 flex flex-col items-center justify-center">
          <header className="text-center max-w-[660px]">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Ai nevoie de ajutor sau vrei să raportezi produsul Lipovon?
            </h1>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Suntem aici să te informăm. Află ce poți face dacă ai cumpărat un produs periculos și cum îl poți raporta autorităților.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {/* ANPC */}
            <div className="bg-[#E8F5E9] rounded-2xl p-6 shadow-md" role="region" aria-labelledby="anpc">
              <h2 id="anpc" className="text-lg font-semibold text-slate-900 mb-2">ANPC – Protecția Consumatorului</h2>
              <p>
                <a
                  href="https://anpc.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium underline"
                >
                  https://anpc.ro
                </a>
              </p>
              <p className="mt-2">Telefon: <strong>021 9551</strong></p>
              <p className="mt-2">Poți face o plângere online dacă ai fost păcălit.</p>
            </div>

            {/* Ghid Rapid */}
            <div className="bg-[#FFF3E0] rounded-2xl p-6 shadow-md" role="region" aria-labelledby="ghid-rapid">
              <h2 id="ghid-rapid" className="text-lg font-semibold text-slate-900 mb-2">Dacă ai luat deja Lipovon:</h2>
              <p className="font-semibold text-slate-800 mb-2">Ghid rapid:</p>
              <ul className="list-disc list-inside space-y-1 text-blue-800 font-medium">
                <li><span className="text-red-600 font-semibold">Oprește administrarea imediat.</span></li>
                <li>Mergi la medic dacă ai reacții adverse.</li>
                <li>Păstrează ambalajul și dovada cumpărării.</li>
                <li>Raportează produsul.</li>
              </ul>
            </div>

            {/* Alte instituții */}
            <div className="bg-[#E1F5FE] rounded-2xl p-6 shadow-md" role="region" aria-labelledby="institutii">
              <h2 id="institutii" className="text-lg font-semibold text-slate-900 mb-2">Alte instituții utile</h2>
              <p>
                <strong>InfoCons:</strong> 021 9615 –{" "}
                <a
                  href="https://infocons.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  infocons.ro
                </a>
              </p>
              <p className="mt-2">
                <strong>Ministerul Sănătății:</strong> 0800 800 085 –{" "}
                <a
                  href="https://ms.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  ms.ro
                </a>
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="bg-[#E8F5E9] border-l-4 border-red-500 p-6 rounded-xl shadow flex flex-col md:flex-row items-center justify-between gap-4 mt-10"
            role="complementary"
            aria-label="Raportează produsul Lipovon"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Ai avut o experiență cu Lipovon?</h3>
              <p className="text-slate-700">
                Contribuie la protejarea altora – raportează produsul și distribuie informația.
              </p>
            </div>
            <a
              href="https://anpc.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Raportează Acum
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportHelpSection;
