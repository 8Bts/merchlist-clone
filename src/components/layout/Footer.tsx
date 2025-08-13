import Link from "next/link";
import { Logo } from "../Logo";

export function Footer() {
  const companyLinks = [
    "About Us",
    "Contact Us",
    "Track Order",
    "Size Chart",
    "Blog",
    "Privacy Policy",
    "Return Policy",
    "Shipping Policy",
    "Terms & Conditions",
    "Printing Methods",
  ];

  const createLinks = [
    "Tshirts & Polos",
    "Hoodies & Jackets",
    "Bags & Backpacks",
    "Bottles & Mugs",
    "Travel & Tech",
    "Boxes & Packaging",
    "Caps & Hats",
    "Uniforms & Workwear",
    "Jerseys & Sportswear",
    "Office & Stationery",
  ];

  const servicesLinks = [
    "Create Custom Products",
    "Private Label",
    "Corporate Merchandise",
    "Bulk Orders",
    "Gifts",
    "Cash back",
    "All Over Printing",
    "DTF Printing",
    "DTG Printing",
    "Uv Printing",
  ];

  const giftingLinks = [
    "Corporate Gifting",
    "Employee Gift Ideas",
    "Eid Gifts",
    "Budget Gifts",
    "Luxury Gifts",
    "Premium Gifts",
    "Eco-friendly",
    "Home & Wellness",
    "Promotional Giveaways",
  ];

  const renderLinks = (links: string[]) =>
    links.map((link) => (
      <li key={link}>
        <Link href="#" className="relative group">
          {link}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    ));

  return (
    <footer className="">
      <div className="bg-[url(/images/Merchlist-Website-Footer.webp)] bg-cover bg-center bg-no-repeat">
        <div className="flex text-white justify-between items-start p-8 bg-[#000000ad]">
          <div className="w-[32%] flex flex-col gap-4 align-start">
            <Logo className="!w-[333px] !h-[58px]" />
            <p className="text-[15px] mb-3">
              Merchlist helps businesses craft unique promotional merchandise that elevates brand visibility.
              <br />
              From custom-branded goods to a wide selection of corporate gifts, we offer products that are sure to be favorites
            </p>
            <Link href="#" className="font-montserrat font-semibold text-[14px]">
              <span className="underline underline-offset-1">Office:</span>
              <br />
              <span>Merchlist FZ LLC, in5 Design, Dubai Design District, Dubai, UAE</span>
            </Link>
            <Link href="#" className="font-montserrat font-semibold text-[14px]">
              <span className="underline underline-offset-1">Factory:</span>
              <br />
              <span>Merchlist, Ajman Industrial Area Ajman, UAE</span>
            </Link>
          </div>
          <div>
            <h3 className="text-[21px] font-semibold pb-5">Company</h3>
            <ul className="text-[15px] flex flex-col gap-2">{renderLinks(companyLinks)}</ul>
          </div>
          <div>
            <h3 className="text-[21px] font-semibold pb-5">Create</h3>
            <ul className="text-[15px] flex flex-col gap-2">{renderLinks(createLinks)}</ul>
          </div>
          <div>
            <h3 className="text-[21px] font-semibold pb-5">Services</h3>
            <ul className="text-[15px] flex flex-col gap-2">{renderLinks(servicesLinks)}</ul>
          </div>
          <div>
            <h3 className="text-[21px] font-semibold pb-5">Gifting</h3>
            <ul className="text-[15px] flex flex-col gap-2">{renderLinks(giftingLinks)}</ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
