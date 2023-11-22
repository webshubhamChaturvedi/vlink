import { useEffect } from "react";
import { useRouter } from "next/router";

const TechnologiesRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/hire-developers");
  }, []);

  return null;
};

export default TechnologiesRedirect;
