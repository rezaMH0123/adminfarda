export default function Files() {
  return (
    <>
      {[...Array(6)].map(() => (
        <div className="h-[100%] w-[100%] rounded-[20px] bg-[#DEE8FF] drop-shadow-sm"></div>
      ))}
    </>
  );
}
