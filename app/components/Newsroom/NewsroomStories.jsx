import NewsroomCard from "./NewsroomCard";

export default function NewsroomStories({ section_title, section_content }) {
  return (
    <section className="md:pb-20 pb-[30px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <h5 className="xl:text-4xl lg:text-[32px] text-[22px] text-company font-bold md:leading-10  md:mb-[55px] mb-[25px] md:col-span-2 lg:col-span-2">
            {section_title?.h1_purple}
            <span className="text-[#030303]">{section_title?.h1_black}</span>
          </h5>
          {/* <div className="flex  md-[10px] items-center md:justify-end w-full max-w-[500px] mb-7">
            <span className="font-semibold text-lg leading-8 text-[#030303] mr-5 min-w-[80px]">
              Sort by
            </span>
            <div className="min-w-[200px]">
            <Select className="border border-[#030303] text-[14px] rounded-[4px_!important] bg-[transparent_!important] outline-none">
              <option>Newest Post</option>
            </Select>
            </div>
          </div> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {section_content?.map((item, key) => (
            <NewsroomCard
              shadow={false}
              rounded={false}
              bgWhite={true}
              item={item}
              key={key}
              userIconSize={"sm"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
