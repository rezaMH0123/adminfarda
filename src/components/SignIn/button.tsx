interface ButtonPropsI {
  type: "submit";
  className: string;
  title: string;
}

export default function SignInButton({ type, className, title }: ButtonPropsI) {
  return (
    <button type={type} className={className}>
      {title}
    </button>
  );
}
