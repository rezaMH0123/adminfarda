export default function Files({
  files,
  setFiles,
}: {
  files?: any[];
  setFiles: React.Dispatch<React.SetStateAction<never[]>>;
}) {
  console.log("files", files);
  return (
    <>
      {files?.length === 0 ? (
        <>empty</>
      ) : (
        Array.isArray(files) &&
        files.map((item, index) => (
          <div
            key={index}
            className="h-[100%] w-[100%] rounded-[20px] bg-[#DEE8FF] drop-shadow-sm"
          >
            {item.name}
          </div>
        ))
      )}
    </>
  );
}
