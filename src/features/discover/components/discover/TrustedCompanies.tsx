export function TrustedCompanies() {
  return (
    <div className="my-8">
      <h3 className="font-fairplay-display font-semibold text-[#1B344D] text-[25.5px] text-center pt-6 pb-4">
        Trusted by
        <span className="bg-[#1b344d] text-white px-1 mx-1">1000’s</span>
        of Companies
      </h3>
      <img
        src={"/images/trusted-companies.webp"}
        alt="Trusted Companies"
        className="w-full h-auto object-cover"
      />
    </div>
  )
}