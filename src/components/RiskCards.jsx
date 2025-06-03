import { FaBrain, FaWeight, FaExclamationTriangle, FaHeartbeat, FaFlask } from "react-icons/fa";


const RiskCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start risk-card-1 shadow p-4 rounded-xl space-x-4">
    <Icon className="text-red-500 text-2xl mt-1" />
    <div>
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const RiskCards = () => (
  <div className=" grid gap-4 md:grid-cols-2">
    <RiskCard
      icon={FaBrain}
      title="Tulburări Psihice"
      description="Poate provoca anxietate, depresie severă sau stări psihotice, mai ales în cazul utilizării prelungite."
    />
    <RiskCard
      icon={FaWeight}
      title="Pierdere Excesivă în Greutate"
      description="Scăderea bruscă și nesănătoasă în greutate poate duce la dezechilibre metabolice și probleme digestive."
    />
    <RiskCard
      icon={FaExclamationTriangle}
      title="Înșelătorie Comercială"
      description="Produsul este vândut cu promisiuni false și fără suficiente studii clinice sau avize medicale."
    />
    <RiskCard
      icon={FaHeartbeat}
      title="Probleme Cardiovasculare"
      description="Crește riscul de hipertensiune, infarct sau AVC din cauza ingredientelor interzise precum Sibutramina."
    />
    <RiskCard
      icon={FaFlask}
      title="Ingrediente Netestate"
      description="Compoziția exactă este adesea necunoscută, cu risc mare de contaminare și lipsă de control al calității."
    />
  </div>
);

export default RiskCards;