import { FaBrain, FaWeight, FaExclamationTriangle, FaHeartbeat, FaFlask } from "react-icons/fa";
import Carousel from "@/components/ui/Carousel"

const RiskCard = ({ icon: Icon, title, description,link,bgColor,iconColor }) => (
  <div className="flex flex-col  items-center h-full risk-card-1 shadow p-4 rounded-xl space-x-4 space-y-4"
  style={{ backgroundColor: bgColor }}>
    <Icon className="text-4xl "
    style={{ color: iconColor }} />
    <div>
      <h3 className="font-bold text-center text-lg text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
    <div className="mt-6">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto bg-[#e74c3c] hover:bg-[#c0392b] text-white px-4 py-2 rounded text-sm font-semibold transition"
        >
          Află mai mult
        </a>
        </div>
  </div>

  
);

const RiskCards = () => (
 
    <Carousel>
    <RiskCard
  bgColor="#ffd6d6"
  iconColor="#d62828"
      icon={FaBrain}
      title="Tulburări Psihice"
      description="Poate provoca anxietate, depresie severă sau stări psihotice, mai ales în cazul utilizării prelungite."
      link="https://www.drugs.com/sfx/sibutramine-side-effects.html"
    />
    <RiskCard
   bgColor="#fff3cd"
  iconColor="#ff9f1c"
      icon={FaWeight}
      title="Pierdere Excesivă în Greutate"
      description="Scăderea bruscă și nesănătoasă în greutate poate duce la dezechilibre metabolice și probleme digestive."
      link="https://www.youtube.com/watch?v=8cvIe_YuG5g"
    />
    <RiskCard
  bgColor="#e3fcec"
  iconColor="#20c997"
      icon={FaExclamationTriangle}
      title="Înșelătorie Comercială"
      description="Produsul este vândut cu promisiuni false și fără suficiente studii clinice sau avize medicale."
      link="https://www.youtube.com/watch?v=8cvIe_YuG5g"
    />
    <RiskCard
   bgColor="#fde2e2"
  iconColor="#c1121f"
      icon={FaHeartbeat}
      title="Probleme Cardiovasculare"
      description="Crește riscul de hipertensiune, infarct sau AVC din cauza ingredientelor interzise precum Sibutramina."
      link="https://www.youtube.com/watch?v=8cvIe_YuG5g"
    />
    <RiskCard
    bgColor="#e8eaf6"
  iconColor="#6c63ff"
      icon={FaFlask}
      title="Ingrediente Netestate"
      description="Compoziția exactă este adesea necunoscută, cu risc mare de contaminare și lipsă de control al calității."
      link="https://www.youtube.com/watch?v=8cvIe_YuG5g"
    />
    </Carousel>

);

export default RiskCards;