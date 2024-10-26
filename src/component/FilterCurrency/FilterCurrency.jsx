import { GoFileSubmodule } from "react-icons/go";

export function FilterCurrency({ currency, setCurrency, handleSetCurrency }) {
    return (
        <div className="flex flex-row items-end">
          <p className="text-white">Currency: </p>
          <input
            type="text"
            className="appearance-none outline-none w-14 h-6 px-1 pl-2 mx-2 text-md  rounded-sm bg-[#323232] text-white  border border-[#14FFEC]"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            placeholder="usd"
          ></input>
          <GoFileSubmodule
            size={21}
            color="#14FFEC"
            cursor={"pointer"}
            onClick={() => {
              currency.length &&handleSetCurrency()
            }}
          />
        </div>
    );
  }