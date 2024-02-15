import React, { memo, useEffect, useRef, useState } from "react";
import StepWizard from "react-step-wizard";
import EnvelopeIcon from "./../../public/icons/envelope-icon.svg";
import VlinkLogo from "./../../public/img/vlink-logo.svg";
import RangeSlider from "app/components/common/RangeSlider";
import { Checkbox, Label } from "flowbite-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import { zohoLeadApi } from "app/scripts/utils";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import monitor from "./../../public/img/monitor.gif";
import ebook from "./../../public/img/ebook.gif";
import { useSelector } from "react-redux";

export default function Process({
  data1,
  data2,
  data3,
  data4,
  data5,
  data51,
  data6,
  data7,
}) {
  const { asPath } = useRouter();

  const {
    register,
    setValue,
    getValues,
    unregister,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      typeOfSoftware: "desktop",
      industry: "",
      team: [],
      specialists: [],
      duration: 0,
      contact: {
        email: "",
        phone: "",
      },
      sourceCode: asPath,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { push } = useRouter();
  const [progress, setProgress] = useState(10);
  const [loading, setLoading] = useState(false);
  const formulario = useRef();
  const proportion = 14;

  const country = useSelector((state) => state?.country);

  const FirstComponent = () => {
    const [type, setType] = useState("desktop");

    return (
      <div>
        <div>
          <h1 className="after:content-[''] after:w-[100px] after:h-[3px] after:absolute after:bottom-0 after:block after:bg-[#62207E] after:left-[50%] after:translate-x-[-50%] relative text-center font-extrabold md:text-[2.5rem] text-[28px] md:leading-[52px] leading-[35px] max-w-[800px] m-auto pb-4">
            {data1.title}
          </h1>
          <div className="flex justify-center">
            <div className="flex flex-row md:flex-none flex-wrap justify-center py-[55px] md:w-[60%] w-[100%] md:px-[0px] px-[20px]">
              <input
                type="text"
                placeholder="sourceCode"
                {...register("sourceCode")}
                name="sourceCode"
                className="hidden"
              />
              <Label
                htmlFor="desktop"
                className={`flex md:flex-1 md:w-[auro] w-[100%] md:mb-0 mb-[20px] space-x-2 items-center gap-2 bg-white border-[2px] h-[55px] ${
                  type == "desktop" ? "border-blue-600" : "border-gray-400"
                } py-2 px-4 hover:border-blue-600 rounded-[4px] cursor-pointer`}
              >
                <img
                  className="mr-2"
                  src={monitor.src}
                  alt={monitor.alternativeText || "Vlink screen-icon"}
                  width={45}
                />
                <span
                  className={`text-[18px] flex-1 p-0 !m-0 text-${
                    type == "desktop" ? "blue" : "gray"
                  }-400`}
                >
                  Desktop
                </span>
                <Checkbox
                  className="mx-3 my-1 !h-[1.3rem] !w-[1.3rem]"
                  id="desktop"
                  checked={watch("typeOfSoftware") == "desktop"}
                  onChange={() => {
                    setType("desktop");
                    setValue("typeOfSoftware", "desktop");
                  }}
                />
              </Label>
              <Label
                htmlFor="mobile"
                className={`flex md:flex-1 md:w-[auro] w-[100%] space-x-2 md:ml-6 items-center gap-2 bg-white border-[2px] h-[55px] ${
                  type == "mobile" ? "border-blue-600" : "border-gray-400"
                } py-2 px-4 hover:border-blue-600 rounded-[4px] cursor-pointer`}
              >
                <img
                  className="mr-3"
                  src={ebook.src}
                  alt={ebook.alternativeText || ebook.src}
                  width={40}
                />
                <span
                  className={`text-[18px] flex-1 p-0 !m-0 text-${
                    type == "mobile" ? "blue" : "gray"
                  }-400`}
                >
                  Mobile
                </span>
                <Checkbox
                  className="mx-3 my-1 !h-[1.3rem] !w-[1.3rem] !border-[#B8B8B8]"
                  id="mobile"
                  checked={watch("typeOfSoftware") == "mobile"}
                  onChange={() => {
                    setType("mobile");
                    setValue("typeOfSoftware", "mobile");
                  }}
                />
              </Label>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 setposition">
          <button
            type="button"
            color="info"
            onClick={() => push("/hire-developers")}
            className="font-semibold sm:w-[110px] w-[50%] text-center py-2 px-4 sm:mr-4 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] py-[0.5rem]"
            style={{ color: "#62207E", border: "1px solid #62207E" }}
          >
            <span>Cancel</span>
          </button>
          <button
            className="sm:w-[110px] w-[50%] text-center font16 font-semibold  sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] bg-[#1a56db] border-[#1a56db] text-[#fff] py-[0.5rem]"
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  const SecondComponent = () => {
    return (
      <div>
        <div className="col-span-12 mb-10">
          <h2 className="after:content-[''] after:w-[100px] after:h-[3px] after:absolute after:bottom-0 after:block after:bg-[#62207E] after:left-[50%] after:translate-x-[-50%] relative text-center font-extrabold md:text-[2.5rem] text-[28px] md:leading-[52px] leading-[35px] max-w-[800px] m-auto pb-4">
            {data2?.title}
          </h2>
        </div>
        <div className="col-span-12">
          <div className=" max-full m-auto">
            <div className="max-w-[1000px] m-auto sm:px-10 sm:py-[55px] pb-[55px]">
              <div className="grid grid-cols-12 gap-10">
                {data2?.options.length > 0 &&
                  data2?.options?.map((option, i) => (
                    <div
                      key={i}
                      className="lg:col-span-4 md:col-span-6 col-span-12"
                    >
                      <div className="flex items-center">
                        <input
                          id={`industry-${option.id}`}
                          checked={watch("industry.id") == option.id}
                          type="radio"
                          className="w-[20px] h-[20px] text-blue-600 bg-[#fff] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={() => {
                            setValue("industry", {
                              id: option.id,
                              title: option.title,
                            });
                          }}
                        />
                        <label
                          htmlFor={`industry-${option.id}`}
                          className="ml-2 text-[18px] font-[400] text-[#212121] dark:text-[#212121] cursor-pointer"
                          onChange={() => {
                            setValue("industry", {
                              id: option.id,
                              title: option.title,
                            });
                          }}
                        >
                          {option.title}
                        </label>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-10 text-center setposition">
            <button
              onClick={() => push("/hire-developers")}
              type="button"
              className="sm:w-[110px] w-[50%] font-semibold text-center text-[#FF3D3D] border-[1px] border-[#FF3D3D] py-2 px-4 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] sm:inline-block hidden"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleBack();
              }}
              type="button"
              className="sm:w-[110px] w-[50%] sm:mx-4 font-semibold text-center text-[#62207E] border-[1px] border-[#62207E] py-2 px-4 rounded-[4px] sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] py-[0.5rem]"
            >
              Previous
            </button>
            <button
              disabled={!watch("industry")}
              onClick={() => {
                handleNext();
              }}
              type="button"
              className="sm:w-[110px] w-[50%] font-semibold text-center text-[#ffffff] border-[1px] border-[#0050D5] py-2 px-4 bg-[#0050D5] rounded-[4px] sm:mr-2 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] bg-[#1a56db] border-[#1a56db] text-[#fff] py-[0.5rem]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
  const ThirdComponent = () => {
    const [enter, setEnter] = useState(true);

    const btnNext = useRef();

    const check_validation = () => {
      const team_key = Object.keys(watch("team"));
      if (team_key.length == 0) return;

      let temp_team = [];
      for (let i = 0; i < team_key.length; i++) {
        let key = team_key[i];
        if (watch("team")[key].is_active) {
          temp_team.push({ ...watch("team")[key], name: key });
        }
      }
      let count = 0;
      temp_team.map((item) => {
        if (Number(item.count) > 0) count++;
      });
      btnNext.current.disabled = !(
        temp_team.length == count && temp_team.length > 0
      );
    };

    useEffect(() => {
      if (activeStep.key == "thirdStep" && enter) {
        check_validation();
        setEnter(false);
      }
    }, [watch("team")]);

    const BLOQS = memo(({ parent, id, title }) => {
      const [enter, setEnter] = useState(true);
      const [isActive, setIsActive] = useState(false);
      const MIN_COUNT = 1;
      const MAX_COUNT = 10;

      useEffect(() => {
        if (activeStep.key == "thirdStep" && enter) {
          setIsActive(watch(`team.${id}.is_active`));
          setEnter(false);
        }
      }, []);

      function incrementCount(id) {
        let incid = document.getElementById("select." + id).value;
        let incval = Number(incid);
        setValue(`team.${id}.count`, incval + 1);
      }
      function decrementCount() {
        let decid = document.getElementById("select." + id).value;
        let decval = Number(decid);
        if (decval > 1) {
          setValue(`team.${id}.count`, decval - 1);
        }
      }

      return (
        <>
          <div className="lg:col-span-4 sm:col-span-6 col-span-12 md:text-left text-center inline-flex items-center">
            <div className="sm:w-[120px] w-[100%] inline-flex items-center cursor-pointer mr-4 ">
              <input
                checked={isActive}
                id={`team-${id}`}
                type="radio"
                onClick={() => {
                  setIsActive(!isActive);
                  setValue(`team.${id}.is_active`, !isActive);
                  setValue(`team.${id}.parent`, parent);
                  setValue(`team.${id}.name`, title);

                  if (!watch[`team.${id}.count`])
                    setValue(`team.${id}.count`, 1);
                  check_validation();
                }}
                className="w-[20px] h-[20px] text-blue-600 bg-[#fff] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`team-${id}`}
                className="ml-2 text-[18px] font-[600] text-[#212121] dark:text-[#212121] cursor-pointer"
                onClick={() => {
                  setIsActive(!isActive);
                  setValue(`team.${id}.is_active`, !isActive);
                  setValue(`team.${id}.parent`, parent);
                  setValue(`team.${id}.name`, title);
                  if (!watch[`team.${id}.count`])
                    setValue(`team.${id}.count`, 1);
                  check_validation();
                }}
              >
                {title}
              </label>
            </div>
            <button
              id={`dec.${id}`}
              type="button"
              onClick={decrementCount}
              className="bg-[#0050D5] text-[#fff] h-[35px] w-[35px] inline-flex items-center justify-center mr-2"
            >
              -
            </button>
            <input
              className="h-[35px] w-[100px] bg-white border-1 text-[14px] border-[rgba(0,0,0,0.25)] w-[50px] rounded-[4px] p-1 mr-2 text-center"
              type={!isActive ? "text" : "number"}
              id={`select.${id}`}
              disabled={!isActive}
              min={isActive && 1}
              value={!isActive ? "" : watch[`team.${id}.count`]}
              {...register(`team.${id}.count`, {
                onChange: (e) => {
                  if (e.target.value < MIN_COUNT && e.target.value !== "") {
                    setValue(`team.${id}.count`, MIN_COUNT);
                    return;
                  }
                  if (e.target.value > MAX_COUNT) {
                    setValue(`team.${id}.count`, MAX_COUNT);
                    return;
                  }

                  setValue(`team.${id}.count`, e.target.value);
                },
              })}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setValue(`team.${id}.count`, MIN_COUNT);
                }
              }}
            />

            <button
              id={`inc.${id}`}
              type="button"
              onClick={() => incrementCount(id)}
              className="bg-[#0050D5] text-[#fff] h-[35px] w-[35px] inline-flex items-center justify-center"
            >
              +
            </button>
          </div>
        </>
      );
    });
    BLOQS.displayName = "BLOQS-step3";
    return (
      <div>
        <div className="col-span-12 mb-10">
          <h2 className="after:content-[''] after:w-[100px] after:h-[3px] after:absolute after:bottom-0 after:block after:bg-[#62207E] after:left-[50%] after:translate-x-[-50%] relative text-center font-extrabold md:text-[2.5rem] text-[28px] md:leading-[52px] leading-[35px] max-w-[800px] m-auto pb-4 pb-12">
            {data3?.title}
          </h2>
        </div>
        <div className="col-span-12">
          <div className="">
            {data3?.options?.length &&
              data3?.options?.map(({ id, title, Quest2_list }, i) => (
                <div
                  className="grid grid-cols-12 border-[1px] border-[#ddd] gap-4 xl:py-[20px] xl:px-[20px] mb-[30px] rounded-[4px]"
                  key={id}
                >
                  <div className="col-span-12 xl:col-span-3">
                    <h4 className="font-sans text-[#002856] xl:pb-4 mb-0 font-[600] text-[20px] xl:text-left xl:bg-[#ffffff] bg-[#EDEDED] py-2 px-3">
                      {title} :
                    </h4>
                  </div>
                  <div key={i} className="col-span-12 xl:col-span-9 px-3 pb-3">
                    <div className="grid grid-cols-12 gap-4">
                      {Quest2_list.map((stack, j) => (
                        <BLOQS parent={{ id, title }} {...stack} key={j} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}

            {/* <div className="border-t border-[#ccc]">
                            <div className="flex items-center justify-between">
                                <label className="inline-flex items-center cursor-pointer">
                                    <span className="font-sans text-xs text-[#0050D5] font-[600] min-w-max mx-1">
                                    Other Roles ➜
                                    </span>
                                </label>
                            </div>
                        </div> */}
          </div>
          <div className="py-16 text-center setposition">
            <button
              onClick={() => push("/hire-developers")}
              type="button"
              className="sm:w-[110px] w-[50%] text-[#FF3D3D] border-[1px] border-[#FF3D3D] py-2 px-4 sm:rounded-[0.25rem] rounded-[0px_!important] sm:inline-block hidden sm:mr-2 sm:mb-3"
            >
              <span className="flex items-center rounded-md text-sm justify-center">
                Cancel
              </span>
            </button>
            <button
              onClick={() => {
                previousStep();
                setProgress(progress - proportion);
              }}
              type="button"
              className="sm:w-[110px] w-[50%] text-[#0050D5] border-[1px] border-[#0050D5] py-2 px-4 sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] py-[0.5rem] md:text-[14px] text-[20px] py-[0.5rem]"
            >
              <span className="flex items-center rounded-md justify-center">
                Previous
              </span>
            </button>
            <button
              ref={btnNext}
              onClick={() => {
                handleNext();
                // nextStep();
                // setProgress(progress + proportion);
              }}
              type="button"
              className="sm:w-[110px] w-[50%] text-[#ffffff] border-[1px] border-[#0050D5] py-2 px-4 bg-[#0050D5] sm:mr-2 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] bg-[#1a56db] border-[#1a56db] text-[#fff] py-[0.5rem]"
            >
              <span className="flex items-center rounded-md justify-center">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  const FourthComponent = () => {
    const [enter, setEnter] = useState(true);
    const btnNext = useRef();

    const check_validation = () => {
      const specialists_key = Object.keys(watch("specialists"));
      if (specialists_key.length == 0) return;

      let temp_specialists = [];

      for (let i = 0; i < specialists_key.length; i++) {
        let key = specialists_key[i];
        if (watch("specialists")[key].is_active) {
          temp_specialists.push({ ...watch("specialists")[key], name: key });
        }
      }
      let count = 0;
      temp_specialists.map((item) => {
        if (Number(item.count) > 0) count++;
      });
      // btnNext.current.disabled = !(
      //   temp_specialists.length == count && temp_specialists.length > 0
      // );
    };

    useEffect(() => {
      if (activeStep.key == "fourthStep" && enter) {
        check_validation();
        setEnter(false);
      }
    }, [watch("specialists")]);

    const BLOQS = memo(({ id, num, title }) => {
      const [enter, setEnter] = useState(true);
      const [isActive, setIsActive] = useState(false);
      const MIN_COUNT = 1;
      const MAX_COUNT = 10;

      useEffect(() => {
        if (activeStep.key == "fourthStep" && enter) {
          setIsActive(watch(`specialists.${id}.is_active`));
          setEnter(false);
        }
      }, []);

      function incrementCountspecialists(id) {
        let incid = document.getElementById("extra." + id).value;
        let incval = Number(incid);
        setValue(`specialists.${id}.count`, incval + 1);
      }
      function decrementCountspecialists(id) {
        let decid = document.getElementById("extra." + id).value;
        let decval = Number(decid);
        if (decval > 1) {
          setValue(`specialists.${id}.count`, decval - 1);
        }
      }

      return (
        <div className="lg:col-span-4 lg:col-span-6 col-span-12">
          <div className="flex items-center m-2">
            <label
              htmlFor={`team-${id}`}
              className="inline-flex items-center cursor-pointer mr-2 w-[100%]"
            >
              <input
                type="checkbox"
                id={`team-${id}`}
                className="w-[20px_!important] h-[20px_!important] text-blue-600 bg-[#fff_!important] border-[1px_!important] border-[rgba(0,0,0,0.25)_!important] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={isActive}
                onClick={() => {
                  setIsActive(!isActive);
                }}
                {...register(`specialists.${id}.is_active`, {
                  onChange: (e) => {
                    setValue(`specialists.${id}.is_active`, e.target.checked);
                    setValue(`specialists.${id}.title`, title);
                    check_validation();
                    if (!watch[`specialists.${id}.count`])
                      setValue(`specialists.${id}.count`, 1);
                  },
                })}
              />
              <span className="ml-2 text-[18px] font-[600] text-[#212121] dark:text-[#212121] cursor-pointer">
                {title}
              </span>
            </label>
            <button
              id={`dec.${id}`}
              type="button"
              onClick={() => decrementCountspecialists(id)}
              className="bg-[#0050D5] text-[#fff] md:h-[35px] h-[28px] w-[35px] inline-flex items-center justify-center mr-2 pt-[0.5rem]"
            >
              -
            </button>
            <input
              type={!isActive ? "text" : "number"}
              disabled={!isActive}
              id={`extra.${id}`}
              min={isActive && 1}
              className="md:h-[35px] h-[28px] w-[100px] bg-white border-1 text-[14px] border-[rgba(0,0,0,0.25)] w-[50px] rounded-[4px] p-1 mr-2 text-center"
              value={!isActive ? "" : watch[`specialists.${id}.count`]}
              {...register(`specialists.${id}.count`, {
                onChange: (e) => {
                  if (e.target.value < MIN_COUNT && e.target.value !== "") {
                    setValue(`specialists.${id}.count`, MIN_COUNT);
                    check_validation();
                  } else if (e.target.value > MAX_COUNT) {
                    setValue(`specialists.${id}.count`, MAX_COUNT);
                    check_validation();
                  } else {
                    setValue(`specialists.${id}.count`, e.target.value);
                    check_validation();
                  }
                },
              })}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setValue(`specialists.${id}.count`, MIN_COUNT);
                }
              }}
            />
            <button
              id={`inc.${id}`}
              type="button"
              onClick={() => incrementCountspecialists(id)}
              className="bg-[#0050D5] text-[#fff] md:h-[35px] h-[28px] w-[35px] inline-flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      );
    });
    BLOQS.displayName = "BLOQS-Step-4";
    return (
      <div>
        <div className="col-span-12 mb:mb-10 mb-3">
          <h2 className="after:content-[''] after:w-[100px] after:h-[3px] after:absolute after:bottom-0 after:block after:bg-[#62207E] after:left-[50%] after:translate-x-[-50%] relative text-center font-extrabold md:text-[2.5rem] text-[28px] md:leading-[52px] leading-[35px] max-w-[800px] m-auto pb-4">
            {data4?.title}
          </h2>
        </div>
        <div className="col-span-12">
          <div className="md:px-10 md:px-3 px-1 md:py-[55px] py-[30px] mx-auto">
            <div className="grid grid-cols-12 gap-6">
              {data4?.options?.length > 0 &&
                data4?.options?.map((items, i) => <BLOQS {...items} key={i} />)}
              {/* <div className="inline-block">
                                <div className="flex items-center justify-between my-2">
                                <label className="inline-flex items-center cursor-pointer">
                                    <span className="font-sans text-xs text-[#0050D5] font-[600] min-w-max mx-1">
                                        Other Roles ➜
                                    </span>
                                </label>
                                </div>
                            </div> */}
            </div>
          </div>
          <div className="mt-10 text-center setposition">
            <button
              type="button"
              onClick={() => push("/hire-developers")}
              className="sm:w-[110px] w-[50%] text-[#FF3D3D] border-[1px] border-[#FF3D3D] py-2 px-4 sm:mr-2 sm:rounded-[0.25rem] rounded-[0px_!important] sm:inline-block hidden"
            >
              <span className="flex items-center rounded-md text-sm justify-center">
                Cancel
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                handleBack();
                // previousStep();
                // setProgress(progress - proportion);
              }}
              className="sm:w-[110px] w-[50%] text-[#0050D5] border-[1px] border-[#0050D5] py-2 px-4 sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] py-[0.5rem]"
            >
              <span className="flex items-center rounded-md justify-center">
                Previous
              </span>
            </button>
            <button
              type="button"
              ref={btnNext}
              onClick={() => {
                handleNext();
                // nextStep();
                // setProgress(progress + proportion);
              }}
              className="sm:w-[110px] w-[50%] text-[#ffffff] border-[1px] border-[#0050D5] py-2 px-4 bg-[#0050D5] sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] bg-[#1a56db] border-[#1a56db] text-[#fff] py-[0.5rem]"
            >
              <span className="flex items-center rounded-md justify-center">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  const FifthComponent = () => {
    const [enter, setEnter] = useState(true);
    const [rangeValue, setRangeValue] = useState(0);
    const STEPS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const MIN = 0;
    const MAX = 10;

    useEffect(() => {
      if (activeStep.key == "fifthStep" && enter) {
        setRangeValue(watch("duration"));
        setEnter(false);
      }
    }, []);

    return (
      <div>
        <div className="col-span-12 mb-10">
          <h2 className="after:content-[''] after:w-[100px] after:h-[3px] after:absolute after:bottom-0 after:block after:bg-[#62207E] after:left-[50%] after:translate-x-[-50%] relative text-center font-extrabold md:text-[2.5rem] text-[28px] md:leading-[52px] leading-[35px] max-w-[800px] m-auto pb-4">
            {data5?.title}
          </h2>
        </div>
        <div className="md:py-[55px] py-[30px] md:px-4">
          <RangeSlider
            name="duration"
            min={MIN}
            max={data5?.options.length - 1}
            steps={data5?.options?.map((data) => data?.title)}
            showSteps={true}
            numberOfSteps={1}
            defaultVal={getValues("duration") || rangeValue}
            setRangeValue={(val) => {
              setRangeValue(val);
            }}
          />
        </div>
        <div className="mt-10 text-center setposition">
          <button
            type="button"
            onClick={() => push("/hire-developers")}
            className="sm:w-[110px] w-[50%] text-[#FF3D3D] border-[1px] border-[#FF3D3D] py-2 px-4 sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] sm:inline-block hidden"
          >
            <span className="flex items-center rounded-md text-sm justify-center">
              Cancel
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              handleBack();
              // previousStep();
              // setProgress(progress - proportion);
            }}
            className="sm:w-[110px] w-[50%] text-[#0050D5] border-[1px] border-[#0050D5] py-2 px-4 sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] py-[0.5rem]"
          >
            <span className="flex items-center rounded-md justify-center">
              Previous
            </span>
          </button>
          <button
            type="button"
            disabled={rangeValue > 0 ? false : true}
            onClick={() => {
              handleNext();
              setValue("duration", rangeValue);
              // nextStep();
              // setProgress(progress + proportion);
            }}
            className="sm:w-[110px] w-[50%] text-[#ffffff] border-[1px] border-[#0050D5] py-2 px-4 bg-[#0050D5] sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] bg-[#1a56db] border-[#1a56db] text-[#fff] py-[0.5rem]"
          >
            <span className="flex items-center rounded-md justify-center">
              Next
            </span>
          </button>
        </div>
      </div>
    );
  };
  const SixthComponent = () => {
    const [enter, setEnter] = useState(true);
    const [tab, setTab] = useState(0);
    const [country, setCountry] = useState("");
    const [countryCode, setCountryCode] = useState();

    useEffect(() => {
      if (activeStep.key == "sixthStep" && enter) {
        setCountry(getValues("location.country"));
        setTab(getValues("location.tab") || 0);
        setEnter(false);
      }
    }, [activeStep.key]);
    return (
      <>
        <div className="col-span-12 mb-10">
          <h2 className="after:content-[''] after:w-[100px] after:h-[3px] after:absolute after:bottom-0 after:block after:bg-[#62207E] after:left-[50%] after:translate-x-[-50%] relative text-center font-extrabold md:text-[2.5rem] text-[28px] md:leading-[52px] leading-[35px] max-w-[800px] m-auto pb-4">
            What is your preferred location?
          </h2>
        </div>
        <div className="grid grid-cols-12 md:gap-10 gap-0 md:py-[55px] py-[30px] px-2">
          <div className="col-span-12">
            <div className="text-center">
              <div className="text-center mb-[55px] inline-flex items-center justify-center">
                <p
                  className={`${
                    tab === 0
                      ? " bg-[#62207E] text-[#ffffff]"
                      : "text-[#565656]"
                  } md:text-[18px] text-[15px] font-sans font-[600] rounded-[40px] md:py-3 py-2 md:px-8 px-3 md:inline-block block md:w-[auto] mx-auto cursor-pointer`}
                  onClick={() => setTab(0)}
                >
                  {data51?.label1}
                </p>
                <p
                  className={`${
                    tab === 1
                      ? " bg-[#62207E] text-[#ffffff]"
                      : "text-[#565656]"
                  } md:text-[18px] text-[15px] font-sans font-[600] rounded-[60px] md:py-3 py-2 md:px-8 px-3 md:inline-block block md:w-[auto] mx-auto cursor-pointer`}
                  onClick={() => setTab(1)}
                >
                  {data51?.label2}
                </p>
                <p
                  className={` ${
                    tab === 2
                      ? " bg-[#62207E] text-[#ffffff]"
                      : "text-[#565656]"
                  } md:text-[18px] text-[15px] font-sans font-[600] rounded-[60px] md:py-3 py-2 md:px-8 px-3 md:inline-block block md:w-[auto] mx-auto cursor-pointer`}
                  onClick={() => setTab(2)}
                >
                  {data51?.label3}
                </p>
              </div>
            </div>
            <div className="md:max-w-[35%] max-w-[100%] mx-auto">
              <label
                htmlFor="Country"
                className="inline-flex items-center justify-end mb-2"
              >
                <span className="font-sans text-[18px] text-[#212121] font-[400]">
                  Country :
                </span>
              </label>
              <select
                name=""
                id=""
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setCountryCode(
                    data51?.[`label${tab + 1}Country`].find(
                      (val) => val.country === e.target.value
                    )?.country_code
                  );
                }}
                className="uppercase h-[50px] bg-[#F9F9F9] border-1 border-[#F9F9F9] w-full placeholder:text-[#B8B8B8] placeholder:text-[16px] rounded-[4px]"
              >
                <option value="" hidden>
                  Select Country
                </option>
                {data51?.[`label${tab + 1}Country`]?.map((value, index) => (
                  <option value={value?.country} key={tab + value?.country}>
                    {value?.country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center setposition">
          <button
            type="button"
            onClick={() => push("/hire-developers")}
            className="sm:w-[110px] w-[50%] text-[#FF3D3D] border-[1px] border-[#FF3D3D] py-2 px-4 sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] sm:inline-block hidden"
          >
            <span className="flex items-center rounded-md text-sm justify-center">
              Cancel
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              handleBack();
              // previousStep();
              // setProgress(progress - proportion);
            }}
            className="sm:w-[110px] w-[50%] text-[#0050D5] border-[1px] border-[#0050D5] py-2 px-4 sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] py-[0.5rem]"
          >
            <span className="flex items-center rounded-md justify-center">
              Previous
            </span>
          </button>
          <button
            type="button"
            disabled={!country}
            onClick={() => {
              // nextStep();
              handleNext();
              setValue(`location.type`, data51?.[`label${tab + 1}`]);
              setValue(`location.tab`, tab);
              setValue(`location.country`, country);
              setValue(`countryCode`, `+${countryCode}`);
              // setProgress(progress + proportion);
            }}
            className="sm:w-[110px] w-[50%] text-[#ffffff] border-[1px] border-[#0050D5] py-2 px-4 bg-[#0050D5] sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] bg-[#1a56db] border-[#1a56db] text-[#fff] py-[0.5rem]"
          >
            <span className="flex items-center rounded-md justify-center">
              Next
            </span>
          </button>
        </div>
      </>
    );
  };
  const SeventhComponent = () => {
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState(watch("countryCode"));
    const [name, setName] = useState("");

    const is_email = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const is_phone = (phone) => {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return true; //re.test(String(phone));
    };

    const saveData = async (val) => {
      let temp_team = [];
      data3?.options.map(({ title }) =>
        temp_team.push({ field: String(title), Quest2_list: [] })
      );

      val.team.map(({ name, is_active, count, parent }) => {
        if (is_active && count) {
          temp_team
            .filter((item) => item.field === String(parent.title))[0]
            .Quest2_list.push({ ans2: name, dev_num: count });
        }
      });

      let temp_specialists = [];
      Object.keys(val.specialists).map((id) => {
        val.specialists[id].is_active &&
          val.specialists[id].count &&
          temp_specialists.push({
            title: val.specialists[id].title,
            dev_num: val.specialists[id].count,
          });
      });

      const form = {
        data: {
          title: val.typeOfSoftware,
          Quest1: { title: val.industry?.title },
          Quest2: temp_team.filter((item) => item.Quest2_list[0]),
          Quest3: temp_specialists,
          Quest4: { time: data5?.options[val.duration]?.title },
          Quest5: { email: mail, number: phone, name },
          location: { ...val.location },
        },
      };

      setLoading(true);

      const { data } = await REQUEST({
        method: "POST",
        data: form,
        url: API_ENDPOINTS.HIRE_DEVELOPERS_PROCESS_POST,
      });

      if (data?.error) {
        alert(data?.error?.message);
        setLoading(false);
        return;
      }
      handleNext();
      setLoading(false);
      zohoLeadApi({ firstName: name, email: mail, mobile: phone });
    };

    return (
      <div>
        <div className="col-span-12 md:mb-10 mb-3">
          <h2 className="after:content-[''] after:w-[100px] after:h-[3px] after:absolute after:bottom-0 after:block after:bg-[#62207E] after:left-[50%] after:translate-x-[-50%] relative text-center font-extrabold md:text-[2.5rem] text-[28px] md:leading-[52px] leading-[35px] max-w-[800px] m-auto pb-4">
            {data6?.title}
          </h2>
        </div>
        <div className="md:py-[55px] py-[30px] px-4 flex flex-col items-center">
          <div className="lg:w-1/2 w-[100%]">
            <div className="flex flex-wrap items-center justify-around mb-4">
              <label
                htmlFor="email"
                className="md:inline-flex flex items-center md:justify-end justify-start mr-2 md:w-[150px] w-[100%]"
              >
                <span className="font-sans text-[18px] text-[#212121] font-[400]">
                  Name :
                </span>
              </label>
              <div className="flex-1 md:w-[250px] w-[100%] p-1 mr-2">
                <input
                  id="name"
                  type="text"
                  className="h-[50px] bg-[#fff] border-1 border-[rgba(0,0,0,0.25)] w-full placeholder:text-[#B8B8B8] placeholder:text-[16px] rounded-[4px]"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-around mb-4">
              <label
                htmlFor="email"
                className="md:inline-flex flex items-center md:justify-end justify-start mr-2 md:w-[150px] w-[100%]"
              >
                <span className="font-sans text-[18px] text-[#212121] font-[400]">
                  {data6?.email}:
                </span>
              </label>
              <div className="flex-1 md:w-[250px] w-[100%] p-1 mr-2">
                <input
                  id="email"
                  type="email"
                  className="h-[50px] bg-[#fff] border-1 border-[rgba(0,0,0,0.25)] w-full placeholder:text-[#B8B8B8] placeholder:text-[16px] rounded-[4px]"
                  placeholder="Enter your email Id"
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
                {mail.length > 3 && !is_email(mail) && (
                  <span className="text-red-500 text-xs">Invalid email</span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-around">
              <label
                htmlFor="phone"
                className="md:inline-flex flex items-center md:justify-end justify-start mr-2 md:w-[150px] w-[100%]"
              >
                <span className="font-sans text-[18px] text-[#212121] font-[400]">
                  {data6?.phone}:
                </span>
              </label>
              <div className="flex-1 md:w-[250px] w-[100%] p-1 mr-2">
                {/* <input
                  id="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  className="h-[50px] bg-[#fff] border-1 border-[rgba(0,0,0,0.25)] w-full placeholder:text-[#B8B8B8] placeholder:text-[16px] rounded-[4px]"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                /> */}
                <PhoneInput
                  country={"us"}
                  value={phone}
                  containerClass="h-[50px] bg-[#fff] border-1 border-[rgba(0,0,0,0.25)] w-full placeholder:text-[#B8B8B8] placeholder:text-[16px] rounded-[4px]"
                  inputClass="h-[50px] bg-[#fff] border-1 border-[rgba(0,0,0,0.25)] w-full placeholder:text-[#B8B8B8] placeholder:text-[16px] rounded-[4px]"
                  onChange={(phone) => setPhone(phone)}
                  style={{ width: "100%" }}
                  containerStyle={{ width: "230px" }}
                  inputStyle={{ width: "100%", height: "50px" }}
                />
                {phone?.length > 3 && !is_phone(phone) && (
                  <span className="text-red-500 text-sm">
                    Invalid phone number
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center setposition">
          <button
            onClick={() => push("/hire-developers")}
            type="button"
            className="sm:w-[110px] w-[50%] text-[#FF3D3D] border-[1px] border-[#FF3D3D] py-2 px-4 sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] sm:inline-block hidden"
          >
            <span className="flex items-center rounded-md text-sm justify-center">
              Cancel
            </span>
          </button>
          <button
            onClick={() => {
              handleBack();
            }}
            type="button"
            className="sm:w-[110px] w-[50%] text-[#0050D5] border-[1px] border-[#0050D5] py-2 px-4 sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] py-[0.5rem]"
          >
            <span className="flex items-center rounded-md justify-center">
              Previous
            </span>
          </button>
          <button
            onClick={handleSubmit(saveData)}
            disabled={
              mail &&
              phone &&
              is_email(mail) &&
              is_phone(phone) &&
              phone?.length > 8
                ? false
                : true
            }
            type="button"
            className="sm:w-[110px] w-[50%] text-[#ffffff] border-[1px] border-[#0050D5] py-2 px-4 bg-[#0050D5] sm:mr-2 sm:mb-3 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] bg-[#1a56db] border-[#1a56db] text-[#fff] py-[0.5rem]"
          >
            <span className="flex items-center rounded-md justify-center">
              Submit
            </span>
          </button>
        </div>
      </div>
    );
  };

  const FinalComponent = () => {
    return (
      <div>
        <div className="col-span-12">
          <div id="logo" className="flex items-center justify-center mb-10">
            <img
              src={EnvelopeIcon.src}
              alt={EnvelopeIcon.alternativeText || EnvelopeIcon.src}
              width={86}
            />
          </div>
          <h2 className="pb-4 relative text-center md:text-5xl text-[28px] font-sans font-[600] mb-4">
            {data7?.title}
          </h2>
          <p className="text-center text-[20px] font-[400] font-sans">
            {data7?.subtitle} Your message has been sent!
          </p>
        </div>
        <div className="col-span-12 mt-[55px]">
          <div className=" text-center">
            <button
              type="button"
              onClick={() => push("/hire-developers")}
              className="text-[#ffffff] border-[1px] border-[#0050D5] py-2 px-4 bg-[#0050D5] rounded-[4px] text-[20px]"
            >
              <span className="flex items-center rounded-md">Go to Home</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const [steps, setSteps] = useState([
    {
      key: "firstStep",
      label: "My First Step",
      isDone: true,
      component: <FirstComponent />,
    },
    {
      key: "secondStep",
      label: "My Second Step",
      isDone: false,
      component: <SecondComponent />,
    },
    {
      key: "thirdStep",
      label: "My Third Step",
      isDone: false,
      component: <ThirdComponent />,
    },
    {
      key: "fourthStep",
      label: "My Fourth Step",
      isDone: false,
      component: <FourthComponent />,
    },
    {
      key: "fifthStep",
      label: "My Fifth Step",
      isDone: false,
      component: <FifthComponent />,
    },
    {
      key: "sixthStep",
      label: "My Sixth Step",
      isDone: false,
      component: <SixthComponent />,
    },
    {
      key: "seventhStep",
      label: "My Seventh Step",
      isDone: false,
      component: <SeventhComponent />,
    },
    {
      key: "finalStep",
      label: "My Final Step",
      isDone: false,
      component: <FinalComponent />,
    },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert("You have completed all steps.");
      return;
    }

    const index = steps.findIndex((x) => x.key === activeStep.key);
    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setActiveStep(steps[index + 1]);
  };

  const handleBack = () => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    if (index === 0) return;

    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = false;
        return x;
      })
    );
    setActiveStep(steps[index - 1]);
  };

  return (
    <>
      <div
        className="w-full justify-center items-center"
        style={{ height: "100vh", display: loading ? "flex" : "none" }}
      >
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div
        id="modal-body"
        className="flex-row space-y-2"
        style={{ display: loading ? "none" : "initial" }}
      >
        <div className="flex flex-row justify-between items-center md:px-8 px-4 pt-2">
          <img
            onClick={() => {
              push("/");
            }}
            style={{ cursor: "pointer" }}
            src={VlinkLogo.src}
            alt={"Vlink Logo"}
            width={24}
            className="md:w-[80px] w-[60px]"
          />
          <span className="flex justify-end flex-1">
            <span className="flex justify-center align-center bg-blue-700 rounded-full md:w-[34px] md:h-[34px] w-[30px] h-[30px] p-1">
              <img src="/img/phone-call.svg" alt="Vlink Phone" />
            </span>
            <span className="md:text-[1.4rem] text-[18px] ml-2  font-semibold">
              {country && country === "IN"
                ? "+91 (124) 426-0818"
                : "+1 (860) 247-1400"}
            </span>
          </span>
        </div>
        <ul
          className="nav bg-gray-200 w-full rounded-full flex"
          id="progressbar"
        >
          {steps.map((step, i) => {
            return (
              <li
                key={i}
                className={`${
                  activeStep.key === step.key
                    ? "active h-1.5 bg-primary flex-1"
                    : "flex-1"
                } ${step.isDone ? "done h-1.5 bg-primary flex-1" : ""}`}
              >
                {/* <div className="bg-primary rounded-full h-1.5">Step {i + 1}<br /><span>{step.label}</span></div> */}
              </li>
            );
          })}
        </ul>
        <div className="container">
          <form
            ref={formulario}
            className="py-10 md:overflow-y-visible md:overflow-x-visible overflow-y-scroll overflow-x-hidden scrollwidth"
            style={{ height: "80vh" }}
          >
            {activeStep.key == "firstStep" ? (
              <FirstComponent />
            ) : activeStep.key == "secondStep" ? (
              <SecondComponent />
            ) : activeStep.key == "thirdStep" ? (
              <ThirdComponent />
            ) : activeStep.key == "fourthStep" ? (
              <FourthComponent />
            ) : activeStep.key == "fifthStep" ? (
              <FifthComponent />
            ) : activeStep.key == "sixthStep" ? (
              <SixthComponent />
            ) : activeStep.key == "seventhStep" ? (
              <SeventhComponent />
            ) : activeStep.key == "finalStep" ? (
              <FinalComponent />
            ) : (
              ""
            )}
            {/* <div className="btn-component flex justify-center mt-12 setposition">
              <input type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} className={`${steps[0].key === activeStep.key ? "cursor-not-allowed" : "cursor-pointer" } font-semibold sm:w-[110px] w-[50%] text-center py-2 px-4 sm:mr-4 sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] py-[0.5rem]`}
                style={{ color: "#62207E", border: "1px solid #62207E" }} />
              <input type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} className={`${activeStep.key} cursor-pointer sm:w-[110px] w-[50%] text-center font16 font-semibold  sm:rounded-[0.25rem] rounded-[0px_!important] md:text-[14px] text-[20px] bg-[#1a56db] border-[#1a56db] text-[#fff] py-[0.5rem]`} />
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [processData] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.HIRE_DEVELOPERS_PROCESS,
    }),
  ]);
  let data = processData?.data?.data;
  const data1 = {
    title: "What type of software solution would you like to develop?",
  };

  const data2 = {
    title: data[0].attributes.Quest1.h1_black,
    options: data[0].attributes.Quest1.Quest1_list,
  };

  const data3 = {
    title: "Create Your Team",
    options: data[0].attributes.Quest2_field,
  };

  const data4 = {
    title: data[0].attributes.Quest3.h1_black,
    options: data[0].attributes.Quest3.Quest3_list,
  };

  const data5 = {
    title: data[0].attributes.Quest4.title,
    options: data[0].attributes.Quest4.Quest4_list,
  };

  const data51 = data[0].attributes.location;

  const data6 = {
    title: data[0].attributes.Quest5.h1_black,
    email: data[0].attributes.Quest5.email,
    phone: data[0].attributes.Quest5.num,
  };

  const data7 = {
    title: data[0].attributes.Quest6.h1_black,
    subtitle: data[0].attributes.Quest6.h2_black || null,
    image: data[0].attributes.Quest6.image?.data?.attributes?.url,
  };
  return {
    props: { data1, data2, data3, data4, data5, data51, data6, data7 },
  };
}
