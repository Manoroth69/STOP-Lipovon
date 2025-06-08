import React from "react";

export default function Author() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-30 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Despre autor</h1>
      <p className="mb-4">
        Acest site a fost creat ca inițiativă civică anonimă, din dorința de a combate dezinformarea și promovarea agresivă a suplimentelor cu eficiență îndoielnică, precum Lipovon.
      </p>
      <p className="mb-4">
        Informațiile prezentate pe acest site sunt bazate pe surse publice, analize independente și opinii informate. Nu suntem medici sau autorități medicale, iar conținutul are scop informativ și educativ.
      </p>
      <p className="mb-4">
        Proiectul este realizat pro bono și nu are legături comerciale cu niciun producător de suplimente alimentare sau produse farmaceutice.
      </p>
      <p className="text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} StopLipovon.com – Inițiativă civică anonimă
      </p>
    </main>
  );
}
