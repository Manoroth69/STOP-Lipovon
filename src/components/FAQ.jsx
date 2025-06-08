import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const faqItems = [
    {
      question: "Ce este Lipovon?",
      answer:
        "Lipovon este o pastilă care promite pierderea în greutate rapidă, dar poate avea efecte secundare grave.",
    },
    {
      question: "Ești în siguranță dacă îl folosești?",
      answer:
        "Nu există dovezi științifice solide care să susțină siguranța pe termen lung a acestui produs.",
    },
    {
      question: "De ce este interzisă Sibutramina?",
      answer:
        "Sibutramina a fost interzisă în multe țări din cauza riscurilor cardiovasculare grave.",
    },
    {
      question: "Ce este StopLipovon?",
      answer:
        "O inițiativă de informare publică despre riscurile asociate cu Lipovon și produse similare.",
    },
    {
      question: "Ce alternative sigure există?",
      answer:
        "Consultarea unui medic specialist pentru un plan de slăbire sigur și eficient pe termen lung.",
    },
  ];

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <Helmet>
        <title>FAQ - StopLipovon | Riscuri și informații despre Lipovon</title>
        <meta
          name="description"
          content="Află cele mai frecvente întrebări despre Lipovon și riscurile asociate. Informații sigure și alternative pentru pierderea în greutate."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section aria-label="Frequently Asked Questions about Lipovon" className="space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
              <CollapsibleTrigger asChild>
                <motion.button
                  className="w-full text-left p-4 border-b border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-between group"
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className="text-white font-medium group-hover:text-blue-100 transition-colors">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </motion.div>
                </motion.button>
              </CollapsibleTrigger>

              <CollapsibleContent
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
              >
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="p-4 text-white/80 bg-white/5 backdrop-blur-sm"
                >
                  {item.answer}
                </motion.div>
              </CollapsibleContent>
            </Collapsible>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default FAQ;
