import React from 'react'
import { Button } from '@/components/ui/Button';


const Prevent = () => {
  return (
    <section className="risks-bg prevent-bg w-full py-25  flex items-center justify-center px-4 ">
         <div className="container space-y-20">
         <div className="max-w-7xl w-full grid grid-cols-1  gap-12 items-center">
 
           <header className="text-white space-y-6 flex flex-col items-center w-full">
             <h2 className="text-hero-title-primary text-center max-w-lg  text-4xl sm:text-5xl  font-bold leading-tight ">
Cum să te protejezi de capcana Lipovon?             </h2>
             
             <p className=" max-w-lg text-center text-lg text-black">
Pentru a te proteja de riscurile Lipovon, este esențial să te informezi corect înainte de a folosi orice supliment. Consultă un medic sau un specialist înainte de a începe orice tratament și evită produsele care promit soluții rapide sau miraculoase.</p>

           
           </header>
   
          

         </div>
     
         </div>
         
       </section>
  )
}

export default Prevent
