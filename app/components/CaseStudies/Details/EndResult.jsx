import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import LeftIconList from "app/components/common/LeftIconList";
export default function EndResult({ section }) {
  return (
    <div>
      <Container className="">
        <div className="flex flex-col md:flex-row md:justify-around items-center md:py-[55px] py-[30px]">
          <div className="succesful-team md:basis-full ">
            <h4 className="font-bold text-secondary lg:text-4xl md:text-[32px] text-[22px] text-center mb-3">
              {section?.h1_black}
              <span className="font-bold text-company">
                {section?.h1_purple}
              </span>
            </h4>
            <LeftIconList
              extraClassName="items-center md:p-3 pb-2"
              displayGrid={true}
              gridCols={1}
              list={section?.section5_detail}
              customIcon={"check-secondary-icon.svg"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
