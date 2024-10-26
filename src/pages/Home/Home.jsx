import React from "react";
import {  NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center my-2">
      <div className="flex flex-row items-center justify-center rounded-full border border-[#14FFEC] px-2 py-2 w-[50%] ">
        <NavLink
          to="/"
          end
          className={({ isActive }) => {
            return `w-full text-base text-center font-nunito m-2.5 font-custom

${isActive ? "text-black bg-[#14FFEC]" : "bg-[#292929] text-gray-500"}
    border-0 cursor-pointer rounded capitalize font-semibold`;
          }}
        >
          Crypto
        </NavLink>
        <NavLink
          to="/trending"
          end
          className={({ isActive }) => {
            return `w-full text-base text-center font-nunito m-2.5 font-custom

${isActive ? "text-black bg-[#14FFEC]" : "bg-[#292929] text-gray-500"}
    border-0 cursor-pointer rounded capitalize font-semibold`;
          }}
        >
          Trending
        </NavLink>
        <NavLink
          to="/saved"
          end
          className={({ isActive }) => {
            return `w-full text-base text-center font-nunito m-2.5 font-custom

${isActive ? "text-black bg-[#14FFEC]" : "bg-[#292929] text-gray-500"}
    border-0 cursor-pointer rounded capitalize font-semibold`;
          }}
        >
          Saved
        </NavLink>
      </div>
    </div>
  );
}
