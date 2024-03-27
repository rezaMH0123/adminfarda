import plusIcon from "../assets/img/tools/plus.svg";
import AdditionButton from "../components/Common/additionButton";
import Pagination from "../components/Common/pagination";
import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";
import Photos from "../components/ManageFiles/photos";
import Files from "../components/ManageFiles/files";
import Modal from "../components/Common/modal";
import ManageFileModalBody from "../components/ManageFileModalBody";

export default function ManageFiles() {
  const [tab, setTab] = useState<"photo" | "file">("photo");
  const [allPage, setAllPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [photos, setPhotos] = useState([]);
  const [files, setFiles] = useState([]);

  console.log(photos);
  console.log(files);

  const nextPageClick = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPageClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      dir="rtl"
      className="border border-[#E1E1E1] w-[80%] h-[85%] rounded-xl "
    >
      <div className="header flex justify-between items-center px-6 h-[15%]">
        <div className="right">
          <span className="text-[20px] font-ShabnamMedium font-semibold">
            مدیریت فایل‌ها
          </span>
        </div>
        <div className="left flex justify-end items-center gap-x-5 w-[30%] h-full">
          <AdditionButton
            className="w-[152px] h-[44px] font-ShabnamMedium"
            onClick={() => setOpenModal(true)}
          >
            <span className="text-[14px]">اضافه کردن</span>
            <img src={plusIcon} alt="plusIcon" />
          </AdditionButton>
        </div>
      </div>

      <div className="px-5 h-full">
        <div className="h-[70%]">
          <div className="flex">
            <div
              className={`h-[37px] w-16 font-ShabnamBold flex justify-center cursor-pointer border-b ${
                tab === "photo"
                  ? "border-[#33BDF1] text-[#565656]"
                  : "border-[#B3B3B3] text-[#B3B3B3]"
              }`}
              onClick={() => setTab("photo")}
            >
              عکس
            </div>
            <div
              className={`h-[37px] w-16 font-ShabnamBold flex justify-center cursor-pointer border-b ${
                tab === "file"
                  ? "border-[#33BDF1] text-[#565656]"
                  : "border-[#B3B3B3] text-[#B3B3B3]"
              }`}
              onClick={() => setTab("file")}
            >
              فایل
            </div>
          </div>
          <div className="h-[92%] grid grid-cols-3 gap-6 mt-3">
            {loading ? (
              <Skeleton />
            ) : tab === "photo" ? (
              <Photos photos={photos} setPhotos={setPhotos} />
            ) : (
              <Files files={files} setFiles={setFiles} />
            )}
          </div>
        </div>
        <div className="flex gap-x-5 justify-end items-center  h-[15%]">
          <Pagination
            allPage={allPage}
            currentPage={currentPage}
            nextPageClick={nextPageClick}
            prevPageClick={prevPageClick}
          />
        </div>
      </div>
      {openModal && (
        <Modal
          width={35}
          height={55}
          setOpenModal={setOpenModal}
          openModal={openModal}
        >
          <div className="w-full h-full">
            <ManageFileModalBody
              setOpenModal={setOpenModal}
              photos={photos}
              setPhotos={setPhotos}
              files={files}
              setFiles={setFiles}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
