import "./loading.css";

type LoadingProps = {
  className: string;
};

export default function Loading({ className }: LoadingProps) {
  return (
    <div className="loader">
      <div className={`${className} bar1`}></div>
      <div className={`${className} bar2`}></div>
      <div className={`${className} bar3`}></div>
      <div className={`${className} bar4`}></div>
      <div className={`${className} bar5`}></div>
      <div className={`${className} bar6`}></div>
      <div className={`${className} bar7`}></div>
      <div className={`${className} bar8`}></div>
      <div className={`${className} bar9`}></div>
      <div className={`${className} bar10`}></div>
      <div className={`${className} bar11`}></div>
      <div className={`${className} bar12`}></div>
    </div>
  );
}
