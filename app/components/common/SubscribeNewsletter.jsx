import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { countries } from "app/helpers/countries";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SubscribeNewsletter({
  data = {},
  key,
  title,
  // isDefaultChecked = true,
}) {
  const { asPath } = useRouter();

  const [email, setEmail] = useState(true);
  const [active, setActive] = useState(false);
  const [isDefaultChecked, setIsDefaultChecked] = useState(true);
  const handleCheckboxChange = (e) => {
    setIsDefaultChecked(e.target.checked);
  };

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const Schema = yup.object().shape({
    countryName: yup.string().required(),
    subscribeCheckbox: yup
      .boolean()
      .oneOf([true], "Please accept the Privacy Policy"),
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Email must be a valid"),
    type: yup.string().required("Type is required"),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      email: "",
      countryName: "",
      type: "newsletter",
      sourceCode: asPath,
      subscribeCheckbox: isDefaultChecked,
    },
  });
  const toast = useSelector((state) => state?.toast);
  const SubmitHandler = async (data) => {
    if (email) {
      if (data.subscribeCheckbox) {
        try {
          const formData = {
            ...data,
          };
          setActive(!active);
          const res = await REQUEST({
            method: "POST",
            url: API_ENDPOINTS.SAVE_SUBSCRIBE,
            data: { data: formData },
          });
          if (res?.status === 200) {
            toast.success("Submitted successfully");
            reset();
            setActive(active);
          } else toast.error(res?.data?.error?.message);
        } catch (err) {
          toast.error("failed");
        }
      }
    }
  };

  return (
    <div className="Subscribeff px-[18px] pb-7 pt-4 mt-10 bg-[#0050D5] drop-shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.25)] rounded-[8px] mx-[auto_!important]">
      <h4 className="font-[600] mb-4 leading-[27px] text-[#fff] text-[18px] font-sans">
        {title ? title : "Subscribe to Newsletter"}
      </h4>
      <form className="space-y-3" onSubmit={handleSubmit(SubmitHandler)}>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            name="email"
            className="bg-white text-[14px] placeholder:text-[#303030]  tracking-[-0.4px] rounded-[2px] px-[12px] py-[4px] h-[42px]   w-full outline-0 text-[#777]  bg-[#F2F2F2]"
          />

          {errors.email && (
            <span className="mt-2  text-sm text-[#ffabab] font-semibold">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="countryName" hidden>
            Country
          </label>
          <select
            className="bg-white bg-[center_right_12px] bg-no-repeat appearance-none text-[14px] font-sans placeholder:text-[#777]  tracking-[-0.4px] rounded-[2px] px-[12px] py-[4px] h-[42px]   w-full outline-0 text-[#777]  bg-[#F2F2F2]"
            // name="country"
            {...register("countryName")}
          >
            <option hidden value="">
              Select Country
            </option>
            {countries.map((countryName, key) => (
              <option value={countryName.value} key={key}>
                {countryName.name}
              </option>
            ))}
          </select>
          {errors.countryName && (
            <span className="mt-2 font-semibold text-sm  text-[#ffabab]">
              This field is required
            </span>
          )}
        </div>
        <input
          type="text"
          placeholder="SourceCode"
          {...register("sourceCode")}
          name="sourceCode"
          className="hidden"
        />
        <div className="mb-5">
          <label className="flex items-center space-x-1">
            <Controller
              name="subscribeCheckbox"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  className="form-checkbox rounded-full text-[#fff] bg-[#fff] border-[#fff]"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleCheckboxChange(e);
                  }}
                  defaultChecked={isDefaultChecked}
                />
              )}
            />

            <span className="text-[#fff] text-[12px] font-sans font-[400]">
              By subscribing I accept the
              <Link href="/privacy-policy" className="underline ml-1">
                Privacy Policy
              </Link>
            </span>
          </label>
          {errors.subscribeCheckbox && (
            <span className="mt-2 font-semibold text-sm  text-[#ffabab]">
              {errors?.subscribeCheckbox?.message}
            </span>
          )}
        </div>
        <button
          id="Subscribe"
          type="submit"
          disabled={active}
          className="font-[700] text-[16px] font-sans tracking-[-0.4px] uppercase text-[#0050D5] bg-[#fff] border b-[#fff] rounded-[0px] h-[44px] text-center w-full pt-[0.5rem]"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
