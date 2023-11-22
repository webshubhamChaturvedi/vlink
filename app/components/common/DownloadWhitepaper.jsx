import { useState, useRef } from "react";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { download } from "app/scripts/utils";
// import dynamic from 'next/dynamic';
// const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'));

export default function DownloadWhitepaper({ data = {}, key ,downloadLink}) {
  const captcha = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [email,setEmail] = useState(true);

  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }
  const Schema = yup.object().shape({
    company: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    name: yup.string().required("Full name  is required"),
    // requirement: yup.string().required("Requirement is required"),
    // message: yup.string().required("message is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      company: "",
      name: "",
      message: "",
      requirement: "",
      email: "",
    },
  });
  const toast = useSelector((state) => state?.toast);
  const isValidEmail = email =>
  setEmail( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
     email
   ));
  const SubmitHandler = async (data) => {
    if (captcha.current.getValue()) {

      try {
        const formData = {
          ...data,
        };
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.SAVE_GOT_A_REQUIREMENTS,
          data: { data: formData },
        });
        if (res?.status === 200) {
          toast.success("Submitted successfully");
          setCaptchaError(false);
          captcha.current.reset();
          reset();
          if(downloadLink){
            download(downloadLink)
          }
        } else toast.error(res?.data?.error?.message);
      } catch (err) {
        toast.error("failed");
      }
    } else {
      setCaptchaError(true);
    }
  };

  return (
    <div className="bg-[#fff] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)] p-[1px]">
      <form className="space-y-4" onSubmit={handleSubmit(SubmitHandler)}>
        <h4 className="font-[400] text-[18px] leading-[27px] text-[#002856] px-[18px] py-4 bg-[rgb(0,40,86,0.04)]">
          Download your Free Copy
        </h4>
        <div className="px-[18px] py-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name*"
              {...register("name")}
              className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
            />
            {errors.name && (
              <span className="mt-2 font-normal text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Work Email*"
              {...register("email")}
              onChange={(e) => {
                isValidEmail(e.target.value);
              }}
              className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
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
          <div className="mb-4">
            <input
              type="text"
              placeholder="Company *"
              {...register("company")}
              className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
            />
            {errors.company && (
              <span className="mt-2 font-normal text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
          <div className="mt-2 mb-6">
            <ReCAPTCHA
              ref={captcha}
              sitekey={`${process.env.NEXT_PUBLIC_CLIENT_SIDE_GOOGLE_CAPTCHA}`}
              // onChange={onChangeCaptcha}
              size={"normal"}
            />
            {captchaError && (
              <span className="mt-2 font-normal text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="font-[600] text-[16px] tracking-[-0.4px] uppercase text-[#fff] bg-[#62207E] rounded-[2px] h-[50px] text-center w-full font-sans"
          >
            Download Now
          </button>
        </div>
      </form>
    </div>
  );
}
