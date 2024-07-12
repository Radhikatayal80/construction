import React from 'react';
import logo from '../assets/logo.png';

const SelectAddress = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white py-4 px-4 flex justify-between items-center border-b border-gray-200">
        <img src={logo} alt="Logo" className="w-24" />
        <p className="text-gray-600">Select Address</p>
      </header>

      {/* Address Selection */}
      <div className="max-w-2xl w-full bg-white p-8 mt-10 shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Select Address</h2>
          <button className="text-orange-500">Edit</button>
        </div>
        <div className="border p-4 rounded mb-4">
          <p className="text-sm font-semibold">HOME</p>
          <p>Rahul Sharma</p>
          <p>3 Newbridge Court</p>
          <p>Chino Hills, CA 91709, United States</p>
          <p>9911345670</p>
          <div className="flex items-center mt-2">
            <input type="radio" id="shippingAddress" name="address" className="mr-2" />
            <label htmlFor="shippingAddress" className="text-sm">Use as the shipping address</label>
          </div>
        </div>
        <button className="flex items-center justify-center w-full py-2 px-4 bg-orange-500 text-white rounded shadow hover:bg-orange-600">
          <span className="mr-2">+</span> Add New Address
        </button>
        <button className="w-full mt-4 py-2 px-4 bg-orange-500 text-white rounded shadow hover:bg-orange-600">
          Delivery Here
        </button>
      </div>
    </div>
  );
};

export default SelectAddress;
