import React from 'react'
import { Helmet } from 'react-helmet-async'; // pentru SEO <head> management
import { Button } from '@/components/ui/Button';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/Accordion";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* 🔍 SEO META pentru pagina Despre */}
      <Helmet>
        <title>Ce este StopLipovon? | Campanie de informare despre pericolul Lipovon</title>
        <meta
          name="description"
          content="Află ce este StopLipovon – o campanie de informare despre riscurile grave ale pastilei Lipovon și despre prezența sibutraminei. Protejează-ți sănătatea!"
        />
        <link rel="canonical" href="https://stoplipovon.ro/despre" />
        {/* 🧠 Opțional: Open Graph pentru social media */}
        <meta property="og:title" content="Ce este StopLipovon?" />
        <meta property="og:description" content="Informații reale despre riscurile pastilei Lipovon și despre campania StopLipovon. Protejează-te!" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://stoplipovon.ro/despre" />
        <meta property="og:image" content="https://stoplipovon.ro/assets/og-image.jpg" /> {/* schimbi cu link real */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* 💡 Conținut vizual */}
      <section
        aria-label="Despre campania StopLipovon"
        className="about-bg w-full  py-30 bg-blue-fade flex items-center justify-center px-4"
      >
        <div className="container">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN */}
            <div className="text-white space-y-6">
              <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
                Stop Lipovon – Adevărul din spatele promisiunilor
              </h1>

              <p className="text-lg text-shadow-amber-50">
               Suntem o inițiativă anonimă, fără legături comerciale, care documentează efectele reale ale Lipovon și pericolele marketingului înșelător.
              </p>

              {/* 🔗 Linkuri către social media cu accesibilitate */}
              <div className="flex gap-4 pt-4" aria-label="Rețele sociale StopLipovon">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon transition" aria-label="Facebook">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon transition" aria-label="Instagram">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon transition" aria-label="TikTok">
                  <FaTiktok className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon transition" aria-label="Twitter">
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: ACCORDION */}
            <Accordion
              type="single"
              collapsible
              className="w-full h-full max-w-md flex flex-col justify-start text-white font-semibold"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Ce este Lipovon?</AccordionTrigger>
                <AccordionContent>
                  Lipovon este un supliment alimentar promovat ca ajutor pentru slăbit. Conține două substanțe active: Extract de Hoodia Gordonii și L-Carnitină.
                  Problema este că, în unele cazuri, a fost depistată și prezența <strong>Sibutraminei</strong>, o substanță interzisă în Uniunea Europeană.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Ești în siguranță dacă îl folosești?</AccordionTrigger>
                <AccordionContent>
                  Nu. Administrarea Lipovonului poate duce la reacții adverse severe: <strong>tensiune crescută, palpitații, depresie, AVC</strong>. Este extrem de riscant.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>De ce este interzisă Sibutramina?</AccordionTrigger>
                <AccordionContent>
                  Sibutramina a fost retrasă de pe piață în 2010 din cauza riscurilor cardiovasculare majore: <strong>infarct, AVC</strong>, mai ales la persoane supraponderale.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Ce este StopLipovon?</AccordionTrigger>
                <AccordionContent>
                  Este o campanie publică de conștientizare. Încurajăm <strong>verificarea surselor</strong> și evitarea tratamentelor miraculoase fără consult medical.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Ce alternative sigure există?</AccordionTrigger>
                <AccordionContent>
                  Recomandăm <strong>nutriție echilibrată</strong>, mișcare și suport psihologic. Consultă un <strong>nutriționist</strong> sau medic pentru planuri sigure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}

export default About