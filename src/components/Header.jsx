import React from 'react'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ['Acasa', 'Ce este Lipovon?', 'Riscuri', 'Protejeaza-te', 'Contact / Ajutor' , 'Intrebari Frecvente'];

  return (
    <header className="bg-blue-fade shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={Logo}  alt="Stop Lipovon" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-header hover:text-blue-600 transition">
                {link}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button onClick={toggleMenu} className="md:hidden text-hero-title-primary cursor-pointer hover:text-blue-600 ">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-[#1F1C5C] hover:text-blue-600 transition">
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}


