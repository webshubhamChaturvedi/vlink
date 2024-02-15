import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import Container from "app/components/common/Container";
import MailOutlineIcon from "app/components/icons/MailOutlineIcon";
import PhoneCallOutlineIcon from "app/components/icons/PhoneCallOutlineIcon";
import LocationOutlineIcon from "app/components/icons/LocationOutlineIcon";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import staticData from "../../public/staticData.json";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloudinaryImage from "../components/common/CloudinaryImage";
import { timeZoneCityToCountry } from "app/helpers/timeZoneCityToCountry";
import "./footer.css";

const style = {
  socialLinks: {
    width: "45px",
    height: "40px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: "45px",
    width: "100%",
    borderRadius: "4px 0px 0px 4px",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    color: "#7F7D7D",
  },
  subButton: {
    height: "45px",
    borderRadius: "0px 4px 4px 0px !important",
  },
  checkbox: {
    height: "22px",
    width: "22px",
    boxShadow: "none",
  },
};

export default function Footer() {
  const footerData = staticData?.footer?.attributes;
  const [showLocations, setShowLocations] = useState(false);
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState(true);
  const [isDefaultChecked, setIsDefaultChecked] = useState(true);
  const handleCheckboxChange = (e) => {
    setIsDefaultChecked(e.target.checked);
  };
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
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const Schema = yup.object().shape({
    countryName: yup.string().required(),
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Email must be a valid"),
    type: yup.string().required("Type is required"),
    subscribeCheckbox: yup
      .boolean()
      .oneOf([true], "Please accept the Privacy Policy"),
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
      countryName: userCountry,
      type: "newsletter",
      sourceCode: asPath,
      subscribeCheckbox: isDefaultChecked,
    },
  });
  const toast = useSelector((state) => state?.toast);
  const SubmitHandler = async (data) => {
    if (email) {
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
  };

  const linkData = useMemo(() => {
    return [
      {
        header: footerData?.footer_section2?.title,
        children: footerData?.footer_section2?.footer_link?.map(
          (data, key) => ({
            key: key,
            label: data?.name,
            href: data?.href || "#",
          })
        ),
      },
      {
        header: footerData?.footer_section3?.title,
        children: footerData?.footer_section3?.footer_services?.map(
          (data, key) => ({
            key: key,
            label: data?.name,
            href: data?.href || "#",
          })
        ),
      },
      {
        header: footerData?.footer_section5?.title,
        children: footerData?.footer_section5?.gobal_locations?.map(
          (data, key) => ({
            key: key,
            icon: <LocationOutlineIcon key={key} />,
            label: data?.location_name,
            href: "",
          })
        ),
      },
      {
        header: footerData?.footer_section4?.title,
        groups: [
          {
            icon: <MailOutlineIcon />,
            children: [
              {
                label: footerData?.footer_section4?.email1,
                href: `mailto:${footerData?.footer_section4?.email1}`,
              },
              {
                label: footerData?.footer_section4?.email2,
                href: `mailto:${footerData?.footer_section4?.email2}`,
              },
              {
                label: footerData?.footer_section4?.email3,
                href: `mailto:${footerData?.footer_section4?.email3}`,
              },
              {
                label: footerData?.footer_section4?.email4,
                href: `mailto:${footerData?.footer_section4?.email4}`,
              },
            ],
          },
          {
            icon: <PhoneCallOutlineIcon />,
            children: [
              {
                label: footerData?.footer_section4?.phone_no1,
                href: `tel:${footerData?.footer_section4?.phone_no1}`,
              },
              {
                label: footerData?.footer_section4?.phone_no2,
                href: `tel:${footerData?.footer_section4?.phone_no2}`,
              },
              {
                label: footerData?.footer_section4?.phone_n03,
                href: `tel:${footerData?.footer_section4?.phone_n03}`,
              },
              {
                label: footerData?.footer_section4?.phone_no4,
                href: `tel:${footerData?.footer_section4?.phone_no4}`,
              },
            ],
          },
        ],
      },
    ];
  }, [footerData]);

  const Row = ({ children, className = "" }) => (
    <div className={`grid grid-cols-12 ${className}`}>{children}</div>
  );
  const Col = ({ children, className = "" }) => (
    <div
      className={`col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3 xl:col-span-3 ${className}`}
    >
      {children}
    </div>
  );
  return (
    <>
      <footer className="relative z-40 bg-secondary bg-footer-texture-new bg-cover bg-center print-delete">
        <Container className="py-10 text-white">
          <div className="md:grid gap-8 grid-cols-12 text-sm">
            <div className="xl:col-span-9 md:col-span-12">
              <div className="sm:grid md:grid-cols-2 lg:grid-cols-4">
                {linkData.map((item, key) => (
                  <div className="mb-6 lg:mb-0 " key={key}>
                    <h6 className="mb-5 text-[16px]">{item.header}</h6>
                    {item.header === "Get in Touch" && (
                      <Link
                        className="py-2 px-5 inline-flex text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-0 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:ring-0 text-center rounded-[4px] bg-company"
                        style={{ marginBottom: "20px" }}
                        href={`${footerData?.footer_section4?.href}`}
                      >
                        <span className="mr-2">
                          {footerData?.footer_section4?.button_text}
                        </span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="font-[14px] w-[14px]"
                        />
                      </Link>
                    )}
                    <div
                      className={`flex ${!!item.groups ? "flex-col" : "flex"}`}
                    >
                      {!!item.groups &&
                        item.groups.map((subitem, key) => (
                          <div className="flex" key={key}>
                            {!!subitem.icon && subitem.icon}
                            <ul className="font-light mb-2 ml-2 flex flex-col gap-3 text-[13px]">
                              {subitem.children.map((link, key) => (
                                <li key={key}>
                                  <Link
                                    href={link.href}
                                    className="flex items-center"
                                  >
                                    {" "}
                                    {console.log(link.label, "link.label")}
                                    <span
                                      className={`${
                                        link.label == "+1 (860) 247-1400"
                                          ? "us flag mr-1"
                                          : link.label == "+91 (124) 426-0818"
                                          ? "india flag mr-1"
                                          : link.label == "+62 (811) 151-9851"
                                          ? "indonasia flag mr-1"
                                          : link.label == "+1 289-633-4046"
                                          ? "canada flag mr-1"
                                          : ""
                                      }`}
                                    ></span>{" "}
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      {!!item.children && (
                        <ul className="font-light mb-2 flex flex-col gap-3 text-[13px]">
                          {item.children.map((link, key) =>
                            link?.label != "Location Based Services" ? (
                              <li key={key}>
                                {link?.href?.length > 0 ? (
                                  <Link
                                    href={link.href}
                                    className="flex items-center"
                                  >
                                    {!!link.icon && link.icon}
                                    <span
                                      className={!!link.icon ? "ml-2" : "flex"}
                                    >
                                      {link.label}
                                    </span>
                                  </Link>
                                ) : (
                                  <span className="flex items-center">
                                    {!!link.icon && link.icon}
                                    <span
                                      className={!!link.icon ? "ml-2" : "flex"}
                                    >
                                      {link.label}
                                    </span>
                                  </span>
                                )}
                              </li>
                            ) : (
                              <li key={key}>
                                <div
                                  className="flex items-center"
                                  onClick={() => {
                                    setShowLocations(!showLocations);
                                  }}
                                >
                                  <span>{link.label}</span>
                                  <Image
                                    className={"ml-2"}
                                    src="/icons/white-arrow-down.svg"
                                    alt="layout-image"
                                    width={10}
                                    height={10}
                                  />
                                </div>
                                {showLocations && (
                                  <>
                                    <li className="mt-2" key={key}>
                                      <Link
                                        href={
                                          "/locations/it-service-in-massachusetts"
                                        }
                                        className="flex items-center"
                                      >
                                        <span
                                          className={
                                            !!link.icon ? "ml-2" : "ml-0"
                                          }
                                        >
                                          IT Staffing Services in Massachusetts
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="mt-2">
                                      <Link
                                        href={
                                          "/locations/it-service-in-connecticut"
                                        }
                                        className="flex items-center"
                                      >
                                        <span
                                          className={
                                            !!link.icon ? "ml-2" : "ml-0"
                                          }
                                        >
                                          IT Staffing Services in Connecticut
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="mt-2">
                                      <Link
                                        href={
                                          "/locations/data-analytics-engineering-in-massachusetts"
                                        }
                                        className="flex items-center"
                                      >
                                        <span
                                          className={
                                            !!link.icon ? "ml-2" : "ml-0"
                                          }
                                        >
                                          Data Analytics Engineering in
                                          Massachusetts
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="mt-2">
                                      <Link
                                        href={
                                          "/locations/web-development-company-in-massachusetts"
                                        }
                                        className="flex items-center"
                                      >
                                        <span
                                          className={
                                            !!link.icon ? "ml-2" : "ml-0"
                                          }
                                        >
                                          Web Development Company in
                                          Massachusetts
                                        </span>
                                      </Link>
                                    </li>
                                  </>
                                )}
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:col-span-3 md:col-span-6">
              <div className="">
                <p className="text-sm font-light">
                  Get insights from experts on building & Scaling technology
                  teams
                </p>
                <form
                  className="space-y-3"
                  onSubmit={handleSubmit(SubmitHandler)}
                >
                  <div className="flex mt-6 mb-2">
                    <input
                      type="text"
                      placeholder="Email"
                      {...register("email")}
                      name="email"
                      style={style.input}
                    />
                    <button
                      id="Subscribe"
                      type="submit"
                      disabled={active}
                      style={style.subButton}
                      className="bg-company"
                    >
                      <span className="flex items-center rounded-md text-sm px-4">
                        SUBSCRIBE
                      </span>
                    </button>
                  </div>
                  {errors.email && (
                    <span className="mt-2 font-semibold text-sm text-red-700">
                      {errors.email?.message}
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="countryName"
                    {...register("countryName")}
                    name="countryName"
                    className="hidden"
                  />
                  <input
                    type="text"
                    placeholder="SourceCode"
                    {...register("sourceCode")}
                    name="sourceCode"
                    className="hidden"
                  />
                  <div className="mb-[30px_!important] mt-[10px_!important]">
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
                        <Link
                          href="/privacy-policy"
                          className="underline ml-2 inline-block"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    {errors.subscribeCheckbox && (
                      <span className="mt-2 font-semibold text-sm text-red-700">
                        {errors?.subscribeCheckbox?.message}
                      </span>
                    )}
                  </div>
                </form>
                <ul className="mt-2 flex flex-col gap-4">
                  <li className="flex gap-4">
                    {footerData?.social_media?.map((data, key) => (
                      <Link
                        href={data?.link || "#"}
                        target="_blank"
                        className="bg-white group hover:bg-[#0050d5] transition duration-300 ease-linear hover:ease-linear hover:duration-300"
                        style={style.socialLinks}
                        key={key}
                      >
                        <div className="flex justify-center items-center rounded-full h-6 w-6">
                          <span className="hidden">LinkedIn</span>
                          <CloudinaryImage
                            backendImgUrl={
                              data?.logo_image?.data?.attributes?.url
                            }
                            alt={
                              data?.logo_image?.data?.attributes
                                ?.alternativeText
                            }
                            className="w-[20px] h-[20px] group-hover:invert ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                            type="icon"
                          />
                        </div>
                      </Link>
                    ))}
                  </li>
                </ul>
                <div className="footergptwlogo mt-3 flex  items-center">
                  {footerData?.footer_section5?.awardImg?.map((val, ind) => (
                    <CloudinaryImage
                      key={ind}
                      backendImgUrl={val?.image?.data?.attributes?.url}
                      className="w-16 inline-block"
                      alt="award image"
                      type="icon"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray-600 my-8"></hr>
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row items-start lg:items-center justify-between font-light text-sm">
            <p className="w-full sm:w-1/3 lg:w-fit ">© All rights reserved</p>
            <ul className="flex flex-row gap-2 lg:gap-4 mr-20">
              <li className="cursor-pointer">
                <Link href="/privacy-policy">Terms & Conditions </Link>
                <span className=" ml-2">|</span>
              </li>
              <li className="cursor-pointer">
                <Link href="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}
