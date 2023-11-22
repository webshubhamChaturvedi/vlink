import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Tooltip({
  children,
  data,
  group,
  href,
  label,
  className,
  headerData,
  setData,
}) {
  const [show, setShow] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const showTooltip = (bool) => {
    setShow(bool);
  };
  useEffect(() => {
    if (setData && showMenu) setData({ show, data, group, headerData });
  }, [showMenu,show]);

  return (
    <div
      onMouseOver={() => {
        showTooltip(true);
        setShowMenu(true);
      }}
      onMouseLeave={() =>  {
        setShowMenu(false);
      }}
      key={`${label}-${Math.random()}`}
    >
      <Link
        href={href}
        className={`custom_font text-[#212121] font-[500] flex items-center ${className} rounded-t-lg border-b-2 border-transparent pb-5 pt-5 hover:border-[#62207E_!important] hover:text-[#62207E_!important]`}
      >
          {label}
        {/* <i className="fa fa-angle-down pl-2" aria-hidden="true"></i> */}
        <Image
          src={"/icons/expandIcon.svg"}
          alt="expandIcon"
          width="12px"
          height="7px"
        />
      </Link>
    </div>
  );
}
