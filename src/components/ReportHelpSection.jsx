import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const ReportHelpSection = () => {
  return (
    <>
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

      <section className="bg-[#D1F2FA] py-30 px-4 md:px-8 text-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
            className="text-center max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Ai nevoie de ajutor sau vrei să raportezi produsul Lipovon?
            </h1>
            <p className="text-lg text-slate-700">
              Suntem aici să te informăm. Află ce poți face dacă ai cumpărat un produs periculos și cum îl poți raporta autorităților.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              {
                id: "anpc",
                title: "ANPC – Protecția Consumatorului",
                content: (
                  <>
                    <a
                      href="https://anpc.ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium underline"
                    >
                      https://anpc.ro
                    </a>
                    <p className="mt-2">Telefon: <strong>021 9551</strong></p>
                    <p className="mt-2">Poți face o plângere online dacă ai fost păcălit.</p>
                  </>
                ),
                bg: "bg-[#E8F5E9]"
              },
              {
                id: "ghid-rapid",
                title: "Dacă ai luat deja Lipovon:",
                content: (
                  <>
                    <p className="font-semibold mb-2">Ghid rapid:</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-800 font-medium">
                      <li><span className="text-red-600 font-semibold">Oprește administrarea imediat.</span></li>
                      <li>Mergi la medic dacă ai reacții adverse.</li>
                      <li>Păstrează ambalajul și dovada cumpărării.</li>
                      <li>Raportează produsul.</li>
                    </ul>
                  </>
                ),
                bg: "bg-[#FFF3E0]"
              },
              {
                id: "institutii",
                title: "Alte instituții utile",
                content: (
                  <>
                    <p>
                      <strong>InfoCons:</strong> 021 9615 – {" "}
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
                      <strong>Ministerul Sănătății:</strong> 0800 800 085 – {" "}
                      <a
                        href="https://ms.ro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        ms.ro
                      </a>
                    </p>
                  </>
                ),
                bg: "bg-[#E1F5FE]"
              }
            ].map((card, index) => (
              <motion.div
                key={card.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                className={`${card.bg} rounded-3xl p-6 shadow-md flex flex-col gap-3`}
                role="region"
                aria-labelledby={card.id}
              >
                <h2 id={card.id} className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h2>
                <div className="text-slate-700 text-sm">{card.content}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="bg-[#E8F5E9] border-l-4 border-red-500 p-6 rounded-xl shadow w-full flex flex-col md:flex-row items-center justify-between gap-4"
            role="complementary"
            aria-label="Raportează produsul Lipovon"
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-800 mb-1">Ai avut o experiență cu Lipovon?</h3>
              <p className="text-slate-700 text-sm">
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ReportHelpSection;
