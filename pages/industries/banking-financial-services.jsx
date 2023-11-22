import { useEffect } from "react";
import { useRouter } from "next/router";

const IndustriesRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/industries/financial-services");
  }, []);

  return null;
};

export default IndustriesRedirect;
