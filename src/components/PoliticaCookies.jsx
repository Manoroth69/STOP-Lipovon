import React from "react";
import { Helmet } from "react-helmet-async";

const PoliticaCookies = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-30 text-slate-800">
      <Helmet>
        <title>Politica de Cookie-uri | StopLipovon</title>
        <meta name="description" content="Politica de cookie-uri pentru site-ul StopLipovon - informații despre modulele cookie, scopul și utilizarea acestora." />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Politica de Cookie-uri</h1>

      <p className="mb-4">
        Site-ul <strong>StopLipovon.com</strong> folosește module cookie pentru a
        oferi o experiență personalizată, pentru a analiza traficul și pentru
        a afișa reclame relevante (de exemplu, prin Google AdSense). Continuarea
        utilizării site-ului implică acceptul dvs. pentru folosirea cookie-urilor,
        conform celor descrise mai jos.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Ce sunt cookie-urile?</h2>
      <p className="mb-4">
        Cookie-urile sunt fișiere text de mici dimensiuni stocate în browserul
        dvs. atunci când accesați un site web. Ele permit site-ului să rețină
        informații despre sesiunea dvs., preferințe, autentificare și multe altele.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Ce tipuri de cookie-uri folosim?</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Necesare:</strong> Asigură funcționarea de bază a site-ului.
        </li>
        <li>
          <strong>Preferințe:</strong> Rețin alegerile dvs. (ex: limbă, temă).
        </li>
        <li>
          <strong>Statistici:</strong> Ne ajută să înțelegem cum este utilizat
          site-ul (ex: Google Analytics).
        </li>
        <li>
          <strong>Marketing:</strong> Folosite pentru a afișa reclame relevante și
          personalizate (ex: Google AdSense).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookie-uri terțe</h2>
      <p className="mb-4">
        Site-ul poate folosi servicii terțe, cum ar fi Google AdSense sau Google
        Analytics. Aceste servicii pot plasa cookie-uri proprii. Vă recomandăm
        să consultați politicile lor de confidențialitate pentru detalii:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Google AdSense
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Google Analytics
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Cum poți controla cookie-urile?</h2>
      <p className="mb-4">
        Puteți seta preferințele privind cookie-urile direct în bannerul de
        consimțământ afișat la prima accesare. De asemenea, majoritatea
        browserelor permit blocarea sau ștergerea cookie-urilor din setări.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Acordul tău</h2>
      <p className="mb-4">
        Prin utilizarea acestui site, îți exprimi acordul pentru folosirea
        cookie-urilor în conformitate cu această politică. Poți oricând modifica
        opțiunile din setările cookie.
      </p>

      <p className="text-sm mt-12 text-slate-500">
        Ultima actualizare: iunie 2025
      </p>
    </main>
  );
};

export default PoliticaCookies;
