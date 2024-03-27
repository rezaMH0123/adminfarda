import { FC } from "react";
import { SHARED_STRING } from "../../../constants/strings/shared.string";
import AdditionButton from "../../../components/Common/additionButton";
import plusIcon from "../../../assets/img/tools/plus.svg";
import filrterIcon from "../../../assets/img/tools/filter.svg";

type ContentHeaderSectionProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContentHeaderSection = ({ setOpenModal }: ContentHeaderSectionProps) => {
  return (
    <div className="header flex justify-between items-center px-6 h-[15%] ">
      <div className="right">
        <span className="text-[20px] font-ShabnamMedium font-semibold">
          {SHARED_STRING.CONTENT.CONTENT}
        </span>
      </div>
      <div className="left flex justify-end items-center gap-x-5  w-[30%] h-full">
        <div className="flex justify-center items-center cursor-pointer font-ShabnamMedium">
          <span className="text-PrimaryBlack-300">فیلتر</span>
          <img src={filrterIcon} alt="filrterIcon" />
        </div>
        <AdditionButton
          onClick={() => setOpenModal(true)}
          className="w-[152px] h-[44px] font-ShabnamMedium "
        >
          <span className="text-[14px]">اضافه کردن</span>
          <img src={plusIcon} alt="plusIcon" />
        </AdditionButton>
      </div>
    </div>
  );
};

export default ContentHeaderSection;
