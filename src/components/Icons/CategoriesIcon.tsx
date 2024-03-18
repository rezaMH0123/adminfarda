import React from "react";

type IconProps = {
  className?: string;
  stroke?: string;
  fill?: string;
};

const IconCategories: React.FC<IconProps> = ({ className, fill, ...rest }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M7.19247 10.6153L12.0001 2.73082L16.8078 10.6153H7.19247ZM17.5001 21.6153C16.3527 21.6153 15.3799 21.2163 14.5819 20.4182C13.7838 19.6202 13.3848 18.6474 13.3848 17.5C13.3848 16.3526 13.7838 15.3798 14.5819 14.5817C15.3799 13.7837 16.3527 13.3846 17.5001 13.3846C18.6475 13.3846 19.6203 13.7837 20.4184 14.5817C21.2164 15.3798 21.6155 16.3526 21.6155 17.5C21.6155 18.6474 21.2164 19.6202 20.4184 20.4182C19.6203 21.2163 18.6475 21.6153 17.5001 21.6153ZM3.38477 21.1153V13.8846H10.6155V21.1153H3.38477ZM17.4998 20.1154C18.2321 20.1154 18.8511 19.8626 19.3568 19.357C19.8626 18.8514 20.1155 18.2325 20.1155 17.5003C20.1155 16.768 19.8627 16.149 19.3571 15.6433C18.8515 15.1375 18.2326 14.8846 17.5004 14.8846C16.7682 14.8846 16.1492 15.1374 15.6434 15.643C15.1376 16.1486 14.8847 16.7675 14.8847 17.4997C14.8847 18.232 15.1375 18.851 15.6431 19.3567C16.1487 19.8625 16.7676 20.1154 17.4998 20.1154ZM4.88472 19.6154H9.11552V15.3846H4.88472V19.6154ZM9.83857 9.1154H14.1617L12.0001 5.63845L9.83857 9.1154Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconCategories;