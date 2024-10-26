import React from "react";
import Logo from "../../assets/logo.2ce8e122c6cf18ca3c25b2b663398aab.svg";
export default function Navbar() {
  return (
    <div className="bg-[#212121] flex flex-row items-center  pt-4 pb-1 pl-6 font-bold ">
      <img src={Logo}></img>
      <div>
        <h5 className="text-[#14FFEC] font-custom text-3xl">CryptoBugs</h5>
      </div>
    </div>
  );
}
