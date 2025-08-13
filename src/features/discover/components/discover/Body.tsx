import { CategoryGrid } from "./CategoryGrid";
import { BannerMain } from "./BannerMain";
import { Features } from "./Features";
import Brands from "./Brands";
import { BannerSecondary } from "./BannerSecondary";
import { TrustedCompanies } from "./TrustedCompanies";

export function Body() {
  return (
    <>
      <BannerMain />
      <Features />
      <CategoryGrid />
      <Brands />
      <BannerSecondary />
      <TrustedCompanies />
    </>
  )
}