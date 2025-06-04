import React, { useState } from 'react';
import {
  Menu,
  X,
  Home,
  Info,
  ShieldAlert,
  ShieldCheck,
  HeartHandshake,
  HelpCircle
} from 'lucide-react';
import Logo from '../assets/Logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const MotionNavLink = motion(NavLink);

const navLinks = [
  { label: 'Acasă', to: '/', icon: <Home size={18} /> },
  { label: 'Ce este Lipovon?', to: '/despre', icon: <Info size={18} /> },
  { label: 'Riscuri', to: '/riscuri', icon: <ShieldAlert size={18} /> },
  { label: 'Protejează-te', to: '/protejeaza-te', icon: <ShieldCheck size={18} /> },
  { label: 'Contact / Donații', to: '/donatii', icon: <HeartHandshake size={18} /> },
  { label: 'Ajutor', to: '/ajutor', icon: <HelpCircle size={18} /> }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-fade shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/"><span className="text-red-900 text-lg font-semibold">STOP</span> <span className='text-sm'>LIPOVON</span></a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(({ label, to, icon }) => (
              <MotionNavLink
                to={to}
                key={label}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors ${
                    isActive ? 'text-blue-600 font-semibold' : 'text-header hover:text-blue-600'
                  }`
                }
                whileHover={{ scale: 1.05 }}
               
                animate={label === 'Riscuri' ? { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] } : {}}
  transition={label === 'Riscuri' ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } : {}}
              >
                {icon}
                <span>{label}</span>
              </MotionNavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-hero-title-primary cursor-pointer hover:text-blue-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 bg-blue-50 shadow-inner rounded-b-xl"
          >
            <nav className="flex flex-col space-y-4 py-4">
              {navLinks.map(({ label, to, icon }) => (
                <NavLink
                  key={label}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 text-lg transition-colors ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-[#1F1C5C] hover:text-blue-600'
                    }`
                  }
                >
                  {icon}
                  <span>{label}</span>
                </NavLink>
              ))}
              <NavLink
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Susține cauza noastră
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
