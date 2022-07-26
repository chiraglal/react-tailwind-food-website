import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeart, FaWallet, FaUserFriends, FaDownload } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center" onClick={() => setNav(!nav)}>
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Eat <span>Out</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Search Input */}
      <div className="cursor-pointer flex item-center bg-gray-200 rounded-full p-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Food..."
          className="bg-transparent w-full focus:outline-none"
        />
      </div>
      {/* Cart */}
      <button className="flex items-center py-2 bg-black text-white hidden md:flex rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      {/* Mobile Menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* Side Drawer Menu */}
      <div
        className={
          nav
            ? "fixed top-0 w-[300px] left-0 h-screen bg-white z-10 duration-300"
            : "fixed top-0 w-[300px] left-[-100%] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 cursor-pointer top-4"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Eat <span className="font-bold">Out</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="py-4 flex text-xl">
              <TbTruckDelivery size={30} className="mr-4" /> Order
            </li>
            <li className="py-4 flex text-xl">
              <FaHeart size={30} className="mr-4" /> Favorites
            </li>
            <li className="py-4 flex text-xl">
              <FaWallet size={30} className="mr-4" /> Wallet
            </li>
            <li className="py-4 flex text-xl">
              <BsFillQuestionCircleFill size={30} className="mr-4" /> Help
            </li>
            <li className="py-4 flex text-xl">
              <AiFillTag size={30} className="mr-4" /> Promotions
            </li>
            <li className="py-4 flex text-xl">
              <FaDownload size={30} className="mr-4" /> Best Ones
            </li>
            <li className="py-4 flex text-xl">
              <FaUserFriends size={30} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
