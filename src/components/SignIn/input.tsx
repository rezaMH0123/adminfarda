import { SignInInputPropsI } from "../../types/signin";

export default function SignInInput({
  register,
  placeholder,
  className,
  type,
  spanClassname,
  icon,
  spanOnclick,
  containerClassname,
}: SignInInputPropsI) {
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
