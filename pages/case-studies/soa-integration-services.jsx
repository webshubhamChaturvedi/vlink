import { useEffect } from "react";
import { useRouter } from "next/router";

const NearShoreRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/case-study/soa-integration-services");
  }, []);

  return null;
};

export default NearShoreRedirect;
