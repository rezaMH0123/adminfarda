import openEye from "../../assets/img/logo/openEye.svg";
import closedEye from "../../assets/img/logo/closedEye.svg";
import person from "../../assets/img/logo/Vector.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import fardaIns from "../../assets/img/logo/signinFardaBg.svg";
import { useState } from "react";
import SignInInput from "../../components/SignIn/input";
import SignInButton from "../../components/SignIn/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SignInInputsT } from "../../types/signin";

const siginSchema = yup.object().shape({
  userName: yup
    .string()
    .required("نام کاربری خود را وارد نمایید")
    .test({
      name: "username is wrong",
      message: "نام کاربردی وارد شده موجود نمی‌باشد",
      test: (value) => value === "123",
    }),
  password: yup
    .string()
    .required("رمز عبور خود را وارد نمایید")
    .test({
      name: "password is wrong",
      message: "رمز عبور وارد شده اشتباه می‌باشد",
      test: (value) => value === "123",
    }),
});

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInInputsT>({
    resolver: yupResolver(siginSchema),
  });

  const onSubmit: SubmitHandler<SignInInputsT> = (data) => {
    console.log(data);
    reset();
    navigate("/");
  };

  return (
    <div className="flex justify-center h-full ">
      <div className="w-screen h-full flex">
        <div className="w-[44%] h-full flex items-center justify-center bg-[#FFFFFF]">
          <div dir="rtl" className="w-full flex items-center justify-center">
            <div className="w-[55%]">
              <p className="text-[26px] font-ShabnamBold leading-[35.55px] text-[#525252]">
                پنل ادمین بیمه هوشمند فردا
              </p>
              <p className="mt-2 text-lg font-ShabnamRegular leading-6 text-[#565656]">
                خوش آمدید!
              </p>
              {/* signin form */}
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                {/* username input */}
                <SignInInput
                  register={register("userName")}
                  placeholder="نام کاربری"
                  className={`mt-6 w-full h-[44px] text-base font-ShabnamRegular leading-6 border px-[14px] rounded-lg outline-none ${
                    errors.userName ? "border-[#F93838]" : "border-[#B3B3B3]"
                  }`}
                  type="text"
                  spanClassname="absolute inset-y-11 left-0 pl-[14px] flex items-center"
                  icon={person}
                  containerClassname="relative"
                />
                {errors.userName && (
                  <p className="text-[#F93838] text-xs font-ShabnamRegular leading-5 mt-1">
                    {errors.userName.message}
                  </p>
                )}
                {/* password input */}
                <SignInInput
                  register={register("password")}
                  placeholder="رمز عبور"
                  className={`mt-6 w-full h-[44px] text-base font-ShabnamRegular leading-6 border px-[14px] rounded-lg outline-none ${
                    errors.password ? "border-[#F93838]" : "border-[#B3B3B3]"
                  }`}
                  type={`${showPassword ? "text" : "password"}`}
                  spanClassname="absolute inset-y-11 left-0 pl-[14px] flex items-center cursor-pointer"
                  icon={showPassword ? closedEye : openEye}
                  spanOnclick={() => setShowPassword(!showPassword)}
                  containerClassname="relative"
                />
                {errors.password && (
                  <p className="text-[#F93838] text-xs font-ShabnamRegular leading-5 mt-1">
                    {errors.password.message}
                  </p>
                )}
                {/* sigin button */}
                <SignInButton
                  type="submit"
                  className="mt-8 w-full h-[44px] bg-[#33BDF1] text-[#FFFFFF] text-base font-ShabnamBold leading-5 rounded-lg"
                  title="ورود"
                />
              </form>
              <p className="mt-8 text-sm font-ShabnamRegular leading-5 text-[#565656]">
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
