import { useEffect } from "react";
import { useRouter } from "next/router";

const NewsroomRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/resources/newsroom/vlink-inc-expands-apac-executive-team-with-key-new-hire");
  }, []);

  return null;
};

export default NewsroomRedirect;
