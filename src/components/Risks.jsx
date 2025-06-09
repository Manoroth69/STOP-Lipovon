import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Tab } from '@headlessui/react'
import RiskCards from './RiskCards'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import ContactEmail from "@/components/ContactEmail";

const testimoniale = [
  {
    id: 1,
    text: '„Toată viața am fost complexată din cauza greutății mele... Nu voiam să mai aud că sunt grasă.” — Cristina Gheorghe',
  },
  {
    id: 2,
    text: '„Un medicament trebuie autorizat doar dacă beneficiile depășesc riscurile... În special, riscurile cardiovasculare sunt foarte importante.” — Ion Fulga',
  },
  {
    id: 3,
    text: '„Am zis că mor. N-am putut să iau pastilele decât o săptămână... depresie, anxietate, bătăi de inimă rapide.” — Anonim',
  },
]

const surse = [
  {
    text: 'Adevărul – Pastila de slăbit interzisă în UE, dar vândută online',
    href: 'https://adevarul.ro/stiri-interne/societate/pastila-de-slabit-interzisa-in-ue-noua-senzatie-2446823.html',
  },
  {
    text: 'Recorder – Lipovon, pastila promovată pe TikTok care poate duce la moarte subită',
    href: 'https://recorder.ro/noua-senzatie-de-pe-tiktok-lipovon-pastila-de-slabit-cu-risc-de-moarte-subita/',
  },
  {
    text: 'TikTok – Reportaj video despre Lipovon',
    href: 'https://www.tiktok.com/@recorder.ro/video/7509475880343833878',
  },
]

const Risks = () => {
  return (
    <>
      {/* SEO META */}
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

      <section className="w-full py-30 px-4 bg-white overflow-x-hidden">
        <div className="container mx-auto flex flex-col items-center space-y-5">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[660px] space-y-6"
          >
            <h1 className="text-black text-4xl sm:text-5xl font-bold leading-tight">
              Ce riști cu adevărat când iei Lipovon?
            </h1>
            <p className="text-lg text-black">
              Dincolo de promisiunile de slăbire rapidă, Lipovon poate provoca <strong>tulburări psihice</strong> și <strong>afecțiuni cardiovasculare grave</strong>. Produsul este promovat prin <strong>practici înșelătoare</strong> și nu este reglementat de autoritățile medicale din România.
            </p>
          </motion.div>

          {/* Tabs */}
          <Tab.Group>
            <Tab.List className="flex flex-wrap justify-center gap-4 border-b border-gray-300">
              {['Riscuri', 'Mărturii', 'Surse și referințe'].map((label, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    cn(
                      'py-2 px-4 text-base sm:text-lg rounded-t-lg font-medium focus:outline-none',
                      selected ? 'bg-black text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    )
                  }
                >
                  {label}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className="mt-10 w-full">
              {/* Riscuri */}
              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-6xl mx-auto flex justify-center"
                >
                  <RiskCards />
                </motion.div>
              </Tab.Panel>

              {/* Mărturii */}
              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 max-w-3xl text-black text-left mx-auto"
                >
                  {testimoniale.map((item) => (
                    <blockquote
                      key={item.id}
                      className="italic border-l-4 border-gray-400 pl-4 text-lg bg-[#f0a8a3] py-5 px-5 rounded"
                    >
                      {item.text}
                    </blockquote>
                  ))}
                </motion.div>
              </Tab.Panel>

              {/* Surse */}
              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-black text-left text-lg space-y-3 max-w-3xl mx-auto"
                >
                  {surse.map((item, index) => (
                    <div key={index}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline"
                      >
                        • {item.text}
                      </a>
                    </div>
                  ))}
                </motion.div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-black mt-16 max-w-xl space-y-2"
          >
            <p className="text-lg font-medium">
              Ai trecut printr-o experiență negativă cu Lipovon?
            </p>
            <p className="text-sm italic">
            Vrem să documentăm cât mai clar impactul acestor produse și să ajutăm la prevenirea altor cazuri.
            </p>
            <ContactEmail/>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Risks
