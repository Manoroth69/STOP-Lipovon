import React, { useEffect } from "react";


const LipovonWarning = () => (
  <section className="">

  

  <div className="bg-[#D1F2FA] p-6 md:p-10  rounded-md text-center">

      <div className="flex  rounded  p-6 flex-col items-center justify-center gap-4  bg-[#D1F2FA] min-h-screen">
      
      <h2 className="text-black  text-center max-w-lg  text-4xl sm:text-5xl  font-bold leading-tight ">
               Cum să te protejezi de capcana Lipovon?
             </h2>



    <div className="grid md:grid-cols-2 gap-6  py-6 text-left">

             
      {/* Left Column */}

      <div className="space-y-4  pr-4">
 <div className="bg-[#FFCDD2] p-4 rounded-2xl shadow-md">
        <p className="font-medium">
          Nu cumpăra produse fără surse clare și aprobări oficiale!
        </p>
      </div>

        <div className="bg-[#C8E6C9] p-4 rounded-2xl shadow-md">
        <p className="font-medium">
          Consultă întotdeauna un medic sau un specialist în nutriție înainte să iei orice supliment.
        </p>
      </div>

        <div className="bg-[#FFE0B2] p-4 rounded-2xl shadow-md">
        <p className="font-medium">
          Evită să cumperi de la vânzători dubioși de pe rețele sociale sau site-uri neautorizate.
        </p>
      </div>

      </div>



      {/* Right Column */}

      <div className="space-y-4 pl-4">

          <div className="bg-[#E1BEE7] p-4 rounded-2xl shadow-md">
        <p className="font-medium">
          Nu te lăsa păcălit de reclame cu „soluții miraculoase” – dacă pare prea frumos ca să fie adevărat, probabil e o minciună.
        </p>
      </div>

       <div className="bg-[#B3E5FC] p-4 rounded-2xl shadow-md">
        <p className="font-medium">
          Informează-te din surse verificate – site-uri oficiale, studii științifice, organizații de sănătate.
        </p>
      </div>

         <div className="bg-[#D7CCC8] p-4 rounded-2xl shadow-md">
        <p className="font-medium">
          Dacă ai dubii, raportează produsul către Protecția Consumatorului sau Direcția de Sănătate Publică.
        </p>
      </div>

      </div>

    </div>



    {/* Buttons */}

    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">

      <button className="bg-[#2B1970] text-white font-bold py-2 px-6 rounded-md hover:bg-[#3c2c85] transition">

        Fii Informat, Fii În Siguranță!

      </button>

      <button className="border border-[#2B1970] text-[#2B1970] font-bold py-2 px-6 rounded-md hover:bg-[#2B1970] hover:text-white transition">

        Distribuie Mai Departe!

      </button>

    </div>

  </div>
</div>
</section>
);



export default LipovonWarning;

