import plusIcon from "../assets/img/tools/plus.svg";
import filrterIcon from "../assets/img/tools/filter.svg";
import AdditionButton from "../components/Common/additionButton";

export default function Content() {
  return (
    <div
      dir="rtl"
      className="border border-[#E1E1E1] w-[80%] h-[75%] rounded-xl "
    >
      <div className="header flex justify-between items-center px-6 border border-red-500 h-[15%] ">
        <div className="right">
          <span className="text-[20px] font-medium">محتوا</span>
        </div>
        <div className="left flex items-center border border-green-400 w-[30%] h-full">
          <AdditionButton className="w-[152px] h-[44px] ">
            <span className="text-[14px]">اضافه کردن</span>
            <img src={plusIcon} alt="plusIcon" />
          </AdditionButton>
        </div>
      </div>
    </div>
  );
}
