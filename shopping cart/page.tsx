import React from 'react'

export default function Shopping() {
  return (
    <div>
 <div className="max-w-6xl mx-auto p-6">
  <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
  {/* <!-- Product List --> */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* <!-- Product Items --> */}
    <div className="lg:col-span-2">
      <div className="border-b pb-4">
        <div className="flex items-center space-x-4">
          <img src="/product1.jpg" alt="Product Image" className="w-20 h-20 rounded object-cover" />
          <div>
            <h2 className="font-bold">Ut diam consequat</h2>
            <p className="text-gray-500">Color: Brown | Size: XL</p>
          </div>
          <p className="ml-auto">$32.00</p>
          <input type="number" value="1" min="1" className="w-16 text-center border rounded" />
          <p className="font-bold">$32.00</p>
        </div>
      </div>
      <div className="border-b py-4">
        <div className="flex items-center space-x-4">
          <img src="/product2.jpg" alt="Product Image" className="w-20 h-20 rounded object-cover" />
          <div>
            <h2 className="font-bold">Vel faucibus posuere</h2>
            <p className="text-gray-500">Color: Black | Size: XL</p>
          </div>
          <p className="ml-auto">$35.00</p>
          <input type="number" value="1" min="1" className="w-16 text-center border rounded" />
          <p className="font-bold">$35.00</p>
        </div>
      </div>
    </div>
<div className="">
    {/* <!-- Cart Totals --> */}
    <h2 className="text-xl font-bold mb-4">Cart Totals</h2>

    <div className="bg-gray-100 h-[284px] p-6 rounded">
      <div className="flex justify-between">
        <p>Subtotal:</p>
        
        <p className="font-bold">$67.00</p>
      </div>
      <div className="flex justify-between border-t border-b pb-2 pt-6  mt-2">
        <p>Total:</p>
        <p className="font-bold">$67.00</p>
      </div>
      <div className="">
      <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23649 0.403348C5.2055 0.372105 5.16863 0.347307 5.12801 0.330384C5.08739 0.313461 5.04382 0.304749 4.99982 0.304749C4.95582 0.304749 4.91225 0.313461 4.87163 0.330384C4.83101 0.347307 4.79414 0.372105 4.76315 0.403348L2.27982 2.89001L1.23649 1.84335C1.20431 1.81227 1.16633 1.78783 1.12471 1.77143C1.0831 1.75503 1.03865 1.74698 0.993928 1.74776C0.949201 1.74853 0.905065 1.75811 0.864038 1.77594C0.823012 1.79377 0.7859 1.81951 0.75482 1.85168C0.723741 1.88386 0.699303 1.92184 0.682902 1.96345C0.6665 2.00507 0.658457 2.04951 0.659231 2.09424C0.660004 2.13897 0.66958 2.1831 0.687412 2.22413C0.705243 2.26516 0.73098 2.30227 0.763154 2.33335L2.04315 3.61335C2.07414 3.64459 2.11101 3.66939 2.15163 3.68631C2.19225 3.70323 2.23582 3.71195 2.27982 3.71195C2.32382 3.71195 2.36739 3.70323 2.40801 3.68631C2.44863 3.66939 2.4855 3.64459 2.51649 3.61335L5.23649 0.893348C5.27032 0.862134 5.29732 0.82425 5.31579 0.782083C5.33426 0.739917 5.3438 0.694382 5.3438 0.648348C5.3438 0.602314 5.33426 0.556779 5.31579 0.514612C5.29732 0.472446 5.27032 0.434562 5.23649 0.403348Z" fill="white"/>
</svg>

        <p className=''>Shipping & taxes calculated at checkout</p>
      </div>
      <button className="w-full bg-green-500 text-white py-2 mt-4 rounded">
        Proceed to Checkout
      </button>
    </div>

    {/* <!-- Duplicate Cart Totals --> */}
    <div className="bg-gray-100 p-6 rounded mt-6">
      <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
      <div className="flex justify-between">
        <p>Subtotal:</p>
        <p className="font-bold">$67.00</p>
      </div>
      <div className="flex justify-between border-t pt-2 mt-2">
        <p>Total:</p>
        <p className="font-bold">$67.00</p>
      </div>
      <button className="w-full bg-green-500 text-white py-2 mt-4 rounded">
        Proceed to Checkout
      </button>
    </div>
  </div>
  </div>

  {/* <!-- Buttons --> */}
  <div className="flex justify-between mt-6">
    <button className="bg-pink-500 text-white px-4 py-2 rounded">Update Cart</button>
    <button className="bg-pink-500 text-white px-4 py-2 rounded">Clear Cart</button>
  </div>
</div>

    </div>
  )
}
