import Image from "next/image";
import Link from "next/link";
import userAnonimus from "./../../../public/icons/users-anonimus-icon.png";
import CloudinaryImage from "../common/CloudinaryImage";
const AvatarSecction = ({ data, classContainer, isAbout = false }) => {
  const getLinkedInLink = (item) => {
    let link = "#";
    if (item?.linkedin_link?.length > 0) {
      link = item?.linkedin_link;
    } else if (item?.name?.includes("Nitin Nijhawan")) {
      link = "https://www.linkedin.com/in/nijhawannitin";
    }
    return link;
  };

  return (
    <div
      className={
        "sm:flex items-center  mt-1 block mb-[10px_!important] " +
        classContainer
      }
    >
      <div className="flex items-center">
        {data?.img ? (
          <CloudinaryImage
            backendImgUrl={data?.img}
            className="rounded-full md:w-[60px] md:h-[60px] w-16  h-13"
            alt={"LinkedIn"}
            type="icon"
          />
        ) : (
          <Image
            src="https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_130/users_anonimus_icon_73a97d43_4b0b9e2d22.png"
            alt="icon"
            className="rounded-full w-12  h-12"
            width={12}
            height={12}
          />
        )}

        <div className="sm:ml-3 ml-1 sm:mr-2 md:my-2 md:py-0 flex-1">
          <div className="text-[#747272] text-[14px] font-sans">
            About The Author
          </div>
          <div className="authername font-[600] text-[16px] flex leading-[28px]">
            {data.name}
            {isAbout && (
              <Link href={`${getLinkedInLink(data)}`} target="_blank">
                <span className="hidden">LinkedIn</span>
                <Image
                  src={data.referentIcon}
                  alt="icon"
                  className="ml-2 md:w-[15px] md:h-[15px] w-[15px] h-[15px]"
                  width={25}
                  height={15}
                />
              </Link>
            )}
          </div>
          <h6 className="text-sm text-[#7F7D7D]">{data.subtitle}</h6>
        </div>
      </div>
    </div>
  );
};

export default AvatarSecction;
