import moment from "moment";
import PaginationComponent from "../common/PaginationComponent";
import { useEffect, useState } from "react";
import ModalForwadFriends from "./ModalForwadFriends";
import ModalSuscribeNotifications from "./ModalSubscribeNotifications";
import { useDispatch } from "react-redux";
import ACTION_TYPE from "store/action-type";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";
export default function FindYourDreamJob({ country, section, loading }) {
  const [paginationOptions, setPaginationOptions] = useState({
    totalResults: 0,
    page: 1,
    limit: 15,
  });
  const { totalResults, page, limit } = paginationOptions;
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [work, setWork] = useState("");
  const [city, setCity] = useState("");
  const [sortDate, setSortDate] = useState("NEWEST");
  const [filterJobs, setFilterJobs] = useState([]);
  const [modalFowardFriend, setModalFowardFriend] = useState(false);
  const [modalSuscribeNotifications, setModalSuscribeNotifications] =
    useState(false);
  const { push } = useRouter();
  const dispatch = useDispatch();
  const SortByDate = (data, type) => {
    if (type === "OLDEST") {
      data?.sort(
        (a, b) => new Date(a?.issuedate?._text) - new Date(b?.issuedate?._text)
      );
      return data;
    } else {
      data?.sort(
        (a, b) => new Date(b?.issuedate?._text) - new Date(a?.issuedate?._text)
      );
      return data;
    }
  };
  const Filter = async (city, title, work, sortType) => {
    let result;
    if (city === "" && work == "" && title === "") {
      let data;
      data = SortByDate(section, sortType);
      setFilterJobs(data);
      setPaginationOptions((prev) => {
        return { ...prev, page: 1 };
      });
    } else if (title === "" && work != "" && city === "") {
      result = section?.filter((item) =>
        item?.positiontype?._text?.toUpperCase().includes(work)
      );
      if (result) {
        let data;
        data = SortByDate(result, sortType);
        setFilterJobs(data);
        setPaginationOptions((prev) => {
          return { ...prev, page: 1 };
        });
      } else {
        setFilterJobs([]);
      }
    } else if (work === "" && title === "" && city != "") {
      result = section?.filter(
        (item) =>
          item?.state?._text?.toUpperCase().includes(city) ||
          item?.city?._text?.toUpperCase().includes(city) ||
          item?.countryid?._text
            ?.toUpperCase()
            .includes(city === "UNITED STATES" ? "US" : city)
      );
      if (result) {
        let data;
        data = SortByDate(result, sortType);
        setFilterJobs(data);
        setPaginationOptions((prev) => {
          return { ...prev, page: 1 };
        });
      } else {
        setFilterJobs([]);
      }
    } else if (work === "" && city === "" && title != "") {
      result = section?.filter((item) =>
        item?.title?._cdata?.toUpperCase().includes(title)
      );
      if (result) {
        let data;
        data = SortByDate(result, sortType);
        setFilterJobs(data);
        setPaginationOptions((prev) => {
          return { ...prev, page: 1 };
        });
      } else {
        setFilterJobs([]);
      }
    } else if (work === "" && title != "" && city != "") {
      result = section?.filter(
        (item) =>
          (item?.state?._text?.toUpperCase().includes(city) ||
            item?.city?._text?.toUpperCase().includes(city) ||
            item?.countryid?._text
              ?.toUpperCase()
              .includes(city === "UNITED STATES" ? "US" : city)) &&
          item?.title?._cdata?.toUpperCase().includes(title)
      );
      if (result) {
        let data;
        data = SortByDate(result, sortType);
        setFilterJobs(data);
        setPaginationOptions((prev) => {
          return { ...prev, page: 1 };
        });
      } else {
        setFilterJobs([]);
      }
    } else if (work != "" && title === "" && city != "") {
      result = section?.filter(
        (item) =>
          (item?.state?._text?.toUpperCase().includes(city) ||
            item?.city?._text?.toUpperCase().includes(city) ||
            item?.countryid?._text
              ?.toUpperCase()
              .includes(city === "UNITED STATES" ? "US" : city)) &&
          item?.positiontype?._text?.toUpperCase().includes(work)
      );
      if (result) {
        let data;
        data = SortByDate(result, sortType);
        setFilterJobs(data);
        setPaginationOptions((prev) => {
          return { ...prev, page: 1 };
        });
      } else {
        setFilterJobs([]);
      }
    } else {
      result = section?.filter(
        (item) =>
          item?.title?._cdata?.toUpperCase().includes(title) &&
          item?.positiontype?._text?.toUpperCase().includes(work) &&
          (item?.state?._text?.toUpperCase().includes(city) ||
            item?.city?._text?.toUpperCase().includes(city) ||
            item?.countryid?._text
              ?.toUpperCase()
              .includes(city === "UNITED STATES" ? "US" : city))
      );
      if (result) {
        let data;
        data = SortByDate(result, sortType);
        setFilterJobs(data);
        setPaginationOptions((prev) => {
          return { ...prev, page: 1 };
        });
      }
    }
  };
  useEffect(() => {
    if (filterJobs && filterJobs?.length > 0) {
      const temp = filterJobs.slice(limit * (page - 1), limit * page);
      setPaginationOptions((prev) => {
        return { ...prev, totalResults: filterJobs?.length };
      });
      setJobs(temp);
    } else if (
      filterJobs &&
      filterJobs?.length === 0 &&
      (work != "" || title != "" || city != "")
    ) {
      const temp = filterJobs?.slice(limit * (page - 1), limit * page);
      setPaginationOptions((prev) => {
        return { ...prev, totalResults: filterJobs?.length };
      });
      setJobs(temp);
    } else {
      let data;
      data = SortByDate(section, sortDate);
      const temp = data?.slice(limit * (page - 1), limit * page);
      setPaginationOptions((prev) => {
        return { ...prev, totalResults: section?.length };
      });
      setJobs(temp);
    }
  }, [section, filterJobs, sortDate, limit, page]);
  return (
    <div id="fine-your-dream-job">
      <div className="py-0">
        <section className="font-['Open_Sans'] md:py-[55px] py-[30px]">
          <div className="container mx-auto px-4">
            <div className="md:w-[60%] w-[100%]">
              <h5 className="font-[400] md:text-[20px] text-[16px] md:leading-[29px] leading-[20px] text-[#353535]">
                FIND YOUR DREAM JOB
                <span className="inline-block ml-4 bg-[#353535] w-[50px] h-[2px] align-middle"></span>
              </h5>
              <h2 className="font-[700] md:text-[35px] text-[22px] md:leading-[50px] leading-[30px] text-[#000] tracking-[0.04em] my-4">
                Join Our <span className="text-[#62207E]">Team</span>
              </h2>
              <p className="font-[400] text-[14px] leading-[24px] text-[#353535] tracking-[0.03em]">
                VLink isn’t just a company. It’s a way of living and working
                where creativity and problem solving come together. Building
                something new and different isn’t the challenge here, it’s the
                reward.
              </p>
            </div>
          </div>
        </section>
      </div>

      {country ? (
        <>
          {country != "ID" && country != "IN" && (
            <div className="py-10 bg-[#F7FAFF]">
              <div className="container mx-auto xl:px-32 px-4 ">
                <div className="">
                  <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                      <label
                        for=""
                        className="mb-2 block font-sans text-[18px] font-[600] text-[#2B2B2D] tracking-[-0.4px]"
                      >
                        Specializations:
                      </label>
                      <input
                        onChange={async (e) => {
                          await setTitle(e.target.value.toUpperCase());
                          Filter(
                            city,
                            e.target.value.toUpperCase(),
                            work,
                            sortDate
                          );
                        }}
                        name=""
                        id=""
                        placeholder="Title, Skill"
                        className="focus:outline-none placeholder:text-[#949494] h-[46px] focus:border-[#B8B8B8] focus:ring-[0px] font-sans text-[16px] text-[#949494] font-[400] w-[100%] bg-[#ffffff] border border-[#B8B8B8] rounded-[6px] px-3"
                      />
                    </div>
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                      <label
                        for=""
                        className="mb-2 block font-sans text-[18px] font-[600] text-[#2B2B2D] tracking-[-0.4px]"
                      >
                        Work Type
                      </label>
                      <select
                        name=""
                        id=""
                        onChange={async (e) => {
                          await setWork(e.target.value.toUpperCase());
                          await Filter(
                            city,
                            title,
                            e.target.value.toUpperCase(),
                            sortDate
                          );
                        }}
                        className="focus:outline-none focus:border-[#B8B8B8] focus:ring-[0px] font-sans text-[16px] text-[#949494] font-[400] w-[100%] bg-[#ffffff] border border-[#B8B8B8] rounded-[6px] px-3"
                      >
                        <option value="">All</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Contract">Contract</option>
                        <option value="Contract to Hire">
                          Contract to Hire
                        </option>
                        <option value="Right to Hire">Right to Hire</option>
                      </select>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                      <label
                        for=""
                        className="mb-2 block font-sans text-[18px] font-[600] text-[#2B2B2D] tracking-[-0.4px]"
                      >
                        Locations
                      </label>
                      <input
                        onChange={async (e) => {
                          await setCity(e.target.value.toUpperCase());
                          await Filter(
                            e.target.value.toUpperCase(),
                            title,
                            work,
                            sortDate
                          );
                        }}
                        placeholder="All Locations"
                        name=""
                        id=""
                        className="focus:outline-none h-[46px] placeholder:text-[#949494] focus:border-[#B8B8B8] focus:ring-[0px] font-sans text-[16px] text-[#949494] font-[400] w-[100%] bg-[#ffffff] border border-[#B8B8B8] rounded-[6px] px-3"
                      />
                    </div>
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                      <label
                        for=""
                        className="mb-2 block font-sans text-[18px] font-[600] text-[#2B2B2D] tracking-[-0.4px]"
                      >
                        Sort by
                      </label>
                      <select
                        name=""
                        id=""
                        onChange={(e) => {
                          setSortDate(e.target.value);
                          Filter(city, title, work, e.target.value);
                        }}
                        className="focus:outline-none focus:border-[#B8B8B8] focus:ring-[0px] font-sans text-[16px] text-[#949494] font-[400] w-[100%] bg-[#ffffff] border border-[#B8B8B8] rounded-[6px] px-3"
                      >
                        <option value="NEWEST">Date (Newest)</option>
                        <option value="OLDEST">Date (Oldest)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!loading && country != "ID" && country != "IN" ? (
            <div className="py-16">
              <div className="container mx-auto xl:px-32 px-4 ">
                <div className="grid grid-cols-12 gap-0">
                  <div className="col-span-12 mb-8">
                    <h2 className="font-bold text-black text-4xl text-center">
                      {/* {jobs && jobs.length} */}
                      {filterJobs?.length > 0
                        ? filterJobs?.length
                        : section?.length}
                      jobs available
                    </h2>
                  </div>
                </div>
                {jobs &&
                  jobs?.length > 0 &&
                  jobs?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="border border-[#B5B5B5] bg-[#ffffff] rounded-[10px] py-8 px-6 mb-8 cursor-pointer"
                        onClick={async () => {
                          await dispatch({
                            type: ACTION_TYPE.JOB_DETAIL,
                            payload: {
                              jobId: item,
                            },
                          });
                          push({
                            pathname: "/resources/career/job-detail",
                            query: `job=${item?.title?._cdata.replace(
                              /\s/g,
                              "-"
                            )}-${item?.jobdiva_no?._text}`,
                          });
                        }}
                      >
                        <div className="grid grid-cols-12 gap-0">
                          <div className="lg:col-span-8 col-span-12 lg:mb-0 mb-4">
                            <h6 className="font-sans text-[24px] font-[600] text-[#1D1D1D] mb-3">
                              {item?.title?._cdata} – J{item?.jobdiva_no?._text}
                            </h6>
                            <p className="inline-block text-[#0C2139] text-[16px] font-sans font-[600] border-l-[1px]  px-3 leading-[21px]">
                              Required Experience:
                              <span className="font-sans text-[16px] font-[400] text-[#353535]">
                                {item?.experience_level?._text}
                              </span>
                            </p>
                            <ul className="mt-3">
                              <li className="inline-block text-[#0C2139] text-[16px] font-sans font-[600] px-2 leading-[21px]">
                                <a href="">
                                  {item?.city?._text +
                                    " ," +
                                    item?.state?._text +
                                    " ," +
                                    item?.countryid?._text}
                                </a>
                              </li>
                              <li className="inline-block text-[#0C2139] text-[16px] font-sans font-[600] border-l-[1px] border-l-[#0C2139] px-3 leading-[21px]">
                                Date of Posting:
                                {moment(item?.issuedate?._text).format(
                                  "MM-DD-YYYY"
                                )}
                              </li>
                              <li className="inline-block text-[#0C2139] text-[16px] font-sans font-[400] py-1 px-4 border border-[#62207E] rounded-[40px] ">
                                <a href="" className="">
                                  {item?.positiontype?._text}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="lg:col-span-4 col-span-12 lg:text-right text-left">
                            <button
                              onClick={(event) => {
                                event.stopPropagation();
                                setModalFowardFriend(true);
                              }}
                              className="border border-[#B5B5B5] font-sans text-[12px] font-[600] text-[#1D1D1D] inline-flex items-center justify-center px-4 py-2 mr-2 mb-2"
                            >
                              Forward to a Friend
                              <img
                                src="/img/Icon.svg"
                                alt="icon"
                                className="ml-2"
                              />
                            </button>
                            <button
                              onClick={(event) => {
                                event.stopPropagation();
                                setModalSuscribeNotifications(true);
                              }}
                              className="bg-[#0050D5] font-sans text-[12px] font-[600] text-[#ffffff] rounded-[4px] px-4 py-2"
                            >
                              APPLY NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                {jobs && jobs.length > 0 && (
                  <PaginationComponent
                    paginationOptions={paginationOptions}
                    onPagination={setPaginationOptions}
                  />
                )}
              </div>
            </div>
          ) : !loading && (country === "ID" || country === "IN") ? (
            <div className="">
              <div className="container mx-auto xl:px-32 px-4 ">
                <div className="border border-[#B5B5B5] flex items-center content-center bg-[#ffffff] rounded-[10px] min-h-[393px] py-8 px-6 mb-8">
                  <iframe
                    src="https://hr-1.in/Home/go?path=5b4d7a"
                    width="1400"
                    height="800"
                    data-mce-fragment="1"
                  ></iframe>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center mt-4 mb-4">
              <Spinner
                size={"xl"}
                aria-label="Center-aligned spinner example"
              />
            </div>
          )}
        </>
      ) : (
        <div className="border border-[#B5B5B5] flex items-center content-center bg-[#ffffff] rounded-[10px] min-h-[393px] py-8 px-6 mb-8">
          <p className="font-sans  font-semibold text-[40px] space-y-auto mx-auto text-center text-[#C0C0C0]">
            CURRENTLY NO VACANCIES
          </p>
        </div>
      )}
      {modalFowardFriend ? (
        <ModalForwadFriends
          isOpen={modalFowardFriend}
          setIsOpen={setModalFowardFriend}
        />
      ) : (
        <></>
      )}
      {modalSuscribeNotifications ? (
        <ModalSuscribeNotifications
          isOpen={modalSuscribeNotifications}
          isApplyJob={true}
          setIsOpen={setModalSuscribeNotifications}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
