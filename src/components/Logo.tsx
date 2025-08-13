import clsx from "clsx";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={clsx("bg-[url(/images/Merchlist_Logo-white.webp)] bg-center bg-no-repeat bg-contain w-66 h-12", className)} />
  );
}