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

    buttons.push(
      <li key={`page_${1}`} onClick={() => pageAtIndex(1)} className="mr-3 mt-3 2">
        <a
          disabled={page == 1}
          aria-current={page == 1 ? "page" : undefined}
          className={`pagination-link ${page == 1 ? "active" : ""}`}
        >
          {loading && page == 1 ? (
            <svg
              aria-hidden="true"
              className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
          ) : (
            1
          )}
        </a>
      </li>
    );

    if (totalPages <= 3) {
      for (let index = 2; index <= totalPages; index++) {
        buttons.push(
          <li key={`page_${index}`} onClick={() => pageAtIndex(index)} className="mr-3 mt-3 3">
            <a
              disabled={page == index}
              aria-current={page == index ? "page" : undefined}
              className={`pagination-link ${page == index ? "active" : ""}`}
            >
              {loading && page == index ? ("") : (
                index
              )}
            </a>
          </li>
        );
      }
    }
    for (let index = 2; index <= totalPages-3; index++) {
      if(page == index){
        buttons.push(
          <li key={`page_${index}`} onClick={() => pageAtIndex(index)} className={`mr-3 mt-3 4 ${page == index ? "active" : ""}`}>
            <a
              disabled={page == index}
              aria-current={page == index ? "page" : undefined}
              className={`pagination-link ${page == index ? "active" : ""}`}
            >
              {loading && page == index ? (
                ""
              ) : (
                index
              )}
            </a>
          </li>
        );
      }
    }

    

    if (totalPages > 3) {
      buttons.push(
        <li className="ml-3 mr-3 mt-3 3">
          <a className="pagination-link-dot">
            .......
          </a>
        </li>
      );
      // buttons.push(<li key="ICON_MORE" className="page-item"><span className="page-link"><em className="icon ni ni-more-h" /></span></li>);
      // for (let index = 2; index <= totalPages; index++) {
        for (let index = (totalPages - 2); index <= totalPages; index++) {
          buttons.push(
            <li key={`page_${index}`} onClick={() => pageAtIndex(index)} className={`ml-3 mr-3 mt-3 4 ${page == index ? "active" : ""}`}>
              <a
                disabled={page == index}
                aria-current={page == index ? "page" : undefined}
                className={`pagination-link ${page == index ? "active" : ""}`}
              >
                {loading && page == index ? (
                  ""
                ) : (
                  index
                )}
              </a>
            </li>
          );
        }
      // }
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
          <button type="button" onClick={(e)=>{ e.preventDefault(); backPage(); }}  className="pagination-link">
            {/* <ArrowIcon width={14} height={24} className="rotate-180" /> */}
            PREV POST
          </button>
        </li>
        {pageLinks}
        <li className="ml-3 mr-3 mt-3 1">
          <button type='button' onClick={(e)=>{ e.preventDefault(); nextPage(); }} className="pagination-link">
            {/* <ArrowIcon width={14} height={24} />  */}
            NEXT POST
          </button>
        </li>
      </ul>
    </nav>
  );
}
