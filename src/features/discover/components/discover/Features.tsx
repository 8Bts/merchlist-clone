import GoogleLogo from "@/components/icons/Google"
import ShippingIcon from "@/components/icons/Shipping"
import SmileyIcon from "@/components/icons/Smiley"
import StoreIcon from "@/components/icons/Store"
import ThumbPriceTagIcon from "@/components/icons/ThumbPriceTag"

export function Features() {
  return (
    <div className="flex justify-around py-7">
      <div className="flex">
        <GoogleLogo className="w-[43px] h-[43px]" />
        <div className="ml-2 p-px h-[43px] flex flex-col items-start items-stretch justify-between">
          <span className="text-[20px] text-[#F4A722]">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</span>
          <span className="text-[12px] text-[#A5A19F]">30,000 + Happy Customers</span>
        </div>
      </div>

      <div className="flex">
        <StoreIcon className="w-[43px] h-[43px]" />

        <div className="ml-2 p-px h-[43px] flex flex-col items-start items-stretch justify-between">
          <span className="text-[17px] text-[#484F56] font-fairplay-display font-bold">1000+ Custom Products</span>
          <span className="text-[12px] text-[#A5A19F]">High Quality. No Minimums!</span>
        </div>
      </div>

      <div className="flex">
        <ThumbPriceTagIcon className="w-[43px] h-[43px]" />
        <div className="ml-2 p-px h-[43px] flex flex-col items-start items-stretch justify-between">
          <span className="text-[17px] text-[#484F56] font-fairplay-display font-bold">Affordable Prices</span>
          <span className="text-[12px] text-[#A5A19F]">up to 40% Bulk Discounts!</span>
        </div>
      </div>

      <div className="flex">
        <ShippingIcon className="w-[50px] h-[50px]" />
        <div className="ml-2 p-px h-[43px] flex flex-col items-start items-stretch justify-between">
          <span className="text-[17px] text-[#484F56] font-fairplay-display font-bold">Fast & Free Shipping</span>
          <span className="text-[12px] text-[#A5A19F]">Global Delivery. On-time!</span>
        </div>
      </div>

      <div className="flex">
        <SmileyIcon className="w-[43px] h-[43px]" />
        <div className="ml-2 p-px h-[43px] flex flex-col items-start items-stretch justify-between">
          <span className="text-[17px] text-[#484F56] font-fairplay-display font-bold">Worry Free!</span>
          <span className="text-[12px] text-[#A5A19F]">Instant 24/7 Support</span>
        </div>
      </div>
    </div>
  )
}