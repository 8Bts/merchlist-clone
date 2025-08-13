import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx';

type SearchBarProps = {
  className?: string
}

export function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={clsx("flex items-center rounded-md px-3 py-2 shadow-sm", className)}>
      <MagnifyingGlassIcon className="size-5 text-black mr-2" />
      <input
        type="text"
        placeholder="Search 1000+ Custom Products"
        className="w-full bg-transparent text-black-600 placeholder:text-center placeholder:text-gray-600 outline-none"
      />
    </div>
  );
};
