import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiReset } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { DeleteSavedDataSuccess } from "../../redux/SavedDataSlice";
import { Link } from "react-router-dom";

export default function Saved() {
  const dispatch = useDispatch();
  const { saveData } = useSelector((state) => state.SavedDataSlice);
  // console.log(saveData);
  const handleDeleteData = (id) => {
    dispatch(DeleteSavedDataSuccess(id));
  };
  return (
    <div className=" w-[80%] mx-auto font-custom mb-16">
      <BiReset color="#14FFEC" cursor={"pointer"} className="text-2xl" />
      {saveData.length ? (
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
            <>
              {saveData?.map((e) => {
                return (
                  <>
                    <CoinDataList
                      key={e?.id}
                      data={e}
                      handleDeleteData={handleDeleteData}
                    />
                  </>
                );
              })}
            </>
          </tbody>
        </table>
      ) : (
        <div className=" w-[100%] h-[450px] mx-auto font-custom border border-gray-500 flex justify-center items-center rounded-sm">
          <p className="text-2xl text-[#14FFEC]">
            There is no data to display!
          </p>
        </div>
      )}
    </div>
  );
}

export function CoinDataList({ data, handleDeleteData }) {
  return (
    <>
      <tr>
        <>
          <td className=" border-b pl-2">
            <FaRegStar
              size={20}
              className=" text-[#14FFEC] cursor-pointer"
              onClick={() => handleDeleteData(data.id)}
            />{" "}
          </td>
          <Link to={`/saved/${data?.id}`}>
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
              currency: "usd",
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
