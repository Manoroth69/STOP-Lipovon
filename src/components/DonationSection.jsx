const DonationSection = () => {
  return (
   <section className="relative bg-gradient-to-br from-[#E3F2FD] via-[#f9fcff] to-[#E3F2FD] py-20 px-6 md:px-12 text-slate-800 overflow-hidden">
  {/* Animated background shapes */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse -z-10"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-500 -z-10"></div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
    {/* Left Column: Header + Donate */}
    <div className="space-y-8 animate-fade-in-up">
      <header>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Susține Misiunea Noastră</h2>
        <p className="text-lg text-slate-700">
          Ajută-ne să informăm corect și să protejăm comunitatea. Orice donație contează și sprijină eforturile noastre împotriva produselor periculoase.
        </p>
      </header>

      {/* Donation Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href="https://buy.stripe.com/test_donatie"
          target="_blank"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition"
        >
          Donează cu Stripe
        </a>

        <a
          href="https://www.paypal.com/donate/test"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition"
        >
          Donează cu PayPal
        </a>

        <a
          href="https://revolut.me/donatie"
          target="_blank"
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition"
        >
          Donează cu Revolut
        </a>
      </div>
    </div>

    {/* Right Column: Contact Form */}
    <div className="bg-white rounded-3xl shadow-xl p-8 animate-fade-in-up delay-200">
      <h3 className="text-2xl font-semibold mb-4">Ai întrebări? Trimite-ne un mesaj!</h3>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Nume (opțional)</label>
          <input
            type="text"
            placeholder="Prenume și/sau nume"
            className="w-full border border-[#8fdeee] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Adresă de email</label>
          <input
            type="email"
            required
            placeholder="exemplu@email.com"
            className="w-full border border-[#8fdeee] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Mesajul tău</label>
          <textarea
            rows="4"
            required
            placeholder="Scrie întrebarea sau sugestia ta aici..."
            className="w-full border border-[#8fdeee] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md hover:scale-105"
        >
          Trimite Mesajul
        </button>
      </form>
    </div>
  </div>
</section>
  );
};

export default DonationSection;
