import { useEffect } from "react";
import { useRouter } from "next/router";

const DedicatedTeamsRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/services/dedicated-teams");
  }, []);

  return null;
};

export default DedicatedTeamsRedirect;
