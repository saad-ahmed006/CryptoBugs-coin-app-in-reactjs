import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { useSelector } from "react-redux";

export function Pagination({
    pageNumber,
    perPageData,
    // setPerPageData,
    handlePerPageSetData,
    handlepreviousPageButtonClick,
    handleNextPageButtonClick,
    handleSetPageData,
    
  }) {
    const {pageNumberRedux } = useSelector(
      (state) => state.CurruncyDataSlice
    );
    return (
      <>
        <div className="flex flex-row items-center">
          <p className="text-white">Per Page: </p>
          <input
            type="number"
            min={10}
            max={250}
            className="appearance-none outline-none w-9 h-6 px-1 mx-2 text-xs text-center rounded-sm bg-[#323232] text-white  border border-[#14FFEC]"
            value={perPageData}
            onChange={handleSetPageData}
            placeholder="10"
          ></input>
  
          <GoFileSubmodule
            size={21}
            color="#14FFEC"
            cursor={"pointer"}
            onClick={() => {
              perPageData.length && perPageData > 1 && handlePerPageSetData();
            }}
          />
  
          <div className="flex flex-row items-center mx-6">
            <FaArrowCircleLeft
              size={28}
              color="#14FFEC"
              cursor={"pointer"}
              onClick={() => {
                pageNumberRedux > 1 && handlepreviousPageButtonClick();
              }}
            />
            <div className="mx-4 text-white border border-[#14FFEC] rounded-sm  px-3 bg-[#323232]">
              {pageNumberRedux}
            </div>
            <FaArrowCircleRight
              size={28}
              color="#14FFEC"
              cursor={"pointer"}
              onClick={() => handleNextPageButtonClick()}
            />
          </div>
        </div>
      </>
    );
  }