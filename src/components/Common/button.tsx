import { ReactNode } from "react";

interface ButtonPropsI {
  type?: "submit";
  className?: string;
  title: string | ReactNode;
  disable?: boolean;
  height: string;
  width: string;
  onClick?: () => void;
}

export default function Button({
  height,
  title,
  width,
  className,
  disable,
  type,
  onClick,
}: ButtonPropsI) {
  return (
    <button
      type={type}
      className={`h-[${height}] w-[${width}] text-base rounded-lg flex items-center justify-center gap-x-2 ${className}`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
