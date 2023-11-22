import { useEffect } from "react";
import { useRouter } from "next/router";

const SoftwareMaintainRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/software-maintenance-support-services");
  }, []);

  return null;
};

export default SoftwareMaintainRedirect;
