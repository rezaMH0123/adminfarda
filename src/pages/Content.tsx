import plusIcon from "../assets/img/tools/plus.svg";
import filrterIcon from "../assets/img/tools/filter.svg";
import AdditionButton from "../components/Common/additionButton";
import Pagination from "../components/Common/pagination";
import { useState } from "react";
import RecycleBin from "../components/Icons/RecycleBin";
import Edit from "../components/Icons/Edit";

export default function Content() {
  const [allPage, setAllPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState([
    {
      id: 1,
      title: "آگهی دعوت به مجمع عمومی عادی سالیانه...",
      status: "منتشر شده",
      shareable: "می شود",
      commentable: "نمی شود",
      checked: false,
    },
    {
      id: 2,
      title: "آگهی دعوت به مجمع عمومی عادی سالیانه...",
      status: "منتشر شده",
      shareable: "می شود",
      commentable: "نمی شود",
      checked: false,
    },
    {
      id: 3,
      title: "آگهی دعوت به مجمع عمومی عادی سالیانه...",
      status: "منتشر شده",
      shareable: "می شود",
      commentable: "نمی شود",
      checked: false,
    },
    {
      id: 4,
      title: "آگهی دعوت به مجمع عمومی عادی سالیانه...",
      status: "منتشر شده",
      shareable: "می شود",
      commentable: "نمی شود",
      checked: false,
    },
    {
      id: 5,
      title: "آگهی دعوت به مجمع عمومی عادی سالیانه...",
      status: "منتشر شده",
      shareable: "می شود",
      commentable: "نمی شود",
      checked: false,
    },
    {
      id: 6,
      title: "آگهی دعوت به مجمع عمومی عادی سالیانه...",
      status: "منتشر شده",
      shareable: "می شود",
      commentable: "نمی شود",
      checked: false,
    },
  ]);
  const nextPageClick = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPageClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  console.log(data);
  return (
    <div
      dir="rtl"
      className=" border border-[#E1E1E1] w-[80%] h-[85%] rounded-xl "
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
      <div className="centerContetnt px-6 h-full w-full">
        <div className="headChart flex  h-[60px] font-ShabnamMedium pt-3">
          <div className="flex items-center w-[40%]">
            <span className="mr-5 ">عنوان</span>
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

        <div className="border-b border-t border-PrimaryBlack-300 h-[60%] w-full ">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center h-[14%] text-PrimaryBlack-400  mt-2 "
            >
              <div className="flex items-center   w-[40%] h-[40px]">
                {item.title}
              </div>
              <div className="flex items-center justify-center  w-[15%] h-[40px]">
                {item.status}
              </div>
              <div className="flex items-center justify-center  w-[15%] h-[40px]">
                {item.shareable}
              </div>
              <div className="flex items-center justify-center  w-[15%] h-[40px]">
                {item.commentable}
              </div>
              <div className="flex items-center justify-center gap-x-4  w-[15%] h-[40px]">
                <Edit
                  onClick={() => console.log(`Edit:${item.id}`)}
                  fill="#41CD92"
                  className="cursor-pointer"
                />
                <RecycleBin
                  onClick={() => console.log(`RecycleBin:${item.id}`)}
                  fill="#FF8A8A"
                  className="cursor-pointer"
                />
              </div>
            </div>
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
