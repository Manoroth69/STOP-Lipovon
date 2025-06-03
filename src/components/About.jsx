import React from 'react'
import { Button } from '@/components/ui/Button';
import HeroImg from '../assets/HeroImg.png';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/Accordion";
import {FaFacebook, FaInstagram, FaTiktok, FaTwitter} from "react-icons/fa";



const About = () => {
  return (
    <section className="about-bg w-full py-25 bg-blue-fade flex items-center justify-center px-4 ">
         <div className="container">
         <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
   
           {/* LEFT COLUMN */}
           <div className="text-white space-y-6">
             <h2 className="text-white  text-4xl sm:text-5xl  font-bold leading-tight ">
               Ce este StopLipovon?
             </h2>
             
             <p className="  text-lg text-shadow-amber-50">
               Suntem aici sa oferim informatii reale si verificate despre efectele produsului Lipovon si despre riscurile pe care le implica.
             </p>
             <div className="flex gap-4 pt-4">
               <a href="https:/facebook.com" target="_blank" rel="noopener noreferrer"className='social-icon  transition'>
               <FaFacebook className="w-6 h-6"/>
               </a>

               <a href="https:/instagram.com" target="_blank" rel="noopener noreferrer"className='social-icon  transition'>
               <FaInstagram className="w-6 h-6"/>
               </a>

               <a href="https:/instagram.com" target="_blank" rel="noopener noreferrer"className='social-icon transition'>
               <FaTiktok className="w-6 h-6"/>
               </a>
               
               <a href="https:/instagram.com" target="_blank" rel="noopener noreferrer"className='social-icon transition'>
              <FaTwitter className="w-6 h-6"/>
               </a>
               
  
         
             </div>
           </div>
   
           {/* RIGHT COLUMN ACCORDION*/}
          
  <Accordion type="single" collapsible className="w-full h-full max-w-md flex flex-col justify-start text-white font-semibold">
             <AccordionItem value="item-1">
    <AccordionTrigger>Ce este Lipovon?</AccordionTrigger>
    <AccordionContent>
      Lipovon este un supliment alimentar promovat ca ajutor pentru slăbit. Conține două substanțe active: Extract de Hoodia Gordonii și L-Carnitină. Problema este că, în unele cazuri, a fost depistată și prezența **Sibutraminei**, o substanță interzisă în Uniunea Europeană din cauza efectelor sale adverse grave asupra sănătății.
    </AccordionContent>
  </AccordionItem>

  {/* 2. Ești în siguranță dacă îl folosești? */}
  <AccordionItem value="item-2">
    <AccordionTrigger>Ești în siguranță dacă îl folosești?</AccordionTrigger>
    <AccordionContent>
      Nu. Administrarea Lipovonului poate duce la reacții adverse severe, cum ar fi **creșterea tensiunii arteriale, palpitații, depresie, anxietate**, și chiar infarct miocardic sau accident vascular cerebral. Lipsa reglementării și etichetarea înșelătoare îl fac extrem de riscant pentru consum.
    </AccordionContent>
  </AccordionItem>

  {/* 3. De ce este interzisă Sibutramina? */}
  <AccordionItem value="item-3">
    <AccordionTrigger>De ce este interzisă Sibutramina?</AccordionTrigger>
    <AccordionContent>
      Sibutramina a fost retrasă de pe piață în 2010 de către Agenția Europeană a Medicamentului din cauza riscului crescut de evenimente cardiovasculare majore. Studiile au demonstrat o corelație între administrarea sa și **creșterea riscului de infarct și AVC**, în special la persoane supraponderale.
    </AccordionContent>
  </AccordionItem>

  {/* 4. Ce este StopLipovon? */}
  <AccordionItem value="item-4">
    <AccordionTrigger>Ce este StopLipovon?</AccordionTrigger>
    <AccordionContent>
      StopLipovon este o campanie de informare publică destinată conștientizării pericolelor ascunse ale suplimentelor nesigure precum Lipovon. Scopul este să încurajăm oamenii să **verifice sursele**, să **evite tratamentele „minune”** și să consulte profesioniști medicali înainte de a lua decizii care le afectează sănătatea.
    </AccordionContent>
  </AccordionItem>

  {/* 5. Ce alternative sigure există? */}
  <AccordionItem value="item-5">
    <AccordionTrigger>Ce alternative sigure există?</AccordionTrigger>
    <AccordionContent>
      În locul pastilelor dubioase pentru slăbit, este recomandată o combinație între **nutriție echilibrată, mișcare regulată și suport psihologic** dacă este necesar. Consultă întotdeauna un nutriționist sau medic specialist care îți poate oferi un plan personalizat și sigur pentru tine.
    </AccordionContent>
  </AccordionItem>
          </Accordion>

         </div>
         </div>
       </section>
  )
}

export default About
