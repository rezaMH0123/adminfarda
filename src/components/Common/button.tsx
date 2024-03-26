import { ReactNode } from "react";

interface ButtonPropsI {
  type?: "submit";
  className?: string;
  title: string | ReactNode;
  disable?: boolean;
  height: string;
  width: string;
  backgroundColor: string;
}

export default function Button({
  backgroundColor,
  height,
  title,
  width,
  className,
  disable,
  type,
}: ButtonPropsI) {
  return (
    <button
      type={type}
      className={`bg-[${backgroundColor}] h-[${height}] w-[${width}] text-base text-[#FFFFFF] rounded-lg flex items-center justify-center gap-x-2 ${className}`}
      disabled={disable}
    >
      {title}
    </button>
  );
}
