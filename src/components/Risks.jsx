import React from 'react'
import { Button } from '@/components/ui/Button';
import RiskCards from './RiskCards';

const Risks = () => {
  return (
    <section className="risks-bg w-full py-25  flex items-center justify-center px-4 ">
         <div className="container space-y-20">
         <div className="max-w-7xl w-full grid grid-cols-1  gap-12 items-center">
 
           <header className="text-white space-y-6 flex flex-col items-center w-full">
             <h2 className="text-black text-center max-w-lg  text-4xl sm:text-5xl  font-bold leading-tight ">
               Ce riști dacă folosești Lipovon?
             </h2>
             
             <p className=" max-w-lg text-center text-lg text-black">
Lipovon poate cauza tulburări psihice și cardiovasculare severe din cauza <span className="text-highlight-dark font-bold">Sibutraminei.</span> Este vândut prin practici înșelătoare și poate pune sănătatea în pericol.</p>

           
           </header>
   
          

         </div>
         <RiskCards/>
         </div>
         
       </section>
  )
}

export default Risks
