import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/resources/whitepapers/artificial-intelligence-machine-learning-envisioning-the-future");
  }, []);

  return null;
};

export default Redirect;
