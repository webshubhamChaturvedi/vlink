import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/cloud-managed-infrastructure-services");
  }, []);

  return null;
};

export default Redirect;
