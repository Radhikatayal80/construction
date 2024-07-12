import React from 'react';
import instantLogo from '../assets/logo.png';

const AddDeliveryAddress = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-900 p-4">
        <img src={instantLogo} alt="Instant Logo" className="h-8" />
      </div>
      <div className="container mx-auto mt-8 p-6 bg-white shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Delivery Address</h2>
        <div className="border-b pb-4 mb-4">
          <div className="flex items-center">
            <div className="text-instant-orange">1</div>
            <div className="ml-2">Address</div>
          </div>
          <div className="ml-10 flex items-center text-gray-500">
            <div className="flex-1 border-t"></div>
            <div className="text-instant-orange mx-2">2</div>
            <div>Order Summary</div>
            <div className="flex-1 border-t mx-2"></div>
            <div className="text-gray-500">3</div>
            <div className="ml-2">Payments</div>
          </div>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Full Name*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Phone number*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Pincode*</label>
              <div className="flex">
                <input type="text" className="w-full border p-2 rounded-md" />
                <button className="ml-2 bg-instant-orange text-white p-2 rounded-md">Use my Location</button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">State*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">City</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">House No., Building Name*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Road name, Area, Colony</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Type of Address</label>
            <div className="flex items-center space-x-4 mt-2">
              <button className="flex items-center border p-2 rounded-md">
                <span className="material-icons mr-2">home</span> HOME
              </button>
              <button className="flex items-center border p-2 rounded-md">
                <span className="material-icons mr-2">shop</span> SHOP
              </button>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-instant-orange text-white w-full p-2 rounded-md">Save Address</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDeliveryAddress;
