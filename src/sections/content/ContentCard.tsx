import { FC } from "react";
import { ContentI } from "../../types/controller-types/Content.type";
import Edit from "../../components/Icons/Edit";
import RecycleBin from "../../components/Icons/RecycleBin";

const ContentCard: FC<{
  item: ContentI;
}> = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex items-center h-[14%] text-PrimaryBlack-400  mt-2 "
    >
      <div className="flex items-center   w-[40%] h-[40px]">{item.title}</div>
      <div className="flex items-center justify-center  w-[15%] h-[40px]">
        {item.status}
      </div>
      <div className="flex items-center justify-center  w-[15%] h-[40px]">
        {item.shareable}
      </div>
      <div className="flex items-center justify-center  w-[15%] h-[40px]">
        {item.commentable}
      </div>
      <div className="flex items-center justify-center gap-x-4  w-[15%] h-[40px]">
        <Edit
          onClick={() => console.log(`Edit:${item.id}`)}
          fill="#41CD92"
          className="cursor-pointer"
        />
        <RecycleBin
          onClick={() => console.log(`RecycleBin:${item.id}`)}
          fill="#FF8A8A"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ContentCard;
