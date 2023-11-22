import { useEffect } from "react";
import { useRouter } from "next/router";

const HireRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/hire-developers/flutter");
  }, []);

  return null;
};

export default HireRedirect;
