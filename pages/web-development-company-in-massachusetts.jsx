import { useEffect } from "react";
import { useRouter } from "next/router";

const WebDevelopmentRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/locations/web-development-company-in-massachusetts");
  }, []);

  return null;
};

export default WebDevelopmentRedirect;
