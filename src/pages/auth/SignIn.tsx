import person from "../../assets/img/logo/Vector.svg";
import openEye from "../../assets/img/logo/openEye.svg";
import closedEye from "../../assets/img/logo/closedEye.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import fardaIns from "../../assets/img/logo/signinFardaBg.svg";
import { useState } from "react";

type InputsT = {
  userName: string;
  password: string;
};

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputsT>();

  const onSubmit: SubmitHandler<InputsT> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex justify-center h-full ">
      <div className="w-screen h-full flex">
        <div className="w-[44%] h-full flex items-center justify-center bg-[#FFFFFF]">
          <div dir="rtl" className="w-full flex items-center justify-center">
            <div className="w-[55%]">
              <p className="text-[26px] font-bold leading-[35.55px] text-[#525252]">
                پنل ادمین بیمه هوشمند فردا
              </p>
              <p className="mt-2 text-lg font-normal leading-6 text-[#565656]">
                خوش آمدید!
              </p>
              {/* signin form */}
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="نام کاربری"
                    className="mt-6 w-full h-[44px] text-base font-normal leading-6 border border-[#B3B3B3] px-[14px] rounded-lg outline-none"
                    {...register("userName")}
                  />
                  <span className="absolute inset-y-11 left-0 pl-[14px] flex items-center">
                    <img src={person} />
                  </span>
                </div>
                <div className="relative">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="رمز عبور"
                    className="mt-8 w-full h-[44px] text-base font-normal leading-6 border border-[#B3B3B3] px-[14px] rounded-lg outline-none"
                    {...register("password")}
                  />
                  <span
                    className="absolute inset-y-14 left-0 pl-[14px] flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <img src={showPassword ? closedEye : openEye} />
                  </span>
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full h-[44px] bg-[#33BDF1] text-[#FFFFFF] text-base font-bold leading-5 rounded-lg"
                >
                  ورود
                </button>
              </form>
              <p className="mt-8 text-sm font-normal leading-5 text-[#FF8A8A]">
                در صورت فراموش کردن رمز عبور با واحد فنی ارتباط برقرار نمایید.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[56%] h-full z-10 flex items-center justify-center bg-gradient-to-b bg-gradient-[137deg] from-[#0575E6]  via-[#02298A]  to-[#021B79] ">
          <img src={fardaIns} />
        </div>
      </div>
    </div>
  );
}
