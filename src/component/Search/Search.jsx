import { FaSearch } from "react-icons/fa";
import Img from "../../assets/VZvw.gif";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { searchCurruncyInit, } from "../../redux/CurruncyDataSlice";
export function Search({handleSetSearchData,searchText}) {
  // const [searchText, setSearchText] = useState("");

  // const { searchTerm } = useSelector((state) => state.CurruncyDataSlice);
  // console.log(searchTerm);
  // const dispatch = useDispatch();
  // const handleSetSearchData = (e) => {
  //   e.preventDefault();
  //   setSearchText(e.target.value);
  // };

  return (
    <>
      <>
        <div className=" relative">
          <div className="flex flex-row items-center w-[330px] bg-[#292929] rounded-md px-2 ">
            <input
              type="text"
              name="search"
              className="bg-transparent border-none outline-none w-full py-0.5 text-white "
              placeholder="Search here..."
              value={searchText}
              // onChange={(e)=>setSearchText(e.target.value)}
              onChange={handleSetSearchData}
            ></input>

            <FaSearch className="bg-transparent text-[#14FFEC]" size={20} />
          </div>
          {/* {searchText.length > 0 ? ( */}

          {/* <> */}
            {/* <div className="absolute top-11  w-[330px] h-96 roundedoverflow-x-hidden py-2 bg-[#313131] bg-opacity-50 backdrop-blur-md overflow-y-scroll rounded-md"> */}
              {/* {searchData ? (                  
            searchData?.map((coin) => {
              return ( */}
              <>
                {/* <li className="flex items-center ml-4 my-1 cursor-pointer bg-transparent relative "> */}
                  {/* <img */}
                    {/* className="w-5 h-5 mx-1.5 bg-transparent" */}
                    {/* // src={coin?.thumb} */}
                    {/* // alt={coin?.name} */}
                  {/* /> */}
                  {/* image   
              // {/* <span>{coin.name}</span> */}
                  {/* <span className="bg-transparent text-white">lji</span> */}
                {/* </li> */}

                {/* <div className=" border border-opacity-20 border-[#14FFEC]"></div> */}
              </>
              {/* ); */}
              {/* })
            ) : (   */}
              {/* <div className="absolute left-24 top-52 bg-transparent text-white flex flex-row items-center justify-center"> */}
                {/* <img className="w-6 h-5 mx-1.5 bg-transparent" src={Img} />{" "} */}
                {/* Searching */}
              {/* </div> */}
              {/* )}   */}
            {/* </div> */}
          {/* </> */}
          {/* ) : null}  */}
        </div>
      </>
    </>
  );
}
