import { useState } from "react";

import Modal from "../components/Common/modal";
import ContentsModalBody from "../components/ContentsModalBody";
import ContentHeaderSection from "../sections/content/ContentHeaderSection";
import ContentChart from "../sections/content/ContentChart";

export default function Content() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      dir="rtl"
      className=" border border-[#E1E1E1] w-[80%] h-[85%] rounded-xl "
    >
      <ContentHeaderSection setOpenModal={setOpenModal} />
      <ContentChart />

      {openModal ? (
        <Modal width={65} height={94} setOpenModal={setOpenModal}>
          <div className="w-full h-full">
            <ContentsModalBody />
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
