export function BannerMain() {
  return (
    <section className="relative">
      <div className="bg-[url(/images/Merchlist-Banner-Merchandise-scaled.webp)] bg-top bg-no-repeat bg-cover min-h-[34vw]">
        <div className="absolute top-[20%] flex flex-col items-center justify-start w-full h-full">
          <h1 className="text-[#1B344D] text-[72px] font-bold text-center">Custom T-shirts,<br/> Merchandise & Gifts</h1>
          <span className="bg-[#2a2a2a] !text-[20px] transition-all duration-300 font-semibold !text-white px-[15px] py-[14px] rounded-md !mr-5 shadow-md shadow-black/30 hover:bg-[#1c1c1c] hover:cursor-pointer">
            CUSTOMIZE NOW
          </span>
        </div>
      </div>
    </section>
  );
}
