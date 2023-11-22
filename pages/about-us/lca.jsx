import Head from "next/head";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import { download } from "app/scripts/utils";
import SectionHeader from "app/components/common/SectionHeader";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import { apiEndpoint } from "app/scripts/fetch";
import Image from "next/image";
import { useRouter } from "next/router";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import ACTION_TYPE from "store/action-type";
import axios from "axios";
import Metatag from "app/components/metaTag";

export default function LcaPage({ ress }) {
  const header = [
    { label: "Home", link: "/" },
    { label: "About us", link: "/about-us" },
    { label: "Labor Condition Application" },
  ];
  const router = useRouter();
  const { asPath } = useRouter();
  // const { lcaPageData } = JSON.parse(ress);
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const [lca, setLca] = useState({});

  const getLca = async () => {
    try {
      const data = await REQUEST({
        method: "GET",
        url: API_ENDPOINTS.LCA_PAGE,
      });
      setLca(data?.data?.data?.attributes);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getLca();
  }, []);

  const sortTedTableData = (array) => {
    const newArray = array?.sort(
      (a, b) =>
        DateTime?.fromJSDate(new Date(b?.date))?.ts -
        DateTime?.fromJSDate(new Date(a?.date))?.ts
    );
    return newArray;
  };

  // this function will  remove 30 days old data
  const removeOldData = (arr) => {
    const daysAgo = new Date();
    daysAgo?.setDate(daysAgo.getDate() - 30);
    const newArray = arr?.filter((obj) => {
      const objDate = new Date(obj.posting_date);
      return objDate >= daysAgo;
    });
    return newArray;
  };

  return (
    <div>
      <Head>
        <title>{lca?.title ? lca?.title : `VLink`}</title>
        <meta
          name="og:description"
          content={lca?.description || "Vlink Description"}
        />
        <meta name="og:title" content={lca?.title || "Vlink"} />
        <meta
          name="description"
          content={lca?.description || "Vlink Description"}
        />

        <meta property="og:title" content={lca?.title ? lca?.title : `Vlink`} />
        <meta
          property="og:description"
          content={lca?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag content={`https://www.vlinkinfo.com/img/logopng.png`} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <section className="md:py-[55px] py-[30px]">
        <div className="container">
          <h1 className="font-bold xl:text-4xl lg:text-[32px] text-[22px] mb-3 font-sans text-center">
            {lca?.h1} <span className="text-company">{lca?.purple_text}</span>
          </h1>
          <p className="mb-12 text-[14px] font-sans text-center">{lca?.p1}</p>
          <table className="w-[100%] text-left rounded-[4px]">
            <thead className="bg-[#F9FAFE] rounded-[4px 4px 0px 0px] border-[1px] border-[#D9D9D9]">
              <tr>
                {lca?.table_headers?.map((item) => (
                  <th
                    key={item.id}
                    className={`p-[10px] font-sans font-[600] text-[#0C2139] text-[18px] ${
                      item?.id === 1 || item?.id === 5 ? "text-center" : ""
                    } `}
                  >
                    {item?.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="rounded-[0px 0px 4px 4px]">
              {lca?.table?.length > 0 &&
                sortTedTableData(lca?.table)?.map((item, index) => (
                  <tr
                    className="bg-[#FFFFFF] border-[1px] border-[#D9D9D9]"
                    key={index}
                  >
                    <td className="lca-table-td text-center">{index + 1}</td>
                    {/* <td className="lca-table-td">{item?.job_id}</td> */}
                    <td className="lca-table-td">{item?.title}</td>
                    <td className="lca-table-td">{item?.date}</td>
                    <td
                      className="lca-table-td text-center cursor-pointer"
                      onClick={() =>
                        download(
                          apiEndpoint(item?.media?.data?.attributes?.url)
                        )
                      }
                    >
                      <Image
                        src="/img/ph_file.svg"
                        alt="ph_file"
                        width={35}
                        height={35}
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
      <GetInTouchForm />
    </div>
  );
}
