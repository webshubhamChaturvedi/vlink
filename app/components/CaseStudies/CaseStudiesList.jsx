import Container from "app/components/common/Container";
import Pagination from "app/components/common/Pagination";
import SuccessStoryCard from "app/components/common/SuccessStoryCard";
import { useEffect, useState } from "react";
import CONSTANTS from "app/scripts/constants";
import { apiEndpoint } from "app/scripts/fetch";
export default function CaseStudiesList({ section_title, list }) {
  const [lists, setList] = useState();
  const [loading, setLoading] = useState(true);
  const [optionsPagination, setOptionsPagination] = useState({
    page: CONSTANTS.PAGINATION_INITIAL_PAGE,
    limit: CONSTANTS.PAGINATION_PAGE_SIZE,
    totalResult: 0,
  });
  const { page, limit, total } = optionsPagination; 
  const loadCaseStudies = async () => {
    setLoading(true);
    setList([...list.slice((page - 1) * limit, page * limit)]);
    setOptionsPagination({
      ...optionsPagination,
      totalResults: list.length,
    });
    setLoading(false);
  };
  useEffect(() => {
    loadCaseStudies();
  }, [page, limit, total]);
  return (
    <Container className="">
      <div className="flex flex-wrap justify-between" id="moreCaseStudy">
        <div className="md:basis-1/1 space-y-3 lg:pb-[55px] pb-[35px] w-full text-center">
          <h4 className="xl:text-4xl lg:text-[32px] text-[22px] font-sans font-bold">
            More Case Studies
          </h4>
        </div>
        <div className="md:basis-1/2 flex md:flex-nowrap flex-wrap justify-end gap-3 w-full"></div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {lists &&
          lists?.map((item) => (
            <SuccessStoryCard
              item={item?.attributes?.section0?.lists[0]}
              slug={item?.attributes?.slug}
              key={item?.id}
              showDownload={true}
              Download_link={apiEndpoint(
                item?.attributes?.pdf?.data?.attributes?.url
              )}
            />
          ))}
      </div>
      <Pagination
        loading={loading}
        paginationOptions={optionsPagination}
        onPagination={setOptionsPagination}
        className="my-6"
        sectionId="moreCaseStudy"
      />
    </Container>
  );
}
