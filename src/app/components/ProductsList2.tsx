import Image from 'next/image'
import { BsHeart } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { LuEye } from 'react-icons/lu'

function ProductsList2() {
  return (
    
// productlist 1

    <div className=' mx-44 py-16 h-1/3 mb-12 '>
        {/* section tag */}

{/* heading */}
<div className="heading flex items-center  justify-center mb-[50px] ">

    <div className="heading flex ">
        <h1 className='text-4xl text-black  font-extrabold '>TOP SELLING</h1>
    </div>

    

</div>

{/* cards */}

<div className='parent lg:flex lg:items-center justify-center gap-x-[30px] '>


<div className='card1'>

<div className="relative h-[270px] w-[250px] bg-slate-100 rounded-md">
  {/* Heart Icon */}
  <div className="absolute top-2 right-2 p-2 rounded-full bg-white">
    <BsHeart className="text-black" />
  </div>
  
  {/* Eye Icon */}
  <div className="absolute top-12 right-2 p-2 rounded-full bg-white">
    <LuEye className="text-black" />
  </div>


  {/* image */}

  <div className='flex justify-center items-center pt-16'>
<Image 
  src="/images/Frame 32.svg" 
  alt="Example Image" 
  layout='fill'
  className="object-cover"
/>  </div>

</div>
<div className='space-y-1'>
    <p className='text-black font-bold text-[16px] pt-2'>T-shirt with Tape Details</p>

    <ul className='flex items-center text-sm'>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-slate-500 pl-2'><p>(4.5/5)</p></li>
    </ul>
    <div className='flex items-center gap-x-2'>
    <p className='text-black font-bold text-[16px]'>$260</p>
    <p className='text-slate-400  text-[16px] line-through '>$360</p>
    </div>
</div>
</div>



<div className='card2'>

<div className="relative h-[270px] w-[250px] bg-slate-100 rounded-md">
  {/* Heart Icon */}
  <div className="absolute top-2 right-2 p-2 rounded-full bg-white">
    <BsHeart className="text-black" />
  </div>
  
  {/* Eye Icon */}
  <div className="absolute top-12 right-2 p-2 rounded-full bg-white">
    <LuEye className="text-black" />
  </div>


  {/* image */}

 
  <div className='flex justify-center items-center pt-16'>
<Image 
  src="/images/Frame 32.svg" 
  alt="Example Image" 
  layout='fill'
  className="object-cover"
/>  </div>

</div>
<div className='space-y-1'>
    <p className='text-black font-bold text-[16px] pt-2'>T-shirt with Tape Details</p>

    <ul className='flex items-center text-sm'>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-slate-500 pl-2'><p>(4.5/5)</p></li>
    </ul>
    <div className='flex items-center gap-x-2'>
    <p className='text-black font-bold text-[16px]'>$260</p>
    <p className='text-slate-400  text-[16px] line-through '>$360</p>
    <p className='text-red-400 bg-red-200 rounded-xl px-2  text-[12px] line-through '>-20%</p>
    </div>
</div>
</div>



<div className='card3'>

<div className="relative h-[270px] w-[250px] bg-slate-100 rounded-md">
  {/* Heart Icon */}
  <div className="absolute top-2 right-2 p-2 rounded-full bg-white">
    <BsHeart className="text-black" />
  </div>
  
  {/* Eye Icon */}
  <div className="absolute top-12 right-2 p-2 rounded-full bg-white">
    <LuEye className="text-black" />
  </div>


  {/* image */}

 
  <div className='flex justify-center items-center pt-16'>
    
<Image 
  src="/images/Frame 32.svg" 
  alt="Example Image" 
  layout='fill'
  className="object-cover"
/>  </div>

</div>
<div className='space-y-1'>
    <p className='text-black font-bold text-[16px] pt-2'>T-shirt with Tape Details</p>

    <ul className='flex items-center text-sm'>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-slate-500 pl-2'><p>(4.5/5)</p></li>
    </ul>
    <div className='flex items-center gap-x-2'>
    <p className='text-black font-bold text-[16px]'>$260</p>
    <p className='text-slate-400  text-[16px] line-through '>$360</p>
    </div>
</div>
</div>


<div className='card4'>

<div className="relative h-[270px] w-[250px] bg-slate-100 rounded-md">
  {/* Heart Icon */}
  <div className="absolute top-2 right-2 p-2 rounded-full bg-white">
    <BsHeart className="text-black" />
  </div>
  
  {/* Eye Icon */}
  <div className="absolute top-12 right-2 p-2 rounded-full bg-white">
    <LuEye className="text-black" />
  </div>


  {/* image */}

  <div className='flex justify-center items-center pt-16'>
<Image 
  src="/images/Frame 32.svg" 
  alt="Example Image" 
layout='fill' 
  className="object-cover"
/>  </div>

</div>
<div className='space-y-1'>
    <p className='text-black font-bold text-[16px] pt-2'>The north coat</p>

    <ul className='flex items-center text-sm'>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-orange-500'><FaStar /></li>
        <li className='text-slate-500 pl-2'><p>(4.5/5)</p></li>
    </ul>
    <div className='flex items-center gap-x-2'>
    <p className='text-black font-bold text-[16px]'>$260</p>
    <p className='text-slate-400  text-[16px] line-through '>$360</p>
    <p className='text-red-400 bg-red-200 rounded-xl px-2  text-[12px] line-through '>-30%</p>
    </div>
</div>
</div>
</div>



<div className=" flex justify-center items-center font-bold text-black mt-8 ">
       <button className='px-10 p-1 text-[16px] border rounded-xl text-black hover:text-black hover:bg-white transition-all duration-150'><p>ViewAll</p></button>
    </div>


    </div>







  )
}

export default ProductsList2