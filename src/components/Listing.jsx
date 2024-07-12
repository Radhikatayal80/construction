import React from 'react';

const products = [
  {
    name: 'ACC PPC Cement, 50 kg',
    price: 50,
    sales: 60,
    imgSrc: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    name: 'ACC PPC Cement, 50 kg',
    price: 50,
    sales: 70,
    imgSrc: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    name: 'ACC PPC Cement, 50 kg',
    price: 50,
    sales: 10,
    imgSrc: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    name: 'ACC PPC Cement, 50 kg',
    price: 50,
    sales: 80,
    imgSrc: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    name: 'ACC PPC Cement, 50 kg',
    price: 50,
    sales: 100,
    imgSrc: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    name: 'ACC PPC Cement, 50 kg',
    price: 50,
    sales: 40,
    imgSrc: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    name: 'ACC PPC Cement, 50 kg',
    price: 50,
    sales: 30,
    imgSrc: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    name: 'ACC PPC Cement, 50 kg',
    price: 50,
    sales: 90,
    imgSrc: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
  {
    name: 'ACC PPC Cement, 50 kg',
    price: 50,
    sales: 35,
    imgSrc: 'https://via.placeholder.com/50', // Replace with actual image URL
  },
];

const Listing = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between py-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/1024px-Amazon_icon.svg.png" // Replace with your logo URL
            alt="Logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold">Inventory Health</h1>
        </header>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">18 SKUs</p>
            <p className="text-gray-500">All Inventory</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">18 SKUs</p>
            <p className="text-gray-500">All Inventory</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">18 SKUs</p>
            <p className="text-gray-500">All Inventory</p>
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by material name..."
            className="w-full p-4 rounded-lg border border-gray-300"
          />
        </div>
        <div className="flex mb-4">
          <button className="bg-white p-4 rounded-lg shadow-lg mr-4">Categories</button>
          <button className="bg-white p-4 rounded-lg shadow-lg">Brand</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-4">Product Information</th>
                <th className="p-4">Product Information</th>
                <th className="p-4">Sales</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-4 flex items-center">
                    <img src={product.imgSrc} alt={product.name} className="w-10 h-10 mr-4" />
                    <div>
                      <p className="font-bold">{product.name}</p>
                      <p className="text-gray-500">Lorem ipsum is simply text.</p>
                    </div>
                  </td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listing;
