import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import Image from "next/image";
import { useSelector } from "react-redux";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import dynamic from 'next/dynamic';
// const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'));

export default function ReplyForm({}) {
  const captcha = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [email, setEmail] = useState(true);
  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }
  const Schema = yup.object().shape({
    website: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    name: yup.string().required("Full name  is required"),
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
      website: "",
      name: "",
      message: "",
      email: "",
    },
  });
  const toast = useSelector((state) => state?.toast);
  const isValidEmail = (email) =>
    setEmail(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );
  const SubmitHandler = async (data) => {
    if (
      captcha.current.getValue() &&
      captcha.current.getValue() != "" &&
      email
    ) {
      try {
        const formData = {
          ...data,
        };
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.SAVE_BLOG_FEEDBACK,
          data: { data: formData },
        });
        if (res?.status === 200) {
          toast.success("Submitted successfully");
          setCaptchaError(false);
          captcha.current.reset();
          reset();
        } else toast.error(res?.data?.error?.message);
      } catch (err) {
        toast.error("failed");
      }
    } else {
      setCaptchaError(true);
    }
  };

  return (
    <div className="md:mt-[55px] mt-[30px]">
      <h2 className="mb-4">Leave a Reply </h2>
      <p className="text-[#0C2139]">
        Comments on "How to Hire Dedicated Developers for Your Tech Team Fast: A
        Complete Guide"
      </p>
      <form className="space-y-6 py-6" onSubmit={handleSubmit(SubmitHandler)}>
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="md:w-1/3">
            <input
              className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
              placeholder="Name"
              {...register("name")}
              name="name"
            />
            {errors.name && (
              <span className="mt-2 font-normal text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>

          <div className="md:w-1/3">
            <input
              className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
              placeholder="Email Id"
              type="email"
              {...register("email")}
              name="email"
              onChange={(e) => {
                isValidEmail(e.target.value);
              }}
            />
            {errors.email && (
              <span className="mt-2 font-normal text-sm text-red-700">
                {errors.email?.message}
              </span>
            )}
            {!email && (
              <span className="mt-2 font-normal text-sm text-red-700">
                {"email must be a valid email"}
              </span>
            )}
          </div>

          <div className="md:w-1/3">
            <input
              className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
              placeholder="Website"
              {...register("website")}
              name="website"
            />
            {errors.website && (
              <span className="mt-2 font-normal text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
        </div>

        <textarea
          type="text"
          className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
          placeholder="Your Comment Here.."
          name="message"
          {...register("message")}
          rows={6}
        ></textarea>
        {errors.message && (
          <span className="mt-2 font-normal text-sm text-red-700">
            This field is required
          </span>
        )}

        <div className="flex items-center mb-4 !mb-10">
          <input id="remember-me" type="checkbox" name="remember-me" />
          <label for="remember-me" className="ml-2">
            SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT TIME I
            COMMENT.
          </label>
        </div>
        <div>
          <div className="mt-2 mb-6">
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
          <button
            className="bg-primary text-white px-20 pb-2 pt-3 rounded flex space-x-6 justify-center items-center"
            type="submit"
          >
            <span>Submit</span>
            <Image
              src="/icons/arrow-right-white-lg.svg"
              alt="arrow-right-white-lg"
              width={24}
              height={18}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
