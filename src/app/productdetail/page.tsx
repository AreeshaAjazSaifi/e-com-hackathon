import Image from 'next/image';
import { BsHeart, BsThreeDots } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { FaStar } from 'react-icons/fa';
import { LuEye } from 'react-icons/lu';


const ProductPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-black mb-6">
        <span>Home &gt; Shop &gt; </span>
        <span className="text-black font-semibold">T-shirts</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left: Images */}
        <div className="flex flex-col items-start gap-4 lg:w-1/2">
      
        <div className="ml-10 flex gap-4">
  {/* Thumbnail Images */}
  <div className="flex flex-col gap-2">
    <img
      src="images/image 2.svg"
      alt="Thumbnail 1"
      className="w-full h-[calc(100%/3)] rounded-lg border object-cover"
    />
    <img
      src="images/image 2.svg"
      alt="Thumbnail 2"
      className="w-full h-[calc(100%/3)] rounded-lg border object-cover"
    />
    <img
      src="images/image 2.svg"
      alt="Thumbnail 3"
      className="w-full h-[calc(100%/3)] rounded-lg border object-cover"
    />
  </div>

  {/* Main Image */}
  <div className="flex-1">
    <img
      src="images/image 1.svg"
      alt="Main Product"
      className="w-full h-[500px] rounded-lg border object-cover"
    />
  </div>
</div>


</div>

        {/* Right: Product Details */}
        <div className="flex-1">
          {/* Product Title */}
          <h1 className="text-3xl font-bold mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>
          {/* Ratings */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-2">★★★★★</span>
            <span className="text-sm text-gray-500">(4.9) | 432 Reviews</span>
          </div>
          {/* Price */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">$260</span>
            <span className="text-gray-500 line-through">$300</span>
          </div>
          {/* Description */}
          <p className="text-sm text-gray-700 mb-6">
            This organic t-shirt is perfect for any occasion. Crafted from soft and breathable fabric, it offers a classic fit and style that keeps you comfortable all day.
          </p>

          <div className="mb-6">
          <h3 className="font-base text-gray-500 mb-2">Select Colors</h3>
          <div className="flex gap-2 mb-5">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div className="w-8 h-8 bg-amber-900 rounded-full"></div>
            <div className="w-8 h-8 bg-green-900 rounded-full"></div>
          </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Select Size</h3>
            <div className="flex gap-4 ">
              <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-500">Small</button>
              <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-500">Medium</button>
              <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-500">Large</button>
              <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-500g">X-Large</button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg">
              <button className="px-3 py-1 text-lg">-</button>
              <span className="px-4 py-1 border-l border-r">1</span>
              <button className="px-3 py-1 text-lg">+</button>
            </div>
            <button className="bg-black text-white px-20 py-3 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 ">
        <div className="flex justify-evenly items-center gap-8 border-b pb-2 mb-6 ">
          <button className="font-semibold text-black">Product Details</button>
          <button className="font-semibold border-b-4 border-black px-20">Rating & Review</button>
          <button className="font-semibold text-black">FAQs</button>
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">All Reviews (432)</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Review 1 */}
            <div className="p-4 border rounded-lg">
              <div className="flex-1 items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <div className="flex justify-between items-center ">
                <p className="font-semibold flex items-center gap-2">
  Samantha D.
  <CiCircleCheck className="text-white text-2xl bg-green-500 rounded-full" />
</p>
                <BsThreeDots className="text-black "/>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Posted on August 20, 2023</p>
              <p className="text-sm">
                I absolutely love this t-shirt! The design is unique and the fabric is super comfortable. It fits perfectly and has become my favorite item in my wardrobe.
              </p>
            </div>
           
            <div className="p-4 border rounded-lg">
              <div className="flex-1 items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <div className="flex justify-between items-center ">
                <p className="font-semibold flex items-center gap-2">
  Samantha D.
  <CiCircleCheck className="text-white text-2xl bg-green-500 rounded-full" />
</p>
                <BsThreeDots className="text-black "/>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Posted on August 20, 2023</p>
              <p className="text-sm">
                I absolutely love this t-shirt! The design is unique and the fabric is super comfortable. It fits perfectly and has become my favorite item in my wardrobe.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex-1 items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <div className="flex justify-between items-center ">
                <p className="font-semibold flex items-center gap-2">
  Samantha D.
  <CiCircleCheck className="text-white text-2xl bg-green-500 rounded-full" />
</p>
                <BsThreeDots className="text-black "/>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Posted on August 20, 2023</p>
              <p className="text-sm">
                I absolutely love this t-shirt! The design is unique and the fabric is super comfortable. It fits perfectly and has become my favorite item in my wardrobe.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex-1 items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <div className="flex justify-between items-center ">
                <p className="font-semibold flex items-center gap-2">
  Samantha D.
  <CiCircleCheck className="text-white text-2xl bg-green-500 rounded-full" />
</p>
                <BsThreeDots className="text-black "/>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Posted on August 20, 2023</p>
              <p className="text-sm">
                I absolutely love this t-shirt! The design is unique and the fabric is super comfortable. It fits perfectly and has become my favorite item in my wardrobe.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex-1 items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <div className="flex justify-between items-center ">
                <p className="font-semibold flex items-center gap-2">
  Samantha D.
  <CiCircleCheck className="text-white text-2xl bg-green-500 rounded-full" />
</p>
                <BsThreeDots className="text-black "/>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Posted on August 20, 2023</p>
              <p className="text-sm">
                I absolutely love this t-shirt! The design is unique and the fabric is super comfortable. It fits perfectly and has become my favorite item in my wardrobe.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex-1 items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <div className="flex justify-between items-center ">
                <p className="font-semibold flex items-center gap-2">
  Samantha D.
  <CiCircleCheck className="text-white text-2xl bg-green-500 rounded-full" />
</p>
                <BsThreeDots className="text-black "/>
                </div>
                
              </div>
              <p className="text-sm text-gray-500 mb-2">Posted on August 20, 2023</p>
              <p className="text-sm">
                I absolutely love this t-shirt! The design is unique and the fabric is super comfortable. It fits perfectly and has become my favorite item in my wardrobe.
              </p>
            </div>

            {/* Add more reviews as needed */}
          </div>

          {/* Load More Reviews */}
          <div className="flex justify-center mt-6">
  <button className="flex justify-center items-center font-bold text-sm text-black border border-gray-400 rounded-full py-3 px-6 hover:bg-gray-100 transition-all">
    Load More Reviews
  </button>
</div>



        </div>
      </div>





// productlist 1

    <div className=' mx-44 py-16 h-1/3 '>
        {/* section tag */}

{/* heading */}
<div className="heading flex items-center  justify-center mb-[50px] ">

    <div className="heading flex ">
        <h1 className='text-4xl text-black  font-extrabold '>YOU MIGHT ALSO LIKE THIS</h1>
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

    <div className=" mt-20 my-4 border-t border-gray-300"></div>

    </div>


    </div>






  );
};

export default ProductPage;
