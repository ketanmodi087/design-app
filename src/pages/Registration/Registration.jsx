import React, { useState } from "react";
import InputField from "../../component/InputField";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import MainImg from "../../assets/images/main-img.png";
import { rightArrow } from "../../config/constant";
import { validateRegister } from "../../utility/Validation";

const Registration = () => {
  const [data, setData] = useState("");
  const [errors, setErrors] = useState("");

  const onHandleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const onHandleSubmit = () => {
    const error = validateRegister(data);
    setErrors(error);
    if (!Object.keys(error).length) {
      setTimeout(() => {
        setData("");
      }, 200);
    }
  };
  return (
    <div className="relative min-h-screen text-gray-900 flex justify-center">
      <div className="main-container m-0 sm:rounded-lg flex justify-center flex-1 flex-col lg:flex-row">
        <div className="flex-1 w-1/2 hidden xl:block px-[24px] md:px-[30px] lg:[43px] py-9 left-container">
          <div className="w-full bg-contain bg-center bg-no-repeat">
            <img src={Logo} alt="" />
          </div>
          <div className="flex flex-col items-center mt-[186px] ">
            <div className="max-w-[427px] w-full flex items-center justify-center mb-8">
              <img src={MainImg} alt="" />
            </div>
            <div className="w-full max-w-[500px]">
              <h2 className="text-[40px] font-medium leading-[52px] text-center text-[#282828] mb-[19px]">
                Royalty collections, simplified. It’s next level!
              </h2>
              <p className="text-[22px] leading-[28px] font-normal text-center text-[#282828] max-w-[420px] mx-auto my-0">
                Revenue based invoice collection to make royalty collection as
                easy as...
              </p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 py-[20px] px-[40px] xl:p-[44px] flex justify-center right-container h-full">
          <div className="flex flex-col items-center flex-1">
            <div className="w-full flex-1">
              <div className="flex justify-between xl:justify-end mb-[59px]">
                <div className="xl:hidden">
                  <img src={Logo} alt="" className="w-[17px]" />
                </div>
                <NavLink
                  // to="/login"
                  className="flex items-center gap-4 text-base font-normal"
                >
                  Log in{" "}
                  <span dangerouslySetInnerHTML={{ __html: rightArrow }} />
                </NavLink>
              </div>
              <div className="mx-auto max-w-[530px] flex flex-col justify-center h-[calc(100%_-_100px)] xl:block">
                <div className="mb-[40px]">
                  <h1 className="text-[22px] leading-[28px] lg:text-[35px] font-medium lg:leading-[45px] mb-[10px]">
                    Get started with Franchain{" "}
                  </h1>
                  <p className="text-[16px] leading-[20px] lg:text-[20px] font-normal lg:leading-[26px]">
                    Create an account in 5 minutes.
                  </p>
                </div>
                <div className="">
                  <InputField
                    label={"First name"}
                    required={false}
                    name={"firstName"}
                    onHandleChange={onHandleChange}
                    error={errors?.firstName}
                  />
                  <InputField
                    label={"Last name"}
                    required={false}
                    name={"lastName"}
                    onHandleChange={onHandleChange}
                    error={errors?.lastName}
                  />
                  <InputField
                    label={"Business name"}
                    required={false}
                    name={"businessName"}
                    onHandleChange={onHandleChange}
                    error={errors?.businessName}
                  />
                  <InputField
                    label={"Work email"}
                    required={false}
                    name={"workEmail"}
                    onHandleChange={onHandleChange}
                    type={"email"}
                    error={errors?.workEmail}
                  />
                  <InputField
                    label={"Password"}
                    required={true}
                    requiredText={"Password must be at least 12 characters"}
                    name={"password"}
                    onHandleChange={onHandleChange}
                    type={"password"}
                    error={errors?.password}
                  />
                  <div className="mb-[20px]">
                    <button
                      onClick={onHandleSubmit}
                      type="submit"
                      className="bg-[#CED6F7] text-[12px] lg:text-[18px] font-bold min-h-[34px] lg:min-h-[53px] flex items-center justify-center text-white px-6 lg:px-10 py-3 rounded-[60px]"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
                <p className="text-[10px] lg:text-[14px] leading-[14px] lg:leading-[18px]">
                  By clicking “Start Application“, I agree to Mercury’s{" "}
                  <NavLink
                    target="_blank"
                    to="https://mercury.com/legal/terms"
                    className="underline"
                  >
                    Terms of Use
                  </NavLink>
                  , 
                  <NavLink
                    target="_blank"
                    to="https://mercury.com/legal/privacy"
                    className="underline"
                  >
                    Privacy Policy
                  </NavLink>
                   and to receive electronic communication about my accounts and
                  services per{" "}
                  <NavLink
                    target="_blank"
                    to="https://mercury.com/legal/esign"
                    className="underline"
                  >
                    Mercury’s Electronic Communications Agreement
                  </NavLink>
                  , and acknowledge receipt of{" "}
                  <NavLink
                    target="_blank"
                    to="https://mercury.com/legal/patriot-act"
                    className="underline"
                  >
                    Mercury’s USA PATRIOT Act disclosure
                  </NavLink>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
