import Head from "next/head";
import "styles/Home.module.css";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import OurStory from "app/components/AboutUs/OurStory";
import DiversityAndInclusion from "app/components/AboutUs/DiversityAndInclusion";
import OurMembers from "app/components/AboutUs/OurMembers";
import OurMission from "app/components/AboutUs/OurMission";
import { apiEndpoint, fetchAbout } from "app/scripts/fetch";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import VlinkApart from "app/components/AboutUs/VlinkApart";
import CertificateBar from "app/components/Home/CertificateBar";
import Testimonial from "app/components/Home/Testimonials";
import Journey from "app/components/AboutUs/Journey";
import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Metatag from "app/components/metaTag";
const GetInTouchModal = dynamic(() =>
  import("/app/components/common/GetInTouchModal")
);

export default function AboutUs({ aboutUsData, award, testimonials }) {
  const [modalScheduleCall, setModalScheduleCall] = useState(false);
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const header = [{ label: "Home", link: "/" }, { label: "About us" }];

  if (aboutUsData?.error) {
    return <div>{aboutUsData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>
          {aboutUsData?.seo?.metaTitle || aboutUsData?.title || `VLink`}
        </title>
        <meta
          name="description"
          content={
            aboutUsData?.seo?.metaDescription ||
            aboutUsData?.description ||
            "Vlink Description"
          }
        />

        <meta
          property="og:title"
          content={aboutUsData?.seo?.metaTitle || aboutUsData?.title || `Vlink`}
        />
        <meta
          property="og:description"
          content={
            aboutUsData?.seo?.metaDescription ||
            aboutUsData?.description ||
            "Vlink Description"
          }
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            aboutUsData?.seo?.metaImage?.data?.attributes?.url ||
              aboutUsData?.About_company?.image?.data?.attributes.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <OurStory section={aboutUsData?.About_company} />
      <CertificateBar section={Object.keys(award)?.length ? award : null} />
      <VlinkApart
        data={aboutUsData?.VLink_Apart}
        head="Team"
        justify="center"
        background="bg-vlink-apart"
        backgroundPosition="bg-vlink-apart-position"
      />

      <OurMission section={aboutUsData?.our_mission} />
      <div className="md:py-[55px] py-[30px]">
        <DiversityAndInclusion
          section={aboutUsData?.Diversity_Inclusion}
          clickPopup={setModalScheduleCall}
        />
      </div>
      <Testimonial
        section_title={testimonials?.Testimonial}
        section_content={testimonials?.testimonial_content}
      />
      <Journey
        data={aboutUsData?.Our_Journey}
        head="Team"
        justify="center"
        // background="bg-vlink-apart"
        backgroundPosition="bg-vlink-apart-position"
      />
      <OurMembers
        members={aboutUsData?.team}
        head="Team"
        justify="center"
        background="bg-our-team"
        backgroundPosition="bg-our-team-position"
      />
      <OurMembers
        members={aboutUsData?.advisors}
        head="Advisors"
        justify="start"
        background="bg-our-advisors"
      />
      <GetInTouchForm />

      {modalScheduleCall && (
        <GetInTouchModal
          // modalData={modalData?.attributes}
          isOpen={modalScheduleCall}
          setIsOpen={setModalScheduleCall}
        />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const [aboutUsData, award, testimonials] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.ABOUT_US_PAGE,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.AWARDS,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TESTIMONIALS,
    }),
  ]);
  const getMembers = (items) =>
    items?.map(
      ({
        name,
        designation,
        image,
        label,
        p,
        target,
        linkedin = "#",
        email = "#",
        href = "#",
        slug,
      }) => {
        return {
          name,
          designation,
          image: {
            src: apiEndpoint(image?.data?.attributes?.url) ?? "/",
            width: image?.data?.attributes?.width || 0,
            height: image?.data?.attributes?.height || 0,
            alt: image?.data?.attributes?.alternativeText || 0,
          },
          label,
          linkedin: linkedin ?? "#",
          email: email ?? "#",
          p,
          target,
          href: `/about-us/team/${slug}` ?? "#",
        };
      }
    );

  return {
    props: {
      aboutUsData: {
        ...aboutUsData?.data?.data?.attributes,
        team: aboutUsData?.data?.data?.attributes?.our_team?.team_member
          ? getMembers(
              aboutUsData?.data?.data?.attributes?.our_team?.team_member
            )
          : [],
        advisors: aboutUsData?.data?.data?.attributes?.our_advisors
          ?.advisors_details
          ? getMembers(
              aboutUsData?.data?.data?.attributes?.our_advisors
                ?.advisors_details
            )
          : [],
      },
      award: award?.data?.data?.attributes,
      testimonials: testimonials?.data?.data?.attributes,
    },
  };
}
