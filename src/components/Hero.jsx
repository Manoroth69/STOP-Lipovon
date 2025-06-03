import React from 'react';
import { Button } from '@/components/ui/Button'; // assuming shadcn/ui
import { Card, CardContent } from '@/components/ui/Card';
import HeroImg from '../assets/HeroImg.png';
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-blue-fade w-full  bg-blue-fade flex items-center justify-center px-4 py-25  mt-10 relative">
      <div className="container">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT COLUMN */}
        <div className="text-white space-y-6">
          <h1 className="text-hero-title-primary  text-4xl sm:text-5xl  font-bold leading-tight ">
            <span className="text-muted ">Lipovon:</span> Pastila Care Poate <span className="text-highlight-dark relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#c849f8]">Ucide</span>
          </h1>
          <h2 className="text-hero text-xl sm:text-2xl font-semibold text-blue-100">
            Nu te baza pe reclame. Consulta un medic sau pe cineva de incredere inainte sa folosesti Lipovon.
          </h2>
          <p className=" text-hero text-lg text-blue-200">
            Promovata ca un supliment natural, lipovon contine <span className="text-highlight font-bold">Sibutramina</span> - O substanta interzisa in UE din 2010, asociata cu infarct, AVC si depresie severa.
          </p>
          <div className="flex gap-4 pt-4">
            <Button className="flex items-center gap-1.5  hover:bg-blue-100 transition z-10">Afla Riscurile
                     <FaChevronRight className="text-black text-lg" />

            </Button>
            <Button variant="secondary" className=" ">Distribuie</Button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative w-full h-[400px] flex items-center justify-center">
          {/* CENTRAL IMAGE */}
          <img
            src={HeroImg} // replace with your image
            alt="Hero visual"
            className="z-10"
          />

          
        </div>
      </div>
        </div>
    </section>
  );
};

export default Hero;