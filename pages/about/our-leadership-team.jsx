import { useEffect } from "react";
import { useRouter } from "next/router";

const LeaderShipRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/about-us");
  }, []);

  return null;
};

export default LeaderShipRedirect;
