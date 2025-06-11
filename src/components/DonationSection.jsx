import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { SiStripe, SiRevolut } from "react-icons/si";
import { BiCoffee } from "react-icons/bi";
import Coffee from "../assets/Coffee.webp";

const DonationSection = () => {
  const donationMethods = [
    {
      id: "stripe",
      name: "Donează cu Stripe",
      icon: <SiStripe className="text-2xl" />,
      color: "bg-purple-600 hover:bg-purple-700 text-white",
      url: "https://donate.stripe.com/4gM28qfNF3Qx1Gh5qfcQU01"
    },
    {
      id: "revolut",
      name: "Donează cu Revolut",
      icon: <SiRevolut className="text-2xl" />,
      color: "bg-teal-600 hover:bg-teal-700 hover:text-white",
      url: "https://revolut.me/donatie"
    },
    {
      id: "coffee",
      name: "Cumpără-mi o cafea!",
      icon: <BiCoffee className="text-2xl" />,
      color: "bg-[#ae5304] hover:bg-[#FFEE88] text-white hover:text-black",
      url: "https://buymeacoffee.com/stoplipovon"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Stop Lipovon – Adevărul despre acest „supliment”</title>
        <meta
          name="description"
          content="Sprijină StopLipovon în lupta împotriva dezinformării și a produselor periculoase. Donează prin Stripe, PayPal sau Revolut. Împreună protejăm comunitatea!"
        />
        <link rel="canonical" href="https://stoplipovon.com/donatii" />
        <meta property="og:title" content="Donează pentru o informare corectă" />
        <meta property="og:description" content="Susține misiunea StopLipovon cu o donație. Ajută-ne să salvăm vieți și să educăm publicul!" />
        <meta property="og:url" content="https://stoplipovon.com/donatii" />
        <meta property="og:image" content="https://stoplipovon.com/assets/og-donatii.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#2a206b] to-[#3a2b8f] py-30 px-6 md:px-12 text-white overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl -z-10"
          aria-hidden="true"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 10, delay: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.header variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Susține <span className="text-purple-300">Misiunea</span> Noastră
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-xl">
                Ajută-ne să informăm corect și să protejăm comunitatea. Orice donație contează și sprijină eforturile noastre
                împotriva produselor periculoase.
              </p>
            </motion.header>

            <motion.nav
              variants={containerVariants}
              aria-label="Modalități de donație"
              className="space-y-6"
            >
              {donationMethods.map((method, index) => (
                <motion.div
                  key={method.id}
                  variants={itemVariants}
                  custom={index + 1}
                  whileHover={{ y: -3 }}
                >
                  <a
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 ${method.color} text-black font-semibold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl`}
                  >
                    <span className="bg-white/20 p-2 rounded-lg">
                      {method.icon}
                    </span>
                    <span>{method.name}</span>
                  </a>
                </motion.div>
              ))}
            </motion.nav>

            <motion.p
              variants={itemVariants}
              className="text-sm text-blue-100 max-w-xl bg-white/10 p-4 rounded-lg"
            >
              Donațiile sunt 100% voluntare și nu presupun niciun schimb de bunuri sau servicii.
              Sumele colectate sunt folosite exclusiv pentru susținerea proiectului StopLipovon –
              mentenanță, hosting și dezvoltare de conținut informativ.
            </motion.p>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-3xl shadow-2xl overflow-hidden">
              <img
                src={Coffee}
                alt="Susține proiectul StopLipovon"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white/90 text-purple-900 font-bold px-6 py-3 rounded-full shadow-lg text-lg"
                >
                  Mulțumim pentru sprijin! ❤️
                </motion.div>
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -left-8 bg-yellow-400 w-16 h-16 rounded-full shadow-lg z-10"
              aria-hidden="true"
            />
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 7,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-8 -right-8 bg-purple-400 w-20 h-20 rounded-full shadow-lg z-10"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DonationSection;