import fardaLogo from "../../assets/img/logo/Group 22.svg";
import dropDownicon from "../../assets/img/tools/arrow_down.svg";
export default function Header() {
  return (
    <div className="flex justify-between bg-[#EFF4FF] w-full h-[80px] rounded-lg font-ShabnamMedium ">
      <div className="flex items-center justify-between gap-x-4  min-w-[17%] ml-8">
        <img className="cursor-pointer" src={dropDownicon} alt="dropDownicon" />
        <span>سبحان کاظمی </span>
        <div className="border border-red-400 rounded-full w-[45px] h-[45px]"></div>
      </div>
      <div className=" w-[27%] mr-8 ">
        <div className="img w-full h-full flex  justify-between items-center">
          <span>امروز شنبه ۲۶ اسفند ۱۴۰۲</span>
          <img src={fardaLogo} alt="fardaLogo" />
        </div>
      </div>
    </div>
  );
}
