import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaPhone, FaExclamationTriangle, FaShieldAlt, FaBullhorn } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const ReportHelpSection = () => {
   const cards = [
    {
      id: "anpc",
      title: "ANPC – Protecția Consumatorului",
      icon: <FaShieldAlt className="text-2xl text-green-600" />,
      content: (
        <>
          <a
            href="https://anpc.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
          >
            https://anpc.ro
          </a>
          <div className="flex items-center mt-2 gap-2">
            <FaPhone className="text-green-600" />
            <span>Telefon: <strong>021 9551</strong></span>
          </div>
          <p className="mt-3 text-slate-700">Poți face o plângere online dacă ai fost păcălit.</p>
        </>
      ),
      bg: "bg-gradient-to-br from-green-50 to-green-100",
      border: "border-l-4 border-green-500"
    },
    {
      id: "ghid-rapid",
      title: "Ghid rapid de acțiune",
      icon: <FaExclamationTriangle className="text-2xl text-amber-600" />,
      content: (
        <>
          <p className="font-semibold mb-3 text-slate-800">Dacă ai luat deja Lipovon:</p>
          <ul className="space-y-2">
            {[
              { text: "Oprește administrarea imediat.", urgent: true },
              { text: "Mergi la medic dacă ai reacții adverse." },
              { text: "Păstrează ambalajul și dovada cumpărării." },
              { text: "Raportează produsul." }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={` w-6 h-6 rounded-full flex-shrink-0 mt-0.5 ${item.urgent ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'} flex items-center justify-center`}>
                  {i + 1}
                </span>
                <span className={item.urgent ? "text-red-600 font-semibold" : "text-slate-700"}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
      bg: "bg-gradient-to-br from-amber-50 to-amber-100",
      border: "border-l-4 border-amber-500"
    },
    {
      id: "institutii",
      title: "Alte instituții utile",
      icon: <FaBullhorn className="text-2xl text-blue-600" />,
      content: (
        <>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-slate-800">InfoCons</p>
              <div className="flex items-center gap-2 mt-1">
                <FaPhone className="text-blue-600" />
                <span>021 9615</span>
              </div>
              <a
                href="https://infocons.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline transition-colors block mt-1"
              >
                infocons.ro
              </a>
            </div>

            <div>
              <p className="font-semibold text-slate-800">Ministerul Sănătății</p>
              <div className="flex items-center gap-2 mt-1">
                <FaPhone className="text-blue-600" />
                <span>0800 800 085</span>
              </div>
              <a
                href="https://ms.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline transition-colors block mt-1"
              >
                ms.ro
              </a>
            </div>
          </div>
        </>
      ),
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
      border: "border-l-4 border-blue-500"
    }
  ];
  return (
    <>

<Helmet>
  <title>Raportează produsul Lipovon | StopLipovon</title>
  <meta
    name="description"
    content="Ai luat Lipovon sau un alt produs periculos? Află cum poți să-l raportezi autorităților și să ceri ajutor. Informații utile de la StopLipovon."
  />
  <link rel="canonical" href="https://stoplipovon.com/ajutor" />

  {/* Open Graph pentru Facebook & altele */}
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Raportează produsul Lipovon" />
  <meta
    property="og:description"
    content="Ghid rapid pentru raportare și instituții utile în caz de probleme cauzate de Lipovon sau produse similare."
  />
  <meta property="og:url" content="https://stoplipovon.com/ajutor" />
  <meta property="og:image" content="https://stoplipovon.com/assets/og-raportare.jpg" />
  <meta property="og:site_name" content="StopLipovon" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Raportează produsul Lipovon" />
  <meta
    name="twitter:description"
    content="Ghid rapid pentru raportare și instituții utile în caz de probleme cauzate de Lipovon sau produse similare."
  />
  <meta name="twitter:image" content="https://stoplipovon.com/assets/og-raportare.jpg" />
  <meta name="twitter:site" content="@StopLipovon" />

  {/* JSON-LD Structured Data pentru Google */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Raportează produsul Lipovon",
        "url": "https://stoplipovon.com/ajutor",
        "description": "Ai luat Lipovon sau un alt produs periculos? Află cum poți să-l raportezi autorităților și să ceri ajutor. Informații utile de la StopLipovon.",
        "publisher": {
          "@type": "Organization",
          "name": "StopLipovon",
          "url": "https://stoplipovon.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://stoplipovon.com/assets/logo.png"
          }
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://stoplipovon.com/assets/og-raportare.jpg",
          "width": 1200,
          "height": 630
        }
      }
    `}
  </script>
</Helmet>

       <section className="bg-gradient-to-b from-blue-50 to-green-50 py-30 px-4 md:px-8 text-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Ai nevoie de ajutor sau vrei să raportezi produsul <span className="text-red-600">Lipovon</span>?
          </h1>
          <p className="text-lg text-slate-700">
            Suntem aici să te informăm. Află ce poți face dacă ai cumpărat un produs periculos și cum îl poți raporta autorităților.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index + 1}
              whileHover={{ y: -5 }}
              className={`${card.bg} ${card.border} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
              role="region"
              aria-labelledby={card.id}
            >
              <div className="flex items-center gap-3 mb-4">
                {card.icon}
                <h2 id={card.id} className="text-xl font-bold text-slate-900">
                  {card.title}
                </h2>
              </div>
              <div className="text-slate-700 flex-grow">
                {card.content}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={4}
          className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-8 rounded-xl shadow-lg w-full flex flex-col md:flex-row items-center justify-between gap-6"
          role="complementary"
          aria-label="Raportează produsul Lipovon"
          whileHover={{ scale: 1.01 }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center justify-center md:justify-start gap-3">
              <FaExclamationTriangle className="text-red-500" />
              <span>Ai avut o experiență cu Lipovon?</span>
            </h3>
            <p className="text-slate-700">
              Contribuie la protejarea altora – raportează produsul și distribuie informația.
            </p>
          </div>
          <motion.a
            href="https://anpc.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBullhorn />
            Raportează Acum
          </motion.a>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default ReportHelpSection;
