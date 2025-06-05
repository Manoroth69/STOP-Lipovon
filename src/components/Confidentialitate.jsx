import React from "react";
import { Helmet } from "react-helmet-async";

const Confidentialitate = () => {
  return (
    <>
      <Helmet>
        <title>Politica de Confidențialitate | StopLipovon</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="max-w-3xl mx-auto py-30 px-4 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Politica de Confidențialitate</h1>

        <p className="mb-4">
          Respectăm intimitatea vizitatorilor noștri și ne angajăm să protejăm datele cu caracter personal.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Google AdSense</h2>
        <p className="mb-4">
          Acest site folosește Google AdSense pentru a afișa reclame. Google poate folosi cookie-uri pentru a personaliza anunțurile pe baza vizitelor anterioare ale utilizatorilor.
          <br />
          Puteți afla mai multe despre utilizarea datelor de către Google aici: <a className="text-blue-600 underline" href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google Privacy & Terms</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Cookie-uri</h2>
        <p className="mb-4">
          Acest site poate folosi cookie-uri funcționale și analitice pentru a îmbunătăți experiența utilizatorului.
          Puteți seta browserul să blocheze cookie-urile sau să vă anunțe când sunt folosite.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Date colectate</h2>
        <p className="mb-4">
          Nu colectăm date personale prin formulare decât dacă sunt trimise voluntar (ex: mesaj prin formularul de contact).
          Datele nu sunt stocate, vândute sau transmise către terți.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Drepturile tale</h2>
        <p>
          Conform GDPR, ai dreptul de a solicita accesul la datele tale, rectificarea sau ștergerea acestora.
          Pentru orice solicitare, ne poți contacta prin formularul de pe site.
        </p>
      </section>
    </>
  );
};

export default Confidentialitate;