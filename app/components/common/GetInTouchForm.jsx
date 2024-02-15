import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";

import Container from "./Container";
import { useSelector } from "react-redux";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { subscribeEmail, zohoLeadApi } from "app/scripts/utils";
import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { timeZoneCityToCountry } from "app/helpers/timeZoneCityToCountry";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./getintouch.css";

const style = {
  inputField: {
    backgroundColor: "#F9F9F9",
    border: "0.5px solid rgba(146, 146, 146, 0.5)",
    borderRadius: "4px",
    padding: "8px 16px",
    height: "45px",
    color: "#898989",
  },
  selectArrow: {
    backgroundImage: "url(/img/contact-us/vector.svg)",
    backgroundPosition: "calc(100% - 15px) center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "15px",
  },
};

export default function GetInTouchForm() {
  const captcha = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [active, setActive] = useState(false);

  const { asPath } = useRouter();

  let userCity;
  let userCountry;
  let userTimeZone;
  if (Intl) {
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var tzArr = userTimeZone.split("/");
    userCity = tzArr[tzArr.length - 1];
    timeZoneCityToCountry.map((coun, key) => (
      <>{(userCountry = coun[userCity])}</>
    ));
  }

  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const Schema = yup.object().shape({
    mobile: yup
      .string()
      .required("Numbar is required")
      .min(5, "Number is not valid"),
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Email must be a valid"),
    name: yup
      .string()
      .required("Name is required")
      .matches(
        /^[a-zA-Z\s]*$/,
        "Name can not contain number and special character"
      ),
    organization: yup.string().required("organization Name is required"),
    message: yup.string().required("Message is required"),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      mobile: "",
      name: "",
      message: "",
      organization: "",
      email: "",
      countryName: userCountry,
      sourceCode: asPath,
    },
  });
  const toast = useSelector((state) => state?.toast);
  const submitHandler = async (data) => {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      try {
        const formData = {
          ...data,
        };
        setActive(!active);
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.SAVE_CONTACT_US,
          data: { data: formData },
        });

        zohoLeadApi({ ...data, firstName: data?.name });
        subscribeEmail(data);
        if (res?.status === 200) {
          toast.success("Submitted successfully");
          setCaptchaError(false);
          captcha.current.reset();
          reset();
          setActive(active);
        } else toast.error(res?.data?.error?.message);
      } catch (err) {
        toast.error("failed");
      }
    } else {
      setCaptchaError(true);
    }
  };

  return (
    <div
      className="z-20 relative bg-form-background-new bg-white bgposition"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat, no-repeat",
        zIndex: 0,
      }}
      id="get-in-touch"
    >
      <div className="">
        <Container className="md:flex">
          <div className="lg:w-[60%] w-[100%] md:pr-14 relative md:pt-12 md:pb-20 py-[30px]">
            <div className="z-40 relative">
              <small className="md:mb-4 mb-1 font-[400] block">CONNECT</small>
              <h5 className="md:mb-[55px] mb-[25px] font-sans font-[700] xl:text-4xl lg:text-[32px] text-[22px]">
                Get In <span className="text-company">Touch</span>!
              </h5>
              <form
                className="flex space-y-10 flex-col space-y-4"
                onSubmit={handleSubmit(submitHandler)}
                autoComplete="off"
              >
                <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                  <div className="md:w-1/2 ">
                    <input
                      placeholder="Enter Full Name*"
                      {...register("name")}
                      name="name"
                      className="w-[100%] block focus:ring-0 focus-visible:outline-0 placeholder-[#343434] text-[#343434] bg-[#F9F9F9]"
                      style={style.inputField}
                    />
                    {errors.name && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {`${errors.name.message}`}
                      </span>
                    )}
                  </div>

                  <div className="md:w-1/2">
                    <input
                      placeholder="Enter Work Email*"
                      type="email"
                      {...register("email")}
                      name="email"
                      className="w-[100%] block focus:ring-0 placeholder-[#343434] text-[#343434] bg-[#F9F9F9]"
                      style={style.inputField}
                    />
                    {errors.email && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {errors?.email?.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="md:flex space-y-4 md:space-y-0 md:space-x-4 justify-items-stretch">
                  <div className="md:w-1/2">
                    <Controller
                      name="mobile" // Name of the field in the form data
                      control={control}
                      defaultValue="" // Initial value for the field
                      render={({ field }) => (
                        <PhoneInput
                          country={"us"}
                          value={field.mobile} // Set the value from react-hook-form
                          onChange={(phone) => {
                            field.onChange(phone); // Update react-hook-form value on change
                          }}
                          style={style.inputField}
                          className="p-[0px_!important] phonenumber react-tel-input focus:ring-0 placeholder-[#343434] text-[#343434] bg-[#F9F9F9]"
                        />
                      )}
                    />
                    {errors.mobile && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {`${errors.mobile.message}`}
                      </span>
                    )}
                  </div>

                  <div className="md:w-1/2">
                    <input
                      className="w-[100%] block outline-0 placeholder-[#343434] text-[#343434]"
                      placeholder="Enter Organization Name *"
                      {...register("organization")}
                      style={style.inputField}
                    />
                    {errors.organization && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {`${errors.organization.message}`}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    rows="4"
                    placeholder="Small brief about Project*"
                    {...register("message")}
                    minlength="20"
                    name="message"
                    className="w-[100%] block focus:ring-0 focus:border-[rgba(146,146,146,0.5)] focus-visible:outline-0 placeholder-[#343434] text-[#343434] bg-[#F9F9F9] rounded-[4px]"
                  ></textarea>
                  {errors.message && (
                    <span className="mt-2 font-normal text-sm text-red-700">
                      {`${errors.message.message}`}
                    </span>
                  )}
                </div>

                <div>
                  <div className="mt-2 md:mb-12 mb-[40px]">
                    <ReCAPTCHA
                      ref={captcha}
                      sitekey={`${process.env.NEXT_PUBLIC_CLIENT_SIDE_GOOGLE_CAPTCHA}`}
                      onChange={onChangeCaptcha}
                    />
                    {captchaError && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="md:block flex justify-center">
                    <button
                      id="getInTouch"
                      disabled={active}
                      className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center text-center font-medium focus:z-10 text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block lg:px-10 px-5 py-1"
                    >
                      <span className="flex items-center rounded-md text-sm px-4 py-2">
                        <span
                          className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  bg-[#fff]`}
                        ></span>
                        <span
                          className={`font-[600] relative group-hover:text-black flex items-center`}
                        >
                          Submit
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2 font-[14px] w-[14px]"
                          />
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="z-10 absolute inset-x-0  inset-y-minus-5 bg-white blur-md"></div>
          </div>
        </Container>
      </div>
    </div>
  );
}
