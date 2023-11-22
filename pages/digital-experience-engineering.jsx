import { useEffect } from "react";
import { useRouter } from "next/router";

const DigitalRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services");
  }, []);

  return null;
};

export default DigitalRedirect;
