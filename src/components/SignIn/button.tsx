import { SignInButtonPropsI } from "../../types/signin";

export default function SignInButton({
  type,
  className,
  title,
  disable,
}: SignInButtonPropsI) {
  return (
    <button type={type} className={className} disabled={disable}>
      {title}
    </button>
  );
}
