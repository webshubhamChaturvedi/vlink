import React, {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import Metatag from 'app/components/metaTag';
import HeroSection from 'app/components/common/HeroSection';
import AwardWinningBar from 'app/components/Home/AwardWinningBar';
import DotNetTechnology from 'app/components/common/DotNetTechnology';
import FrontendServices from 'app/components/HireDevelopers/FrontendServices';
import TestimonialData from 'app/components/warehouse/TestimonialData';
import Faq from 'app/components/Teams/Faq';
import GetInTouch from 'app/components/warehouse/GetInTouch';
import GetInTouchModal from 'app/components/common/GetInTouchModal';
import CollaborateFrontend from 'app/components/common/CollaborateFrontend';
import REQUEST from 'app/helpers/http.service';
import API_ENDPOINTS from 'app/helpers/apiEndpoint';
import HireProcess from 'app/components/common/HireProcess';
import EngagementModel from 'app/components/common/EngagementModel';
import TextImage from 'app/components/common/TextImage';
import { apiEndpoint } from 'app/scripts/fetch';
import WhyChooseExp from 'app/components/common/WhyChooseExp';
import Script from 'next/script';
import NewHeroSection from 'app/components/common/NewHeroSection';
import HireScheduleTalent from 'app/components/common/HireScheduleTalent';
import FreelanceTalent from 'app/components/HireDevelopers/FreelanceTalent';

export default function DotNet({ dotnet_dev, awards, testimonials, get_data }) {
    const [modalScheduleCall, setModalScheduleCall] = useState(false);
    const router = useRouter();
    const { asPath } = useRouter();
    const canonicalUrl = (
        `${process.env.NEXT_PUBLIC_BASE_URL}` +
        (router.asPath === "/" ? "" : router.asPath)
    ).split("?")[0];

    useEffect(() => {
        if (typeof document !== undefined) {
          const sidebarContentEl = document.querySelector("#some-id");
          const buttonnn = document.querySelectorAll(".buttonOpen");
          buttonnn.forEach((box) => {
            box.addEventListener("click", function () {
              sidebarContentEl.classList.add("mystyle");
            });
          });
          const removeButton1 = document.querySelectorAll(".buttonremove1");
          removeButton1.forEach((box) => {
            box.addEventListener("click", function () {
              sidebarContentEl.classList.remove("mystyle");
            });
          });
        }
      }, []);

    // if (dotnet_dev?.error) {
    //     return <div>{dotnet_dev?.error}</div>;
    // }
  return (
    <div>
        <Head>
            <title>
            {dotnet_dev?.Seo?.metaTitle ? dotnet_dev?.Seo?.metaTitle : `VLink`}
            </title>
            <meta
            name="description"
            content={dotnet_dev?.Seo?.metaDescription || "Vlink Description"}
            />

            <meta
            property="og:title"
            content={
                dotnet_dev?.Seo?.metaTitle ||
                dotnet_dev?.title ||
                `Vlink`
            }
            />
            <meta
            property="og:description"
            content={
                dotnet_dev?.Seo?.metaDescription ||
                dotnet_dev?.description ||
                "Vlink Description"
            }
            />
            <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
            />

            <Metatag
            content={apiEndpoint(
                dotnet_dev?.Seo?.metaImage?.data?.attributes?.url ||
                dotnet_dev?.section1?.image?.data?.attributes?.url
            )}
            />
            <link rel="canonical" href={canonicalUrl} />
        </Head>
        <NewHeroSection data={dotnet_dev?.HeroSection} setModalCall={setModalScheduleCall} />
        <AwardWinningBar section={awards} awardsDot={true} />
        <FreelanceTalent talent={dotnet_dev?.Customer} setModalCall={setModalScheduleCall} />
        <TextImage textimage={dotnet_dev?.withIn48} setModalCall={setModalScheduleCall} />
        <WhyChooseExp data={dotnet_dev?.dotNetServices} dotnetExp={true} setModalCall={setModalScheduleCall} />
        <TestimonialData testimonials={testimonials} isNewTestimonial={true} />
        <FrontendServices frontend={dotnet_dev?.BenifitsVlinkDeveloper} isDes={true} setModalCall={setModalScheduleCall} />
        {/* <Interested
            interested={dotnet_dev?.Interested}
            setModalCall={setModalScheduleCall}
        /> */}
        {/* <WarehousePlatform data={dotnet_dev?.CaseStudy} /> */}
        <HireProcess hiredev={dotnet_dev?.HireDeveloper} setModalCall={setModalScheduleCall} />
        <DotNetTechnology dottec={dotnet_dev?.Technologies} />
        <EngagementModel  hiremodel={dotnet_dev?.EngageModels} service={dotnet_dev?.ModelsService} />
        <CollaborateFrontend
            crm={dotnet_dev?.Collab}
            isCollaborateStaticData={true}
            isDotCol={true}
            isBG={true}
            setModalCall={setModalScheduleCall}
        />

        {/* <ServiceBackend whyvlink={dotnet_dev?.WhyVlink} isserback={true} />
        <WhyHireDevelopers whyvlink={dotnet_dev?.EngagementModel} setModalCall={setModalScheduleCall} /> */}
        
        {/* <DataResources resources={dotnet_dev?.MoreCaseStudy} isEduProduct={true} /> */}
        {dotnet_dev?.Faqs && (
            <Faq section={dotnet_dev?.Faqs} isFaq={true} forCSS={true} />
        )}
        <GetInTouch getintouch={get_data} isStaff={true} />

        {modalScheduleCall && (
            <HireScheduleTalent
            ButtonText={modalScheduleCall}
            setIsOpen={setModalScheduleCall}
            />
        )}
    </div>
  )
}

export async function getStaticProps() {
    const [dotnet_dev, awards, testimonials, get_data] = await Promise.all([
        REQUEST({
            method: "GET",
            url: API_ENDPOINTS.DOTNET_DEVELOPERS,
        }),
        REQUEST({
            method: "GET",
            url: API_ENDPOINTS.AWARDS,
        }),
        REQUEST({
            method: "GET",
            url: API_ENDPOINTS.TESTIMONIALS,
        }),
        REQUEST({
            method: "GET",
            url: API_ENDPOINTS.GETINTOUCH_DATA,
        }),
    ]);
    return {
      props: {
        dotnet_dev: dotnet_dev?.data?.data?.attributes,
        awards: awards?.data?.data?.attributes,
        testimonials: testimonials?.data?.data?.attributes,
      },
    };
  }