import { useEffect } from "react";
import { useRouter } from "next/router";

const WebinarRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/webinars");
  }, []);

  return null;
};

export default WebinarRedirect;
