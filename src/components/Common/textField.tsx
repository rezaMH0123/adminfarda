import { UseFormRegisterReturn } from "react-hook-form";

interface TextFieldPropsI {
  register?: UseFormRegisterReturn<string>;
  placeholder: string;
  className: string;
  type: string;
  spanClassname?: string;
  icon?: string;
  spanOnclick?: () => void;
  containerClassname?: string;
}

export default function TextField({
  placeholder,
  className,
  spanClassname,
  icon,
  type,
  spanOnclick,
  containerClassname,
}: TextFieldPropsI) {
  return (
    <div className={containerClassname}>
      <input placeholder={placeholder} className={className} type={type} />
      <span className={spanClassname} onClick={spanOnclick}>
        <img src={icon} />
      </span>
    </div>
  );
}
