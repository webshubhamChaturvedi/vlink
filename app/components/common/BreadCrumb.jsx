import Link from "next/link";

const Breadcrumb = ({ items }) => {
  return (
    <ol className="inline-flex flex-wrap items-center space-x-1 print-delete">
      {items?.map((item, index) =>
        item?.link && item?.link != null ? (
          <li className="inline-flex items-center" key={index}>
            <Link
              href={item?.link}
              className="inline-flex items-center md:text-[14px] text-[13px] font-sans font-medium"
            >
              {item?.label}
            </Link>
            {index !== items?.length - 1 && (
              <p className="inline-flex items-center md:text-[14px] text-[13px] font-sans font-medium  ml-1">
                /
              </p>
            )}
          </li>
        ) : (
          <li aria-current="page" key={index} className="!ml-0">
            <div className="flex items-center">
              <span className="md:text-[14px] text-[13px] font-sans font-medium ">
                {item?.label}
              </span>
            </div>
          </li>
        )
      )}
    </ol>
  );
};

export default Breadcrumb;
