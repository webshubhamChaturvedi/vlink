import NewsroomCard from "./NewsroomCard";

export default function NewsroomStories({ section_title, section_content }) {
  return (
    <section className="md:pb-20 pb-[30px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <h5 className="xl:text-4xl lg:text-[32px] text-[22px] text-company font-bold md:leading-10  md:mb-[55px] mb-[25px] md:col-span-2 lg:col-span-2">
            {section_title?.h1_purple}
            <span className="text-[#030303] ml-1">
              {section_title?.h1_black}
            </span>
          </h5>
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
