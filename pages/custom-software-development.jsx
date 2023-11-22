
import { useEffect } from "react";
import { useRouter } from "next/router";

const CustomRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services");
  }, []);

  return null;
};

export default CustomRedirect;
