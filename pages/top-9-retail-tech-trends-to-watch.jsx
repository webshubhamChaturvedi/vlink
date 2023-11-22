import { useEffect } from "react";
import { useRouter } from "next/router";

const BlogRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/top-9-retail-tech-trends-to-watch");
  }, []);

  return null;
};

export default BlogRedirect;
