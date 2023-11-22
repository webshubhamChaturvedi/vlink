import { DateTime } from "luxon";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CloudinaryImage from "../common/CloudinaryImage";

export default function BlogImage({
  date,
  image_url = "",
  rounded,
  showDate = false,
  height = "100%",
  width = "100%",
  dataAlt,
  alternativeText = "",
}) {
  const { asPath } = useRouter();

  const luxonDate = DateTime.fromJSDate(new Date(date));

  let imgURL = asPath === `/blog/`;
  let homeimgURL = asPath === `/`;
  let industriesimgURL = asPath === `/industries/`;
  return (
    <>
      <div className="w-full image-container relative">
        {imgURL ? (
          <div className="lg:h-[220px] overflow-hidden blog-img">
            {image_url?.length === 0 ? (
              <Skeleton height={height} width={width} style={{ zIndex: 0 }} />
            ) : (
              <>
                <CloudinaryImage
                  backendImgUrl={image_url}
                  className="w-[100%] h-[100%] transition-custom9 group-hover:scale-110 rounded-[10px]"
                  alt={alternativeText || dataAlt}
                  type="smallimg"
                />
              </>
            )}
          </div>
        ) : homeimgURL ? (
          <div className="md:h-[250px] overflow-hidden">
            <>
              <CloudinaryImage
                backendImgUrl={image_url}
                className="w-[100%] h-auto  group-hover:scale-110"
                width={100}
                alt={alternativeText || dataAlt}
                type="smallimg"
              />
            </>
          </div>
        ) : industriesimgURL ? (
          <div className="h-[250px] overflow-hidden">
            <CloudinaryImage
              backendImgUrl={image_url}
              className="w-[100%] h-[100%]  group-hover:scale-110"
              alt={alternativeText || dataAlt}
              type="smallimg"
            />
          </div>
        ) : (
          <>
            <CloudinaryImage
              backendImgUrl={image_url}
              className="w-[100%] h-[100%] object-cover"
              alt={alternativeText || dataAlt}
              type="smallimg"
            />
          </>
        )}
      </div>

      {!showDate && (
        <div className="zIndex-5 bg-blogSquare relative -mt-10 mx-4 text-white w-16 flex items-center flex-col h-16 justify-center">
          {date && (
            <span className="text-[12px]">{luxonDate?.toFormat("MMM")}</span>
          )}

          {date && (
            <p className="text-white text-[14px]">
              {luxonDate?.day.toLocaleString({ minimumIntegerDigits: 2 })}
            </p>
          )}
          {date && (
            <span className="text-[12px]">{luxonDate?.toFormat("yyyy")}</span>
          )}
        </div>
      )}
    </>
  );
}
