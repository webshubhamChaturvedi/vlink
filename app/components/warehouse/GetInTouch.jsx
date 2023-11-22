import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import Image from "next/image";
import Container from "../common/Container";
import { useSelector } from "react-redux";
import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { subscribeEmail, zohoLeadApi } from "app/scripts/utils";
import { apiEndpoint } from "app/scripts/fetch";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import CloudinaryImage from "../common/CloudinaryImage";
// const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));
const jsonFileData = require("../../../public/cloudinaryLinks.json");

const style = {
  inputField: {
    borderColor: "transparent",
    borderBottom: "1px solid #D8D8E2",
    padding: "8px 8px",
    height: "45px",
    color: "#898989",
    fontSize: "18px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "6px",
    color: "#8283A3",
    display: "block",
  },
  selectArrow: {
    backgroundImage: "url(/img/contact-us/vector.svg)",
    backgroundPosition: "calc(100% - 15px) center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "15px",
  },
};

export default function GetInTouch({
  getintouch,
  isStaff = false,
  isBlog = false,
}) {
  const captcha = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [email, setEmail] = useState(true);
  const [phone, setPhone] = useState(true);
  const [getInTouchData, setGetInTouchData] = useState();
  const [active, setActive] = useState(false);
  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }
  const Schema = yup.object().shape({
    mobile: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    name: yup.string().required("Full name  is required"),
    organization: yup.string().required("Organization is required"),
    message: yup.string().required("message is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      mobile: "",
      name: "",
      message: "",
      organization: "",
    },
  });
  const toast = useSelector((state) => state?.toast);
  const submitHandler = async (data) => {
    if (
      captcha.current.getValue() &&
      captcha.current.getValue() != "" &&
      email &&
      phone
    ) {
      try {
        const formData = {
          ...data,
        };
        setActive(!active)
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.SAVE_CONTACT_US,
          data: { data: formData },
        });

        if (res?.status === 200) {
          toast.success("Submitted successfully");
          setCaptchaError(false);
          captcha.current.reset();
          reset();
          zohoLeadApi({ ...data, firstName: data?.name });
          subscribeEmail(data);
          setActive(active)
        } else toast.error(res?.data?.error?.message);
      } catch (err) {
        toast.error("failed");
      }
    } else {
      setCaptchaError(true);
    }
  };
  const isValidEmail = (email) =>
    setEmail(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );

  const isValidPhone = (phone) =>
    setPhone(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone));
  const loads = () => {
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.GETINTOUCH_DATA,
      callback: (res) => {
        if (res?.data?.data) {
          setGetInTouchData(res.data.data);
        } else {
          // Handle the case where data is not present
        }
      },
    });
  };

  useEffect(() => {
    loads();
  }, []);
  // for showing blog in web only
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="md:py-[55px] py-[30px]">
      <div className="container">
        <div
          className="md:mb-[55px] mb-[30px]"
          data-aos="fade"
          data-aos-easing="linear"
        >
          {getInTouchData ? (
            <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-5">
              <span
                className="inline-block font-bold bg-[center top 20%] bg-no-repeat bg-size-100 bg-center bg-cover md:pt-16 pt-8 max-w-[400px] w-full"
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_300/Connect_9af8e0c9df)",
                }}
              >
                {getInTouchData?.attributes?.title}
              </span>
            </h4>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="shadow-[0px_0px_25px_rgba(0,_80,_213,_0.1)] rounded-[20px] bg-[#fff] py-10">
        <Container className="flex flex-wrap justify-space-between">
          <div className="lg:basis-8/12 lg:mb-0 mb-10 w-full relative px-[20px] pr-[60px]">
            <div className="z-40 relative">
              <form
                className="flex flex-col "
                onSubmit={handleSubmit(submitHandler)}
                autoComplete="off"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 px-[10px]">
                    <label htmlFor="name" style={style.label}>
                      Full Name
                    </label>
                    <input
                      {...register("name")}
                      name="name"
                      id="name"
                      className="w-[100%] block focus:ring-b-0 focus-visible:outline-0 placeholder-[#191A59] text-[#191A59] "
                      style={style.inputField}
                    />
                    {errors.name && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="md:w-1/2 px-[10px]">
                    <label htmlFor="email2" style={style.label}>
                      Work Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      onChange={(e) => {
                        isValidEmail(e.target.value);
                      }}
                      name="email"
                      id="email2"
                      className="w-[100%] block focus:ring-0 placeholder-[#191A59] text-[#191A59] "
                      style={style.inputField}
                    />
                    {errors.email && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {errors?.email?.message}
                      </span>
                    )}
                    {!email && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {"email must be a valid"}
                      </span>
                    )}
                  </div>
                </div>

                <div className="md:flex mt-10 justify-items-stretch">
                  <div className="md:w-1/2 px-[10px]">
                    <label htmlFor="mobile" style={style.label}>
                      Phone Number
                    </label>
                    <input
                      {...register("mobile")}
                      name="mobile"
                      id="mobile"
                      className="w-[100%] block focus:ring-0 placeholder-[#191A59] text-[#191A59]"
                      style={style.inputField}
                      onChange={(e) => {
                        isValidPhone(e.target.value);
                      }}
                    />
                    {errors.mobile && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        This field is required
                      </span>
                    )}
                    {!phone && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {"phone number must be a valid "}
                      </span>
                    )}
                  </div>

                  <div className="md:w-1/2 px-[10px]">
                    <label htmlFor="organization" style={style.label}>
                      Organization Name
                    </label>
                    <input
                      className="w-[100%] block outline-0 placeholder-[#191A59] text-[#191A59]"
                      {...register("organization")}
                      style={style.inputField}
                      name="organization"
                      id="organization"
                    />
                    {errors.organization && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-10">
                  <label htmlFor="message" style={style.label}>
                    Small brief about Project
                  </label>
                  <textarea
                    rows="4"
                    {...register("message")}
                    name="message"
                    className="bg-[transparent] w-[100%] block focus:ring-0 focus:border-[rgba(146,146,146,0.5)] focus-visible:outline-0 placeholder-[#191A59] text-[#191A59]"
                    style={style.inputField}
                    id="message"
                  ></textarea>
                  {errors.message && (
                    <span className="mt-2 font-normal text-sm text-red-700">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mt-10">
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
                    <button disabled={active} className="py-1 bg-[#3E2093] text-white md:px-20 px-6 py-[15px] rounded flex justify-center items-center md:w-auto w-[100%]">
                      <span className="inline-block mr-2">Submit</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="z-10 absolute inset-x-0  inset-y-minus-5 bg-white blur-md"></div>
          </div>
          {windowWidth > 768 && (
            <div className="lg:basis-4/12 w-full px-[20px] relative">
              <Image
                className="getintouch-video"
                src="https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_200//animation_640_lj6okk4i_1_3f257b1d6c"
                alt={
                  getInTouchData?.attributes?.gif_popup?.data?.attributes
                    .alternativeText || "getintouch"
                }
                width={320}
                height={180}
              />
              {/* <img
                className="getintouch-video"
                src={apiEndpoint(
                  getInTouchData?.attributes?.gif_popup?.data?.attributes?.url
                )}
                alt="animation_640_lj6okk4i_1_3f257b1d6c"
              /> */}
              {/* TODO: Need to handle video format*/}
              <img
                src={apiEndpoint(
                  getInTouchData?.attributes?.gif_bg_img?.data?.attributes?.url
                )}
                alt="getintouch"
                className="w-[90%] ml-auto mt-auto"
              />
            </div>
          )}
        </Container>
      </div>
    </section>
    // </div>
  );
}
