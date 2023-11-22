import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/privacy-policy");
  }, []);

  return null;
};

export default Redirect;
