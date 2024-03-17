import { ReactNode } from "react";
import Header from "../Header";
import SideBar from "../SideBar";

type layoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: layoutProps) {
  return (
    <div className="flex justify-center h-full">
      <div className=" w-[1240px] h-full">
        <Header />
        <div className="flex justify-between gap-x-3  h-full mt-6">
          {children}
          <SideBar />
        </div>
      </div>
    </div>
  );
}
