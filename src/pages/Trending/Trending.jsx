import React, { useEffect } from "react";
import { BiReset } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import TrendingCoin from "../../component/TrendingCoin/TrendingCoin";
import { TrendingDataInit } from "../../redux/TrendingDataSlice";
import Loading from "../../component/Loading/Loading";

export default function Trending() {
  const dispatch = useDispatch();
  const { TrendingCoindata, loading } = useSelector(
    (state) => state.TrendingDataSlice
  );
  // console.log(TrendingCoindata?.coins);
  useEffect(() => {
    dispatch(TrendingDataInit());
  }, []);

  return (
    <>
      {/* {!loading?
    <div className="w-[80%] h-[500px] flex items-center justify-center ">
      <Loading/>
      </div>: */}

      <div className="w-[80%] mx-auto my-4 font-custom mb-16">
        <BiReset
          color="#14FFEC"
          size={27}
          cursor={"pointer"}
          className="  right-0 mx-2 my-2"
        />
        <div className="flex flex-row justify-center items-center border border-[#808080]  rounded-md ">
          {loading ? (
            <div className="w-[80%] h-[500px] flex items-center justify-center ">
              <Loading />
            </div>
          ) : (
            <div className="flex flex-row justify-between items-center flex-wrap w-[90%]  ">
              {TrendingCoindata?.coins?.map((data) => (
                <TrendingCoin key={data?.id} data={data?.item} />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* }  */}
    </>
  );
}

{
  /* <div className="w-[60%]">hnjb</div> */
}
