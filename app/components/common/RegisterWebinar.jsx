import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useSelector } from "react-redux";
import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { countries } from "app/helpers/countries";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RegisterWebinar({ webinar }) {
  const captcha = useRef(null);
  const iframe = useRef(null);
  const [email, setEmail] = useState(true);
  const [captchaError, setCaptchaError] = useState(false);
  const [phone, setPhone] = useState(true);
  const [isLoading,setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true); 

  const { asPath } = useRouter();
  

  const handleChange = () => {
    setIsSubscribed(current => !current);
  };
  
  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }
  const Schema = yup.object().shape({
    company: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    name: yup.string().required("Full name  is required"),
    phone: yup.string().required("Phone  is required"),
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
  const isValidPhone = (phone) =>
    setPhone(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone));
  const SubmitHandler = async (data) => {
    if (
      captcha.current.getValue() &&
      captcha.current.getValue() != "" &&
      email
    ) {
      setIsLoading(true)
      try {
        const formData = {
          ...data,
        };
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.SAVE_WEBINAR_FORM,
          data: { data: {...formData,webinar} },
        });
        if (res?.status === 200) {
          toast.success("Submitted successfully");
          setCaptchaError(false);
          captcha.current.reset();
          reset();
          setIsLoading(false)
        } else {
          toast.error(res?.data?.error?.message)
          setIsLoading(false)
        }
      } catch (err) {
        setIsLoading(false)
        toast.error("failed");
      }
    } else {
      setCaptchaError(true);
    }
  };

  // function myFunction() {
  //   var element = document.getElementById("red html");
  //   element.classList.add("mystyle");
  // }
  // useEffect(() => {
  //   setTimeout(() => {
  //     document.getElementById("red").style.backgroundColor = "blue";
  //     myFunction()
  //   }, 4000);
  // }, []);

  

  return (
    // <div className="bg-[#fff] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)] p-[1px] rounded-[6px]" >
    <div className="bg-[#e8ebef] p-[10px] rounded-[6px]">
      <h4 className="font-[700] text-[32px] font-sans leading-[41px]  text-[#000203C2] px-[18px] pt-4 pb-3">
        Register Today
      </h4>
      <p className="font-[400] text-[16px] leading-[25px] text-[#455F70] px-[18px]">
        If you’re unable to make the live session, we’ll send a link of the
        webinar recording to your email.
      </p>
      <div className="px-[18px] py-6">
        <form onSubmit={handleSubmit(SubmitHandler)}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name*"
              name="name"
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
              name="email"
              {...register("email")}
              onChange={(e) => {
                isValidEmail(e.target.value);
              }}
              placeholder="Work Email*"
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
              name="company"
              {...register("company")}
              placeholder="Company*"
              className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
            />
            {errors.company && (
              <span className="mt-2 font-normal text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              placeholder="Phone Number*"
              {...register("phone")}
              className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
              onChange={(e) => {
                isValidPhone(e.target.value);
              }}
            />
            {errors.phone && (
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
          <div className="mb-4">
            <select
              className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
              name="designation"
              {...register("designation")}
            >
              <option hidden value="">
                Select Job Level
              </option>
              <option value="Executive">Executive</option>
              <option value="Director">Director</option>
              <option value="Manager">Manager</option>
              <option value="Individual Contributer">Individual Contributer</option>
            </select>
            {errors.country && (
              <span className="mt-2 font-normal text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <select
              className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
              name="country"
              {...register("country")}
            >
              <option hidden value="">
                Select Country
              </option>
              {countries.map(country =>
                <option value={country.value} key={country.value}>{country.name}</option>
              )}
            </select>
            {errors.country && (
              <span className="mt-2 font-normal text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="subscribe" style={{fontFamily:"inherit"}} className="text-[14px] text-[#0000008F]">
            <input
              className="mr-2"
              type="checkbox"
              defaultChecked={true}
              value={isSubscribed}
              onChange={handleChange}
              id="subscribe"
              name="subscribe"
            /> 
               Send me information about upcoming webinars, new technology updates.</label>
          </div>
          <div className="mb-4">
            <p className="text-[11px] text-[#0000008F] font-sans font-[400]">*Please un-check the box to let us know if you dont wish to receive the updates. Your details will be kept safe and secure. To know more about your data protection rights, please take a look at our <Link className="text-[#000000] hover:underline" href="/privacy-policy">privacy policy.</Link></p>
          </div>
          <div className="mt-2 mb-4">
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
            type="submit"
            className={`font-[600] text-[16px] tracking-[-0.4px] uppercase text-[#fff] ${isLoading ? "bg-gray-500" : "bg-[#62207E]"} rounded-[2px] h-[44px] text-center w-full font-sans`}
            disabled={isLoading}
          >
            Register Now
          </button>
        </form>
      </div>
      {/* <iframe id="red" className="iframe-register bg-[#edeaef] h-[1200px] w-[100%]" src="https://www.airmeet.com/widgets/event/2990ba80-e036-11ed-a0f7-1fad749c585b/embedded-registration?communityId=bc84d0fe-ab16-4891-a802-ed4e5542f274&backgroundColor=6a4dff&isLightAmbience=true" frameBorder="0">
      </iframe> */}
    </div>
  );
}
