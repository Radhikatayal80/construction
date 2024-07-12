import React from 'react';
import instantLogo from '../assets/logo.png'; // Adjust the path as needed
import constructionImage from '../assets/construction.png'; // Adjust the path as needed

const Bhatta = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-900 p-4">
        <img src={instantLogo} alt="Instant Logo" className="h-8" />
      </div>
      <div className="container mx-auto mt-8 p-6 bg-white shadow-lg">
        <h2 className="text-xl font-bold mb-4">Bhatta Fields</h2>
        <div className="flex justify-center mb-4">
          <img src={constructionImage} alt="Construction" className="h-40" />
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Your Name*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Contact person or owner Name*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Email Id*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Address (full)*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Aadhar Card Number*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div className="flex justify-between">
              <button className="bg-instant-orange text-white w-full p-2 rounded-md">Upload Front</button>
              <button className="bg-instant-orange text-white w-full p-2 rounded-md">Upload Back</button>
            </div>
            <div>
              <label className="block text-gray-700">Pan Card Number*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div className="flex justify-center">
              <button className="bg-pink-500 text-white w-full p-2 rounded-md">Upload PAN Card</button>
            </div>
            <div>
              <label className="block text-gray-700">GST Number*</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <button className="bg-instant-orange text-white w-full p-2 rounded-md">Use my Location</button>
            </div>
            <div>
              <label className="block text-gray-700">Bhatta Code</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Licence Number</label>
              <input type="text" className="w-full border p-2 rounded-md" />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Descriptions</label>
              <textarea className="w-full border p-2 rounded-md h-32"></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-instant-orange text-white w-full p-2 rounded-md">Next Payment Details</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bhatta;
