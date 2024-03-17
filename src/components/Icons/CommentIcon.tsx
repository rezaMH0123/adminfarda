import React from "react";

type IconProps = {
  className?: string;
  stroke?: string;
  fill?: string;
};

const IconComment: React.FC<IconProps> = ({ className, fill, ...rest }) => {
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
        d="M6.25 13.75H13.75V12.25H6.25V13.75ZM6.25 10.75H17.75V9.25003H6.25V10.75ZM6.25 7.74998H17.75V6.25003H6.25V7.74998ZM2.5 21.0384V4.30773C2.5 3.8026 2.675 3.37503 3.025 3.02503C3.375 2.67503 3.80257 2.50003 4.3077 2.50003H19.6923C20.1974 2.50003 20.625 2.67503 20.975 3.02503C21.325 3.37503 21.5 3.8026 21.5 4.30773V15.6923C21.5 16.1974 21.325 16.625 20.975 16.975C20.625 17.325 20.1974 17.5 19.6923 17.5H6.03845L2.5 21.0384ZM5.4 16H19.6923C19.7692 16 19.8397 15.968 19.9038 15.9039C19.9679 15.8397 20 15.7692 20 15.6923V4.30773C20 4.2308 19.9679 4.16027 19.9038 4.09616C19.8397 4.03206 19.7692 4.00001 19.6923 4.00001H4.3077C4.23077 4.00001 4.16024 4.03206 4.09613 4.09616C4.03202 4.16027 3.99998 4.2308 3.99998 4.30773V17.3846L5.4 16Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconComment;
