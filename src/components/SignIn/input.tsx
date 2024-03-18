import { UseFormRegisterReturn } from "react-hook-form";

interface InputPropsI {
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  className: string;
  type: string;
  spanClassname: string;
  icon: string;
  spanOnclick?: () => void;
  containerClassname: string;
}

export default function SignInInput({
  register,
  placeholder,
  className,
  type,
  spanClassname,
  icon,
  spanOnclick,
  containerClassname,
}: InputPropsI) {
  return (
    <div className={containerClassname}>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        {...register}
      />
      <span className={spanClassname} onClick={spanOnclick}>
        <img src={icon} />
      </span>
    </div>
  );
}
