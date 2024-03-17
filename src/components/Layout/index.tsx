import Header from "../Header";
import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex justify-center h-full">
      <div className=" w-[1240px] h-full">
        <Header />
        <div className="flex justify-between gap-x-3  h-full mt-6">
          <Outlet />
          <SideBar />
        </div>
      </div>
    </div>
  );
}
