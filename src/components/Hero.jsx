import { useState, useEffect } from "react";
import { AlertTriangle, AlertCircle, Info, CheckCircle, HelpCircle, Share2 } from "lucide-react";
import { FloatingPills } from "./FloatingPills";
import { ParticleBackground } from "./ParticleBackground";
import pill from '../assets/pill.webp';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

const MotionA = motion.create('a');

export const Hero = () => {
  const iconMap = {
    error: <AlertTriangle className="w-4 h-4 text-red-600" />,
    warning: <AlertCircle className="w-4 h-4 text-yellow-600" />,
    info: <Info className="w-4 h-4 text-blue-600" />,
    success: <CheckCircle className="w-4 h-4 text-green-600" />,
    caution: <HelpCircle className="w-4 h-4 text-orange-600" />,
  };

  const colorMap = {
    error: "bg-red-50 text-red-600 border-red-200",
    warning: "bg-yellow-50 text-yellow-600 border-yellow-200",
    info: "bg-blue-50 text-blue-600 border-blue-200",
    success: "bg-green-50 text-green-600 border-green-200",
    caution: "bg-orange-50 text-orange-600 border-orange-200",
  };

  const warningCards = [
    {
      text: "Interzis Internațional",
      position: "top-left",
      type: "error",
      url: "https://www.ema.europa.eu/en/medicines/human/referrals/sibutramine"
    },
    {
      text: "Risc Cardiac",
      position: "top-right",
      type: "warning",
      url: "https://www.ahajournals.org/doi/full/10.1161/01.cir.0000113019.46326.6c"
    },
    {
      text: "Tensiune Crescută!",
      position: "bottom-left",
      type: "caution",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2918216/"
    },
    {
      text: "Fii în siguranță!",
      position: "bottom-right",
      type: "success",
      url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
    },
  ];

  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-screen">
      <div className="container mx-auto px-4">
      <Helmet>
        <title>Stop Lipovon – Adevărul despre acest „supliment”</title>
        <meta
          name="description"
          content="Află adevărul despre Lipovon – un produs cu sibutramină, interzisă în UE. Informează-te despre riscuri și pericole."
        />
        <meta property="og:title" content="Stop Lipovon – Adevărul despre acest „supliment”" />
        <meta
          property="og:description"
          content="Lipovon conține sibutramină – o substanță periculoasă interzisă. Află care sunt riscurile și cum să te protejezi."
        />
        <meta property="og:image" content="https://stoplipovon.com/og-image.jpg" />
        <meta property="og:url" content="https://stoplipovon.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stop Lipovon – Adevărul despre acest „supliment”" />
        <meta
          name="twitter:description"
          content="Lipovon conține sibutramină – interzisă din 2010. Află de ce e periculoasă."
        />
        <meta name="twitter:image" content="https://stoplipovon.com/og-image.jpg" />
        <link rel="canonical" href="https://stoplipovon.com/" />
      </Helmet>

      <div className="container">
        <ParticleBackground />
        <FloatingPills />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Hero text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="space-y-8"
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                    Lipovon
                  </span>{" "}
                  <span className="text-slate-700">– cât de sigur este cu adevărat?</span>
                </h1>

                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Promovată ca supliment natural, Lipovon conține{" "}
                    <span className="text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer">
                      Sibutramină
                    </span>{" "}
                    – o substanță interzisă în UE din 2010.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Nu te baza pe reclame. Consultă un medic sau o persoană de încredere înainte de a consuma Lipovon.
                  </p>
                </div>

                <div className="flex sm:flex-row gap-4">
                  <Link to="/riscuri">
                    <Button
                      variant="primary"
                      className="flex items-center justify-center  bg-blue-600/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Află Riscurile</span>
                        <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                          <span className="text-xs">→</span>
                        </div>
                      </span>
                    </Button>
                  </Link>

                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="secondary"
                      className="flex items-center justify-center space-x-2 bg-white px-6 py-3 rounded-xl font-semibold border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                    >
                      <Share2 className="w-5 h-5" />
                      <span>Distribuie</span>
                    </Button>
                  </a>
                </div>
              </motion.div>

              {/* Image + animated warnings */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <motion.div
                    className="opacity-50 relative z-10 transform hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src={pill}
                      alt="Cutie Lipovon și avertisment despre Sibutramină"
                      loading="lazy"
                      width={400}
                      height={400}
                      className="z-10 drop-shadow-xl rounded-3xl"
                    />
                  </motion.div>

                  {warningCards.map((card, index) => {
                    const cardType = card.type || "info";
                    return (
                      <MotionA
                        key={index}
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{
                          opacity: 1,
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          delay: 1 + index * 0.5,
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`absolute z-20 pointer-events-auto px-4 py-3 rounded-lg shadow-lg text-sm font-medium border whitespace-nowrap
                          ${colorMap[cardType]} hover:underline hover:cursor-pointer ${
                            card.position === "top-left"
                              ? "-top-5 -left-1"
                              : card.position === "top-right"
                              ? "-top-5 -right-1"
                              : card.position === "bottom-left"
                              ? "-bottom-5 -left-1"
                              : "-bottom-5 -right-1"
                          }`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="flex items-center space-x-2">
                          {iconMap[cardType]}
                          <span>{card.text}</span>
                        </div>
                      </MotionA>
                    );
                  })}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
