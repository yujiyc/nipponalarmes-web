"use client";

import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { useState } from 'react';

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-gray min-h-dvh flex flex-col justify-start gap-16 text-white">
        <div className="flex justify-between items-center">
          <a href="#">
            <Image
              src={logo}
              alt="Logo"
              className="w-52 hover:scale-105 transition-all"
            />
          </a>

          <ul className='hidden xl:flex items-center gap-12 text-white text-base'>
            <li className='p-3 hover:text-red transition-all cursor-pointer'>Sistema</li>
            <li className='p-3 hover:text-red transition-all cursor-pointer'>Benefícios</li>
            <li className='p-3 hover:text-red transition-all cursor-pointer'>Clientes</li>
            <li className='p-3 hover:text-red transition-all cursor-pointer'>Nossa História</li>
            <li className='p-3 hover:text-red transition-all cursor-pointer'>Contato</li>
          </ul>

          <Menu className='xl:hidden block text-5xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <div className={`absolute xl:hidden top-24 left-0 w-full flex flex-col items-center gap-6 text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
            <li className='list-none w-full text-center p-4 hover:text-red transition-all cursor-pointer'>Sistema</li>
            <li className='list-none w-full text-center p-4 hover:text-red transition-all cursor-pointer'>Benefícios</li>
            <li className='list-none w-full text-center p-4 hover:text-red transition-all cursor-pointer'>Clientes</li>
            <li className='list-none w-full text-center p-4 hover:text-red transition-all cursor-pointer'>Nossa História</li>
            <li className='list-none w-full text-center p-4 hover:text-red transition-all cursor-pointer'>Contato</li>
          </div>
        </div>
      </div>
    </div>
  );
}
