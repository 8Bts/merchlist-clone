import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { Select } from '../ui/Select'

export function HeroTopBar() {
  const currencyOptions = [
    { label: "AED", value: "AED" },
    { label: "SAR", value: "SAR" },
    { label: "QAR", value: "QAR" },
    { label: "OMR", value: "OMR" },
    { label: "QWD", value: "QWD" },
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
    { label: "AUD", value: "AUD" },
    { label: "SGD", value: "SGD" },
    { label: "CHF", value: "CHF" },
    { label: "INR", value: "INR" },
    { label: "EGP", value: "EGP" },
    { label: "CAD", value: "CAD" },
    { label: "BHD", value: "BHD" },
  ]

  return (
    <div className="relative z-[1001] w-full bg-[#ecf2f5] border-b border-gray-300 text-[15px] flex items-center justify-between px-16 py-2">
      {/* Left side */}
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <span className="text-[17px] cursor-pointer select-none">العربية</span>
      </div>

      <div>
        <Select
          options={currencyOptions}
          className="w-[57px] h-[23px] text-[8.8px] focus:outline-none"
        />
      </div>

      {/* Center promo */}
      <div className="flex items-center font-semibold space-x-1 rtl:space-x-reverse whitespace-nowrap">
        <span className="border border-black rounded-xl py-1 px-2">50% PRICE DROP</span>
        <span>+</span>
        <span>EXTRA 25% OFF</span>
        <span className="border border-black rounded-xl py-1 px-2">MERCH25</span>
        <span>🎉</span>
        <span className="font-light">Ends Aug 13</span>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-900">
        <button className="flex items-center space-x-1 rtl:space-x-reverse text-sm hover:underline">
          <MapPinIcon className="h-5 w-5 mr-2" />
          Track Order
        </button>
      </div>

      <div>
        <button className="flex items-center space-x-1 rtl:space-x-reverse border border-black rounded-[9px] py-[2px] px-2 hover:bg-gray-100 transition">
          <PhoneIcon className="pr-2 h-6 w-6" />
          <span className="font-funnel-display text-[17px] pb-1">800 MERCH</span>
        </button>
      </div>
    </div>
  )
}
