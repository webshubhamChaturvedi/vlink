import Image from "next/image";
import Link from "next/link";
import { apiEndpoint } from "app/scripts/fetch";
import Card from "../Card";
import { useMemo } from "react";

export default function Share({ section }) {
  const links = useMemo(() => {
    return section?.share?.map(({ link, image }) => ({
      href: link ?? "#",
      alt: image?.data?.attributes?.name ?? null,
      icon: apiEndpoint(image?.data?.attributes?.url) ?? "/",
      width: image?.data?.attributes?.width ?? 0,
      height: image?.data?.attributes?.height ?? 0,
    }));
  });
  return (
    <Card className="space-y-2">
      <div>
        <h2 className="text-lightBlue">{section?.h1}</h2>
      </div>
      <div className="flex space-x-3">
        {links?.map((item, key) => (
          <Link href={item.href} key={key}>
            <img src={item.icon} alt={item.alternativeText || item.alt} width={30} height={30} />
          </Link>
        ))}
      </div>
    </Card>
  );
}
