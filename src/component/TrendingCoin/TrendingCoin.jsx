import React from "react";
import Img from "../../assets/VZvw.gif";
import { Link, useNavigate } from "react-router-dom";
export default function TrendingCoin({ data }) {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/trending/${data?.id}`)} className="w-[45%] bg-[#292929]  my-6 rounded-lg flex flex-row justify-between px-2 relative hover:bg-[#3e3e3e] cursor-pointer">
      {/* <Link to={`/trending/${data.id}`} className="bg-transparent"> */}
      <div className="bg-transparent">
        <p className="bg-transparent my-2 text-gray-500 font-bold flex flex-row items-center">
          Name :{" "}
          <span className="text-[#14FFEC] italic text-md bg-transparent">
            {" "}
            {data?.name}
          </span>
          <img
            src={data?.thumb}
            className="bg-transparent w-6 mx-2 mt-1 rounded-full"
          ></img>
        </p>
        <p className="bg-transparent my-2 text-gray-500 font-bold">
          Market Cap Rank :{" "}
          <span className="text-[#14FFEC] italic text-md bg-transparent">
            {data?.market_cap_rank}
          </span>
        </p>
        <p className="bg-transparent my-2 text-gray-500 font-bold">
          Price (In Btc):{" "}
          <span className="text-[#14FFEC] italic text-md bg-transparent">
            {data?.price_btc}
          </span>
        </p>
        <p className="bg-transparent my-2 text-gray-500 font-bold">
          Score :{" "}
          <span className="text-[#14FFEC] italic text-md bg-transparent">
            {data?.score}
          </span>
        </p>
      </div>
      <div className="bg-transparent  absolute right-[-10%] ">
        <img
          src={data?.large}
          className="bg-transparent w-[130px] rounded-full"
        ></img>
      </div>
    {/* </Link> */}
    </div>
  );
}
