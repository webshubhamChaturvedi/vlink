import { useEffect } from "react";
import { useRouter } from "next/router";

const ReEngineeringRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/re-engineering-legacy-products-and-apps");
  }, []);

  return null;
};

export default ReEngineeringRedirect;
