import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <div className="border border-green-300 w-[80%] h-[70%] ">
      content
      <Outlet />
    </div>
  );
}
