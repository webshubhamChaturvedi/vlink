import ArrowIcon from "app/components/icons/ArrowIcon";
import { useEffect, useState } from "react";

export default function PaginationIndia({
  paginationOptions: { totalResultts, pagee, limitt },
  onPagination: setState,
  justify = "center",
  loading = false,
  className,
  ...props
}) {
  const [totalPagess, setPagess] = useState(0);

  useEffect(() => {
    if (totalResultts === 0) return setPagess(0);
    setPagess(Math.ceil(totalResultts / limitt));
  }, [totalResultts, limitt]);

  const sizes = ["", "d-none d-sm-block", "d-none d-sm-block"];

  const calcPages = () => {
    let buttons = [];
    let size = totalPagess > 1 ? 2 : 1;
    size = totalPagess >= 2 ? 2 : 1;

    if (totalPagess <= 5) {
      for (let index = 1; index <= totalPagess; index++) {
        buttons.push(
          <li
            key={`page_${index}`}
            onClick={() => pageAtIndex(index)}
            className="mr-3 mt-3 3"
          >
            <a
              disabled={pagee === index}
              aria-current={pagee === index ? "page" : undefined}
              className={`pagination-link ${pagee === index ? "active" : ""}`}
            >
              {loading && pagee === index ? "" : index}
            </a>
          </li>
        );
      }
    } else {
      const firstPage = Math.max(1, pagee - 2);
      const lastPage = Math.min(totalPagess, pagee + 2);

      if (firstPage > 1) {
        buttons.push(
          <li
            key="page_1"
            onClick={() => pageAtIndex(1)}
            className="mr-3 mt-3 3"
          >
            <a
              disabled={pagee === 1}
              aria-current={pagee === 1 ? "page" : undefined}
              className={`pagination-link ${pagee === 1 ? "active" : ""}`}
            >
              {loading && pagee === 1 ? "" : 1}
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
              disabled={pagee === index}
              aria-current={pagee === index ? "page" : undefined}
              className={`pagination-link ${pagee === index ? "active" : ""}`}
            >
              {loading && pagee === index ? "" : index}
            </a>
          </li>
        );
      }

      if (lastPage < totalPagess) {
        if (lastPage < totalPagess - 1) {
          buttons.push(
            <li key="page_ellipsis_2" className="ml-3 mr-3 mt-3 3">
              <a className="pagination-link-dot">......</a>
            </li>
          );
        }

        buttons.push(
          <li
            key={`page_${totalPagess}`}
            onClick={() => pageAtIndex(totalPagess)}
            className="mr-3 mt-3 3"
          >
            <a
              disabled={pagee === totalPagess}
              aria-current={pagee === totalPagess ? "page" : undefined}
              className={`pagination-link ${
                pagee === totalPagess ? "active" : ""
              }`}
            >
              {loading && pagee === totalPagess ? "" : totalPagess}
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
      return { ...prev, pagee: index };
    });

  const backPage = () => {
    if (pagee > 1) {
      setState((prev) => {
        return { ...prev, pagee: pagee - 1 };
      });
    } else {
    }
  };

  const nextPage = () => {
    if (pagee < totalPagess) {
      setState((prev) => {
        return { ...prev, pagee: pagee + 1 };
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
