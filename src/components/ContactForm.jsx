import { useState } from "react";
import Turnstile from "react-turnstile";

export default function ContactForm() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Te rog să confirmi că ești om.");
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    formData.append("captcha_token", token);

    try {
      const response = await fetch("https://formspree.io/f/xovwjlbl", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setToken("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nume" className="block mb-1 font-medium">
          Nume (opțional)
        </label>
        <input
          type="text"
          id="nume"
          name="nume"
          placeholder="Prenume și/sau nume"
          className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          Adresă de email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="exemplu@email.com"
          className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <div>
        <label htmlFor="mesaj" className="block mb-1 font-medium">
          Mesajul tău
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          rows="4"
          required
          placeholder="Scrie întrebarea sau sugestia ta aici..."
          className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Cloudflare Turnstile CAPTCHA */}
      <Turnstile
        sitekey="0x4AAAAAABgXTdCgCj_tGiws"
        onVerify={(token) => setToken(token)}
      />

      <button
        type="submit"
        className="bg-[#2B1970] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md hover:scale-105 cursor-pointer"
      >
        Trimite Mesajul
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm">Mesaj trimis cu succes!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">
          A apărut o eroare. Încearcă din nou mai târziu.
        </p>
      )}

      <p className="text-xs text-gray-900 mt-2">
        Prin trimiterea acestui mesaj, sunteți de acord ca datele transmise să fie utilizate exclusiv pentru a vă răspunde. Nu stocăm și nu transmitem informațiile către terți.
      </p>
    </form>
  );
}
