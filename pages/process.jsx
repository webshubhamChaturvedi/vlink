import { useEffect } from "react";
import { useRouter } from "next/router";

const QaRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/about-us/our-process");
  }, []);

  return null;
};

export default QaRedirect;
