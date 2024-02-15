import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import staticData from "../../../public/staticData.json";
import CloudinaryImage from "../../components/common/CloudinaryImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { useRouter } from "next/router";
import "./header.css";

export default function Navbar() {
  const router = useRouter();
  const path = "/" + router.pathname.split("/")[1] ?? "";

  const [open, setOpen] = React.useState({
    menuName: "",
    isOpen: false,
  });

  const headerData = staticData?.header?.attributes?.menu;

  const headerDataSidebar = headerData?.menu_sidebar;
  function organizeData(jsonData) {
    const nestedData = {};

    const categorizedSubMenus = {};

    jsonData.menu_name.forEach((menu) => {
      // Handle menu_name
      const menuName = menu.menu_name;
      if (!nestedData[menuName]) {
        nestedData[menuName] = {
          menu_name: menu.menu_name,
          menu_link: menu.menu_link,
          title: menu.title,
          desc: menu.desc,
          image: menu.image,
          sub_menus: [],
        };
      }

      // Handle sub_menu
      if (menu.sub_menu) {
        const subMenuObj = {
          sub_menu_name: menu.sub_menu,
          sub_menu_link: menu.sub_link,
          sub_sub_menus: [],
        };

        // Handle sub_sub_menu
        if (menu.sub_sub_menu) {
          subMenuObj.sub_sub_menus.push({
            sub_sub_menu_name: menu.sub_sub_menu,
            sub_sub_menu_link: menu.sub_sub_link,
          });
        }

        if (categorizedSubMenus[menu.sub_menu]) {
          // If the submenu already exists, add the sub_sub_menus to the existing array
          categorizedSubMenus[menu.sub_menu].sub_sub_menus.push(
            ...subMenuObj.sub_sub_menus
          );
        } else {
          // If the submenu doesn't exist, create a new entry in the categorizedSubMenus object
          categorizedSubMenus[menu.sub_menu] = subMenuObj;
          nestedData[menuName].sub_menus.push(subMenuObj);
        }
      }
    });

    return nestedData;
  }

  const combinedNestedData = organizeData(headerData);

  const menuEntries = Object.entries(combinedNestedData);

  const [mobile, setMobile] = useState(false);

  const handleToggle = (event, name) => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) {
      if (name === open?.menuName) {
        setOpen({ ...open, isOpen: !open?.isOpen });
      } else {
        setOpen({ menuName: name, isOpen: true });
      }
    } else {
      const liElement = document.querySelectorAll(`.topmenu`);
      event.currentTarget.classList.remove("group");
      setTimeout(() => {
        liElement.forEach((elm) => {
          if (!elm.classList.contains("group")) {
            elm.classList.add("group");
          }
        });
      }, 3000);
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 140);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isScrolled
    ? "navbar bg-[#FFFFFFc7_!important] z-50 shadow-[0px_0px_4px_0px_#00000045] sticky top-0  scrolled"
    : "navbar bg-[#FFFFFFAB_!important] z-50 shadow-[0px_0px_4px_0px_#00000045] sticky top-0 ";

  return (
    <nav
      className={`navbar bg-[#FFFFFFAB] z-50 shadow-[0px_0px_4px_0px_#00000045] sticky top-0 ${navbarClass}`}
    >
      <div className={`container flex flex-row items-center justify-between`}>
        <div className="py-2.5 pr-3">
          <Link href="/" className="flex items-center ">
            <Image
              src="/img/navbar-logo.svg"
              className="h-17 md:w-20 w-16 sm:h-17"
              alt="Vlink Logo"
              width={159}
              height={15}
            />
          </Link>
        </div>

        <div className="flex flex-row flex-end gap-5 static">
          <div
            id="navbar-cta"
            className={`items-stretch justify-between ${
              mobile
                ? "border-b margin-[#ccc] pb-1 transition-[all_0.3s_ease_0s] lg:static absolute lg:top-[unset] top-[68px] lg:h-[auto] h-[calc(100vh - 70px)] lg:overflow-x-visible overflow-x-hidden lg:overflow-y-visible overflow-y-auto lg:border-b-[0px] border-t-[1px_solid_rgb(238, 238, 238)] justify-center  lg:w-auto w-[100%] lg:z-[unset] z-[1000] lg:left-[unset] left-[0px_!important] lg:bg-[trasnparent]"
                : ""
            } w-full lg:flex md:w-auto`}
          >
            <div
              className={`items-stretch justify-between  w-full lg:flex md:w-auto `}
            >
              <ul
                id="customScrollbar-none"
                className={`flex items-center ${mobile ? "justify-start" : ""}`}
                style={mobile ? { overflowX: "auto" } : {}}
              >
                {menuEntries.map(([menuName, menuData]) => (
                  <li
                    className={`group topmenu ${
                      open?.menuName === menuName && open.isOpen
                        ? "openmenu"
                        : "closemenu"
                    }`}
                    key={menuName}
                    onClick={(e) => handleToggle(e, menuName, menuData)}
                  >
                    <div className="flex items-center lg:justify-normal justify-between lg:mx-3">
                      <Link
                        className={`${
                          menuData?.menu_link === path ? "active" : ""
                        } custom_font text-[#000000] font-[500] text-xs lg:text-md rounded-t-lg border-b-2
                         border-transparent pb-5 pt-5 lg:hover:border-[#0050D5_!important] lg:hover:text-[#0050D5_!important] flex items-center lg:justify-normal justify-between`}
                        href={menuData?.menu_link || "#"}
                        onClick={() => setMobile(!mobile)}
                      >
                        {menuName}
                        {menuData?.sub_menus.length !== 0 ? (
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            className="pl-2 w-[20px] h-[10px] lg:block hidden"
                          />
                        ) : (
                          ""
                        )}
                      </Link>
                      {menuData?.sub_menus.length !== 0 ? (
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="pl-2 w-[20px] h-[10px] lg:hidden"
                        />
                      ) : (
                        ""
                      )}
                    </div>

                    {menuData?.sub_menus.length !== 0 ? (
                      <header className="max-w-[1300px] mx-auto transition-[all_.3s_ease-in] hidden lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:absolute left-0 right-0 w-[100%] bg-[#fff] lg:shadow-lg">
                        <div
                          className={`lg:pl-16 megadiv flex flex-row ${
                            menuData?.sub_menus.some(
                              (client) => client.sub_sub_menus.length !== 0
                            )
                              ? "uuu"
                              : "www"
                          }`}
                        >
                          <div
                            className={`inline-flex flex-wrap lg:pt-8 custom_left ${
                              menuData?.sub_menus.some(
                                (client) => client.sub_sub_menus.length === 0
                              )
                                ? "add_w"
                                : "hidden"
                            }`}
                          >
                            <ul className="pb-8">
                              {menuData?.sub_menus.map((subMenu) => (
                                <>
                                  {subMenu?.sub_menu_link === null ? (
                                    ""
                                  ) : (
                                    <li
                                      className={`submenu py-2 text-[#131313] font-[400] text-[13px]`}
                                      key={subMenu?.sub_menu_name}
                                    >
                                      <Link
                                        href={`${
                                          subMenu?.sub_menu_link || "#"
                                        }`}
                                        onClick={() => setMobile(!mobile)}
                                        className="text-[#131313_!important]"
                                      >
                                        {subMenu?.sub_menu_name}
                                      </Link>
                                    </li>
                                  )}
                                </>
                              ))}
                            </ul>
                          </div>
                          <div
                            className={`flex lg:pt-8 custom_response ${
                              menuData?.sub_menus.some(
                                (client) => client.sub_sub_menus.length !== 0
                              )
                                ? "add_u"
                                : "hidden"
                            }`}
                          >
                            {menuData?.sub_menus.map((subMenu) => (
                              <>
                                {subMenu?.sub_menu_link === null ||
                                subMenu?.sub_sub_menus.length != 0 ? (
                                  <div
                                    className={`submenu flex-1 lg:pl-16`}
                                    key={subMenu?.sub_menu_name}
                                  >
                                    <li className="border-b-[#868686]-300 border-b-[1px] inline-block py-2 mb-2 text-[#2A2A2A] font-[600] text-[15px] font-sans ">
                                      {subMenu?.sub_menu_link ? (
                                        <Link
                                          href={`${
                                            subMenu?.sub_menu_link || "#"
                                          }`}
                                          className="text-[#131313_!important]"
                                        >
                                          {subMenu?.sub_menu_name}
                                        </Link>
                                      ) : (
                                        <>{subMenu?.sub_menu_name}</>
                                      )}
                                    </li>
                                    <ul className="pb-8">
                                      {subMenu.sub_sub_menus.map(
                                        (subSubMenu) => (
                                          <li
                                            className={`three py-2 text-[#131313] font-[400] text-[13px]`}
                                            key={subSubMenu.sub_sub_menu_name}
                                          >
                                            <Link
                                              href={`${subSubMenu.sub_sub_menu_link}`}
                                              onClick={() => setMobile(!mobile)}
                                              className="text-[#131313_!important]"
                                            >
                                              {subSubMenu.sub_sub_menu_name}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </>
                            ))}
                          </div>
                          <div
                            className={`${
                              menuData.title !== null ? `w-[50%]` : `w-[30%]`
                            } lg:block hidden megacol lg:border-l border-neutral-300 lg:pl-10 pb-7 lg:pr-10 mt-8`}
                          >
                            <ul role="list" className="lg:py-4">
                              {menuData.title !== null ? (
                                <div className="w-[100%]">
                                  <h4 className="mb-2 font-sans text-[18px] text-[#131313] font-[600] inline-block">
                                    {menuData?.title}
                                  </h4>

                                  <p className="font-sans text-[#383838] text-[14px] font-[400] mb-4">
                                    {menuData?.desc}
                                  </p>

                                  <CloudinaryImage
                                    backendImgUrl={
                                      menuData?.image?.data?.attributes?.url
                                    }
                                    alt={
                                      menuData?.image?.data?.attributes
                                        ?.alternativeText
                                    }
                                    className="ml-auto w-[437px] h-[266px]  bg-cover bg-no-repeat"
                                    type="smallimg"
                                  />
                                </div>
                              ) : (
                                headerDataSidebar.map((item, key) => (
                                  <li
                                    className="group/item flex items-center justify-between py-3"
                                    key={item.text}
                                  >
                                    <div className="flex-shrink-0 pr-2 w-16">
                                      <CloudinaryImage
                                        type="icon"
                                        backendImgUrl={
                                          item.image.data.attributes.url
                                        }
                                        alt={
                                          item.image.data.attributes
                                            .alternativeText
                                        }
                                      />
                                    </div>
                                    <div className="w-full text-sm leading-6">
                                      <p className="mb-0 font-[800] font-sans text-[#353535]">
                                        <b>{item?.year}</b>
                                      </p>
                                      <p className="text-[#000000]">
                                        {item?.text}
                                      </p>
                                    </div>
                                  </li>
                                ))
                              )}
                            </ul>
                          </div>
                        </div>
                      </header>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button
            id="HireTopTelent"
            type="button"
            className="buttonOpen text-[#fff] text-[undefined] hover:text-[#ffffff] mt-[0px] bg-[#0050D5] border border-[#0050D5] hover:bg-[#0050D5] focus:ring-4 focus:ring-blue-300 disabled:hover:bg-[#0050D5] dark:bg-[#0050D5] dark:hover:bg-[#0050D5] dark:focus:ring-blue-800 dark:disabled:hover:bg-[#0050D5] focus:!ring-2 group h-min text-center font-medium focus:z-10 relative rounded overflow-hidden text-center inline-block py-2 px-4 md:px-7"
          >
            {"Hire Top Talent"}
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
            onClick={() => setMobile(!mobile)}
            style={{ marginLeft: "15px" }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
