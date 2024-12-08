import { IoIosArrowForward } from 'react-icons/io';

const Cart = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-black mb-6 font-bold">
        <div className='flex items-center'>
        <span>Home </span>
        <IoIosArrowForward className='text-black text-base'/>
        <span className="text-black font-semibold">Cart</span>
      </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">YOUR CART</h1>

      {/* Cart Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Cart Items */}
        <div className="flex-1">
          {/* Item 1 */}
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-4">
              <img
                src="/images/image 8 (2).svg" // Placeholder for product image
                alt="Gradient Graphic T-shirt"
                className="w-20 h-20 rounded-lg"
              />
              <div>
                <h3 className="font-semibold">Gradient Graphic T-shirt</h3>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: White</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center border rounded-lg">
                <button className="px-3 py-1 text-lg">-</button>
                <span className="px-4 py-1 border-l border-r">1</span>
                <button className="px-3 py-1 text-lg">+</button>
              </div>
              <p className="font-semibold">$145</p>
              <button className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-4">
              <img
                src="/images/image 8 (3).svg"
                alt="Checkered Shirt"
                className="w-20 h-20 rounded-lg"
              />
              <div>
                <h3 className="font-semibold">Checkered Shirt</h3>
                <p className="text-sm text-gray-500">Size: Medium</p>
                <p className="text-sm text-gray-500">Color: Red</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center border rounded-lg">
                <button className="px-3 py-1 text-lg">-</button>
                <span className="px-4 py-1 border-l border-r">1</span>
                <button className="px-3 py-1 text-lg">+</button>
              </div>
              <p className="font-semibold">$180</p>
              <button className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="images/image 9.svg"
                alt="Skinny Fit Jeans"
                className="w-20 h-20 rounded-lg"
              />
              <div>
                <h3 className="font-semibold">Skinny Fit Jeans</h3>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: Blue</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center border rounded-lg">
                <button className="px-3 py-1 text-lg">-</button>
                <span className="px-4 py-1 border-l border-r">1</span>
                <button className="px-3 py-1 text-lg">+</button>
              </div>
              <p className="font-semibold">$240</p>
              <button className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 bg-white p-6 border rounded-lg">
          <h2 className="font-bold text-lg mb-6">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p className="font-semibold">$565</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Discount (-20%)</p>
            <p className="font-semibold text-red-500">-$113</p>
          </div>
          <div className="flex justify-between mb-6">
            <p>Delivery Fee</p>
            <p className="font-semibold">$15</p>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <p>Total</p>
            <p>$467</p>
          </div>
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button className="w-full bg-black text-white py-3 rounded-lg mb-4">
            Apply
          </button>
          <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center">
            Go to Checkout &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
