import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { Button } from "flowbite-react";
import React, { useState, useRef } from "react";
import Card from "../Card";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";
import { timeZoneCityToCountry } from "app/helpers/timeZoneCityToCountry";

export default function Requirement() {
  const [email, setEmail] = useState(true);
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
  const nameRegex = /^[A-Za-z\s]+$/;

  const Schema = yup.object().shape({
    company: yup.string().required(),
    email: yup
      .string("Email is required")
      .matches(emailRegex, "Email must be a valid"),
    name: yup
      .string()
      .required("Full name  is required")
      .matches(nameRegex, "Name can not contain number and special character"),
    requirement: yup.string().required("Requirement is required"),
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
      company: "",
      name: "",
      message: "",
      requirement: "",
      email: "",
      countryName: userCountry,
      sourceCode: asPath,
    },
  });
  const toast = useSelector((state) => state?.toast);
  const SubmitHandler = async (data) => {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      try {
        const formData = {
          ...data,
        };
        setActive(!active);
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
    <Card
      head="Got a Requirement?"
      containerClass={"space-y-3  rounded-md shadow-xl overflow-hidden"}
    >
      <form className="space-y-4" onSubmit={handleSubmit(SubmitHandler)}>
        <input
          placeholder="Name*"
          {...register("name")}
          name="name"
          className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
        />
        {errors.name && (
          <span className="mt-2 font-normal text-sm text-red-700">
            {errors?.name?.message}
          </span>
        )}
        <input
          placeholder="Work Email*"
          {...register("email")}
          name="email"
          type="email"
          className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] font-[0.875rem] leading-[1.25rem]"
        />
        {errors.email && (
          <span className="mt-2 font-normal text-sm text-red-700">
            {errors.email?.message}
          </span>
        )}

        <input
          placeholder="Company"
          {...register("company")}
          name="company"
          className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
        />
        {errors.company && (
          <span className="mt-2 font-normal text-sm text-red-700">
            This field is required
          </span>
        )}
        <select
          name="requirement"
          {...register("requirement")}
          className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
        >
          <option value="" hidden>
            Select Your Requirement*
          </option>
          <option value="hire-dedicated-team">Hire Dedicated team</option>

          <option value="it-staff-augmentation">IT Staff Augmentation</option>

          <option value="product-engineering">Product Engineering</option>
        </select>
        {errors.requirement && (
          <span className="mt-2 font-normal text-sm text-red-700">
            This field is required
          </span>
        )}
        <textarea
          placeholder="Requirement Details"
          {...register("message")}
          name="message"
          rows={3}
          className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
        ></textarea>
        {errors.message && (
          <span className="mt-2 font-normal text-sm text-red-700">
            This field is required
          </span>
        )}
        <div>
          <div className="mt-2 mb-6">
            <ReCAPTCHA
              ref={captcha}
              sitekey={`${process.env.NEXT_PUBLIC_CLIENT_SIDE_GOOGLE_CAPTCHA}`}
              onChange={onChangeCaptcha}
              size={"normal"}
            />
            {captchaError && (
              <span className="mt-2 font-normal text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
          <Button
            className="bg-company text-white w-full text-lg font-bold"
            color="company"
            type="submit"
            disabled={active}
          >
            Talk to Talent Expert
          </Button>
        </div>
      </form>
    </Card>
  );
}
