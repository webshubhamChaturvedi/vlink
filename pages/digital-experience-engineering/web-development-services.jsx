
import { useEffect } from "react";
import { useRouter } from "next/router";

const WebinarRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/web-development-services");
  }, []);

  return null;
};

export default WebinarRedirect;
