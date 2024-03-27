import Button from "../Common/button";
import Apload from "../../assets/img/tools/apload.svg";
import { ChangeEvent, useState } from "react";
import AploadBg from "../../assets/img/tools/uploadBg.svg";

export default function ManageFileModalBody({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [file, setFile] = useState<File | undefined>();

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    setFile(image);
  };

  console.log(file);

  return (
    <div>
      <p className="text-[20px] font-ShabnamBold mt-10 mr-10 text-[#525252]">
        افزودن فایل
      </p>
      <form
        onClick={() =>
          document.querySelector<HTMLInputElement>(".input-field")?.click()
        }
      >
        <div
          style={{ backgroundImage: `url(${AploadBg})` }}
          className="w-[70%] h-[232px] flex flex-col justify-center items-center m-auto mt-8 cursor-pointer bg-contain bg-no-repeat"
        >
          <input
            type="file"
            className="input-field"
            hidden
            onChange={handleFileInputChange}
          />
          <p className="mt-[40%]">{file && file.name}</p>
        </div>
      </form>
      <div className="w-[70%] h-[44px] m-auto flex gap-5 mt-8">
        <Button
          height={"100%"}
          width={"50%"}
          type="submit"
          className="text-sm w-[50%] font-ShabnamBold text-[#FF8A8A] border border-[#FF8A8A] leading-5 disabled:bg-[#a2e5fd] disabled:cursor-not-allowed"
          title={"بستن"}
          onClick={() => setOpenModal(false)}
        />
        <Button
          height={"100%"}
          width={"50%"}
          type="submit"
          className="text-sm w-[50%] font-ShabnamBold text-[#FFFFFF] bg-[#33BDF1] leading-5 disabled:bg-[#a2e5fd] disabled:cursor-not-allowed"
          title={"افزودن"}
        />
      </div>
    </div>
  );
}