import React from "react";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  return (
    <>
      <Helmet>
        {/* SEO META */}
        <meta name="author" content="Proiect StopLipovon" />
        <meta name="copyright" content="© 2025 StopLipovon" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

        {/* JSON-LD STRUCTURED DATA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "StopLipovon",
            "url": "https://stoplipovon.com",
            "description":
              "Campanie informativă despre pericolele reale ale pastilei Lipovon. Protejează-ți sănătatea cu informații verificate.",
            "sameAs": [
              "https://facebook.com/stoplipovon",
              "https://instagram.com/stoplipovon"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "RO"
            }
          })}
        </script>
      </Helmet>

      <footer
        className="bg-[#120C3C] text-white text-sm px-6 py-10 md:px-16"
        aria-label="Footer"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Stânga */}
          <div>
            <h2 className="text-lg font-bold tracking-widest text-red-500">
              STOP<span className="text-white">LIPOVON</span>
            </h2>
            <p className="mt-2 uppercase text-xs text-slate-300 tracking-wider">
              Informații reale. Protecție reală.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-sm">
              Informațiile prezentate pe acest site au scop informativ și educativ. Nu oferim sfaturi medicale. Consultă întotdeauna un medic specialist.
            </p>
          </div>

          {/* Dreapta */}
          <nav aria-label="Navigare rapidă">
            <h3 className="text-base font-semibold mb-3 text-white tracking-wide">
              🔗 Navigare rapidă
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li><a href="/" className="hover:text-white transition">Acasă</a></li>
              <li><a href="/despre" className="hover:text-white transition">Ce este Lipovon?</a></li>
              <li><a href="/riscuri" className="hover:text-white transition">Riscuri</a></li>
              <li><a href="/protejeaza-te" className="hover:text-white transition">Protejează-te</a></li>
              <li><a href="/ajutor" className="hover:text-white transition">Ajutor</a></li>
              <li><a href="/donatii" className="hover:text-white transition">Donații</a></li>
              {/* 🔒 Legal */}
              <li><a href="/disclaimer" className="hover:text-white transition">Disclaimer</a></li>
              <li><a href="/confidentialitate" className="hover:text-white transition">Politica de Confidențialitate</a></li>
              <li><a href="/termeni" className="hover:text-white transition">Termeni și Condiții</a></li>
              <li>
  <a href="/cookies" className="hover:text-white transition">
    Politica de cookie-uri
  </a>
</li>
<li><a href="/autor" className="hover:text-white transition">Autor</a></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-xs text-slate-400">
          © 2025 <span className="font-semibold text-white">STOPLIPOVON</span> | Toate drepturile rezervate.
        </div>
      </footer>
    </>
  );
};

export default Footer;
