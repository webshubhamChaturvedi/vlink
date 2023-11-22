import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import axios from "axios";
import convert from "xml-js";
// import moment from "moment/moment";

export const GetParagraph = (item) => {
  let indexStartParagraph = item?.indexOf("<p>");
  let indexEndParagraph = item?.indexOf("</p>", indexStartParagraph);
  let paragraph = item?.slice(indexStartParagraph + 3, indexEndParagraph);
  let indexEndStyle = paragraph?.indexOf(">");
  paragraph = paragraph?.slice(indexEndStyle + 1);
  if (paragraph?.length < 20) {
    indexStartParagraph = item?.indexOf("<p>", indexEndParagraph);
    indexEndParagraph = item?.indexOf("</p>", indexStartParagraph);
    paragraph = item?.slice(indexStartParagraph + 3, indexEndParagraph);
    indexEndStyle = paragraph?.indexOf(">");
    paragraph = paragraph?.slice(indexEndStyle + 1);
  }
  return paragraph;
};
export const createMarkup = (content) => {
  let addedNewLine = content?.replace(/(?:\r\n|\r|\n)/g, "<br />");
  addedNewLine = addedNewLine?.replaceAll(
    "/uploads/",
    `${process.env.NEXT_PUBLIC_API_URL}/uploads/`
  );
  return { __html: addedNewLine };
};

export const getLocaleCountry = async () => {
  const response1 = await axios.get("https://api64.ipify.org/?format=json");
  const response2 = await axios.get("https://ip2c.org/" + response1?.data?.ip);
  // const response2 = await axios.get("https://ip2c.org/" + '158.46.214.71');
  let arr = response2?.data?.split(";");
  return { id: arr[0], isoCode: arr[2], country: arr[1], countryName: arr[3] };
};

export const JobdivaEmployers = async (from, to) => {
  try {
    const response = await axios.get(
      `https://www1.jobdiva.com/employers/connect/listofportaljobs.jsp?a=1pjdnwfgnlc4rm6chh038dyd6ozlh204dfyygr32n0q5fztfdwrdkwgwgg4c7350&from=${from}&to=${to}&fulldesc=1&includeuseremail=1`
    );
    return JSON.parse(
      convert.xml2json(response.data, { compact: true, spaces: 4 })
    );
  } catch (error) {
    return console.log(error, "job-divA-error");
  }
};

export const CalcDiffHours = (dateToken, actualDate) => {
  let diff = (actualDate.getTime() - dateToken.getTime()) / 1000;
  diff /= 3600;
  return Math.abs(Math.round(diff));
};
// export const download = (url) => {
//   if (url) {
//     const link = document.createElement("a");
//     link.target = "_blank";
//     link.href = url;
//     link.setAttribute("download", url);
//     document.body.appendChild(link);
//     link.click();
//   }
// };
export const download = (url) => {
  if (url) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const pdfFileName = url.split("/").pop();
        const urlnew = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = urlnew;
        link.download = pdfFileName;
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(urlnew);
      })
      .catch((error) => {
        console.error("Error downloading the file:", error);
      });
  }
};

export const zohoLeadApi = async (data) => {
  try {
    if ((data?.firstName || data?.lastName) && (data?.email || data?.mobile)) {
      const response = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_ZOHO}save/lead`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          data: [
            {
              Company: data?.organization || "NA",
              Last_Name: data?.lastName || "NA",
              First_Name: data?.firstName,
              Email: data?.email || "NA",
              State: data?.state || "NA",
              City: data?.city || "NA",
              Lead_Source: "Inbound/Chat",
              Phone: data?.mobile || "NA",
              Description: "lead",
            },
          ],
          trigger: ["approval", "workflow", "blueprint"],
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const subscribeEmail = async (data) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_ZOHO}send-subscribe-email`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        userEmail: data?.email,
        phone: data?.mobile,
        name: data?.name,
        org: data?.organization,
        message: data?.message,
        websitePage: "",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPages = async (api) => {
  let page = 1;
  let limit = 20;
  let contentPages = [];
  let total = 0;
  do {
    const [res] = await Promise.all([
      REQUEST({
        method: "GET",
        url: `${api}?pagination[page]=${page}&pagination[pageSize]=${limit}`,
      }),
    ]);
    contentPages = [...contentPages, ...res?.data?.data];
    if (res?.data?.meta?.pagination?.total) {
      total = res?.data?.meta?.pagination?.total;
      page = page + 1;
    } else break;
  } while (total > contentPages.length);

  const paths = contentPages?.map((c) => {
    return { params: { slug: c.attributes.slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const changeTimeZone = (date, timeZone) => {
  if (typeof date === "string") {
    return new Date(
      new Date(date).toLocaleString("en-US", {
        timeZone,
      })
    );
  }

  return new Date(
    date?.toLocaleString("en-US", {
      timeZone,
    })
  );
};

export const generateFaqSchemas = (array) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: array?.map((item) => ({
      "@type": "Question",
      name: item?.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item?.answer,
      },
    })),
  };
  return faqSchema;
};
