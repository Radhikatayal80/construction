import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md h-full">
        <div className="p-4 bg-orange-500">
          <div className="flex items-center">
            <img
              src="path/to/profile-image.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-white font-bold">Emma Ashley</h2>
              <p className="text-white">@emma_ashley</p>
            </div>
          </div>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/my-order" className="block p-4 hover:bg-gray-200">
                MY ORDER
              </Link>
            </li>
            <li>
              <Link to="/account-settings" className="block p-4 hover:bg-gray-200">
                ACCOUNT SETTING
              </Link>
            </li>
            <li>
              <div className="p-4 text-orange-500">Profile Information</div>
              <ul className="ml-4">
                <li>
                  <Link to="/manage-addresses" className="block p-4 hover:bg-gray-200">
                    Manage Addresses
                  </Link>
                </li>
                <li>
                  <Link to="/pan-card-information" className="block p-4 hover:bg-gray-200">
                    PAN Card Information
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="p-4 text-orange-500">PAYMENTS</div>
              <ul className="ml-4">
                <li>
                  <Link to="/gift-cards" className="block p-4 hover:bg-gray-200">
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link to="/saved-upi" className="block p-4 hover:bg-gray-200">
                    Saved UPI
                  </Link>
                </li>
                <li>
                  <Link to="/saved-cards" className="block p-4 hover:bg-gray-200">
                    Saved CARD
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="p-4 text-orange-500">MY STUFF</div>
              <ul className="ml-4">
                <li>
                  <Link to="/my-coupons" className="block p-4 hover:bg-gray-200">
                    My Coupons
                  </Link>
                </li>
                <li>
                  <Link to="/reviews-ratings" className="block p-4 hover:bg-gray-200">
                    Reviews & Ratings
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/notifications" className="block p-4 text-orange-500 hover:bg-gray-200">
                All Notifications
              </Link>
            </li>
            <li>
              <Link to="/my-wishlist" className="block p-4 hover:bg-gray-200">
                My Wishlist
              </Link>
            </li>
            <li>
              <Link to="/logout" className="block p-4 hover:bg-gray-200">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100">
        {/* Add your main content here */}
      </main>
    </div>
  );
};

export default Account;
