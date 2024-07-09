import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="py-2 px-6 flex items-center lg:justify-between border-b-[1px] border-zinc-700 lg:max-w-screen-xl mx-auto lg:px-0 sticky top-0 backdrop-blur-md z-50">
      <div className="w-full nleft flex items-center ">
        <img src="https://www.intract.io/logo/intract_text.svg" alt="" />
        <div className="w-full links hidden lg:flex gap-9 ml-16 mr-2 ">
          {["Compass", "Explore", "Acedemy", "NFTs", "For Project"].map(
            (elem, index) => (
              <a
                key={index}
                className=" text-md text-zinc-300 font-semibold hover:text-zinc-100 font-regular flex items-center gap-1"
                href=""
              >
                {elem}
              </a>
            )
          )}
        </div>

        <div className="w-full flex items-center gap-2 lg:gap-4 justify-end ">
          <div className="w-2/3 hidden lg:inline lg:relative lg:pl-16 lg:mr-12">
            <input
              type="text"
              placeholder="Search for ecosystem,trending quest etc,."
              className="w-[380px] py-2 px-10 border-[1px] border-zinc-700 bg-zinc-900 rounded-full outline-none"
            />
            <CiSearch className="absolute top-3 left-20" />
          </div>
          <div className=" relative w-10 h-10 rounded-full border-[1px] border-orange-400">
            <img
              className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
              alt=""
            />
          </div>

          <button className=" px-6 py-2 text-sm text-black bg-white rounded">
            Sign In
          </button>
          <IoMenuOutline className="text-[35px] lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
