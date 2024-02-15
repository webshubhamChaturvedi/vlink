import Metatag from "app/components/metaTag";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PrivacyPolicy() {
  const { asPath } = useRouter();

  return (
    <div>
      <Head>
        <title>Privacy Policy - VLink</title>
        <meta name="description" content={"Vlink Description"} />
        <meta name="og:description" content={"Vlink Description"} />
        <meta name="og:title" content={"Privacy Policy - Vlink"} />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag content={`https://www.vlinkinfo.com/img/logopng.png`} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
      </Head>
      <section className="py-[55px] mt-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 w-full">
              <h1 className="font-bold md:text-[40px] text-[30px] mb-5 font-sans text-[#000000] ">
                Privacy Policy <span className="text-company">Statement</span>
              </h1>
            </div>
            <div className="col-span-12">
              <div className="mb-[30px]">
                <h4 className="text-xl font-bold font-sans text-[#000000] mb-4">
                  Effective Date: November 20, 2017
                </h4>
                <h4 className="text-xl font-bold font-sans text-[#000000] mb-4 ">
                  Updated: March,2023
                </h4>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  VLink, Inc. respects the privacy of our affiliates, customers,
                  and visitors to our Website, www.vlinkinfo.com. While offering
                  our Web site users the advantages and convenience of Web-based
                  technologies, we also strive to employ practices that ensure
                  information collected about affiliates, customers, and
                  visitors is used conscientiously and appropriately.
                </p>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6">
                  This Privacy Policy Statement outlines the use of personally
                  identifiable information collected on the Web Site. This
                  privacy notice does not encompass other Web sites referenced
                  by us in print, online, or in an e-mail.
                </p>
              </div>
              <div className="mb-[30px]">
                <h4 className="text-xl font-bold font-sans text-[#000000] mb-4">
                  What information is collected on the Web Site?
                </h4>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  Generally, information is used to help us better serve our
                  affiliates and customers.
                </p>
                <ul className="list-disc pl-[22px]">
                  <li className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                    General visitors: We collect information for internal
                    marketing purposes about pages that visitors browse. This
                    information does not contain e-mail addresses or individual
                    IPs, but only business IPs.
                  </li>
                  <li className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                    Affiliates: We collect personally identifiable information
                    about affiliates who provide their information on Web pages
                    that are specifically designed to collect membership
                    information, such as online questionnaires, resume
                    submissions, job postings, and applications for membership.
                  </li>
                </ul>
              </div>
              <div className="mb-[30px]">
                <h4 className="text-xl font-bold font-sans text-[#000000] mb-4">
                  Do we use “cookies?”
                </h4>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  A “cookie” is a packet of information that a Web server sends
                  to a user’s computer to identify that specific user the next
                  time he or she visits the site. Our use of “cookie” technology
                  is restricted to our message boards and chat software. For the
                  message boards, the technology is used to confirm access
                  rights for users. For chats, the cookie technology is used to
                  identify a previous visitor or a returning visitor.
                </p>
              </div>
              <div className="mb-[30px]">
                <h4 className="text-xl font-bold font-sans text-[#000000] mb-4">
                  How do we use information collected on the Web Site?
                </h4>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  The information we collect is used to improve the content of
                  our Website, enhance the value of our products, and
                  communicate with affiliates and customers as follows:
                </p>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  VLink, Inc., its elected leaders, and its affiliated
                  components have access to membership information for purposes
                  of communicating with affiliates and furthering the mission of
                  the organization.
                </p>
                <ul className="list-disc pl-[22px]">
                  <li className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                    VLink, Inc. may make address information available to
                    external organizations for purposes of providing affiliates
                    relevant information. Such information does not include
                    e-mail addresses.
                  </li>
                  <li className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                    Any request by an external organization or affiliated
                    component of VLink, Inc. for a mailing list of affiliates
                    must be approved on a case-by-case basis, and the
                    organization must agree that the information will only be
                    used for the specifically approved communication.
                  </li>
                  <li className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                    VLink, Inc. may make educational session participant contact
                    information available to corporate partners and individuals
                    serving as faculty at educational programs.
                  </li>
                  <li className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                    Recruiters and other users may access affiliate resumes and
                    contact information that individuals have chosen to include
                    in the online VLink, Inc. Resume Bank or Application
                    Tracking System.
                  </li>
                  <li className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                    Affiliates and others granted log-in access to the
                    Affiliates Only Area of VLink, Inc. may access individual
                    affiliate information that affiliates choose to include in
                    the online Affiliate Directory.
                  </li>
                  <li className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                    VLink, Inc. may contact affiliates and customers about
                    events and opportunities.
                  </li>
                </ul>
              </div>
              <div className="mb-[30px]">
                <h4 className="text-xl font-bold font-sans text-[#000000] mb-4">
                  How may affiliates or customers opt out of receiving
                  materials?
                </h4>
                <p className="font-sans font-[400]resources md:text-[18px] text-[14px] leading-6 mb-3">
                  Any affiliate or customer who does not wish to be contacted by
                  us or an organization with which we might otherwise share
                  contact information may let us know by sending an e-mail to
                  [news@vlinkinfo.com] or by using the contact information
                  below. Affiliates and customers may request to opt out of
                  specific e-mail communications from VLink, Inc. or request an
                  overall opt out of both mail and e-mail communications (with
                  the exception of basic membership and dues renewal mailings).
                  Additionally, affiliates may manage their personal information
                  in the online Affiliate Directory and choose what information
                  will be accessible there.
                </p>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  How may affiliates or customers review their information or
                  request a change of information?
                </p>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  Affiliates and customers may update their information by
                  sending an e-mail to [news@vlinkinfo.com] or by using the
                  contact information below.
                </p>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  How may affiliates, customers, or visitors request information
                  about the security of VLink, Inc.?
                </p>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  We have reasonable security measures in place at our physical
                  facilities and on our Web server to protect against the loss,
                  misuse, or alteration of information collected from
                  affiliates, customers, and visitors. Requests to review
                  security information may be sent to us using the contact
                  information below.
                </p>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  How can affiliates, customers or visitors become informed
                  about changes to the Privacy Policy Statement?
                </p>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  Periodically we may use collected information for new,
                  unanticipated uses not previously disclosed in our privacy
                  notice. When our information collection and dissemination
                  practices change, we will post the policy changes on VLink,
                  Inc.
                </p>
              </div>
              <div className="">
                <h4 className="text-xl font-bold font-sans text-[#000000] mb-4">
                  How may affiliates or customers opt out of receiving
                  materials?
                </h4>
                <p className="font-sans font-[400] md:text-[18px] text-[14px] leading-6 mb-3">
                  Attention: VLink, <br />
                  Address: 701 John Fitch Blvd, <br />
                  South Windsor, CT 06074 <br />
                  Phone: +1(860)247-1400 <br />
                  E-mail: marketing@vlinkinfo.com <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
