import React from "react";
import LoaderImage from "../../assets/VZvw.gif";
export default function Loading() {
  return (
    <>
      <div className="w-full flex flex-row justify-center items-center">
          <p className="text-white">Please Wait...</p>
          <img src={LoaderImage} className="w-8"></img>
      </div>
    </>
  );
}
