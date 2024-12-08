"use client"
import Image from "next/image";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { LuEye } from "react-icons/lu";

// Pagination Component
interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Function to handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Function to generate page numbers
  const getPageNumbers = (): number[] => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center text-sm space-x-3 mt-6 w-full">
      {/* Previous button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex px-2 py-2  items-center text-black rounded-lg border border-gray-400  "
      >
        <FaArrowLeft className="mr-2"/> Previous
      </button>

      {/* Page numbers */}
      <div className="flex space-x-2">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-2 border rounded ${currentPage === page ?  'bg-white text-black':'' }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className=" flex items-center  px-2 py-2 text-black rounded-lg border border-gray-400 "
      >
        Next <FaArrowRight className="ml-2"/>;
      </button>
    </div>
  );
};
function Sidebar1() {

  return (
    <div className="ml-20 mr-20">
<h5 className="flex items-center text-base font-bold mb-4"> Home <IoIosArrowForward /> Casual </h5>
    <div className="flex">
      {/* Sidebar */}
      
      <div className="w-1/4 px-8 py-10 border border-gray-300 rounded-xl ">
      <div className="flex justify-between mr-4 ">
        <h2 className="text-2xl font-bold mb-6">Filters</h2>
        <HiOutlineAdjustments className="text-black text-2xl"/>
        </div>
        <div className=" my-4 border-t border-gray-300"></div>
        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
          <li className="flex  justify-between items-center">
        <label htmlFor="tshirts">T-shirts</label>
        <IoIosArrowForward  className="mr-0" />
      </li>
      <li className="flex  justify-between items-center">
        <label htmlFor="tshirts">Shorts</label>
        <IoIosArrowForward  className="mr-0" />
      </li>
      <li className="flex  justify-between items-center">
        <label htmlFor="tshirts">Shirts</label>
        <IoIosArrowForward  className="mr-0" />
      </li>
      <li className="flex  justify-between items-center">
        <label htmlFor="tshirts">Hoodie</label>
        <IoIosArrowForward  className="mr-0" />
      </li>
      <li className="flex  justify-between items-center">
        <label htmlFor="tshirts">Jeans</label>
        <IoIosArrowForward  className="mr-0" />
      </li>
          </ul>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <div className="flex justify-between ">
          <h3 className="font-semibold mb-3">Price</h3>
          <IoIosArrowUp />
          </div>
          <input type="range" min="50" max="200" className="w-full " />
          <div className="flex justify-between text-sm font-bold">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Colors</h3>
          <div className="flex gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Size */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Size</h3>
          <ul className="flex gap-2 flex-wrap text-sm font-bold text-gray-500">
            <li className="border px-4 py-1 rounded-full bg-slate-200 cursor-pointer">XX-Small</li>
            <li className="border px-4 py-1 rounded-full bg-slate-200 cursor-pointer">X-Small</li>
            <li className="border px-4 py-1 rounded-full bg-slate-200 cursor-pointer">Small</li>
            <li className="border px-4 py-1 rounded-full bg-slate-200 cursor-pointer">Medium</li>
            <li className="border px-4 py-1 rounded-full bg-slate-200 cursor-pointer">Large</li>
            <li className="border px-4 py-1 rounded-full bg-slate-200 cursor-pointer">X-Large</li>
            <li className="border px-4 py-1 rounded-full bg-slate-200 cursor-pointer">XX-Large</li>
            <li className="border px-4 py-1 rounded-full bg-slate-200 cursor-pointer">3X-Large</li>
            <li className="border px-4 py-1 rounded-full bg-slate-200 cursor-pointer">4X-Large</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="mb-6">
        <div className="flex justify-between ">
          <h3 className="font-semibold mb-3">Dress Style</h3>
          <IoIosArrowUp />
          </div>
          <ul className="space-y-2">
          <li className="flex  justify-between items-center">
        <label htmlFor="tshirts">Casual</label>
        <IoIosArrowForward  className="mr-0" />
      </li>
      <li className="flex  justify-between items-center">
        <label htmlFor="tshirts">Formal</label>
        <IoIosArrowForward  className="mr-0" />
      </li>
      <li className="flex  justify-between items-center">
        <label htmlFor="tshirts">Party</label>
        <IoIosArrowForward  className="mr-0" />
      </li>
      <li className="flex  justify-between items-center">
        <label htmlFor="tshirts">Gym</label>
        <IoIosArrowForward  className="mr-0" />
      </li>
     
          </ul>
        </div>

        {/* Filter Button */}
        <button className="px-4 py-2 bg-black text-white rounded-md w-full mt-4 ">
          Apply Filters
        </button>
      </div>

      {/* Products List */}
      <div className="w-3/4 mx-10 py-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Casual Wear</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="relative">
              <div className="relative h-[270px] w-[250px] bg-slate-100 rounded-md">
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 p-2 rounded-full bg-white">
                  <BsHeart className="text-black" />
                </div>
                {/* Eye Icon */}
                <div className="absolute top-12 right-2 p-2 rounded-full bg-white">
                  <LuEye className="text-black" />
                </div>
                {/* Image */}
                <div className="flex justify-center items-center pt-16">
                  <Image
                    src="/images/Frame 32.svg"
                    alt="Example Image"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-black font-bold text-[16px] pt-2">
                  T-shirt with Tape Details
                </p>
                <ul className="flex items-center text-sm">
                  <li className="text-orange-500">
                    <FaStar />
                  </li>
                  <li className="text-orange-500">
                    <FaStar />
                  </li>
                  <li className="text-orange-500">
                    <FaStar />
                  </li>
                  <li className="text-orange-500">
                    <FaStar />
                  </li>
                  <li className="text-orange-500">
                    <FaStar />
                  </li>
                  <li className="text-slate-500 pl-2">
                    <p>(4.5/5)</p>
                  </li>
                </ul>
                <div className="flex items-center gap-x-2">
                  <p className="text-black font-bold text-[16px]">$260</p>
                  <p className="text-slate-400 text-[16px] line-through">
                    $360
                  </p>
                  <p className="text-red-400 bg-red-200 rounded-xl px-2 text-[12px]">
                    -30%
                  </p>
                </div>
              </div>
            </div>
          ))}

<Pagination totalPages={10} />

        </div>
      </div>
    </div>
    </div>
  );
}

export default Sidebar1;
