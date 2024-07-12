import React from 'react';
import clayBrickImage from '../assets/clayBrick.png';
import instantLogo from '../assets/logo.png'; // Assuming this is the logo image

const PaymentMethod = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 text-white p-4 flex items-center">
        <img src={instantLogo} alt="Instant Logo" className="h-10" />
      </nav>
      
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md flex mt-5">
        {/* Main Content */}
        <div className="w-2/3 pr-6">
          {/* LOGIN Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center border-b pb-3 mb-3">
              <div className="text-xl font-semibold">LOGIN</div>
              <button className="text-orange-600">CHANGE</button>
            </div>
            <div className="text-gray-600">+91XXXXXXXXXX</div>
          </div>

          {/* DELIVERY ADDRESS Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center border-b pb-3 mb-3">
              <div className="text-xl font-semibold">DELIVERY ADDRESS</div>
              <button className="text-orange-600">CHANGE</button>
            </div>
            <div className="text-gray-600">XXXXXXXXXXXXXXXXXXXXXX</div>
          </div>

          {/* ORDER SUMMARY Section */}
          <div className="mb-6">
            <div className="flex items-center bg-orange-500 text-white p-3 rounded-t-lg">
              <div className="text-xl font-semibold">ORDER SUMMARY</div>
            </div>
            <div className="border rounded-b-lg p-3">
              <div className="flex items-center mb-3">
                <img src={clayBrickImage} alt="Brick" className="w-20 h-20" />
                <div className="ml-3">
                  <div className="font-semibold">Common Burnt Clay Brick</div>
                  <div className="text-gray-600">Delivery by tomorrow sun</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-green-500 font-bold">₹7 / Pc</span>
                  <span className="line-through text-gray-600 ml-2">₹9 / Pc</span>
                </div>
                <button className="text-red-500 cursor-pointer">Remove</button>
              </div>
            </div>
          </div>

          {/* GST Invoice Option */}
          <div className="mb-6 flex items-center">
            <input type="checkbox" id="gstInvoice" className="mr-2" />
            <label htmlFor="gstInvoice" className="text-gray-600">Use Gst Invoice</label>
          </div>

          {/* Order Confirmation Email */}
          <div className="mb-6 flex items-center">
            <input type="text" className="flex-grow p-2 border rounded-l-lg" placeholder="Order confirmation email will be sent to XXXX@gmail.com" />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg">CONTINUE</button>
          </div>

          {/* PAYMENT OPTIONS Section */}
          <div className="mb-6">
            <div className="flex items-center bg-orange-500 text-white p-3 rounded-t-lg">
              <div className="text-xl font-semibold">PAYMENTS OPTION</div>
            </div>
            <div className="border rounded-b-lg p-3">
              <div className="mb-3">
                <input type="radio" id="upi" name="paymentMethod" className="mr-2" />
                <label htmlFor="upi" className="text-gray-600 font-semibold">UPI</label>
                <div className="pl-6">
                  <input type="radio" id="phonePe" name="upiOption" className="mr-2" />
                  <label htmlFor="phonePe" className="text-gray-600">Phone Pe</label><br />
                  <input type="radio" id="upiId" name="upiOption" className="mr-2" />
                  <label htmlFor="upiId" className="text-gray-600">UPI ID</label>
                </div>
              </div>
              <div className="mb-3">
                <input type="radio" id="wallet" name="paymentMethod" className="mr-2" />
                <label htmlFor="wallet" className="text-gray-600 font-semibold">Wallet</label>
              </div>
              <div className="mb-3">
                <input type="radio" id="card" name="paymentMethod" className="mr-2" />
                <label htmlFor="card" className="text-gray-600 font-semibold">Credit / Debit / ATM Card</label>
              </div>
              <div className="mb-3">
                <input type="radio" id="netBanking" name="paymentMethod" className="mr-2" />
                <label htmlFor="netBanking" className="text-gray-600 font-semibold">Net Banking</label>
              </div>
              <div className="mb-3">
                <input type="radio" id="emi" name="paymentMethod" className="mr-2" />
                <label htmlFor="emi" className="text-gray-600 font-semibold">EMI (Easy Installment)</label>
              </div>
              <div className="mb-3">
                <input type="radio" id="cod" name="paymentMethod" className="mr-2" />
                <label htmlFor="cod" className="text-gray-600 font-semibold">Cash on Delivery</label>
              </div>
            </div>
          </div>

          {/* Gift Card Option */}
          <div className="mb-6">
            <div className="flex items-center bg-orange-500 text-white p-3 rounded-t-lg">
              <div className="text-xl font-semibold">ADD GIFT</div>
            </div>
            <div className="border rounded-b-lg p-3">
              <div className="mb-3">
                <input type="radio" id="giftCard" name="paymentMethod" className="mr-2" />
                <label htmlFor="giftCard" className="text-gray-600 font-semibold">Gift Card</label>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Price Details */}
        <div className="w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="text-xl font-semibold mb-3">PRICE DETAILS</div>
          <div className="text-gray-600">
            <div className="flex justify-between mb-3">
              <span>Price</span>
              <span>₹20,499</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Delivery Charges</span>
              <span>₹150</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Labour Charges</span>
              <span>₹150</span>
            </div>
            <div className="flex justify-between mb-3 font-bold">
              <span>Total Payable</span>
              <span>₹20,799</span>
            </div>
            <div className="text-orange-600">Your Total Saving On This Order xxxxxx</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
