import { useEffect } from "react";
import { useRouter } from "next/router";

const DigitalTransformRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services");
  }, []);

  return null;
};

export default DigitalTransformRedirect;
