import { useEffect } from "react";
import { useRouter } from "next/router";

const BlogRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/blog");
  }, []);

  return null;
};

export default BlogRedirect;
