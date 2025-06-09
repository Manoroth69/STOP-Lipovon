// src/components/ContactEmail.jsx

import { useEffect, useState } from "react";

export default function ContactEmail() {
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState("");

  useEffect(() => {
    // Construim emailul în client, pentru a nu apărea în HTML-ul brut
    const user = "contact";
    const domain = "stoplipovon.com";
    const address = `${user}@${domain}`;

    setEmail(address);
    setDisplay(`${user} [at] ${domain}`); // fallback vizual anti-spam
  }, []);

  return (
    <div className="text-center mt-8 space-y-2">
      <p className="text-sm text-gray-500">
        Nu păstrăm adresele utilizatorilor și nu trimitem newslettere. 
        Poți să ne scrii anonim oricând la:
      </p>

      {email ? (
        <a
          href={`mailto:${email}?subject=Întrebare%20legată%20de%20StopLipovon.com`}
          className="text-blue-600 hover:underline font-medium"
        >
          {email}
        </a>
      ) : (
        <span className="text-gray-400 italic">{display}</span>
      )}

      {/* Imagine fallback opțională (pentru crawlere mai agresive) */}
      {/* <img src="/contact_email.png" alt="contact email" className="mx-auto mt-2" /> */}
    </div>
  );
}
