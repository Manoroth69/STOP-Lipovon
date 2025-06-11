import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Home,
  HelpCircle,
  FileText,
  Shield,
  HandCoins,
  Settings,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: "Acasă", to: "/" },
    { icon: HelpCircle, label: "Ce este Lipovon?", to: "/despre" },
    { icon: FileText, label: "Riscuri", to: "/riscuri" },
    { icon: Shield, label: "Protejează-te", to: "/protejeaza-te" },
     { icon: Settings, label: "Ajutor", to: "/ajutor" },
    { icon: HandCoins, label: "Donații", to: "/donatii" },

  ];

  return (
    <>
      <Helmet>
  <title>Stop Lipovon - Află Riscurile și Cum să te Protejezi</title>
  <meta
    name="description"
    content="StopLipovon.com - Informare completă despre Lipovon, riscurile lui și metode de protecție. Informează-te corect și protejează-ți sănătatea acum!"
  />
  <link rel="canonical" href="https://stoplipovon.com/" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Stop Lipovon - Află Riscurile și Cum să te Protejezi" />
  <meta
    property="og:description"
    content="Află adevărul despre Lipovon și cum să te protejezi. StopLipovon.com - sursa ta de informare corectă și sigură."
  />
  <meta property="og:url" content="https://stoplipovon.com/" />
  <meta property="og:image" content="https://stoplipovon.com/og-image.jpg" />
  <meta property="og:image:alt" content="Logo Stop Lipovon" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Stop Lipovon - Află Riscurile și Cum să te Protejezi" />
  <meta
    name="twitter:description"
    content="Informează-te corect despre Lipovon și riscurile sale. Protejează-ți sănătatea cu StopLipovon.com."
  />
  <meta name="twitter:image" content="https://stoplipovon.com/og-image.jpg" />
  <meta name="twitter:image:alt" content="Logo Stop Lipovon" />
  <meta name="twitter:site" content="@stoplipovon" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Stop Lipovon",
          "url": "https://stoplipovon.com",
          "logo": "https://stoplipovon.com/logo.png",
          "sameAs": [
            "https://facebook.com/stoplipovon",
            "https://twitter.com/stoplipovon",
            "https://instagram.com/stoplipovon"
          ]
        },
        {
          "@type": "WebSite",
          "url": "https://stoplipovon.com",
          "name": "Stop Lipovon",
          "publisher": {
            "@id": "https://stoplipovon.com/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://stoplipovon.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      ]
    })}
  </script>
</Helmet>

      <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "shadow-lg" : ""
  } bg-blue-600/90 backdrop-blur-md`}
>
  <div className="w-full overflow-x-hidden">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2 group relative">
          <Link to="/" className="flex items-center space-x-2 group relative">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent z-10">
              STOP
            </span>
            <span className="text-xl font-semibold text-white">LIPOVON</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map(({ icon: Icon, label, to }, index) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-white text-blue-800 shadow-md"
                    : "text-white hover:bg-blue-700/80"
                }`
              }
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-blue-700/50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white rounded" />
              <div className="w-full h-0.5 bg-white rounded" />
              <div className="w-full h-0.5 bg-white rounded" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-blue-800/95 backdrop-blur-md shadow-lg border-t border-blue-600">
          <nav className="flex flex-col py-4">
            {navItems.map(({ icon: Icon, label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-6 py-3 text-base transition-all duration-200 ${
                    isActive
                      ? "bg-white text-blue-800"
                      : "text-white hover:bg-blue-700/80"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  </div>
</header>

    </>
  );
};

export default Header;
