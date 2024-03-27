import { useState } from "react";
import TextField from "../Common/textField";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function ContentsModalBody() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  console.log(title);
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="h-full w-[90%] py-4">
        <div className="h-[25%]">
          <span className="font-ShabnamBold text-[20px]">افزودن محتوا</span>
          <TextField
            type="text"
            placeholder="عنوان*"
            className="border border-PrimaryBlack-300 mt-4 rounded-md pr-3 w-full h-[35px] outline-none"
            value={title}
            setTitle={setTitle}
          />

          <TextField
            type="text"
            placeholder="خلاصه*"
            className="border border-PrimaryBlack-300 mt-4 rounded-md pr-3 w-full h-[35px] outline-none"
            value={summary}
            setTitle={setSummary}
          />
        </div>
        <div className="h-fit">
          <span className="font-ShabnamRegular block mb-4">توضیحات</span>
          <CKEditor
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            editor={(window as any).ClassicEditor}
            onChange={(_event, editor) => {
              const data = editor.getData();
              console.log("Content changed:", data);
            }}
          />
        </div>
        <div className="border border-green-600 h-[8%]"></div>
        <div className="border border-green-600 h-[8%]"></div>
        <div className="border border-green-600 h-[8%]"></div>
        <div className="border border-green-600 h-[8%]"></div>
        <div className="border border-green-600 h-[8%]"></div>
      </div>
    </div>
  );
}
