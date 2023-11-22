import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";

import CloudinaryImage from "../common/CloudinaryImage";
export default function CeoCard({ section }) {
  return (
    <div
      className={`bg-cover bg-top bg-no-repeat pb-[30px] md:py-24 lg:py-32 change-background ceoBg`}
    >
      <Container className="flex justify-end">
        <div className="w-2/2 md:w-1/2 rounded text-white">
          <div
            className="md:text-[20px] text-[14px] leading-loose md:mb-6 mb-3"
            dangerouslySetInnerHTML={{
              __html: section?.body ? section?.body : section?.text,
            }}
          />
          <div>
            <h4 className="font-sans md:text-[28px] text-[20px]">
              {section?.name}
            </h4>
            <h5 className="font-sans md:text-[22px] text-[16px]">
              {section?.designation}
            </h5>
          </div>
        </div>
      </Container>
    </div>
  );
}
