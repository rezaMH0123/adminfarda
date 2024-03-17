import { Link, useLocation } from "react-router-dom";
import IconContent from "../Icons/ContentIcon";
import IconComment from "../Icons/CommentIcon";
import IconCategories from "../Icons/CategoriesIcon";
import IconLabels from "../Icons/LabelsIcon";
import IconMageFiles from "../Icons/ManageFilesIcon";

export default function SideBar() {
  const location = useLocation();

  console.log(location.pathname);
  const active = "shadow-custom1 text-[#33BDF1]";
  return (
    <div
      dir="rtl"
      className="flex flex-col justify-between h-[85%] w-[20%] bg-[#EFF4FF] rounded-lg"
    >
      <ul className=" flex flex-col gap-y-5  mt-16">
        <Link to="/">
          <li
            className={`${
              location.pathname === "/" && active
            } w-[75%] text-[#565656] flex gap-x-3 mr-5 p-2 cursor-pointer rounded-md `}
          >
            <IconContent
              fill={`${location.pathname === "/" ? "#33BDF1" : "#565656"}`}
            />
            <span>محتوا</span>
          </li>
        </Link>
        <Link to="/categories">
          <li
            className={`${
              location.pathname === "/categories" && active
            } w-[75%] text-[#565656] gap-x-3 rounded-md flex  mr-5 p-2 cursor-pointer`}
          >
            <IconCategories
              fill={`${
                location.pathname === "/categories" ? "#33BDF1" : "#565656"
              }`}
            />
            <span>دسته بندی‌ها</span>
          </li>
        </Link>

        <Link to="/labels">
          <li
            className={`${
              location.pathname === "/labels" && active
            } w-[75%] text-[#565656] flex gap-x-3 rounded-md  mr-5 p-2 cursor-pointer`}
          >
            <IconLabels
              fill={`${
                location.pathname === "/labels" ? "#33BDF1" : "#565656"
              }`}
            />
            <span>برچسب‌ها</span>
          </li>
        </Link>
        <Link to="/comment">
          <li
            className={`${
              location.pathname === "/comment" && active
            } w-[75%] text-[#565656] flex gap-x-3 rounded-md  mr-5 p-2 cursor-pointer`}
          >
            <IconComment
              fill={`${
                location.pathname === "/comment" ? "#33BDF1" : "#565656"
              }`}
            />
            <span>کامنت ها</span>
          </li>
        </Link>
        <Link to="/manageFiles">
          <li
            className={`${
              location.pathname === "/manageFiles" && active
            } w-[75%] text-[#565656] flex gap-x-3 rounded-md  mr-5 p-2 cursor-pointer`}
          >
            <IconMageFiles
              fill={`${
                location.pathname === "/manageFiles" ? "#33BDF1" : "#565656"
              }`}
            />
            <span>مدیریت فایل‌ها</span>
          </li>
        </Link>
      </ul>
      <div className="p-2  mr-5  mb-10 cursor-pointer text-[#FF8A8A]">خروج</div>
    </div>
  );
}
