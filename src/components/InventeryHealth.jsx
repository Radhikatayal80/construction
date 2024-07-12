import React from 'react';

const InventoryHealth = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <button className="mr-4">
              <i className="fas fa-bars text-gray-700"></i>
            </button>
            <h1 className="text-xl font-bold text-gray-800">Listings</h1>
          </div>
          <div className="flex items-center">
            <button className="mr-4">
              <i className="fas fa-bell text-gray-700"></i>
            </button>
            <img
              src="path/to/profile-image.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-800">345</h2>
              <p className="text-sm text-gray-600">Active Listings</p>
            </div>
          </div>
          <div>
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-800">784</h2>
              <p className="text-sm text-gray-600">Inactive Listings</p>
            </div>
          </div>
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by material name..."
            className="flex-1 p-2 border border-gray-300 rounded-l-md"
          />
          <button className="p-2 border border-gray-300 bg-white">
            <i className="fas fa-filter text-gray-700"></i>
          </button>
          <button className="p-2 bg-orange-500 text-white rounded-r-md">
            + Add New Listing
          </button>
        </div>
        <table className="w-full bg-white shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-2 text-left">PRODUCT DETAILS</th>
              <th className="p-2 text-left">LISTINGS PRICE</th>
              <th className="p-2 text-left">USA</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="p-2 flex items-center">
                  <img
                    src="path/to/product-image.jpg"
                    alt="Product"
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-800">ACC PPC Cement, 50 Kg</p>
                    <p className="text-sm text-gray-600">Standard quality and simply the best</p>
                  </div>
                </td>
                <td className="p-2 text-gray-800">₹ 15,000</td>
                <td className="p-2 text-gray-800">{60 + index * 10}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default InventoryHealth;
