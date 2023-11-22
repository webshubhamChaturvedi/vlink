import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/blog/how-digital-technologies-are-improving-patient-experience");
  }, []);

  return null;
};

export default Redirect;
