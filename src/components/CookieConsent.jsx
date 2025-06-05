import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (customConsent = consent) => {
    localStorage.setItem("cookieConsent", JSON.stringify(customConsent));
    setShowBanner(false);
    setSettingsOpen(false);
  };

  const acceptAll = () => {
    const allConsent = {
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    };
    saveConsent(allConsent);
  };

  const declineAll = () => {
    const basicConsent = { necessary: true };
    saveConsent(basicConsent);
  };

  const toggleCategory = (category) => {
    setConsent((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-fade text-black shadow-lg z-50 p-4 border-t">
      {!settingsOpen ? (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm">
            Folosim cookie-uri pentru a îmbunătăți experiența ta și pentru a
            afișa reclame relevante. Alege ce cookie-uri accepți.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setSettingsOpen(true)}
              className="text-sm px-3 py-1 border border-gray-400 rounded hover:bg-gray-100"
            >
              Setări
            </button>
            <button
              onClick={declineAll}
              className="text-sm px-3 py-1 border border-red-400 text-red-600 rounded hover:bg-red-50"
            >
              Refuză
            </button>
            <button
              onClick={acceptAll}
              className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Acceptă toate
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-base font-semibold mb-2">Setări Cookies</h3>
          <div className="grid gap-2 text-sm">
            <label>
              <input type="checkbox" checked disabled className="mr-2" />
              <strong>Necesare</strong> – Funcții esențiale ale site-ului
            </label>
            <label>
              <input
                type="checkbox"
                checked={consent.preferences}
                onChange={() => toggleCategory("preferences")}
                className="mr-2"
              />
              Preferințe – memorează setările tale
            </label>
            <label>
              <input
                type="checkbox"
                checked={consent.statistics}
                onChange={() => toggleCategory("statistics")}
                className="mr-2"
              />
              Statistici – ne ajută să înțelegem traficul pe site
            </label>
            <label>
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={() => toggleCategory("marketing")}
                className="mr-2"
              />
              Marketing – reclame personalizate, Google AdSense
            </label>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => saveConsent()}
              className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Salvează preferințele
            </button>
            <button
              onClick={() => setSettingsOpen(false)}
              className="text-sm px-3 py-1 border border-gray-400 rounded hover:bg-gray-100"
            >
              Înapoi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
