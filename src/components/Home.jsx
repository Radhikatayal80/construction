import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import homeImage from "../assets/people.png";
import phoneIcon from "../assets/calling.png";
import emailIcon from "../assets/mail.png";
import twitterIcon from "../assets/twitter.png";
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import youtubeIcon from "../assets/youtube.png";
import logo from "../assets/logo.png";

import bricks from "../assets/bricks.png";
import sariya from "../assets/sariya.png";
import cement from "../assets/cement.png";
import carpainter from "../assets/carpainter.png";
import plumber from "../assets/plumber.png";
import rodi from "../assets/rodi.png";
import ACCbricks from "../assets/ACCbricks.png";
import tiles from "../assets/tiles.png";
import glass from "../assets/glass.png";
import wood from "../assets/wood.png";

import samrat from "../assets/birlaCement.png";
import ambuja from "../assets/ambujaCement.png";
import ultraTech from "../assets/ultraTech.png";
import lafarge from "../assets/lafargeCement.png";

const Home = () => {
  return (
    <div className="font-sans">
      {/* First Navbar */}
      <header className="bg-brown-600 text-white py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
          <span>(414) 897 - 0107</span>
          <img src={emailIcon} alt="Email" className="w-5 h-5" />
          <span>instant@gmail.com</span>
        </div>
        <div className="flex space-x-2">
          <div className="bg-orange-500 p-2 rounded-full">
            <img src={twitterIcon} alt="Twitter" className="w-5 h-5" />
          </div>
          <div className="bg-orange-500 p-2 rounded-full">
            <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
          </div>
          <div className="bg-orange-500 p-2 rounded-full">
            <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
          </div>
          <div className="bg-orange-500 p-2 rounded-full">
            <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* Second Navbar */}
      <header className="bg-white border-b border-gray-200 py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Instant Logo" className="w-24 mr-4" />
          <input
            type="text"
            placeholder="Search by Material name"
            className="py-2 px-4 border border-gray-300 rounded bg-orange-500 placeholder-white text-white focus:outline-none focus:bg-orange-600"
          />
        </div>
        <div className="flex space-x-4">
          <span className="hover:text-orange-500 cursor-pointer">Home</span>
          <span className="hover:text-orange-500 cursor-pointer">My Account</span>
          <span className="hover:text-orange-500 cursor-pointer">
            <a href="/login">Sign In</a>
          </span>
          <span className="hover:text-orange-500 cursor-pointer">Add to Cart</span>
        </div>
      </header>

      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src={homeImage} alt="Construction" />
        </div>
      </Carousel>

      <section className="py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">All Categories</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-orange-100 p-4 rounded hover:bg-orange-200 flex flex-col items-center">
            <img src={bricks} alt="Bricks" className="w-20 h-20" />
            <span>Bricks</span>
          </div>
          <div className="bg-orange-100 p-4 rounded hover:bg-orange-200 flex flex-col items-center">
            <img src={sariya} alt="Sariya" className="w-20 h-20" />
            <span>Sariya</span>
          </div>
          <div className="bg-orange-100 p-4 rounded hover:bg-orange-200 flex flex-col items-center">
            <img src={cement} alt="Cement" className="w-20 h-20" />
            <span>Cement</span>
          </div>
          <div className="bg-orange-100 p-4 rounded hover:bg-orange-200 flex flex-col items-center">
            <img src={carpainter} alt="Carpainter" className="w-20 h-20" />
            <span>Carpenter</span>
          </div>
          <div className="bg-orange-100 p-4 rounded hover:bg-orange-200 flex flex-col items-center">
            <img src={plumber} alt="Plumber" className="w-20 h-20" />
            <span>Plumber</span>
          </div>
          <div className="bg-orange-100 p-4 rounded hover:bg-orange-200 flex flex-col items-center">
            <img src={rodi} alt="Rodi" className="w-20 h-20" />
            <span>Rodi</span>
          </div>
          <div className="bg-orange-100 p-4 rounded hover:bg-orange-200 flex flex-col items-center">
            <img src={ACCbricks} alt="ACC Bricks" className="w-20 h-20" />
            <span>ACC Bricks</span>
          </div>
          <div className="bg-orange-100 p-4 rounded hover:bg-orange-200 flex flex-col items-center">
            <img src={tiles} alt="Tiles" className="w-20 h-20" />
            <span>Tiles</span>
          </div>
          <div className="bg-orange-100 p-4 rounded hover:bg-orange-200 flex flex-col items-center">
            <img src={glass} alt="Glass" className="w-20 h-20" />
            <span>Glass</span>
          </div>
          <div className="bg-orange-100 p-4 rounded hover:bg-orange-200 flex flex-col items-center">
            <img src={wood} alt="Wood" className="w-20 h-20" />
            <span>Wood</span>
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Featured Product</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-200 p-4 rounded hover:bg-gray-300 flex flex-col items-center">
            <img src={samrat} alt="Samrat" className="w-20 h-20" />
            <span>Samrat</span>
          </div>
          <div className="bg-gray-200 p-4 rounded hover:bg-gray-300 flex flex-col items-center">
            <img src={ambuja} alt="Ambuja" className="w-20 h-20" />
            <span>Ambuja</span>
          </div>
          <div className="bg-gray-200 p-4 rounded hover:bg-gray-300 flex flex-col items-center">
            <img src={ultraTech} alt="UltraTech" className="w-20 h-20" />
            <span>UltraTech</span>
          </div>
          <div className="bg-gray-200 p-4 rounded hover:bg-gray-300 flex flex-col items-center">
            <img src={lafarge} alt="Lafarge" className="w-20 h-20" />
            <span>Lafarge</span>
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 rounded hover:bg-gray-200 flex flex-col items-center">
            <img src={glass} alt="Glass" className="w-20 h-20" />
            <span>Glass</span>
          </div>
          <div className="bg-gray-100 p-4 rounded hover:bg-gray-200 flex flex-col items-center">
            <img src={wood} alt="Wood" className="w-20 h-20" />
            <span>Wood</span>
          </div>
          <div className="bg-gray-100 p-4 rounded hover:bg-gray-200 flex flex-col items-center">
            <img src={sariya} alt="Sariya" className="w-20 h-20" />
            <span>Sariya</span>
          </div>
          <div className="bg-gray-100 p-4 rounded hover:bg-gray-200 flex flex-col items-center">
            <img src={bricks} alt="Bricks" className="w-20 h-20" />
            <span>Bricks</span>
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Top Stories of Customer & Brand Directory</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <footer className="bg-gray-800 text-white py-10 px-4">
        <div className="grid grid-cols-3 gap-4">
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

export default Home;
