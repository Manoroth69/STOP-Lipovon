import React from "react";
import { Helmet } from "react-helmet-async";

const Termeni = () => {
  return (
    <>
      <Helmet>
        <title>Termeni și Condiții | StopLipovon</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="max-w-3xl mx-auto py-30 px-4 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Termeni și Condiții</h1>

        <p className="mb-4">
          Prin utilizarea site-ului StopLipovon.com, sunteți de acord cu termenii și condițiile prezentate mai jos:
        </p>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Scopul site-ului:</strong> Acest site oferă informații cu caracter general și educativ. Nu constituie sfat medical, juridic sau profesional.
          </li>
          <li>
            <strong>Monetizare:</strong> Site-ul poate afișa reclame și poate include linkuri afiliate. Donațiile sunt acceptate voluntar, fără obligativitate.
          </li>
          <li>
            <strong>Lipsa afilierii:</strong> Nu suntem asociați cu nicio companie producătoare sau distribuitoare a produsului Lipovon.
          </li>
          <li>
            <strong>Utilizarea conținutului:</strong> Conținutul este proprietatea StopLipovon.com și nu poate fi copiat sau redistribuit fără acord.
          </li>
          <li>
            <strong>Limitarea răspunderii:</strong> Ne declinăm responsabilitatea pentru eventualele efecte negative cauzate de interpretarea informațiilor prezentate.
          </li>
          <li>
            <strong>Protecția datelor:</strong> Nu colectăm date personale fără consimțământ. Pentru mai multe detalii, citiți <a href="/confidentialitate">Politica de Confidențialitate</a>.
          </li>
        </ol>
      </section>
    </>
  );
};

export default Termeni;