import ArrowIcon from "app/components/icons/ArrowIcon";
import { useEffect, useState } from "react";

export default function Pagination({
  paginationOptions: { totalResults, page, limit },
  onPagination: setState,
  justify = "center",
  loading = false,
  className,
  ...props
}) {
  const [totalPages, setPages] = useState(0);

  useEffect(() => {
    if (totalResults === 0) return setPages(0);
    setPages(Math.ceil(totalResults / limit));
  }, [totalResults, limit]);

  const sizes = ["", "d-none d-sm-block", "d-none d-sm-block"];

  const calcPages = () => {
    let buttons = [];
    let size = totalPages > 1 ? 2 : 1;
    size = totalPages >= 2 ? 2 : 1;

    if (totalPages <= 5) {
      for (let index = 1; index <= totalPages; index++) {
        buttons.push(
          <li
            key={`page_${index}`}
            onClick={() => pageAtIndex(index)}
            className="mr-3 mt-3 3"
          >
            <a
              disabled={page === index}
              aria-current={page === index ? "page" : undefined}
              className={`pagination-link ${page === index ? "active" : ""}`}
            >
              {loading && page === index ? "" : index}
            </a>
          </li>
        );
      }
    } else {
      const firstPage = Math.max(1, page - 2);
      const lastPage = Math.min(totalPages, page + 2);

      if (firstPage > 1) {
        buttons.push(
          <li
            key="page_1"
            onClick={() => pageAtIndex(1)}
            className="mr-3 mt-3 3"
          >
            <a
              disabled={page === 1}
              aria-current={page === 1 ? "page" : undefined}
              className={`pagination-link ${page === 1 ? "active" : ""}`}
            >
              {loading && page === 1 ? "" : 1}
            </a>
          </li>
        );

        if (firstPage > 2) {
          buttons.push(
            <li key="page_ellipsis_1" className="ml-3 mr-3 mt-3 3">
              <a className="pagination-link-dot">......</a>
            </li>
          );
        }
      }

      for (let index = firstPage; index <= lastPage; index++) {
        buttons.push(
          <li
            key={`page_${index}`}
            onClick={() => pageAtIndex(index)}
            className="mr-3 mt-3 3"
          >
            <a
              disabled={page === index}
              aria-current={page === index ? "page" : undefined}
              className={`pagination-link ${page === index ? "active" : ""}`}
            >
              {loading && page === index ? "" : index}
            </a>
          </li>
        );
      }

      if (lastPage < totalPages) {
        if (lastPage < totalPages - 1) {
          buttons.push(
            <li key="page_ellipsis_2" className="ml-3 mr-3 mt-3 3">
              <a className="pagination-link-dot">......</a>
            </li>
          );
        }

        buttons.push(
          <li
            key={`page_${totalPages}`}
            onClick={() => pageAtIndex(totalPages)}
            className="mr-3 mt-3 3"
          >
            <a
              disabled={page === totalPages}
              aria-current={page === totalPages ? "page" : undefined}
              className={`pagination-link ${
                page === totalPages ? "active" : ""
              }`}
            >
              {loading && page === totalPages ? "" : totalPages}
            </a>
          </li>
        );
      }
    }

    return buttons;
  };

  const pageLinks = calcPages();

  const pageAtIndex = (index) =>
    setState((prev) => {
      return { ...prev, page: index };
    });

  const backPage = () => {
    if (page > 1) {
      setState((prev) => {
        return { ...prev, page: page - 1 };
      });
    } else {
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setState((prev) => {
        return { ...prev, page: page + 1 };
      });
    } else {
    }
  };

  return (
    <nav
      aria-label="Page navigation example"
      className={`pagination ${className} `}
      {...props}
    >
      <ul
        className={`flex flex-wrap ${
          {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly",
          }[justify]
        } items-center`}
      >
        <li className="ml-3 mr-3 mt-3 1">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              backPage();
            }}
            className="pagination-link"
          >
            {/* <ArrowIcon width={14} height={24} className="rotate-180" /> */}
            PREV
          </button>
        </li>
        {pageLinks}
        <li className="ml-3 mr-3 mt-3 1">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              nextPage();
            }}
            className="pagination-link"
          >
            {/* <ArrowIcon width={14} height={24} />  */}
            NEXT
          </button>
        </li>
      </ul>
    </nav>
  );
}
