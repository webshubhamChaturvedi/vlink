const GridService = ({ item, cols = 2 }) => {
  return (
    <div className={`grid grid-cols-${cols} gap-x-7`}>
      {item &&
        item.map((service, index) => {
          return (
            <div
              key={index}
              className="inline-flex pr-3 pb-3 font-sans text-[14px] font-[600]"
            >
              <img
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  service?.image?.data?.attributes?.url
                }
                alt={service?.image?.data?.attributes?.alternativeText || service?.image?.data?.attributes?.name}
                className="mr-2 w-[30px] h-[24px]"
              />
              {service?.title}
            </div>
          );
        })}
    </div>
  );
};

export default GridService;
