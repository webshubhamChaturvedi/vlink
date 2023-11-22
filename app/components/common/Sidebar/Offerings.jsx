import CustomSoftwareIcon from "app/components/icons/CustomSoftwareIcon";
import DesktopIcon from "app/components/icons/DesktopIcon";
import ItConsultingIcon from "app/components/icons/ItConsultingIcon";
import UserTieIcon from "app/components/icons/UserTieIcon";
import WorldIcon from "app/components/icons/WorldIcon";
import Image from "next/image";
import Link from "next/link";
import { apiEndpoint } from "app/scripts/fetch";
import { useRouter } from "next/router";
import CloudinaryImage from "../CloudinaryImage";

export default function Offerings({
  section,
  isIndustries = false,
  offering = [],
}) {
  const { asPath } = useRouter();
  const offerings = //!isIndustries?
    section
      ? section?.section2_details?.map(({ image, href, name }) => ({
          href: href ?? "#",
          icon: (
            <CloudinaryImage
              backendImgUrl={image?.data?.attributes?.url}
              className="mx-auto"
              alt={image?.data?.attributes?.alternativeText}
              type="icon"
            />
          ),
          label: name,
        }))
      : offering?.map(({ image, href, name }) => ({
          href: href ?? "#",
          icon: (
            <CloudinaryImage
              backendImgUrl={image?.data?.attributes?.url}
              className="mx-auto"
              alt={image?.data?.attributes?.alternativeText}
              type="icon"
            />
          ),
          label: name,
        }));
  return (
    <div className="">
      {offerings.map((item, key) => (
        <div key={key} className="mb-10">
          <Link
            href={item.href}
            className={`${
              asPath.includes(item?.href) ? "link-active" : ""
            } link`}
          >
            <div className="flex items-center">
              <div className="w-6">{item.icon}</div>
              <span className="ml-3">{item.label}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
