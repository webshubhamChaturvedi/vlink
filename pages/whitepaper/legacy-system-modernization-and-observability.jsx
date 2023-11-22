import { useEffect } from "react";
import { useRouter } from "next/router";

const LegacyRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/resources/whitepapers/legacy-system-modernization-and-observability");
  }, []);

  return null;
};

export default LegacyRedirect;
