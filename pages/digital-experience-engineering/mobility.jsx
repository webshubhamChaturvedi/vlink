
import { useEffect } from "react";
import { useRouter } from "next/router";

const WebinarRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/mobile-app-development");
  }, []);

  return null;
};

export default WebinarRedirect;
