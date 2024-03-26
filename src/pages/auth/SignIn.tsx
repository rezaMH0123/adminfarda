import openEye from "../../assets/img/logo/openEye.svg";
import closedEye from "../../assets/img/logo/closedEye.svg";
import person from "../../assets/img/logo/Vector.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import fardaIns from "../../assets/img/logo/signinFardaBg.svg";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Success from "../../assets/img/logo/success.svg";
import Loading from "../../components/Loading";
import TextField from "../../components/Common/textField";
import Button from "../../components/Common/button";

type SignInInputsT = {
  userName: string;
  password: string;
};

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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(data);
      reset();
      navigate("/");
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } h-[40px] w-[350px] bg-[#76f18b] rounded-lg flex items-center justify-end`}
        >
          <p className="mr-2 font-ShabnamRegular text-[#000]">
            .با موفقیت وارد شدید
          </p>
          <img src={Success} className="mr-4" />
        </div>
      ));
    }, 1500);
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
                <TextField
                  {...register("userName")}
                  placeholder="نام کاربری"
                  type="text"
                  className={`mt-6 w-full h-[44px] text-base font-ShabnamRegular leading-6 border px-[14px] rounded-lg outline-none ${
                    errors.userName ? "border-[#F93838]" : "border-[#B3B3B3]"
                  }`}
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
                <TextField
                  register={register("password")}
                  placeholder="رمز عبور"
                  className={` w-full h-[44px] text-base  font-ShabnamRegular leading-6 border px-[14px] rounded-lg outline-none ${
                    errors.password ? "border-[#F93838]" : "border-[#B3B3B3]"
                  }`}
                  type={`${showPassword ? "text" : "password"}`}
                  spanClassname="absolute top-[50%] translate-y-[-50%] left-0 pl-[14px] flex items-center cursor-pointer"
                  icon={showPassword ? closedEye : openEye}
                  spanOnclick={() => setShowPassword(!showPassword)}
                  containerClassname="relative h-[44px] mt-6"
                />
                {errors.password && (
                  <p className="text-[#F93838] text-xs font-ShabnamRegular leading-5 mt-1">
                    {errors.password.message}
                  </p>
                )}
                {/* sigin button */}
                <Button
                  type="submit"
                  backgroundColor="#33BDF1"
                  height={"44px"}
                  width={"100%"}
                  className="mt-8 font-ShabnamBold leading-5 disabled:bg-[#a2e5fd] disabled:cursor-not-allowed"
                  title={
                    loading ? <Loading className={"bg-[#565656]"} /> : "ورود"
                  }
                  disable={loading ? true : false}
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
