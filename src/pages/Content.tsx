import plusIcon from "../assets/img/tools/plus.svg";
import filrterIcon from "../assets/img/tools/filter.svg";
import AdditionButton from "../components/Common/additionButton";
import IconChevron from "../components/Icons/Chevron";

export default function Content() {
  return (
    <div
      dir="rtl"
      className=" border border-[#E1E1E1] w-[80%] h-[75%] rounded-xl "
    >
      <div className="header flex justify-between items-center px-6 h-[15%] ">
        <div className="right">
          <span className="text-[20px] font-medium">محتوا</span>
        </div>
        <div className="left flex justify-end items-center gap-x-5  w-[30%] h-full">
          <div className="flex justify-center items-center cursor-pointer">
            <span className="text-PrimaryBlack-300">فیلتر</span>
            <img src={filrterIcon} alt="filrterIcon" />
          </div>
          <AdditionButton className="w-[152px] h-[44px] ">
            <span className="text-[14px]">اضافه کردن</span>
            <img src={plusIcon} alt="plusIcon" />
          </AdditionButton>
        </div>
      </div>
      <div className="centerContetnt px-6 h-full">
        <div className="headChart flex border-b border-PrimaryBlack-300 h-[60px]">
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
          {/* {Array(6).map((item, index) => (
            <div className="border border-red-600 h-[10px]"></div>
          ))} */}
          {[...Array(6)].map((item) => (
            <div className="h-[15%] mb-1 border border-red-600"></div>
          ))}
        </div>
        <div className="flex gap-x-5 justify-end items-center  h-[15%] text-[#404040]">
          <div>
            <span className="text-base">
              نمایش آیتم ها از {1} تا {4}
            </span>
          </div>
          <button className="flex justify-center items-center gap-x-3 border border-[#BABABA] w-[163px] rounded-xl py-2 px-2 ">
            <IconChevron className="ml-1" fill="#33BDF1" />
            <span>صفحه بعد</span>
            <span>1</span>
          </button>
        </div>
      </div>
    </div>
  );
}
