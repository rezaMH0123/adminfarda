import FileBg from "../../assets/img/logo/files.svg";
import More from "../../assets/img/tools/more.svg";
import Square from "../../assets/img/tools/square.svg";

export default function Photos({
  photos,
  setPhotos,
}: {
  photos: any[];
  setPhotos: React.Dispatch<React.SetStateAction<never[]>>;
}) {
  console.log(photos);
  return (
    <>
      {photos.length === 0 ? (
        <>empty</>
      ) : (
        Array.isArray(photos) &&
        photos.map(() => (
          <div className="h-[200px] w-[100%] rounded-[20px] bg-[#DEE8FF] drop-shadow-sm">
            <div className="w-[91%] h-[20%] m-auto flex items-center justify-between">
              <img src={Square} alt="square" className="cursor-pointer" />
              <img src={More} alt="more" className="cursor-pointer" />
            </div>
            <div
              className="w-[95%] h-[123px] rounded m-auto bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${FileBg})` }}
            ></div>
            <div className="w-full h-[20%] flex items-center justify-center">
              <p className="font-ShabnamRegular text-[#667085]">
                شنبه ۲۶ اسفند ۱۴۰۲
              </p>
            </div>
          </div>
        ))
      )}
    </>
  );
}
