import { useEffect } from "react";
import { useRouter } from "next/router";

const ServiceRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/data-analytics");
  }, []);

  return null;
};

export default ServiceRedirect;
