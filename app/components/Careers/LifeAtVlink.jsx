import Container from "../common/Container";

export default function LifeAtVlink({ section }) {
  return (
    <div className="">
      <div className="bg-[rgba(0,_80,_213,_0.1)] md:py-16 py-[30px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-0 md:mb-[55px] mb-[25px]">
            <div className="md:col-span-12 col-span-12 text-center border-r-[1px] border-r-[#ffffff]">
              <h5 className="font-sans xl:text-4xl lg:text-[32px] text-[22px] font-[700] text-[#222222] text-center">
                Life at <span className="text-[#62207E]">VLink</span>
              </h5>
            </div>
          </div>
          <div className="pr-2  bg-white grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <img
                src="https://res.cloudinary.com/dwac0ziol/image/upload/v1691389287/vlink_1_775132fea5.svg"
                alt="image-1"
                className="rotate-180  mt-0 mb-[4%] h-[49%] object-cover w-[100%]"
              />
              <img
                src="https://res.cloudinary.com/dwac0ziol/image/upload/v1691389069/vlink_2_6d346f7a9e.svg"
                alt="image-2"
                className="rotate-180 h-[49%] object-cover w-[100%]"
              />
            </div>
            <div className="col-span-4">
              <img
                src="https://res.cloudinary.com/dwac0ziol/image/upload/v1691389078/vlink_3_a1d8ddc618.svg"
                alt="image-3"
                className="rotate-180 mt-0 mb-[4%] h-[49%] object-cover w-[100%]"
              />
              <img
                src="https://res.cloudinary.com/dwac0ziol/image/upload/v1691389074/vlink_4_8ac7557e2f.svg"
                alt="image-4"
                className="rotate-180 h-[49%] object-cover w-[100%]"
              />
            </div>
            <div className="col-span-4">
              <img
                src="https://res.cloudinary.com/dwac0ziol/image/upload/v1691460698/vlink_5_2408a5ad14.jpg"
                alt="image-5"
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
