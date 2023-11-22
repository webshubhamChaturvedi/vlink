import { useEffect } from "react";
import { useRouter } from "next/router";

const ServiceRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/qa-software-testing-services");
  }, []);

  return null;
};

export default ServiceRedirect;
