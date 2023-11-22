import { useEffect } from "react";
import { useRouter } from "next/router";

const IotRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/internet-of-things-iot");
  }, []);

  return null;
};

export default IotRedirect;
