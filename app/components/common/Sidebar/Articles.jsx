import { apiEndpoint } from "app/scripts/fetch";
import Card from "../Card";
import ArticleComponent from "./ArticleComponent";
import { useMemo } from "react";

export default function Articles({ section }) {
  const articles = useMemo(() => {
    return section?.article_detail?.map((item) => ({
      title: item.h,
      date: new Date(item.date),
      src: apiEndpoint(item.imge.data.attributes.url) ?? "/",
      href:item?.href
    }));
  }, [section]);
  return (
    <Card head={section?.title} containerClass={"space-y-3 rounded-md shadow-xl"} >
      {articles?.map((item, key) => (
        <ArticleComponent item={item} key={key} />
      ))}
    </Card>
  );
}
