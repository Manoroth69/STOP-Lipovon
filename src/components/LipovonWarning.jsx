import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/Button';
import { motion } from "framer-motion";
import { useState } from "react";

const LipovonWarning = ({ handleExternalLinkClick, handleFacebookClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const protectionTips = [
    {
      id: 1,
      title: "Verifică sursele",
      content: "Nu cumpăra produse fără surse clare și aprobări oficiale!",
      color: "from-red-400 to-red-600",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Consultă specialistul",
      content: "Consultă întotdeauna un medic sau un specialist în nutriție.",
      color: "from-green-400 to-green-600",
      icon: "👨‍⚕️"
    },
    {
      id: 3,
      title: "Evită surse dubioase",
      content: "Evită vânzători dubioși de pe rețele sociale sau site-uri necunoscute.",
      color: "from-amber-400 to-amber-600",
      icon: "🚫"
    },
    {
      id: 4,
      title: "Fii sceptic",
      content: "Nu crede în soluții miraculoase — informarea e cheia siguranței.",
      color: "from-purple-400 to-purple-600",
      icon: "🤔"
    },
    {
      id: 5,
      title: "Verifică studiile",
      content: "Verifică informațiile din surse oficiale și studii științifice.",
      color: "from-blue-400 to-blue-600",
      icon: "📚"
    },
    {
      id: 6,
      title: "Raportează",
      content: "Raportează produsele suspecte către ANPC sau DSP.",
      color: "from-brown-400 to-brown-600",
      icon: "📢"
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
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-30 bg-gradient-to-br from-indigo-50 to-purple-50  px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Cum să te protejezi de capcana Lipovon?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Află cum să eviți produsele nesigure și să faci alegeri informate pentru sănătatea ta.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {protectionTips.map((tip) => (
            <motion.div
              key={tip.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCard(tip.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${hoveredCard === tip.id ? "shadow-xl" : ""}`}
            >
              <div className={`h-2 bg-gradient-to-r ${tip.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{tip.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
           <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="https://www.romaniatv.net/mare-atentie-la-lipovon-pastila-de-slabit-care-a-devenit-virala-pe-tiktok-specialistii-spun-ca-exista-risc-de-moarte-subita_8957509.html?utm_source=chatgpt.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition"
>
  Fii informat, fii în siguranță!
</motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFacebookClick}
              href="https://www.facebook.com/profile.php?id=61576984151946"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition"
            >
              Distribuie mai departe!
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-gray-500 max-w-2xl mx-auto"
          >
            Informațiile prezentate pe această pagină au un scop informativ și nu înlocuiesc sfatul medical de specialitate. Consultă întotdeauna un medic înainte de a lua decizii privind sănătatea ta. Nicio parte a conținutului nu are intenția de a diagnostica, trata sau preveni vreo afecțiune.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default LipovonWarning;