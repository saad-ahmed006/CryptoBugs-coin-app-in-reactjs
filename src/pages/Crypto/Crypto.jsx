import React, { useEffect, useState } from "react";
import { FaSearch, FaRegStar } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  cryptoCurruncyDataInit,
  pageNumberSuccess,
  pagePerDataSuccess,
  searchCurruncyInit,
  setCurrencySuccess,
  sortDescDataSuccess,
} from "../../redux/CurruncyDataSlice";
import Loading from "../../component/Loading/Loading";
import { FilterCurrency } from "../../component/FilterCurrency/FilterCurrency";
import { Pagination } from "../../component/Pagination/Pagination";
import Sort from "../../component/Sort/Sort";
import { Link, useNavigate } from "react-router-dom";
import { DataSavedSuccess } from "../../redux/SavedDataSlice";
import { Search } from "../../component/Search/Search";

export default function Crypto() {
  const [perPageData, setPerPageData] = useState("");
  const [currency, setCurrency] = useState("");
  const [sortForDesc, setSortForDesc] = useState("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data,
    loading,
    pagePerDataRedux,
    pageNumberRedux,
    setCurrencyRedux,
    sortDescDataRedux,
  } = useSelector((state) => state.CurruncyDataSlice);

  const handleSetPageData = (e) => {
    setPerPageData(e.target.value);
  };
  const handlePerPageSetData = () => {
    dispatch(pagePerDataSuccess(perPageData));
    dispatch(cryptoCurruncyDataInit());
    setPerPageData("");
  };

  const handlepreviousPageButtonClick = () => {
    dispatch(pageNumberSuccess(pageNumberRedux - 1));
    dispatch(cryptoCurruncyDataInit());
  };

  const handleNextPageButtonClick = () => {
    dispatch(pageNumberSuccess(pageNumberRedux + 1));
    dispatch(cryptoCurruncyDataInit());
  };

  const handleSetCurrency = () => {
    dispatch(setCurrencySuccess(currency));
    dispatch(cryptoCurruncyDataInit());
    setCurrency("");
  };
  const handleSort = (e) => {
    const sortValue = e.target.value;
    setSortForDesc(sortValue);
    dispatch(sortDescDataSuccess(sortValue));
    dispatch(cryptoCurruncyDataInit());
  };
  const handleSetSavedData = (data) => {
    //  console.log("setSavedData",data);
    dispatch(DataSavedSuccess(data));
    navigate("/saved");
  };

  const handleReset = () => {
    dispatch(pagePerDataSuccess(10));
    dispatch(pageNumberSuccess(1));
    dispatch(setCurrencySuccess("usd"));
    dispatch(sortDescDataSuccess("market_cap_desc"));
    dispatch(cryptoCurruncyDataInit());
  };

  const handleSetSearchData = (e) => {
    // e.preventDefault();
    setSearchText(e.target.value);
    dispatch(searchCurruncyInit(e.target.value));
  };
  useEffect(() => {
    dispatch(pagePerDataSuccess(10));
    dispatch(pageNumberSuccess(1));
    dispatch(cryptoCurruncyDataInit());
  }, []);

  return (
    <>
      <div className=" w-[80%] mx-auto font-custom mb-16">
        <div className="flex flex-row justify-between items-center  border border-[#808080] rounded-md py-2 px-6">
          <div className="w-[50%]">
            <Search searchText={searchText} handleSetSearchData={handleSetSearchData}/>
          </div>
          <div className="w-[25%]">
            <FilterCurrency
              currency={currency}
              setCurrency={setCurrency}
              handleSetCurrency={handleSetCurrency}
            />
          </div>
          <div className="w-[25%] ">
            <Sort
              handleSort={handleSort}
              sortForDesc={sortForDesc}
              setSortForDesc={setSortForDesc}
            />
          </div>
          <div className="w-[2%] ">
            {pagePerDataRedux !== 10 ||
            pageNumberRedux !== 1 ||
            setCurrencyRedux !== "usd" ||
            sortDescDataRedux !== "market_cap_desc" ? (
              <BiReset
                color="#14FFEC"
                cursor={"pointer"}
                className="text-2xl"
                onClick={handleReset}
              />
            ) : (
              <BiReset
                color="#14FFEC"
                cursor={"pointer"}
                className="text-2xl"
              />
            )}
          </div>
        </div>
        {data && (
          <>
        {loading ? (
          <div className=" w-[100%] h-[450px] mx-auto font-custom border border-gray-500 flex justify-center items-center rounded-sm">
            <Loading />
          </div>
        ) : (
          <>
          <table className="min-w-full text-center   border border-[#808080]   my-4 text-white">
            <thead>
              <tr>
                <th className=" border-b  font-extrabold text-gray-500"></th>
                <th className="py-2 px-4 border-b  font-extrabold text-gray-500">
                  {" "}
                  Asset
                </th>
                <th className="py-2 px-4 border-b font-extrabold text-gray-500">
                  {" "}
                  Name
                </th>
                <th className="py-2 px-4 border-b font-extrabold text-gray-500">
                  {" "}
                  Price
                </th>
                <th className="py-2 px-4 border-b font-extrabold text-gray-500">
                  {" "}
                  Total Volume{" "}
                </th>
                <th className="py-2 px-4 border-b font-extrabold text-gray-500">
                  {" "}
                  Market Cap Change
                </th>
                <th className="py-2 px-4 border-b font-extrabold text-gray-500">
                  {" "}
                  1H{" "}
                </th>
                <th className="py-2 px-4 border-b font-extrabold text-gray-500">
                  {" "}
                  24H
                </th>
                <th className="py-2 px-4 border-b font-extrabold text-gray-500">
                  {" "}
                  7D
                </th>
              </tr>
            </thead>

            <tbody>
              {/* {loading ? (
              <div className="">
                <Loading />
              </div>
            ) : ( */}
              <>
                {data?.map((e) => {
                  return (
                    <>
                      <CoinDataList
                        key={e?.id}
                        data={e}
                        setCurrencyRedux={setCurrencyRedux}
                        handleSetSavedData={handleSetSavedData}
                      />
                    </>
                  );
                })}
              </>
              {/* )} */}
            </tbody>
          </table>
          </>
        
        )}
        </>
        )}
              
        <div className="flex flex-row justify-between">
          <p className="text-white">
            Data Provided By{" "}
            <span className="text-[#14FFEC] font-bold">CoinGecko</span>
          </p>
          {data && (
            <Pagination
              perPageData={perPageData}
              setPerPageData={setPerPageData}
              handlePerPageSetData={handlePerPageSetData}
              handleSetPageData={handleSetPageData}
              handlepreviousPageButtonClick={handlepreviousPageButtonClick}
              handleNextPageButtonClick={handleNextPageButtonClick}
            />
          )}
        </div>
      </div>
    </>
  );
}



export function CoinDataList({ data, setCurrencyRedux, handleSetSavedData }) {
  return (
    <>
      <tr>
        <>
          <td className=" border-b pl-2">
            <FaRegStar
              size={20}
              className="text-white hover:text-[#14FFEC] cursor-pointer"
              onClick={() => handleSetSavedData(data)}
            />{" "}
          </td>
          <Link to={`/${data?.id}`}>
            <td className="py-2 px-2 border-b flex flex-col items-center ">
              <img src={data?.image} className="w-4 "></img>
              <p className="uppercase">{data?.symbol}</p>
            </td>
          </Link>

          <td className={`py-2 px-4 border-b`}>{data?.name}</td>
          {/* <td className="py-2 px-4 border-b">{data.current_price}</td> */}
          <td className="py-2 px-4 border-b">
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: setCurrencyRedux,
            }).format(data?.current_price)}
          </td>
          <td className="py-2 px-4 border-b">{data?.total_volume}</td>
          <td className="py-2 px-4 border-b">
            <p
              className={`${
                data?.market_cap_change_percentage_24h > 0
                  ? "text-green-700  "
                  : "text-red-700 "
              }}`}
            >
              {(data?.price_change_percentage_1h_in_currency).toFixed(2)}%
            </p>
          </td>
          <td className="py-2 px-4 border-b">
            <p
              className={`${
                data?.price_change_percentage_1h_in_currency > 0
                  ? "text-green-700  "
                  : "text-red-700 "
              }}`}
            >
              {data?.price_change_percentage_1h_in_currency.toFixed(2)}%
            </p>
          </td>
          <td className="py-2 px-4 border-b">
            <p
              className={`${
                data?.price_change_percentage_24h_in_currency > 0
                  ? "text-green-700  "
                  : "text-red-700 "
              }}`}
            >
              {data?.price_change_percentage_24h_in_currency.toFixed(2)}%
            </p>
          </td>
          <td className="py-2 px-4 border-b">
            <p
              className={`${
                data?.price_change_percentage_7d_in_currency > 0
                  ? "text-green-700  "
                  : "text-red-700 "
              }}`}
            >
              {data?.price_change_percentage_7d_in_currency.toFixed(2)}%
            </p>
          </td>
        </>
      </tr>
    </>
  );
}
