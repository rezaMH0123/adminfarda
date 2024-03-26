import { ReactNode, MouseEvent } from "react";
import "animate.css";

type ModalProps = {
  children: ReactNode;
  width: number;
  height: number;
  openModal?: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({
  children,
  width,
  height,
  setOpenModal,
}: ModalProps) {
  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    // Prevent the click event from propagating to the backdrop click handler
    event.stopPropagation();
  };

  return (
    <div
      onClick={() => setOpenModal(false)}
      className="absolute top-0 left-0 flex justify-center items-center  bg-black w-full h-full bg-opacity-60"
    >
      <div
        onClick={handleModalClick}
        className={`animate__animated  animate__fadeInDown flex justify-center items-center bg-white w-[${width}%] h-[${height}%] rounded-lg`}
      >
        {children}
      </div>
    </div>
  );
}
