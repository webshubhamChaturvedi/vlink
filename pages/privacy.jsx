import { useEffect } from "react";
import { useRouter } from "next/router";

const PrivacyRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/privacy-policy");
  }, []);

  return null;
};

export default PrivacyRedirect;
