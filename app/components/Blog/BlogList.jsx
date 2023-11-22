import { useEffect, useState } from "react";
// import Container from "app/components/common/Container";
import Pagination from "app/components/common/Pagination";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import Skeleton from "react-loading-skeleton";
import CONSTANTS from "app/scripts/constants";
import BlogCards from "../common/BlogCards";
import { useSelector } from "react-redux";
export default function BlogList({ section, sidebar }) {
  const [blogsData, setBlogsData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [optionsPagination, setOptionsPagination] = useState({
    page: CONSTANTS.PAGINATION_INITIAL_PAGE,
    limit: CONSTANTS.PAGINATION_PAGE_SIZE,
    totalResults: 0,
  });
  const { page, limit, total } = optionsPagination;
  const selectedBlog = useSelector((state) => state?.selectedBlog);
  const selectedBlogName = useSelector((state) => state?.selectedBlogName);
  const loadBlogs = async () => {
    setLoading(true);
    setBlogsData([]);
    let url = `${API_ENDPOINTS.BLOGS}&pagination[page]=${
      selectedBlog?.name ? 0 : page
    }&pagination[pageSize]=${limit}`;
    if (selectedBlog?.category && selectedBlog?.category !== "all")
      url = `${url}&filters\[blog_category\][slug][$contains]=${selectedBlog?.category}`;
    if (selectedBlog?.sortBy && selectedBlog?.sortBy === "1")
      url = `${url}&sort[0]=section.post_date%3Aasc`;
    if (selectedBlog?.sortBy && selectedBlog?.sortBy === "2")
      url = `${url}&sort[0]=section.post_date%3Adesc`;
    if (!selectedBlog?.sortBy) url = `${url}&sort[0]=section.post_date%3Adesc`;
    // if (selectedBlog?.name)
    //   url = `${url}&filters[h1_black][$contains]=${selectedBlog2?.name}`;
    await REQUEST({
      method: "GET",
      url: url,

      callback: ({ data: { data, meta } }) => {
        if (!meta) {
          alert("Something went wrong");
          return;
        }
        setTimeout(() => {
          setBlogsData(data);
          setOptionsPagination({
            ...optionsPagination,
            totalResults: meta?.pagination?.total,
          });
          setLoading(false);
        }, 0);
      },
    });
  };

  const loadBlogsName = async () => {
    setLoading(true);
    setBlogsData([]);
    let url = `${API_ENDPOINTS.BLOGS}&pagination[page]=${
      selectedBlogName?.name ? 0 : page
    }&pagination[pageSize]=${limit}&sort[0]=section.post_date%3Adesc`;
    if (selectedBlogName?.name)
      url = `${url}&filters[h1_black][$contains]=${selectedBlogName?.name}`;
    await REQUEST({
      method: "GET",
      url: url,

      callback: ({ data: { data, meta } }) => {
        if (!meta) {
          alert("Something went wrong");
          return;
        }
        setTimeout(() => {
          setBlogsData(data);
          setOptionsPagination({
            ...optionsPagination,
            totalResults: meta?.pagination?.total,
          });
          setLoading(false);
        }, 0);
      },
    });
  };
  useEffect(() => {
    loadBlogsName();
  }, [page, limit, total, selectedBlogName]);
  useEffect(() => {
    loadBlogs();
  }, [page, limit, total, selectedBlog]);

  return (
    <div className="lg:col-span-8 col-span-12">
      <div className="grid xl:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
        {blogsData.length > 0 ? (
          blogsData?.map((item, i) => (
            <BlogCards
              shadow={false}
              rounded={false}
              bgWhite={true}
              item={item}
              key={i}
              userIconSize={"sm"}
            />
          ))
        ) : (
          <>
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
          </>
        )}
      </div>
      {optionsPagination?.totalResults > CONSTANTS.PAGINATION_PAGE_SIZE && (
        <Pagination
          loading={loading}
          paginationOptions={optionsPagination}
          onPagination={setOptionsPagination}
          className="my-6"
        />
      )}
    </div>
  );
}
