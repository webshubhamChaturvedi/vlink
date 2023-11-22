import { useEffect } from "react";
import { useRouter } from "next/router";

const LcaRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/about-us/lca");
  }, []);

  return null;
};

export default LcaRedirect;
