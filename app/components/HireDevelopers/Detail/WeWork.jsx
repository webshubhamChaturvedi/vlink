import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import LeftIconList from "../../common/LeftIconList";
import { createMarkup } from "app/scripts/utils";
import CallIcon from "../../icons/CallIcon";
export default function WeWork({ section }) {
  return (
    <Container className="py-16 ">
      <div className="flex flex-col md:flex-row md:justify-around items-center py-10 bg-[url('/img/dot-circle2.svg')] bg-[length:250px_250px] bg-[left_80px_top_0rem] bg-no-repeat">
        <div className="succesful-team md:basis-1/2 ">
          <h1 className="text-4xl font-bold text-left">
            {section?.title}
          </h1>
          <div
            className=" text-left p-4"
            dangerouslySetInnerHTML={createMarkup(section?.body)}
          ></div>
          {/* <LeftIconList
          extraClassName="items-center md:p-3"
          displayGrid={true}
          gridCols={2}
          list={section?.our_developer_points}
          customIcon={"purple-dot-icon.svg"}
        /> */}
          <div className="flex space-x-3 justify-between items-center">
            {/* <p className={`text-[#001231] md:text-lg lg:text-lg  text-left `}>
              {section?.p}
            </p>
            <button className="bg-primary  text-white px-3 text-left flex justify-between items-center">
              <CallIcon />
              <span className="md:text-xs ml-2 whitespace-nowrap">
                {section?.link_btn}
              </span>
            </button> */}
          </div>
        </div>
        <div className="relative md:basis-1/3 h-fit">
          <div className="image-container">
            {section?.image?.data[0]?.attributes?.url && (
              <img
                src={
                  apiEndpoint(section?.image?.data[0]?.attributes?.url) ?? "/"
                }
                fill
                sizes="100%"
                alt={section?.image?.data[0]?.attributes?.alternativeText || section?.image?.data[0]?.attributes?.name}
                className={`relative z-20 image !w-full`}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
