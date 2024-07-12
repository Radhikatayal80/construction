import React from 'react';
import logo from '../assets/logo.png';

const Order = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white py-4 px-4 flex justify-between items-center border-b border-gray-200">
        <img src={logo} alt="Logo" className="w-24" />
        <p className="text-gray-600">instant@gmail.com</p>
      </header>

      {/* Order Summary */}
      <div className="max-w-3xl w-full bg-white p-8 mt-10 shadow-lg rounded-lg">
        <div className="text-center mb-4">
          <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Your Order Successfully Placed</h2>
          <p className="text-gray-500">
            Your Order Number is <span className="text-orange-500">#239856</span>
          </p>
          <p className="text-gray-500">1 Jun, 2024</p>
        </div>
        <div className="text-center mb-8">
          <p className="text-gray-500">
            You'll receive an email confirmation shortly to{' '}
            <span className="text-orange-500">yourmail@gmail.com</span>
          </p>
        </div>
        <div className="text-center mb-8">
          <p className="text-xl font-semibold">Order Total</p>
          <p className="text-2xl text-orange-500">$209.99</p>
        </div>
        <div className="text-center mb-8">
          <p className="text-gray-500">Payment Method</p>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded shadow hover:bg-gray-300">
            Back to Home
          </button>
          <button className="bg-orange-500 text-white py-2 px-6 rounded shadow hover:bg-orange-600">
            Continue Shopping
          </button>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-12 max-w-4xl text-gray-500 text-center px-4">
        <p className="mb-4">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="mb-4">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="mb-4">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-4 w-full">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Stories</p>
            <p>Our Blog</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation & Returns</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <p>My Orders</p>
            <p>Wishlist</p>
            <p>Information</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Order;
