import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type SignInInputsT = {
  userName: string;
  password: string;
};

export interface SignInButtonPropsI {
  type: "submit";
  className: string;
  title: string | ReactNode;
  disable: boolean;
}

export interface SignInInputPropsI {
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  className: string;
  type: string;
  spanClassname: string;
  icon: string;
  spanOnclick?: () => void;
  containerClassname: string;
}
