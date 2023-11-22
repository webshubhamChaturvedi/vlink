import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { Button } from "flowbite-react";
import React,{ useState, useRef } from "react";
import Card from "../Card";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
// import dynamic from 'next/dynamic';
// const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'));

export default function Requirement() {
  const [email, setEmail] = useState(true);
  const captcha = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [active, setActive] = useState(false);

  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }
  const Schema = yup.object().shape({
    company: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    name: yup.string().required("Full name  is required"),
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
      email:"",
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
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      try {
        const formData = {
          ...data,
        };
        setActive(!active)
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
          setActive(active)
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
            This field is required
          </span>
        )}
        <input
          placeholder="Work Email*"
          {...register("email")}
          name="email"
          type="email"
          className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] font-[0.875rem] leading-[1.25rem]"
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
          <option  value="" hidden>
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
