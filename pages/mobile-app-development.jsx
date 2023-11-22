import { useEffect } from "react";
import { useRouter } from "next/router";

const IotRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/mobile-app-development");
  }, []);

  return null;
};

export default IotRedirect;
