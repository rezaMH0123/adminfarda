import { SignInButtonPropsI } from "../../types/signin";

export default function SignInButton({
  type,
  className,
  title,
}: SignInButtonPropsI) {
  return (
    <button type={type} className={className}>
      {title}
    </button>
  );
}
