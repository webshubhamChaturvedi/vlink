import { useEffect } from "react";
import { useRouter } from "next/router";

const NewsroomRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/resources/newsroom");
  }, []);

  return null;
};

export default NewsroomRedirect;
