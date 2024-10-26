import React, { useEffect } from "react";
import { FaFacebook, FaTwitter, FaGithub, FaReddit } from "react-icons/fa";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
  // useHistory
} from "react-router-dom";
import { cryptoCurruncyDataByIdInit } from "../../redux/CurruncyDataSlice";
import Loading from "../Loading/Loading";

export default function CoinDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { singleCoinData, loading } = useSelector(
    (state) => state.CurruncyDataSlice
  );
  // console.log(singleCoinData);

  const HandleOnClose = () => {
    if (location.pathname === `/trending/${id}`||location.pathname === `/saved/${id}`) {
      const newPath = location.pathname.replace(`/${id}`, "");
      navigate(newPath);
    } 
    else {
      const newPath = location.pathname.replace(`${id}`, "");
      navigate(newPath);
    }
  };

  useEffect(() => {
    dispatch(cryptoCurruncyDataByIdInit(id));
  }, [id]);

  return (
    <div
      className="fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 first-letter:
    backdrop-blur-sm flex items-center justify-center font-nunito "
    >
      <div className="w-[65%] h-[75%]  bg-gray-300 bg-opacity-75 rounded-md text-white relative">
        {loading ? (
          <>
            <div className="w-full min-h-[60vh] h-full flex justify-center items-center  ">
              <Loading />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between h-full w-full p-4 rounded-md">
              <div className="flex flex-col w-[45%] h-full pr-2 ">
                <div className="flex w-full items-center">
                  <img
                    className="w-[3rem] h-[3rem] mx-1.5"
                    src={singleCoinData?.image?.large}
                    alt={singleCoinData?.id}
                  />
                  <h1 className="text-xl capitalize font-medium">
                    {singleCoinData?.name}
                  </h1>
                  <span
                    className="text-sm
        py-0.5 px-2.5 ml-2 bg-[#205B56] text-cyan-600 bg-opacity-25
        rounded uppercase
        "
                  >
                    {singleCoinData?.symbol}
                  </span>
                </div>

                <div className="flex w-full mt-6">
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span className="text-sm capitalize text-gray-500">
                        Price
                      </span>
                      <div
                        className={`text-sm px-1 ml-2 font-medium flex items-center
                      rounded uppercase bg-opacity-25
                      ${
                        singleCoinData?.market_data
                          ?.price_change_percentage_24h > 0
                          ? "bg-green-600 text-green-600"
                          : "bg-red-600 text-red-600"
                      }
                      `}
                      >
                        <span className="bg-transparent">
                          {Number(
                            singleCoinData?.market_data
                              ?.price_change_percentage_24h
                          ).toFixed(2)}
                          %
                        </span>
                        {singleCoinData?.market_data
                          ?.price_change_percentage_24h > 0 ? (
                          <BiSolidUpArrow className=" bg-transparent mx-1" />
                        ) : (
                          <BiSolidDownArrow className=" bg-transparent mx-1" />
                        )}
                      </div>
                    </div>
                    <h2 className="text-lg font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "usd",
                        maximumSignificantDigits: 5,
                      }).format(
                        singleCoinData?.market_data?.current_price?.usd
                      )}
                    </h2>
                  </div>
                </div>

                <div className="flex w-full mt-4 justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm capitalize text-gray-500">
                      Market Cap
                    </span>
                    <h2 className="text-base font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "usd",
                        minimumFractionDigits: 0,
                      }).format(singleCoinData?.market_data?.market_cap?.usd)}
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm capitalize text-gray-500">
                      fully diluted valuation
                    </span>
                    <h2 className="text-base font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "usd",
                        notation: "compact",
                      }).format(
                        singleCoinData?.market_data?.fully_diluted_valuation
                          ?.usd
                      )}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col w-full mt-4 justify-between">
                  <span className="text-sm capitalize text-gray-500">
                    total volume
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "usd",
                      minimumFractionDigits: 0,
                    }).format(singleCoinData?.market_data?.total_volume?.usd)}
                  </h2>
                </div>

                {/* <div className="flex w-full mt-4 justify-between">
              {/* <HighLowIndicator */}
                {/* // currentPrice={data.market_data.current_price[currency]} */}
                {/* // high={data.market_data.high_24h[currency]} */}
                {/* // low={data.market_data.low_24h[currency]} */}
                {/* /> */}
                {/* klmk
            </div>  */}

                <div className="flex w-full mt-4 justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm capitalize text-gray-500">
                      Low 24H
                    </span>
                    <h2 className="text-base font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "usd",
                        minimumFractionDigits: 5,
                      }).format(singleCoinData?.market_data?.low_24h?.usd)}
                      {/* curruncy */}
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm capitalize text-gray-500">
                      high 24H
                    </span>
                    <h2 className="text-base font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "usd",
                        minimumFractionDigits: 5,
                      }).format(singleCoinData?.market_data?.high_24h?.usd)}
                    </h2>
                  </div>
                </div>

                <div className="flex w-full mt-4 justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm capitalize text-gray-500">
                      max supply
                    </span>
                    <h2 className="text-base font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "usd",
                        minimumFractionDigits: 0,
                      }).format(singleCoinData?.market_data?.max_supply)}
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm capitalize text-gray-500">
                      circulating supply
                    </span>
                    <h2 className="text-base font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "usd",
                        minimumFractionDigits: 0,
                      }).format(
                        singleCoinData?.market_data?.circulating_supply
                      )}
                    </h2>
                  </div>
                </div>

                <div className="flex w-full mt-4 justify-between">
                  <div className="flex flex-col">
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      className="text-sm bg-gray-600 bg-opacity-100 text-white  px-1.5 py-0.5 my-1 rounded"
                      href={singleCoinData?.links?.homepage[0]}
                    >
                      {singleCoinData?.links?.homepage[0].substring(0, 30)}
                    </a>
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      className="text-sm bg-gray-600 bg-opacity-100 text-white px-1.5 py-0.5 my-1 rounded"
                      href={singleCoinData?.links?.blockchain_site[0]}
                    >
                      {singleCoinData?.links?.blockchain_site[0].substring(
                        0,
                        30
                      )}
                    </a>

                    {/* {data?.links?.official_forum_url[0] && (
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      className="text-sm bg-gray-200 text-gray-100 px-1.5 py-0.5 my-1 rounded"
                      href={data?.links?.official_forum_url[0]}
                    >
                      {data?.links?.official_forum_url[0].substring(0, 30)}
                    </a>
                  )} */}
                  </div>

                  <div className="flex flex-col content-start">
                    <span className="text-sm capitalize text-gray-500">
                      sentiment
                    </span>
                    <div className="flex justify-between">
                      <div
                        className={`text-sm px-1 ml-2 my-1 font-medium flex items-center
          rounded uppercase bg-opacity-25 bg-green-800 text-green-600
          
          `}
                      >
                        <span className="bg-transparent">
                          {Number(
                            singleCoinData?.sentiment_votes_up_percentage
                          ).toFixed(2)}{" "}
                          %
                        </span>
                        <BiSolidDownArrow className="bg-transparent mx-1" />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div
                        className={`text-sm px-1 ml-2 my-1 font-medium flex items-center
          rounded uppercase bg-opacity-25
           bg-red-800 text-red-600
          `}
                      >
                        <span className="bg-transparent">
                          {Number(
                            singleCoinData?.sentiment_votes_down_percentage
                          ).toFixed(2)}{" "}
                          %
                        </span>
                        <BiSolidUpArrow className="bg-transparent mx-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[55%] h-full pl-3 ">
                {/* <Chart id={data.id} /> */}
                chart
                <div className="flex flex-col mt-4">
                  <h3 className="text-white py-1">
                    <span className="text-gray-500 capitalize mr-1">
                      market cap rank:{" "}
                    </span>{" "}
                    {singleCoinData?.market_cap_rank}{" "}
                  </h3>

                  <h3 className="text-white py-1">
                    <span className="text-gray-500 capitalize mr-1">
                      coinGecko rank:{" "}
                    </span>{" "}
                    {singleCoinData?.coingecko_rank}{" "}
                  </h3>

                  <h3 className="text-white py-1">
                    <span className="text-gray-500 capitalize mr-1">
                      coinGecko score:{" "}
                    </span>{" "}
                    {singleCoinData?.coingecko_score}{" "}
                  </h3>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 flex items-center">
                <FaGithub
                  size={25}
                  cursor={"pointer"}
                  className="mx-2 text-[#14FFEC]"
                />
                <NavLink
                  target="_blank"
                  to={`https://twitter.com/${singleCoinData?.links?.twitter_screen_name}`}
                >
                  <FaTwitter
                    size={25}
                    cursor={"pointer"}
                    className="mx-2 text-[#14FFEC]"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to={singleCoinData?.links?.subreddit_url}
                >
                  <FaReddit
                    size={25}
                    cursor={"pointer"}
                    className="mx-2 text-[#14FFEC]"
                  />
                </NavLink>
                <NavLink
                  target="_blank"
                  to={`https://facebook.com/${singleCoinData?.links?.facebook_username}`}
                >
                  <FaFacebook
                    size={25}
                    cursor={"pointer"}
                    className="mx-2 text-[#14FFEC]"
                  />
                </NavLink>
              </div>
            </div>

            <IoMdCloseCircle
              className="absolute top-0 right-0 mx-2 my-2  text-[#14FFEC]"
              size={45}
              cursor={"pointer"}
              onClick={() => HandleOnClose()}
            />
          </>
        )}
      </div>
    </div>
  );
}
