import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useEffect, useState, useRef, useDeferredValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import ACTION_TYPE from "store/action-type";

export default function SearchBar({ blogref, add }) {
  const [data, setData] = useState("");
  const [newdataName, setDataName] = useState("");
  const dispatch = useDispatch();
  const blogCategories = useSelector((state) => state?.blogCategories);
  const fixedform = useRef("");

  useEffect(() => {
    if (!Object.keys(blogCategories)?.length)
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.BLOG_CATEGORIES,
        callback: (res) =>
          dispatch({
            type: ACTION_TYPE.BLOG_CATEGORIES,
            payload: {
              ...res?.data?.data,
            },
          }),
      });
    window.addEventListener("scroll", handleScrolldown);
  }, []);

  const handleScrolldown = () => {
    if (window.scrollY <= 200) {
      fixedform.current.classList.value =
        "space-y-6 p-6 bg-[#fff] z-[100] w-[100%] top-[0]";
    } else {
      fixedform.current.classList.value =
        "lg:fixed space-y-6 p-6 bg-[#fff] z-[100] w-[100%] top-[0]";
    }
  };

  const scrollBottom = () => {
    blogref.current?.scrollIntoView({ behavior: "smooth" });
    fixedform.current.classList.value =
      "fixed space-y-6 p-6 bg-[#fff] z-[100] w-[100%] top-[0]";
  };
  const handleChange = (e) => {
    blogref.current?.scrollIntoView({ behavior: "smooth" });
    fixedform.current.classList.value =
      "fixed space-y-6 p-6 bg-[#fff] z-[100] w-[100%] top-[0]";
    // setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    dispatch({
      type: ACTION_TYPE.SELECTED_BLOG_CATEGORY,
      payload: { [e.target.name]: e.target.value },
    });
  };
  const handleChangeName = (e) => {
    blogref.current?.scrollIntoView({ behavior: "smooth" });
    fixedform.current.classList.value =
      "fixed space-y-6 p-6 bg-[#fff] z-[100] w-[100%] top-[0]";
    setDataName((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    dispatch({
      type: ACTION_TYPE.SELECTED_BLOG_NAME,
      payload: { ...newdataName },
    });
  };

  // const select = () => {
  //   dispatch({
  //     type: ACTION_TYPE.SELECTED_BLOG_CATEGORY,
  //     payload: { ...data },
  //   });
  // };
  return (
    <form
      className="space-y-6 p-6  bg-[#fff]"
      id="form_id"
      ref={fixedform}
    >
      <div className="md:flex md:justify-center space-y-4 md:space-y-0 md:space-x-4 ">
        <div className="w-full md:w-1/5">
          <input
            className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
            placeholder="Name"
            name="name"
            onChange={handleChangeName}
            onFocus={scrollBottom}
            value={newdataName?.name}
          />
        </div>
        <div className="w-full md:w-1/5">
          <select
            name="category"
            className="bg-white"
            onChange={handleChange}
            // value={data?.category}
          >
            <option value="all">All Category</option>
            {Object?.keys(blogCategories)?.length &&
              Object?.keys(blogCategories)?.map((data, key) => (
                <>
                  <option value={blogCategories[data]?.attributes?.slug} key={key}>
                    {blogCategories[data]?.attributes?.title}
                  </option>
                </>
              ))}
          </select>
        </div>
        <div className="w-full md:w-1/5">
          <select
            name="sortBy"
            className="bg-white"
            onChange={handleChange}
            value={data?.sortBy}
          >
            <option value="none">Sort by</option>
            <option value="1">Oldest</option>
            <option value="2">Newest</option>
          </select>
        </div>
        <div className="w-full md:w-1/5">
          <button
            className="w-full bg-primary text-white px-20 pb-2 pt-3 rounded flex space-x-6 justify-center items-center"
            // onClick={select}
            type="button"
          >
            <span style={{ minWidth: "max-content" }}>Search Blog</span>
          </button>
        </div>
      </div>
    </form>
  );
}
