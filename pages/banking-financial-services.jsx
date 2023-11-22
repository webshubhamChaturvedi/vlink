import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/industries/banking-financial-services");
  }, []);

  return null;
};

export default Redirect;
