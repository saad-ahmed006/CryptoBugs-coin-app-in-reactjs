import React from "react";
export default function Sort({handleSort ,sortForDesc,setSortForDesc}) {
  return (
    <div className="flex flex-row  items-center mt-0.5">
      <span className="text-white">Sort by: </span>
      <select
        name="sortby"
        className=" bg-[#323232] border border-[#14FFEC] text-white w-40 h-6 px-1 pl-2 pr-2 mx-2 ml-4 text-sm  rounded-sm capitalize focus:outline-0 "
        value={sortForDesc}
        onChange={handleSort}
      >
        <option value="market_cap_desc">market cap desc</option>
        <option value="market_cap_asc">market cap asc</option>
        <option value="volume_desc">volume desc</option>
        <option value="volume_asc">volume asc</option>
        <option value="id_desc">id desc</option>
        <option value="id_asc">id asc</option>
        <option value="gecko_desc">gecko desc</option>
        <option value="gecko_asc">gecko asc</option>
      </select>
    </div>
  );
}
