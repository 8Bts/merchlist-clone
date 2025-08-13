import { Card } from "./Card"
import data from "./data/categories"

const categories = data

export function CategoryGrid() {
  return (
    <section className="bg-[#f9fafa]">
      <h2 className="text-[#1B344D] text-4xl text-center pt-6 pb-4">
        Create Custom Products, Super Fast 🚀
      </h2>
      <div className="grid grid-cols-5 gap-x-3 gap-y-7 px-20">
        {categories.map((cat, i) => (
          <div key={i}>
            <Card name={cat.name} imageSrc={cat.imageSrc} hexBgColor={cat.hexBgColor} />
          </div>
        ))}
      </div>
    </section>
  )
}
