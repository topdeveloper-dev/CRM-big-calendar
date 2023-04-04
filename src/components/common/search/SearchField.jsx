import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchField = ({width, customStyle, placeholder, handleSearch}) => {
  return (
    <div className={`${width}  flex relative  items-center `}>
    <input
      type="text"
      placeholder={placeholder}
      className={`p-2 pl-4 w-full outline-none rounded-3xl ${customStyle} `}
      onChange={handleSearch}
    />
    <BiSearch className=" absolute left-[87%] text-gray-600 w-[18px]  h-[18px]" />
  </div>
  )
}

export default SearchField