"use client"

import clsx from "clsx"
import Image from "next/image"

export type HeaderType = 'customize' | 'cooperate' | 'gifting'

type LinksProps = {
  header: HeaderType
}

export function Links({ header }: LinksProps) {
  const navLinks = {
    customize: [
      { name: "Best Sellers", iconSrc: "/images/navlink-icons/bestsellertag.png", bgColorClass: "bg-[#f1e3e6]" },
      { name: "New Arrivals", iconSrc: "/images/navlink-icons/boxes-new-arrivals.png", bgColorClass: "bg-[#c2f1e2]" },
      { name: "T-Shirts", iconSrc: "/images/navlink-icons/t-shirt.svg", bgColorClass: "bg-white" },
      { name: "Hoodies", iconSrc: "/images/navlink-icons/hoodie.svg", bgColorClass: "bg-white" },
      { name: "Uniforms", iconSrc: "/images/navlink-icons/uniform.svg", bgColorClass: "bg-white" },
      { name: "Jerseys", iconSrc: "/images/navlink-icons/jersey.svg", bgColorClass: "bg-white" },
      { name: "Bottles & Mugs", iconSrc: "/images/navlink-icons/bottles-mugs.svg", bgColorClass: "bg-white" },
      { name: "Caps", iconSrc: "/images/navlink-icons/cap.svg", bgColorClass: "bg-white" },
      { name: "Bags", iconSrc: "/images/navlink-icons/bag.svg", bgColorClass: "bg-white" },
      { name: "Office", iconSrc: "/images/navlink-icons/notepad.svg", bgColorClass: "bg-white" },
      { name: "Gifting", iconSrc: "/images/navlink-icons/gift.svg", bgColorClass: "bg-white" },
      { name: "Tech", iconSrc: "/images/navlink-icons/tech.svg", bgColorClass: "bg-white" },
    ],
    cooperate: [
      { name: "Corporate Merchandise", iconSrc: null, bgColorClass: "bg-white" },
      { name: "Bulk Orders", iconSrc: null, bgColorClass: "bg-white" },
      { name: "Gifting", iconSrc: null, bgColorClass: "bg-white" },
      { name: "Partner With Us", iconSrc: null, bgColorClass: "bg-white" },
    ],
    gifting: [
      { name: "Budget", iconSrc: null, bgColorClass: "bg-white" },
      { name: "Luxury", iconSrc: null, bgColorClass: "bg-white" },
      { name: "Premium", iconSrc: null, bgColorClass: "bg-white" },
      { name: "Tech", iconSrc: null, bgColorClass: "bg-white" },
      { name: "Sustainable", iconSrc: null, bgColorClass: "bg-white" },
      { name: "Home", iconSrc: null, bgColorClass: "bg-white" },
      { name: "Corporate", iconSrc: null, bgColorClass: "bg-white" },
    ],
  }

  return (
    <div className="bg-white flex justify-between items-center">
      <div className="flex flex-row py-[10px] overflow-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-2">
        {navLinks[header].map((link, index) => (
            <div key={index} className={clsx("flex-shrink-0 rounded-md mx-4 px-4 py-2 shadow-md", link.bgColorClass, { "!px-1 !mx-1": header === 'customize' })}>
            {link.iconSrc && (
              <Image
                src={link.iconSrc}
                alt={link.name}
                width={20}
                height={20}
                className="inline-block mr-2"
              />
            )}
            <span className="text-[15px] font-funnel-display text-[#22262A]">{link.name}</span>
            </div>
        ))}
      </div>
      <div className="h-full flex-shrink-0">
        <span className="bg-[#1c1c1c] !text-[13px] font-semibold !text-white px-4 py-2 rounded-lg !mr-5 shadow-md shadow-black/30 hover:bg-[#2a2a2a] hover:cursor-pointer">
          CUSTOMIZE NOW
        </span>
      </div>
    </div>
  )
}