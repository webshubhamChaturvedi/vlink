import CloudinaryImage from "../common/CloudinaryImage";

const PartneringCard = ({ item }) => {
  return (
    <div className="bg-[#fff] px-7 py-7 drop-shadow-[0px_0px_40px_rgba(0,80,213,0.13)] rounded-[10px]">
      <div className="flex items-center mb-5">
        {/* <img
          src={
            process.env.NEXT_PUBLIC_API_URL + item?.image?.data?.attributes?.url
          }
          alt={
            item?.image?.data?.attributes?.alternativeText ||
            item?.image?.data?.attributes?.name
          }
          className="inline mr-6"
        /> */}
        <CloudinaryImage
          backendImgUrl={item?.image?.data?.attributes?.url}
          alt={item?.image?.data?.attributes?.alternativeText}
          className="inline mr-6"
        />
        <h5 className="text-[22px] font-[600] text-[#62207E]">{item?.title}</h5>
      </div>
      <p className="font-[400] text-[16px] text-[#353535]">{item?.p}</p>
    </div>
  );
};

export default PartneringCard;
