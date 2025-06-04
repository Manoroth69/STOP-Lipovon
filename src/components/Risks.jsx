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
        <link rel="canonical" href="https://stoplipovon.ro/riscuri" />
        <meta property="og:title" content="Ce riști dacă folosești Lipovon?" />
        <meta property="og:description" content="Lipovon conține sibutramină, o substanță periculoasă care poate cauza infarct, AVC și probleme psihice grave." />
        <meta property="og:url" content="https://stoplipovon.ro/riscuri" />
        <meta property="og:image" content="https://stoplipovon.ro/assets/og-riscuri.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section
        aria-label="Riscurile folosirii Lipovon"
        className="risks-bg w-full py-30 px-4"
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
              „Toată viața am fost complexată din cauza greutății mele. Când le vedeam pe surorile mele, atât de silfide, cum se îmbrăcau cu orice, iar eu eram grasa familiei... Nu voiam să mai aud că sunt grasă și cuvinte din astea, urâte rău.” — <strong>Cristina Gheorghe</strong>, clientă Lipovon.
            </blockquote>
            <blockquote className="italic border-l-4 border-gray-400 pl-4 text-lg bg-[#f0a8a3] py-5 px-5 rounded text-left">
              „Un medicament trebuie autorizat doar dacă beneficiile depășesc riscurile. Însă, în cazul acestui produs, riscurile sunt mult mai mari decât beneficiile. În special, riscurile cardiovasculare sunt foarte importante.” — <strong>Ion Fulga</strong>, șeful Catedrei de Farmacologie, UMF Carol Davila.
            </blockquote>
            <blockquote className="italic border-l-4 border-gray-400 pl-4 text-lg bg-[#f0a8a3] py-5 px-5 rounded text-left">
              „Am zis că mor. N-am putut să iau pastilele decât fix o săptămână. În schimb, în săptămâna aia: depresie, stare de anxietate, bătăi de inimă de ziceai că sare inima din piept, dureri de cap, moleșeală, fugeam de lume, nu aveam stare, nu mai suportam pe nimeni.” — <strong>Anonim</strong>.
            </blockquote>
            <p>
              Lipovon este un produs comercializat online ca supliment pentru slăbit rapid. În multe cazuri, conține <strong>Sibutramină</strong> — o substanță interzisă în Uniunea Europeană din 2010 din cauza riscurilor majore pentru inimă și creier.
            </p>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>O femeie din București a ajuns la urgențe cu tahicardie după doar 10 zile de administrare.</li>
              <li>În Bulgaria, un lot de Lipovon a fost retras după ce s-a confirmat prezența Sibutraminei.</li>
              <li>Pe forumuri românești, utilizatoarele reclamă efecte ca insomnie, anxietate și pierderi de memorie.</li>
            </ul>
          </div>

          {/* Introducere la carduri */}
          <div className="max-w-3xl text-center text-lg text-black">
            <p>
              Mai jos găsești o prezentare detaliată a principalelor riscuri asociate cu administrarea Lipovon, bazată pe documentare medicală și mărturii reale – <strong>Reportaj Recorder</strong>.
            </p>
          </div>

          {/* 🧠 RiskCards (asumând layout centrat în interior) */}
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
            <Link to="/donatii">
              <Button variant="tertiary" className="flex items-center gap-2">
                Trimite-ne un mesaj!
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Risks
