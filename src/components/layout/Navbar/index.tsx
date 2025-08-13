'use client'

import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { UserIcon } from "@heroicons/react/24/outline"
import { Logo } from "../../Logo"
import { SearchBar } from "../../ui/SearchBar"
import { HeaderType, Links } from "./Links"
import { useState } from "react"
import clsx from "clsx"

export function Navbar() {
  const [selectedHeader, setSelectedHeader] = useState<HeaderType>('customize');

  return (
    <nav className="sticky z-[1000] -top-1 bg-[#121212] w-full">
      <div className="grid grid-cols-3 items-center w-full !h-[95px] px-[3%]">
        {/* Nav Links */}
        <div className="justify-self-start flex items-center text-white h-full">
            {['CUSTOMIZE', 'COOPERATE', 'GIFTING'].map((header) => (
            <span
              key={header}
              className={clsx(
              "flex items-center justify-center text-[19px] h-full font-semibold px-5 cursor-pointer transition-all duration-300", 
              { 'bg-[#2E2E2E]': selectedHeader === header.toLowerCase() }
              )}
              onMouseEnter={() => setSelectedHeader(header.toLowerCase() as HeaderType)}
            >
              <span>{header}</span>
            </span>
            ))}
        </div>
        {/* Logo */}
        <div className="justify-self-center">
          <Logo className="!w-[15vw]" />
        </div>
        {/* Cart and User Icons */}  
        <div className="justify-self-end flex items-center justify-center">
          <SearchBar className="mr-8 bg-[#f3f5f6]" />
          <div className="flex items-center justify-center">
            <ShoppingCartIcon className="text-white w-6 h-6"/>
            <div className="relative flex bg-[#E4F0F8] items-center justify-center w-5 h-5 text-center text-[9px] rounded-full">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black">
                0
              </span>
            </div>
          </div>
          <div>
            <UserIcon className="text-white w-6 h-6 ml-4" />
          </div>
        </div>
      </div>
      <div>
        <Links header={selectedHeader} />
      </div>
    </nav>
  )
}
