import plusIcon from "../assets/img/tools/plus.svg";
import filrterIcon from "../assets/img/tools/filter.svg";
import AdditionButton from "../components/Common/additionButton";
import Pagination from "../components/Common/pagination";
import { useState } from "react";

export default function Content() {
  const [allPage, setAllPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const nextPageClick = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPageClick = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div
      dir="rtl"
      className=" border border-[#E1E1E1] w-[80%] h-[75%] rounded-xl "
    >
      <div className="header flex justify-between items-center px-6 h-[15%] ">
        <div className="right">
          <span className="text-[20px] font-ShabnamMedium font-semibold">
            محتوا
          </span>
        </div>
        <div className="left flex justify-end items-center gap-x-5  w-[30%] h-full">
          <div className="flex justify-center items-center cursor-pointer font-ShabnamMedium">
            <span className="text-PrimaryBlack-300">فیلتر</span>
            <img src={filrterIcon} alt="filrterIcon" />
          </div>
          <AdditionButton className="w-[152px] h-[44px] font-ShabnamMedium ">
            <span className="text-[14px]">اضافه کردن</span>
            <img src={plusIcon} alt="plusIcon" />
          </AdditionButton>
        </div>
      </div>
      <div className="centerContetnt px-6 h-full">
        <div className="headChart flex border-b border-PrimaryBlack-300 h-[60px] font-ShabnamMedium">
          <div className="flex items-center w-[40%]">
            <span className="mr-5">عنوان</span>
          </div>
          <div className="flex justify-center items-center w-[15%] ">
            <span>وضعیت</span>
          </div>
          <div className="flex justify-center items-center w-[15%] ">
            <span>اشتراک گذاری</span>
          </div>
          <div className="flex justify-center items-center w-[15%] ">
            <span>کامنت گذاری</span>
          </div>
          <div className="flex justify-center items-center w-[15%] ">
            <span>عملیات</span>
          </div>
        </div>

        <div className="border-b border-PrimaryBlack-300 h-[57%] ">
          {[...Array(6)].map((item) => (
            <div className="h-[15%] mb-1 border border-red-600"></div>
          ))}
        </div>
        <div className="flex gap-x-5 justify-end items-center  h-[15%]">
          <Pagination
            allPage={allPage}
            currentPage={currentPage}
            nextPageClick={nextPageClick}
            prevPageClick={prevPageClick}
          />
        </div>
      </div>
    </div>
  );
}
