import React from 'react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full bg-white p-8 mt-10 shadow-lg rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/1024px-Amazon_icon.svg.png" // Replace with your logo URL
            alt="Logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold">Admin or Sale person</h1>
        </div>
        <div className="mb-8">
          <img
            src="https://example.com/image.png" // Replace with the URL of the image
            alt="Illustration"
            className="w-full h-auto"
          />
        </div>
        <form className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue="Rahul"
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue="Sharma"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue="+917890654320"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email Id</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue="rahul123@gmail.com"
            />
          </div>
        </form>
        <div className="flex justify-center">
          <button className="bg-orange-500 text-white py-2 px-6 rounded shadow hover:bg-orange-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
