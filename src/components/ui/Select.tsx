'use client'

import { useState, useCallback } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

export type Option<T = string> = {
  value: T
  label: string
}

type SelectProps<T = string> = {
  options: Option<T>[]
  onChange?: (option: Option<T>) => void
  defaultValue?: Option<T>
  className?: string
}

export function Select<T = string>({
  options,
  onChange,
  defaultValue,
  className,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<Option<T>>(defaultValue || options[0])

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleSelect = useCallback(
    (option: Option<T>) => {
      setSelected(option)
      onChange?.(option)
      setIsOpen(false)
    },
    [onChange]
  )

  const handleBlur = useCallback(() => {
    //setIsOpen(false)
  }, [])

  const renderOption = useCallback(
    (option: Option<T>) => (
      <li
        key={String(option.value)}
        onMouseDown={(e) => e.preventDefault()} // Prevent onBlur from closing dropdown
        onClick={() => handleSelect(option)}
        className={clsx("text-[11px] font-light p-2 pr-3 cursor-pointer hover:bg-gray-100", {"bg-[#2271b1] text-white": option.value === selected.value})}
      >
        {option.label}
      </li>
    ),
    [handleSelect, selected.value]
  )

  return (
    <div
      className={clsx('relative', className)}
      tabIndex={0} // Make the wrapper focusable
      onBlur={handleBlur} // Close dropdown on blur
    >
      <button
        type='button'
        className='w-full font-light flex items-center justify-between bg-white border border-gray-300 rounded-[4px] p-0.5 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        onClick={toggleDropdown}
      >
        <span className="px-1">{selected.label}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <ul className='absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-[250px] overflow-y-auto'>
          {options.map(renderOption)}
        </ul>
      )}
    </div>
  )
}
