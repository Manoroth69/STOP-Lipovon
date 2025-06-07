import React from "react";
import { Helmet } from "react-helmet-async";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | StopLipovon</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="max-w-3xl mx-auto py-30 px-4 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
        <p className="mb-4">
          StopLipovon.com este un proiect informativ, creat cu scopul de a semnala riscurile potențiale asociate suplimentelor alimentare promovate agresiv pe internet, în special produsul Lipovon.
        </p>
        <p className="mb-4">
          Nu avem nicio legătură cu producătorii sau distribuitorii produsului Lipovon. Informațiile prezentate sunt bazate pe surse publice, comunicate oficiale și materiale jurnalistice independente.
        </p>
        <p className="mb-4">
          Acest site poate conține reclame sau linkuri afiliate care ajută la susținerea proiectului. Acceptăm și donații voluntare pentru acoperirea costurilor de mentenanță.
        </p>
        <p>
          Nu oferim sfaturi medicale. Pentru diagnostic, tratament sau decizii legate de sănătate, consultați întotdeauna un medic sau farmacist autorizat.
        </p>
      </section>
    </>
  );
};

export default Disclaimer;