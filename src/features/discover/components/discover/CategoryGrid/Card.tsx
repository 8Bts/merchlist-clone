type CardProps = {
  name: string
  imageSrc: string
  hexBgColor: string
}

export function Card({ name, imageSrc, hexBgColor }: CardProps) {

  return (
    <div
      className="border border-[#44444452] rounded-2xl hover:border-black transition"
      style={{ backgroundColor: hexBgColor }}
    >
      <div className="overflow-hidden rounded-t-2xl shadow">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-between p-5">
        <p className="text-[#353535] font-medium whitespace-nowrap">{name}</p>
        <span className="bg-[#2a2a2a] !text-[13px] font-semibold !text-white px-2 py-1 rounded-sm hover:bg-[#1c1c1c] hover:cursor-pointer">
          CUSTOMIZE
        </span>
      </div>
    </div>
  )

}