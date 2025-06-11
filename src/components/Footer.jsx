import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <Helmet>
        <meta name="author" content="Proiect StopLipovon" />
        <meta name="copyright" content="© 2025 StopLipovon" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "StopLipovon",
            url: "https://stoplipovon.com",
            description:
              "Campanie informativă despre pericolele reale ale pastilei Lipovon. Protejează-ți sănătatea cu informații verificate.",
            sameAs: [
              "https://facebook.com/stoplipovon",
              "https://instagram.com/stoplipovon",
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "RO",
            },
          })}
        </script>
      </Helmet>

      <footer className="bg-[#120C3C] text-white px-6 py-16 md:px-24" aria-label="Footer">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-extrabold tracking-widest text-red-500">
              STOP<span className="text-white">LIPOVON</span>
            </h2>
            <p className="mt-2 uppercase text-xs text-slate-300 tracking-wider">
              Informații reale. Protecție reală.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-sm text-sm">
              Informațiile prezentate pe acest site au scop informativ și educativ. Nu oferim sfaturi medicale. Consultă întotdeauna un medic specialist.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="Navigare rapidă"
          >
            <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
              🔗 Navigare rapidă
            </h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="/" className="hover:text-white transition">Acasă</a></li>
              <li><a href="/despre" className="hover:text-white transition">Ce este Lipovon?</a></li>
              <li><a href="/riscuri" className="hover:text-white transition">Riscuri</a></li>
              <li><a href="/protejeaza-te" className="hover:text-white transition">Protejează-te</a></li>
              <li><a href="/ajutor" className="hover:text-white transition">Ajutor</a></li>
              <li><a href="/donatii" className="hover:text-white transition">Donații</a></li>
              <li><a href="/disclaimer" className="hover:text-white transition">Disclaimer</a></li>
              <li><a href="/confidentialitate" className="hover:text-white transition">Politica de Confidențialitate</a></li>
              <li><a href="/termeni" className="hover:text-white transition">Termeni și Condiții</a></li>
              <li><a href="/cookies" className="hover:text-white transition">Politica de cookie-uri</a></li>
              <li><a href="/autor" className="hover:text-white transition">Autor</a></li>
            </ul>
          </motion.nav>

          {/* CTA Section or Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-sm"
          >
            <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
              💬 Mesaj de încheiere
            </h3>
            <p className="leading-relaxed">
              Fii informat, fii în siguranță. Nu lăsa marketingul înșelător să-ți decidă sănătatea.
            </p>
            <p className="mt-4 italic text-slate-400">#StopLipovon #SiguranțăÎnainteDeToate</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-slate-700 mt-16 pt-6 text-center text-xs text-slate-400"
        >
          © 2025 <span className="font-semibold text-white">STOPLIPOVON</span> | Toate drepturile rezervate.
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
