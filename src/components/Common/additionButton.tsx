import { ReactNode } from "react";

type AdditionButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function AdditionButton({
  children,
  className,
}: AdditionButtonProps) {
  return (
    <button
      className={`bg-PrimaryBlue-100 text-white rounded-lg flex items-center justify-center gap-x-2 ${className}`}
    >
      {children}
    </button>
  );
}
