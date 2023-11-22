import { useEffect } from "react";
import { useRouter } from "next/router";

const HireRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/hire-developers");
  }, []);

  return null;
};

export default HireRedirect;