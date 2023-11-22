import { useEffect } from "react";
import { useRouter } from "next/router";

const HireRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/webinars");
  }, []);

  return null;
};

export default HireRedirect;
