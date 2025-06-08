import React from 'react'
import { Helmet } from 'react-helmet-async'
import RiskCards from './RiskCards'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'

const Risks = () => {
  return (
    <>
      {/* 🔍 SEO META */}
      <Helmet>
        <title>Riscurile administrării Lipovon | StopLipovon</title>
        <meta
          name="description"
          content="Află ce riști dacă folosești Lipovon: de la probleme cardiovasculare până la tulburări psihice. Informații despre sibutramină și efectele adverse."
        />
        <link rel="canonical" href="https://stoplipovon.com/riscuri" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ce riști dacă folosești Lipovon?" />
        <meta property="og:description" content="Lipovon conține sibutramină, o substanță periculoasă care poate cauza infarct, AVC și probleme psihice grave." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://stoplipovon.com/riscuri" />
        <meta property="og:image" content="https://stoplipovon.com/assets/og-riscuri.jpg" />
        <meta property="og:image:alt" content="Efecte adverse ale pastilei Lipovon și avertisment public" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Riscurile administrării Lipovon | StopLipovon" />
        <meta name="twitter:description" content="Informații clare despre efectele adverse și riscurile severe ale pastilei Lipovon, inclusiv sibutramina interzisă." />
        <meta name="twitter:image" content="https://stoplipovon.com/assets/og-riscuri.jpg" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Riscurile administrării Lipovon",
            "description": "Lipovon este un supliment potențial periculos. Află ce efecte adverse are și de ce sibutramina este interzisă în UE.",
            "image": "https://stoplipovon.com/assets/og-riscuri.jpg",
            "author": {
              "@type": "Organization",
              "name": "StopLipovon",
              "url": "https://stoplipovon.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "StopLipovon",
              "logo": {
                "@type": "ImageObject",
                "url": "https://stoplipovon.com/assets/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://stoplipovon.com/riscuri"
            },
            "datePublished": "2024-06-01",
            "dateModified": "2024-06-01"
          })}
        </script>
      </Helmet>

      <section
        aria-label="Riscurile folosirii Lipovon"
        className="risks-bg w-full py-30 px-4 z-30"
      >
        <div className="container mx-auto flex flex-col items-center space-y-20">
          {/* Header */}
          <div className="text-center max-w-[660px] space-y-6">
            <h1 className="text-black text-4xl sm:text-5xl font-bold leading-tight">
              Ce riști cu adevărat când iei Lipovon?
            </h1>
            <p className="text-lg text-black">
              Dincolo de promisiunile de slăbire rapidă, Lipovon poate provoca <strong>tulburări psihice</strong> și <strong>afecțiuni cardiovasculare grave</strong>. Produsul este promovat prin <strong>practici înșelătoare</strong> și nu este reglementat de autoritățile medicale din România.
            </p>
          </div>

          {/* Mărturii și context */}
          <div className="max-w-3xl space-y-8 text-black text-center">
            <blockquote className="italic border-l-4 border-gray-400 pl-4 text-lg bg-[#f0a8a3] py-5 px-5 rounded text-left">
              „Toată viața am fost complexată din cauza greutății mele... Nu voiam să mai aud că sunt grasă.” — <strong>Cristina Gheorghe</strong>, clientă Lipovon.
            </blockquote>
            <blockquote className="italic border-l-4 border-gray-400 pl-4 text-lg bg-[#f0a8a3] py-5 px-5 rounded text-left">
              „Un medicament trebuie autorizat doar dacă beneficiile depășesc riscurile... În special, riscurile cardiovasculare sunt foarte importante.” — <strong>Ion Fulga</strong>, UMF Carol Davila.
            </blockquote>
            <blockquote className="italic border-l-4 border-gray-400 pl-4 text-lg bg-[#f0a8a3] py-5 px-5 rounded text-left">
              „Am zis că mor. N-am putut să iau pastilele decât o săptămână... depresie, anxietate, bătăi de inimă rapide.” — <strong>Anonim</strong>.
            </blockquote>
            <p>
              Lipovon este un produs comercializat online ca supliment pentru slăbit rapid. În multe cazuri, conține <strong>Sibutramină</strong> — o substanță interzisă în Uniunea Europeană din 2010 din cauza riscurilor majore pentru inimă și creier.
            </p>
          </div>

          {/* Introducere la carduri */}
          <div className="max-w-3xl text-center text-lg text-black">
            <p>
              Mai jos găsești o prezentare detaliată a principalelor riscuri asociate cu administrarea Lipovon, bazată pe documentare medicală și mărturii reale – <strong>Reportaj Recorder</strong>.
            </p>
          </div>

          {/* 🧠 RiskCards */}
          <div className="w-full flex justify-center">
            <RiskCards />
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 text-center text-black mt-10 max-w-xl">
            <p className="text-lg font-medium">
              Ai trecut printr-o experiență negativă cu Lipovon?
            </p>
            <p className="text-sm italic">
              Ne poți scrie anonim. Vrem să documentăm cât mai clar impactul acestor produse și să ajutăm la prevenirea altor cazuri.
            </p>
            
            <h2 className="text-base font-semibold text-black mb-2 mt-5">📚 Surse și referințe</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://adevarul.ro/stiri-interne/societate/pastila-de-slabit-interzisa-in-ue-noua-senzatie-2446823.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  Adevărul – Pastila de slăbit interzisă în UE, dar vândută online
                </a>
              </li>
              <li>
                <a
                  href="https://recorder.ro/noua-senzatie-de-pe-tiktok-lipovon-pastila-de-slabit-cu-risc-de-moarte-subita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  Recorder – Lipovon, pastila promovată pe TikTok care poate duce la moarte subită
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@recorder.ro/video/7509475880343833878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  TikTok – Reportaj video despre Lipovon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Risks
