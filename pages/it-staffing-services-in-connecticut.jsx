import { useEffect } from "react";
import { useRouter } from "next/router";

const ItRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/locations/it-service-in-connecticut");
  }, []);

  return null;
};

export default ItRedirect;
