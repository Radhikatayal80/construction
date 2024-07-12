import React from "react";
import bricksImage from "../assets/bricks.png";
import logoImage from "../assets/logo.png";

 // adjust the import path as needed

const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="bg-gray-700 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logoImage} alt="Logo" className="h-10 mr-4" /> {/* Adjust logo path */}
            {/* <span className="text-lg font-bold">INSTANT</span> */}
          </div>
        </header>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h2 className="text-lg font-semibold flex items-center justify-between">
                1. LOGIN <button className="bg-orange-500 text-white px-4 py-2 rounded">CHANGE</button>
              </h2>
              <p>+91XXXXXXXXXX</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h2 className="text-lg font-semibold flex items-center justify-between">
                2. DELIVERY ADDRESS <button className="bg-orange-500 text-white px-4 py-2 rounded">CHANGE</button>
              </h2>
              <p>XXXXXXXXXXXXXXXXXXXX</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h2 className="text-lg font-semibold bg-orange-500 text-white p-2 rounded-t-lg">3. ORDER SUMMARY</h2>
              <div className="flex justify-between items-center bg-white p-4 rounded-b-lg mt-2">
                <img src={bricksImage} alt="Common Burnt Clay Brick" className="w-24 h-24" />
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold">Common Burnt Clay Brick</h3>
                  <div className="flex items-center">
                    <span className="text-green-600 text-sm mr-2">4.3</span>
                    <span className="text-sm">(43107 Rating & 5410 Reviews)</span>
                  </div>
                  <p>₹ 7 / Pc <span className="line-through text-gray-500">₹ 9 / Pc</span></p>
                  <p className="text-sm text-gray-600">Delivery by tomorrow</p>
                </div>
                <button className="text-red-500 text-sm">Remove</button>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Use GST Invoice
              </label>
              <div className="mt-2 flex justify-between items-center">
                <p>Order confirmation email will be sent to XXXX@gmail.com</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">CONTINUE</button>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-semibold bg-orange-500 text-white p-2 rounded-t-lg">4. PAYMENTS OPTION</h2>
              <div className="flex justify-between items-center bg-white p-4 rounded-b-lg mt-2">
                {/* Add your payment options here, e.g., credit card, debit card, etc. */}
                <div className="flex-1">
                  <p className="font-semibold">Credit Card</p>
                  <input
                    type="text"
                    className="w-full p-2 mt-2 border rounded"
                    placeholder="Card Number"
                  />
                  <input
                    type="text"
                    className="w-full p-2 mt-2 border rounded"
                    placeholder="Card Holder Name"
                  />
                  <div className="flex mt-2">
                    <input
                      type="text"
                      className="w-1/2 p-2 mr-2 border rounded"
                      placeholder="Expiry Date"
                    />
                    <input
                      type="text"
                      className="w-1/2 p-2 border rounded"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">PRICE DETAILS</h2>
            <div className="mt-2">
              <div className="flex justify-between">
                <span>Price</span>
                <span>₹ 20,499</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>₹ 150</span>
              </div>
              <div className="flex justify-between">
                <span>Labour Charges</span>
                <span>₹ 150</span>
              </div>
              <div className="flex justify-between font-semibold mt-2">
                <span>Total Payable</span>
                <span>₹ 20,799</span>
              </div>
              <p className="text-orange-500 text-right mt-2">Your Total Saving On This Order xxxxxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
