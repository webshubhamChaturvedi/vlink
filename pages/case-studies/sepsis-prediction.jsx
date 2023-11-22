import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/case-study/sepsis-prediction");
  }, []);

  return null;
};

export default Redirect;
