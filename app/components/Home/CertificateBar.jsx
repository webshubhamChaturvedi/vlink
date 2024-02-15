import Container from "app/components/common/Container";
import Image from "next/image";
import CloudinaryImage from "../common/CloudinaryImage";

export default function CertificateBar({ section, isTrusted = false, id }) {
  let certificates = isTrusted
    ? section?.Trusted_by_Startups?.logo?.data?.map((certificate, key) => ({
        height: certificate.attributes.height,
        width: certificate.attributes.width,
        src: certificate.attributes.url,
        alt: certificate.attributes.alternativeText,
      }))
    : section?.images?.data?.map((certificate, key) => ({
        height: certificate.attributes.height,
        width: certificate.attributes.width,
        src: certificate.attributes.url,
        alt: certificate.attributes.alternativeText,
      }));

  const h = section?.h.replace("  ", "\n");
  const desiredAspectRatio = 50 / 43;

  // Calculate the height based on the width and aspect ratio
  const width = 100; // Set the desired width
  const height = width / desiredAspectRatio;
  return (
    <div className="bg-dark" id={id}>
      <Container className="md:py-2 py-[15px]">
        <div className="flex lg:justify-between items-center lg:flex-nowrap">
          <div
            key={"-1"}
            style={{ maxWidth: "320px" }}
            className="md:flex md:items-center md:mr-8"
          >
            <h4 className="text-white font-[600] leading-[26px] text-[18px] md:block hidden mr-2">
              {h}
            </h4>
            {/* {isTrusted ? (
              <div></div>
            ) : ( */}
            <Image
              src={`https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_100/v1691474215/award_38097a10e5.png`}
              alt="Picture of our Logo"
              width={width}
              height={height}
              loading="lazy"
            />
            {/* )} */}
          </div>
          <marquee
            direction="left"
            className="marquee-text"
            scrollamount="5"
            loop="number"
          >
            {certificates?.map((item, i) => (
              <div
                className={`sm:my-3 my-0 md:mx-5 mx-3 ${
                  i > 3 ? `hidden md:block` : ""
                }`}
                key={i}
              >
                <CloudinaryImage
                  backendImgUrl={item.src}
                  className="sm:max-w-[140px] max-w-[100px] sm:max-h-[50px] max-h-[40px]"
                  alt={item.alt}
                  type={"icon"}
                />
              </div>
            ))}
          </marquee>
        </div>
      </Container>
    </div>
  );
}
